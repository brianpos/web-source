import { B as ref, C as onMounted, M as withCtx, T as openBlock, X as toDisplayString, d as createCommentVNode, f as createElementBlock, h as defineComponent, l as createBaseVNode, m as createVNode, p as createTextVNode, r as createApp, u as createBlock } from "./vendor-vue-B0fXMx36.js";
import { a as createVuetify, i as VApp, n as VBtn, r as VIcon, t as VTextField } from "./vendor-vuetify-DTdRDRNp.js";
import { t as axios } from "./vendor-Cr2_qeLW.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/App.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "main" };
var _hoisted_2 = {
	class: "container bd-layout",
	style: { "padding": "40px" }
};
var _hoisted_3 = {
	key: 0,
	class: "main"
};
var _hoisted_4 = {
	key: 0,
	style: {
		"color": "red",
		"margin-top": "12px"
	}
};
var _hoisted_5 = { style: {
	"max-width": "400px",
	"font-size": "0.85em",
	"color": "#666",
	"text-align": "left"
} };
var _hoisted_6 = { style: { "text-align": "left" } };
var _hoisted_7 = {
	key: 1,
	style: { "color": "red" }
};
var _hoisted_8 = {
	key: 1,
	class: "main"
};
var _hoisted_9 = {
	key: 0,
	style: {
		"color": "red",
		"margin-top": "12px"
	}
};
var releaseHeaderPlaceholderSelector = "[data-hl7-diff-release-header]";
var releaseHeaderPlaceholderHtml = "<div data-hl7-diff-release-header=\"true\"></div>";
var App_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	setup(__props) {
		document.title = "HL7 FHIR Spec Diff Viewer - FHIRPath Lab";
		const downloaderPrefix = void 0;
		const allowedSites = ref([]);
		const validationError = ref("");
		const rawMode = ref(false);
		const loading = ref(false);
		const rawStatus = ref("");
		const rawError = ref("");
		const rawErrorOld = ref("");
		const rawErrorNew = ref("");
		const rawProgressOld = ref(0);
		const rawProgressNew = ref(0);
		const oldUrl = ref("https://hl7.org/fhir/us/core/STU8.0.1/index.html");
		const newUrl = ref("https://build.fhir.org/ig/HL7/US-Core/index.html");
		const oldSpecHtml = ref("");
		const newSpecHtml = ref("");
		const activeOldUrl = ref("");
		const activeNewUrl = ref("");
		function isUrlAllowed(url) {
			try {
				const parsed = new URL(url.startsWith("http") ? url : "https://" + url);
				if (parsed.protocol !== "https:") return false;
				const hostAndPath = parsed.host + parsed.pathname + parsed.search;
				return allowedSites.value.some((site) => hostAndPath === site || hostAndPath.startsWith(site + "/"));
			} catch {
				return false;
			}
		}
		function validateUrls(oldPageUrl, newPageUrl) {
			validationError.value = "";
			const blocked = [];
			if (!isUrlAllowed(oldPageUrl)) blocked.push("Old URL");
			if (!isUrlAllowed(newPageUrl)) blocked.push("New URL");
			if (blocked.length > 0) {
				validationError.value = `${blocked.join(" and ")} not from an allowed site.`;
				return false;
			}
			return true;
		}
		function formatBytes(bytes) {
			if (!bytes) return "0 B";
			if (bytes < 1024) return bytes + " B";
			if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
			return (bytes / (1024 * 1024)).toFixed(1) + " MB";
		}
		function startCompare() {
			if (!validateUrls(oldUrl.value, newUrl.value)) return;
			const params = new URLSearchParams({
				old: oldUrl.value,
				new: newUrl.value
			});
			history.pushState(null, "", window.location.pathname + "?" + params.toString());
			downloadAndCompare(oldUrl.value, newUrl.value);
		}
		function wrapWithProxy(url) {
			if (downloaderPrefix?.length > 0) url = downloaderPrefix + encodeURIComponent(url);
			return url;
		}
		function getBaseUrl(url) {
			if (url.startsWith(downloaderPrefix)) url = url.substring(downloaderPrefix.length);
			const lastSlash = url.lastIndexOf("/");
			const lastSegment = url.substring(lastSlash + 1);
			if (!lastSegment || lastSegment.indexOf(".") === -1) return url.endsWith("/") ? url : url + "/";
			return url.substring(0, lastSlash + 1);
		}
		function rebaseHeadUrls(html, newBaseUrl, oldBaseUrl) {
			const doc = new DOMParser().parseFromString(html, "text/html");
			doc.head.querySelectorAll("[href], [src]").forEach((el) => {
				for (const attr of ["href", "src"]) {
					const val = el.getAttribute(attr);
					if (val && !/^(https?:\/\/|\/\/|data:|#|mailto:)/i.test(val)) el.setAttribute(attr, newBaseUrl + val);
				}
			});
			const diffPagePath = window.location.pathname;
			doc.head.querySelectorAll("meta[http-equiv]").forEach((el) => {
				if (el.getAttribute("http-equiv")?.toLowerCase() !== "refresh") return;
				const match = (el.getAttribute("content") || "").match(/^(\d+);\s*url\s*=\s*['"]?([^'"]+?)['"]?\s*$/i);
				if (!match) return;
				const delay = match[1];
				const rawUrl = match[2].trim();
				try {
					const newTarget = new URL(rawUrl, newBaseUrl).href;
					const oldTarget = new URL(rawUrl, oldBaseUrl).href;
					const diffUrl = diffPagePath + "?old=" + encodeURIComponent(oldTarget) + "&new=" + encodeURIComponent(newTarget);
					el.setAttribute("content", delay + "; url=" + diffUrl);
				} catch (e) {
					console.warn("Failed to resolve meta refresh URL, removing tag:", rawUrl, e);
					el.remove();
				}
			});
			return doc.head.innerHTML;
		}
		function rebaseBodySrcUrls(html, baseUrl) {
			const tempDiv = document.createElement("div");
			tempDiv.innerHTML = html;
			tempDiv.querySelectorAll("[src]").forEach((el) => {
				const val = el.getAttribute("src");
				if (val && !/^(https?:\/\/|\/\/|data:|#|mailto:)/i.test(val)) el.setAttribute("src", baseUrl + val);
			});
			return tempDiv.innerHTML;
		}
		function extractBody(html) {
			const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
			return match ? match[1] : html;
		}
		function normalizeReleaseHeaders(oldHtml, newHtml) {
			const releaseHeaderPattern = /<!--\s*ReleaseHeader\s*-->[\s\S]*?<!--\s*EndReleaseHeader\s*-->/i;
			if (!releaseHeaderPattern.test(oldHtml) && !releaseHeaderPattern.test(newHtml)) return {
				oldHtml,
				newHtml,
				hasReleaseHeader: false
			};
			const normalizePage = (html) => {
				const container = document.createElement("div");
				container.innerHTML = html.replace(releaseHeaderPattern, releaseHeaderPlaceholderHtml);
				if (!container.querySelector(releaseHeaderPlaceholderSelector)) {
					const statusBanner = Array.from(container.querySelectorAll("p")).find((paragraph) => paragraph.id === "publish-box" || /Continuous Integration Build of FHIR/i.test(paragraph.textContent || ""));
					const placeholder = document.createElement("div");
					placeholder.setAttribute("data-hl7-diff-release-header", "true");
					if (statusBanner) statusBanner.replaceWith(placeholder);
					else container.querySelector("ul.nav.nav-tabs")?.before(placeholder);
				}
				return container.innerHTML;
			};
			return {
				oldHtml: normalizePage(oldHtml),
				newHtml: normalizePage(newHtml),
				hasReleaseHeader: true
			};
		}
		function executeDiffInWorker(oldHtml, newHtml) {
			return new Promise((resolve, reject) => {
				const worker = new Worker(new URL(
					/* @vite-ignore */
					"/diff/assets/htmldiff.worker-BGY9WbOc.js",
					"" + import.meta.url
				), { type: "module" });
				worker.onmessage = (e) => {
					resolve(e.data);
					worker.terminate();
				};
				worker.onerror = (e) => {
					reject(new Error(e.message));
					worker.terminate();
				};
				worker.postMessage({
					oldHtml,
					newHtml
				});
			});
		}
		function tabKey(label, kind) {
			const normalized = label.replace(/\s+/g, " ").trim().toLowerCase();
			if (normalized === "profiles" || normalized === "profiles & extensions") return "profiles";
			if (kind === "resource-content" && (normalized === "version diff" || /^r\d+b? diff$/.test(normalized))) return "version-diff";
			if (/^r\d+b? conversions$/.test(normalized)) return "version-conversions";
			return normalized;
		}
		function tabEntries(list, kind) {
			return Array.from(list.children).filter((child) => child instanceof HTMLLIElement).map((listItem) => {
				const label = listItem.querySelector("a")?.textContent || "";
				return {
					listItem,
					label,
					key: tabKey(label, kind)
				};
			});
		}
		function wrapTabLabel(listItem, tagName, className) {
			const anchor = listItem.querySelector("a");
			if (!anchor) return;
			const marker = document.createElement(tagName);
			marker.className = className;
			marker.append(...Array.from(anchor.childNodes));
			anchor.appendChild(marker);
		}
		function disableResourceTab(listItem) {
			listItem.dataset.diffDisabled = "true";
			listItem.classList.add("ui-state-disabled");
			const anchor = listItem.querySelector("a");
			anchor?.setAttribute("aria-disabled", "true");
			anchor?.setAttribute("tabindex", "-1");
		}
		function buildNewNavigationTabList(newList) {
			const result = newList.cloneNode(true);
			tabEntries(result, "navigation").forEach(({ listItem, key }) => {
				if (key !== "version-conversions") return;
				listItem.classList.add("disabled");
				const anchor = listItem.querySelector("a");
				anchor?.removeAttribute("href");
				anchor?.setAttribute("aria-disabled", "true");
				anchor?.setAttribute("tabindex", "-1");
			});
			return result;
		}
		function compareTabLabel(listItem, oldLabel, newLabel) {
			const anchor = listItem.querySelector("a");
			if (!anchor || oldLabel === newLabel) return;
			anchor.replaceChildren();
			let prefixLength = 0;
			while (prefixLength < oldLabel.length && prefixLength < newLabel.length && oldLabel[prefixLength] === newLabel[prefixLength]) prefixLength++;
			let suffixLength = 0;
			while (suffixLength < oldLabel.length - prefixLength && suffixLength < newLabel.length - prefixLength && oldLabel[oldLabel.length - suffixLength - 1] === newLabel[newLabel.length - suffixLength - 1]) suffixLength++;
			const prefix = newLabel.substring(0, prefixLength);
			const oldMiddle = oldLabel.substring(prefixLength, oldLabel.length - suffixLength);
			const newMiddle = newLabel.substring(prefixLength, newLabel.length - suffixLength);
			const suffix = newLabel.substring(newLabel.length - suffixLength);
			anchor.append(prefix);
			if (oldMiddle) {
				const removed = document.createElement("del");
				removed.className = "diffmod";
				removed.textContent = oldMiddle;
				anchor.appendChild(removed);
			}
			if (newMiddle) {
				const inserted = document.createElement("ins");
				inserted.className = "diffmod";
				inserted.textContent = newMiddle;
				anchor.appendChild(inserted);
			}
			anchor.append(suffix);
		}
		function buildComparedTabList(oldList, newList, kind) {
			const oldTabs = tabEntries(oldList, kind);
			const newTabs = tabEntries(newList, kind);
			const lengths = Array.from({ length: oldTabs.length + 1 }, () => Array(newTabs.length + 1).fill(0));
			for (let oldIndex = oldTabs.length - 1; oldIndex >= 0; oldIndex--) for (let newIndex = newTabs.length - 1; newIndex >= 0; newIndex--) lengths[oldIndex][newIndex] = oldTabs[oldIndex].key === newTabs[newIndex].key ? lengths[oldIndex + 1][newIndex + 1] + 1 : Math.max(lengths[oldIndex + 1][newIndex], lengths[oldIndex][newIndex + 1]);
			const result = newList.cloneNode(false);
			let oldIndex = 0;
			let newIndex = 0;
			while (oldIndex < oldTabs.length || newIndex < newTabs.length) if (oldIndex < oldTabs.length && newIndex < newTabs.length && oldTabs[oldIndex].key === newTabs[newIndex].key) {
				if (kind === "resource-content" && newTabs[newIndex].key === "version-diff") {
					const oldListItem = oldTabs[oldIndex].listItem.cloneNode(true);
					const newListItem = newTabs[newIndex].listItem.cloneNode(true);
					oldListItem.querySelector("a")?.setAttribute("href", "#tabs-diff-old");
					newListItem.querySelector("a")?.setAttribute("href", "#tabs-diff-new");
					wrapTabLabel(oldListItem, "del", "diffdel");
					wrapTabLabel(newListItem, "ins", "diffins");
					disableResourceTab(oldListItem);
					result.append(oldListItem, newListItem);
					oldIndex++;
					newIndex++;
					continue;
				}
				const listItem = newTabs[newIndex].listItem.cloneNode(true);
				compareTabLabel(listItem, oldTabs[oldIndex].label, newTabs[newIndex].label);
				if (kind === "resource-content" && newTabs[newIndex].key === "all") disableResourceTab(listItem);
				result.appendChild(listItem);
				oldIndex++;
				newIndex++;
			} else if (newIndex >= newTabs.length || oldIndex < oldTabs.length && lengths[oldIndex + 1][newIndex] >= lengths[oldIndex][newIndex + 1]) {
				const listItem = oldTabs[oldIndex].listItem.cloneNode(true);
				listItem.classList.remove("active");
				wrapTabLabel(listItem, "del", "diffdel");
				result.appendChild(listItem);
				oldIndex++;
			} else {
				const listItem = newTabs[newIndex].listItem.cloneNode(true);
				wrapTabLabel(listItem, "ins", "diffins");
				result.appendChild(listItem);
				newIndex++;
			}
			return result;
		}
		function maskSpecialResourcePanels(html) {
			const container = document.createElement("div");
			container.innerHTML = html;
			for (const panelId of [
				"tabs-uml",
				"tabs-diff",
				"tabs-all"
			]) {
				const panel = container.querySelector(`#${panelId}`);
				if (!panel) continue;
				const placeholder = document.createElement("span");
				placeholder.dataset.diffPanelPlaceholder = panelId;
				panel.replaceChildren(placeholder);
			}
			return container.innerHTML;
		}
		function prefixFragmentIds(root, prefix) {
			const idMap = /* @__PURE__ */ new Map();
			root.querySelectorAll("[id]").forEach((element) => {
				const oldId = element.id;
				const newId = `${prefix}${oldId}`;
				idMap.set(oldId, newId);
				element.id = newId;
			});
			root.querySelectorAll("*").forEach((element) => {
				Array.from(element.attributes).forEach((attribute) => {
					let value = attribute.value.replace(/url\(\s*#([^)\s]+)\s*\)/g, (match, id) => idMap.has(id) ? `url(#${idMap.get(id)})` : match);
					if (value.startsWith("#") && idMap.has(value.substring(1))) value = `#${idMap.get(value.substring(1))}`;
					if (value !== attribute.value) element.setAttribute(attribute.name, value);
				});
			});
		}
		function clonePanelContent(panel, className, source) {
			const wrapper = document.createElement("div");
			wrapper.className = className;
			wrapper.dataset.diffSource = source;
			wrapper.append(...Array.from(panel.childNodes, (node) => node.cloneNode(true)));
			prefixFragmentIds(wrapper, `diff-${source}-`);
			return wrapper;
		}
		function cloneVersionPanel(panel, source, includeContent = true) {
			const clone = panel.cloneNode(includeContent);
			clone.removeAttribute("id");
			prefixFragmentIds(clone, `diff-${source}-`);
			clone.id = `tabs-diff-${source}`;
			clone.dataset.diffSource = source;
			return clone;
		}
		function restoreSpecialResourcePanels(diffContainer, oldContainer, newContainer) {
			const diffUmlPanel = diffContainer.querySelector("#tabs-uml");
			const oldUmlPanel = oldContainer.querySelector("#tabs-uml");
			const newUmlPanel = newContainer.querySelector("#tabs-uml");
			if (diffUmlPanel && oldUmlPanel && newUmlPanel) diffUmlPanel.replaceChildren(clonePanelContent(oldUmlPanel, "diffdel", "old"), clonePanelContent(newUmlPanel, "diffins", "new"));
			const diffVersionPanel = diffContainer.querySelector("#tabs-diff");
			const oldVersionPanel = oldContainer.querySelector("#tabs-diff");
			const newVersionPanel = newContainer.querySelector("#tabs-diff");
			if (diffVersionPanel && oldVersionPanel && newVersionPanel) diffVersionPanel.replaceWith(cloneVersionPanel(oldVersionPanel, "old", false), cloneVersionPanel(newVersionPanel, "new"));
			diffContainer.querySelector("#tabs-all")?.replaceChildren();
		}
		function replaceComparedTabLists(diffHtml, oldHtml, newHtml) {
			const oldContainer = document.createElement("div");
			const newContainer = document.createElement("div");
			const diffContainer = document.createElement("div");
			oldContainer.innerHTML = oldHtml;
			newContainer.innerHTML = newHtml;
			diffContainer.innerHTML = diffHtml;
			const newGlobalNavigation = newContainer.querySelector("nav.navbar.navbar-inverse");
			const diffGlobalNavigation = diffContainer.querySelector("nav.navbar.navbar-inverse");
			if (newGlobalNavigation && diffGlobalNavigation) diffGlobalNavigation.replaceWith(newGlobalNavigation.cloneNode(true));
			const newFooter = newContainer.querySelector("#segment-footer");
			const diffFooter = diffContainer.querySelector("#segment-footer");
			if (newFooter && diffFooter) diffFooter.replaceWith(newFooter.cloneNode(true));
			const newNavigation = newContainer.querySelector("ul.nav.nav-tabs");
			const diffNavigation = diffContainer.querySelector("ul.nav.nav-tabs");
			if (newNavigation && diffNavigation) diffNavigation.replaceWith(buildNewNavigationTabList(newNavigation));
			const oldResourceTabs = oldContainer.querySelector("#tabs > ul");
			const newResourceTabs = newContainer.querySelector("#tabs > ul");
			const diffResourceTabs = diffContainer.querySelector("#tabs > ul");
			if (oldResourceTabs && newResourceTabs && diffResourceTabs) diffResourceTabs.replaceWith(buildComparedTabList(oldResourceTabs, newResourceTabs, "resource-content"));
			const isTabInitializer = (script) => /\$\s*\(\s*['"]#tabs['"]\s*\)\.tabs\s*\(/.test(script.textContent || "");
			const newTabInitializer = Array.from(newContainer.querySelectorAll("script:not([src])")).find(isTabInitializer);
			const diffTabInitializer = Array.from(diffContainer.querySelectorAll("script:not([src])")).find(isTabInitializer);
			if (newTabInitializer && diffTabInitializer) {
				const initializer = newTabInitializer.cloneNode(true);
				initializer.textContent += `
try {
  var diffDisabledTabs = [];
  $('#tabs > ul > li[data-diff-disabled="true"]').each(function() {
    diffDisabledTabs.push($(this).index());
  });
  var diffActiveTab = $('#tabs').tabs('option', 'active');
  if (diffDisabledTabs.indexOf(diffActiveTab) !== -1) {
    $('#tabs').tabs('option', 'active', 0);
  }
  $('#tabs').tabs('option', 'disabled', diffDisabledTabs);
} catch(exception) {
}
`;
				diffTabInitializer.replaceWith(initializer);
			}
			restoreSpecialResourcePanels(diffContainer, oldContainer, newContainer);
			return diffContainer.innerHTML;
		}
		async function comparePages() {
			const normalizedPages = normalizeReleaseHeaders(extractBody(oldSpecHtml.value), extractBody(newSpecHtml.value));
			const oldHtml = normalizedPages.oldHtml;
			const newHtml = normalizedPages.newHtml;
			try {
				rawStatus.value = "Computing diff...";
				renderRawDiff(replaceComparedTabLists(await executeDiffInWorker(maskSpecialResourcePanels(oldHtml), maskSpecialResourcePanels(newHtml)), oldHtml, newHtml), activeOldUrl.value, activeNewUrl.value, normalizedPages.hasReleaseHeader);
			} catch (e) {
				console.error(e);
				rawError.value = "Diff computation failed: " + e.message;
			}
		}
		function rewriteRelativeLinks(html, oldBaseUrl, newBaseUrl) {
			const tempDiv = document.createElement("div");
			tempDiv.innerHTML = html;
			const diffPagePath = window.location.pathname;
			tempDiv.querySelectorAll("a[href]").forEach((el) => {
				const href = el.getAttribute("href");
				if (!href) return;
				if (/^(https?:\/\/|\/\/|#|mailto:|data:|javascript:)/i.test(href)) return;
				if (/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|eot|json|xml|zip|pdf)$/i.test(href)) return;
				const [path, fragment] = href.split("#");
				if (!path) return;
				try {
					const newTarget = new URL(path, newBaseUrl).href;
					const oldTarget = new URL(path, oldBaseUrl).href;
					const diffUrl = diffPagePath + "?old=" + encodeURIComponent(oldTarget) + "&new=" + encodeURIComponent(newTarget);
					el.setAttribute("href", diffUrl + (fragment ? "#" + fragment : ""));
				} catch (_) {}
			});
			return tempDiv.innerHTML;
		}
		function removePresentationOnlyImageDiffs(diffHtml) {
			const container = document.createElement("div");
			container.innerHTML = diffHtml;
			const meaningfulAttributes = (image) => {
				const normalized = image.cloneNode(true);
				normalized.style.removeProperty("background-color");
				if (!normalized.getAttribute("style")?.trim()) normalized.removeAttribute("style");
				return Array.from(normalized.attributes).map(({ name, value }) => `${name.toLowerCase()}=${value}`).sort().join("\n");
			};
			container.querySelectorAll("del.diffmod").forEach((removed) => {
				const inserted = removed.nextElementSibling;
				if (!(inserted instanceof HTMLElement) || !inserted.matches("ins.diffmod")) return;
				if (removed.children.length !== 1 || inserted.children.length !== 1) return;
				const oldImage = removed.firstElementChild;
				const newImage = inserted.firstElementChild;
				if (!(oldImage instanceof HTMLImageElement) || !(newImage instanceof HTMLImageElement)) return;
				if (removed.textContent?.trim() || inserted.textContent?.trim()) return;
				if (meaningfulAttributes(oldImage) !== meaningfulAttributes(newImage)) return;
				removed.replaceWith(newImage.cloneNode(true));
				inserted.remove();
			});
			return container.innerHTML;
		}
		function removeZeroSizeDiffElements(diffHtml) {
			const container = document.createElement("div");
			container.style.position = "absolute";
			container.style.left = "-99999px";
			container.style.top = "0";
			container.style.visibility = "hidden";
			container.style.pointerEvents = "none";
			container.style.width = `${Math.max(document.documentElement.clientWidth, 1024)}px`;
			container.innerHTML = diffHtml;
			document.body.appendChild(container);
			const selector = ".diffins, .diffmod, .diffdel, ins.diffmod, del.diffmod";
			const hasRenderableMedia = (el) => !!el.querySelector("img, svg, video, audio, picture, canvas, iframe, object, embed");
			const isWhitespaceSensitive = (el) => !!el.closest("pre, textarea");
			const unwrapElement = (el) => {
				const parent = el.parentNode;
				if (!parent) return;
				while (el.firstChild) parent.insertBefore(el.firstChild, el);
				parent.removeChild(el);
			};
			try {
				Array.from(container.querySelectorAll(selector)).forEach((el) => {
					if (isWhitespaceSensitive(el)) return;
					if (el.textContent?.trim().length === 0 && !hasRenderableMedia(el)) if (el.childNodes.length === 0) el.remove();
					else unwrapElement(el);
				});
				while (true) {
					const allDiffs = Array.from(container.querySelectorAll(selector));
					const leafDiffs = allDiffs.filter((el) => !allDiffs.some((other) => other !== el && el.contains(other)));
					let removed = 0;
					leafDiffs.forEach((el) => {
						if (isWhitespaceSensitive(el)) return;
						const rect = el.getBoundingClientRect();
						if (rect.width === 0 && rect.height === 0) {
							unwrapElement(el);
							removed++;
						}
					});
					if (removed === 0) break;
				}
				return container.innerHTML;
			} finally {
				container.remove();
			}
		}
		function renderRawDiff(diffHtml, oldPageUrl, newPageUrl, hasReleaseHeader) {
			const newBaseUrl = getBaseUrl(newPageUrl);
			const oldBaseUrl = getBaseUrl(oldPageUrl);
			const headContent = rebaseHeadUrls(newSpecHtml.value, newBaseUrl, oldBaseUrl);
			diffHtml = rebaseBodySrcUrls(diffHtml, newBaseUrl);
			diffHtml = removePresentationOnlyImageDiffs(diffHtml);
			diffHtml = removeZeroSizeDiffElements(diffHtml);
			diffHtml = rewriteRelativeLinks(diffHtml, oldBaseUrl, newBaseUrl);
			if (hasReleaseHeader) {
				const container = document.createElement("div");
				container.innerHTML = diffHtml;
				const placeholder = container.querySelector(releaseHeaderPlaceholderSelector);
				if (placeholder) {
					const notice = document.createElement("aside");
					notice.className = "generated-diff-notice";
					notice.setAttribute("aria-label", "Generated comparison notice");
					const heading = document.createElement("strong");
					heading.textContent = "Generated difference report - not an original FHIR page";
					const explanation = document.createElement("p");
					explanation.textContent = "This page was generated by comparing the two source URLs below. It is not the original content of either source page.";
					const sourceList = document.createElement("dl");
					for (const [label, url] of [["Old source", oldPageUrl], ["New source", newPageUrl]]) {
						const term = document.createElement("dt");
						term.textContent = label;
						const description = document.createElement("dd");
						const link = document.createElement("a");
						link.href = url;
						link.textContent = url;
						link.target = "_blank";
						link.rel = "noopener noreferrer";
						description.appendChild(link);
						sourceList.append(term, description);
					}
					notice.append(heading, explanation, sourceList);
					placeholder.replaceWith(notice);
					container.querySelectorAll(releaseHeaderPlaceholderSelector).forEach((extra) => extra.remove());
					diffHtml = container.innerHTML;
				}
			}
			const editUrl = window.location.pathname + "?old=" + encodeURIComponent(oldPageUrl) + "&new=" + encodeURIComponent(newPageUrl) + "&edit=1";
			const fullHtml = `<!DOCTYPE html>
<html>
<head>
${headContent}
<style>
.diffins { background-color: #b6ffa7; }
.diffmod { background-color: #a7e0ff; }
del.diffmod { background-color: #feccbf; }
ins.diffmod { background-color: #b6ffa7; }
.diffdel { background-color: #feccbf; }
.diff-current-highlight { outline: 3px solid #ff6600; outline-offset: 2px; }
.generated-diff-notice {
  margin: 0 0 18px;
  padding: 12px 16px;
  border: 2px solid #8a4b08;
  border-radius: 4px;
  background: #fff4d6;
  color: #2c210f;
}
.generated-diff-notice strong {
  display: block;
  margin-bottom: 6px;
  font-size: 18px;
}
.generated-diff-notice p { margin: 0 0 8px; }
.generated-diff-notice dl { margin: 0; }
.generated-diff-notice dt {
  float: left;
  clear: left;
  width: 84px;
  font-weight: bold;
}
.generated-diff-notice dd {
  margin-left: 90px;
  overflow-wrap: anywhere;
}
@media (max-width: 600px) {
  .generated-diff-notice { margin-left: 60px; }
}
#diff-nav {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
  background: white;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 8px 8px 0;
  /* No top padding: compare button sits flush against the top edge */
  padding: 0 8px 6px 6px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
  font-family: sans-serif;
  font-size: 13px;
}
#diff-nav button {
  padding: 0;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #f5f5f5;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  border-radius: 0;
}
#diff-nav button:hover { background: #e0e0e0; }
#diff-nav .diff-row button:first-child { border-radius: 4px 0 0 4px; }
#diff-nav .diff-row button:last-child { border-radius: 0 4px 4px 0; border-left: none; }
#diff-nav .diff-edit-link {
  display: block;
  /* Negative side margins extend the link past the nav bar's left/right padding (6px / 8px) */
  margin: 0 -8px 2px -6px;
  padding: 3px 6px;
  background: #777;
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 11px;
  font-family: inherit;
  /* Match nav bar's top-right rounding; flat elsewhere */
  border-radius: 0 8px 0 0;
  letter-spacing: 0.5px;
  text-transform: lowercase;
  box-sizing: border-box;
}
#diff-nav .diff-edit-link:hover { background: #555; }
#diff-nav .diff-row {
  display: flex;
  /* Recenter rows now that nav uses align-items: stretch */
  align-self: center;
}
#diff-nav .diff-pos {
  display: flex;
  align-self: center;
  align-items: center;
  gap: 2px;
  white-space: nowrap;
  font-size: 12px;
  color: #666;
}
#diff-nav .diff-counter {
  text-align: right;
  width: 24px;
  border: none;
  padding: 0;
  outline: none;
  font-family: inherit;
  font-size: 12px;
  color: #666;
  background: transparent;
}
#diff-nav .diff-total { font-size: 12px; color: #999; }
</style>
</head>
<body>
<div id="diff-nav">
  <a class="diff-edit-link" href="${editUrl}" title="Edit URLs / back to compare page">compare</a>
  <div class="diff-row">
    <button onclick="diffNavPrev()" title="Previous change ( , )">&#x2191;</button>
    <button onclick="diffNavPrevSection()" title="Skip to previous off-screen change ( < )">&#x21D1;</button>
  </div>
  <div class="diff-pos"><input type="text" class="diff-counter" id="diff-counter" value="0" /><span class="diff-total" id="diff-total"></span></div>
  <div class="diff-row">
    <button onclick="diffNavNext()" title="Next change ( . )">&#x2193;</button>
    <button onclick="diffNavNextSection()" title="Skip to next off-screen change ( > )">&#x21D3;</button>
  </div>
</div>
${diffHtml}
<script>
window.addEventListener('load', function() {
  var allDiffs = [];
  document.querySelectorAll('.diffins, .diffmod, .diffdel, ins.diffmod, del.diffmod').forEach(function(el) {
    // Skip tiny whitespace-only diffs
    if (el.textContent.trim().length === 0 && !el.querySelector('img')) return;
    allDiffs.push(el);
  });
  // Keep only leaf-level diffs (elements that don't contain other diff elements)
  var diffs = allDiffs.filter(function(el) {
    return !allDiffs.some(function(other) {
      return other !== el && el.contains(other);
    });
  });
  diffs = diffs.filter(function(el) {
    var rect = el.getBoundingClientRect();
    return rect.width !== 0 || rect.height !== 0;
  });
  var currentIdx = -1;
  var counter = document.getElementById('diff-counter');
  var total = document.getElementById('diff-total');
  counter.value = '0';
  total.textContent = '/' + diffs.length;

  function highlight(idx, scroll) {
    if (currentIdx >= 0 && currentIdx < diffs.length)
      diffs[currentIdx].classList.remove('diff-current-highlight');
    currentIdx = idx;
    if (currentIdx >= 0 && currentIdx < diffs.length) {
      var el = diffs[currentIdx];
      el.classList.add('diff-current-highlight');
      if (scroll !== false && !isInViewport(el))
        el.scrollIntoView({ behavior: 'auto', block: 'center' });
      counter.value = String(currentIdx + 1);
    }
  }

  // Track scroll position and sync counter to first visible diff
  var scrollTimer = null;
  var navTriggeredScroll = false;

  function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  }

  function onUserScroll() {
    if (navTriggeredScroll) return;
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
      // If current highlight is still visible, do nothing
      if (currentIdx >= 0 && currentIdx < diffs.length && isInViewport(diffs[currentIdx])) return;
      // Find first visible diff using binary search for performance with 1600+ diffs
      var lo = 0, hi = diffs.length - 1, firstVisible = -1;
      while (lo <= hi) {
        var mid = (lo + hi) >> 1;
        var rect = diffs[mid].getBoundingClientRect();
        if (rect.top >= window.innerHeight) {
          hi = mid - 1;
        } else if (rect.bottom <= 0) {
          lo = mid + 1;
        } else {
          firstVisible = mid;
          hi = mid - 1;
        }
      }
      if (firstVisible >= 0 && firstVisible !== currentIdx) {
        highlight(firstVisible, false);
      }
    }, 150);
  }

  window.addEventListener('scroll', onUserScroll, { passive: true });

  counter.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var num = parseInt(counter.value, 10);
      if (!isNaN(num) && num >= 1 && num <= diffs.length) {
        navTriggeredScroll = true;
        highlight(num - 1);
        setTimeout(function() { navTriggeredScroll = false; }, 500);
      } else {
        counter.value = currentIdx >= 0 ? String(currentIdx + 1) : '0';
      }
      counter.blur();
    }
  });

  window.diffNavNext = function() {
    if (diffs.length === 0) return;
    navTriggeredScroll = true;
    highlight(currentIdx < diffs.length - 1 ? currentIdx + 1 : 0);
    setTimeout(function() { navTriggeredScroll = false; }, 500);
  };
  window.diffNavPrev = function() {
    if (diffs.length === 0) return;
    navTriggeredScroll = true;
    highlight(currentIdx > 0 ? currentIdx - 1 : diffs.length - 1);
    setTimeout(function() { navTriggeredScroll = false; }, 500);
  };
  window.diffNavNextSection = function() {
    if (diffs.length === 0) return;
    for (var i = currentIdx + 1; i < diffs.length; i++) {
      if (!isInViewport(diffs[i])) {
        navTriggeredScroll = true;
        highlight(i);
        setTimeout(function() { navTriggeredScroll = false; }, 500);
        return;
      }
    }
  };
  window.diffNavPrevSection = function() {
    if (diffs.length === 0) return;
    for (var i = (currentIdx >= 0 ? currentIdx : diffs.length) - 1; i >= 0; i--) {
      if (!isInViewport(diffs[i])) {
        navTriggeredScroll = true;
        highlight(i);
        setTimeout(function() { navTriggeredScroll = false; }, 500);
        return;
      }
    }
  };

  document.addEventListener('keydown', function(e) {
    // Skip when typing in the counter input
    if (e.target === counter) return;
    if (e.key === '>') { diffNavNextSection(); e.preventDefault(); }
    else if (e.key === '<') { diffNavPrevSection(); e.preventDefault(); }
    else if (e.key === '.' || e.key === ']') { diffNavNext(); e.preventDefault(); }
    else if (e.key === ',' || e.key === '[') { diffNavPrev(); e.preventDefault(); }
  });

  // Auto-select the first change if it's already visible in the initial
  // viewport. We pass scroll=false so the page doesn't jump.
  for (var i = 0; i < diffs.length; i++) {
    if (isInViewport(diffs[i])) {
      highlight(i, false);
      break;
    }
  }
});
<\/script>
</body>
</html>`;
			const diffUrl = window.location.pathname + "?old=" + encodeURIComponent(oldPageUrl) + "&new=" + encodeURIComponent(newPageUrl);
			history.replaceState(null, "", editUrl);
			history.pushState(null, "", diffUrl);
			document.open();
			document.write(fullHtml);
			document.close();
			window.addEventListener("popstate", () => {
				if (new URLSearchParams(window.location.search).get("edit") === "1") window.location.reload();
			});
		}
		function formatDownloadError(error, url) {
			if (error.response) {
				const status = error.response.status;
				const statusText = error.response.statusText || "";
				const data = typeof error.response.data === "string" ? error.response.data.substring(0, 200) : "";
				return `${status} ${statusText}${data ? ": " + data : ""}`;
			}
			if (error.request && !error.response) return `Request failed (likely blocked by CORS). The server may not allow cross-origin requests.`;
			return `${error.message || "Unknown error"}`;
		}
		function resolvedUrl(response, originalUrl, usedProxy) {
			if (usedProxy) return originalUrl;
			const finalUrl = response.request?.responseURL;
			if (!finalUrl) return originalUrl;
			return finalUrl;
		}
		function resolveLangRedirectTarget(html, pageUrl) {
			if (!/lang-redirects?\.js/i.test(html)) return null;
			let doc;
			try {
				doc = new DOMParser().parseFromString(html, "text/html");
			} catch {
				return null;
			}
			if (!Array.from(doc.querySelectorAll("script[src]")).some((s) => /lang-redirects?\.js(\?|$)/i.test(s.getAttribute("src") || ""))) return null;
			let langs = null;
			for (const s of Array.from(doc.querySelectorAll("script:not([src])"))) {
				const m = (s.textContent || "").match(/langs\s*=\s*(\[[^\]]*\])/);
				if (!m) continue;
				try {
					const parsed = JSON.parse(m[1].replace(/'/g, "\""));
					if (Array.isArray(parsed) && parsed.every((x) => typeof x === "string") && parsed.length > 0) {
						langs = parsed;
						break;
					}
				} catch {}
			}
			if (!langs) return null;
			const userLang = navigator.language || navigator.userLanguage || "";
			let chosen = langs[0];
			for (const l of langs) if (userLang === l || userLang.startsWith(l + "-")) {
				chosen = l;
				break;
			}
			try {
				const u = new URL(pageUrl);
				const path = u.pathname;
				const pageName = path.substring(path.lastIndexOf("/") + 1);
				u.pathname = path.substring(0, path.lastIndexOf("/") + 1) + chosen + "/" + pageName;
				return u.toString();
			} catch {
				return null;
			}
		}
		function stripLangRedirectScript(html) {
			return html.replace(/<script\b[^>]*\bsrc\s*=\s*["'][^"']*lang-redirects?\.js[^"']*["'][^>]*>\s*<\/script>/gi, "").replace(/<script\b[^>]*>\s*(?:\/\/[^\n]*\n\s*)*langs\s*=\s*\[[^\]]*\]\s*;?\s*<\/script>/gi, "");
		}
		function fetchPage(pageUrl, onProgress, onError, followLangRedirect = true) {
			const proxied = wrapWithProxy(pageUrl);
			const usedProxy = proxied !== pageUrl;
			return axios.get(proxied, { onDownloadProgress: (e) => onProgress(e.loaded) }).then(async (response) => {
				const finalUrl = resolvedUrl(response, pageUrl, usedProxy);
				const html = response.data;
				if (followLangRedirect) {
					const langTarget = resolveLangRedirectTarget(html, finalUrl);
					if (langTarget && langTarget !== finalUrl) if (!isUrlAllowed(langTarget)) console.warn("lang-redirect target not in allowlist, ignoring:", langTarget);
					else {
						onProgress(0);
						const followed = await fetchPage(langTarget, onProgress, onError, false);
						if (followed) return followed;
					}
				}
				return {
					html: stripLangRedirectScript(html),
					resolvedUrl: finalUrl
				};
			}).catch((error) => {
				onError(formatDownloadError(error, pageUrl));
				return null;
			});
		}
		function downloadAndCompare(oldPageUrl, newPageUrl) {
			loading.value = true;
			rawMode.value = true;
			rawStatus.value = "Downloading pages...";
			rawError.value = "";
			rawErrorOld.value = "";
			rawErrorNew.value = "";
			rawProgressOld.value = 0;
			rawProgressNew.value = 0;
			activeOldUrl.value = oldPageUrl;
			activeNewUrl.value = newPageUrl;
			const fetchOld = fetchPage(oldPageUrl, (loaded) => {
				rawProgressOld.value = loaded;
			}, (msg) => {
				rawErrorOld.value = msg;
			});
			const fetchNew = fetchPage(newPageUrl, (loaded) => {
				rawProgressNew.value = loaded;
			}, (msg) => {
				rawErrorNew.value = msg;
			});
			Promise.all([fetchOld, fetchNew]).then(([oldResult, newResult]) => {
				if (!oldResult || !newResult) {
					rawStatus.value = "Diff evaluation cancelled — failed download";
					loading.value = false;
					return;
				}
				activeOldUrl.value = oldResult.resolvedUrl;
				activeNewUrl.value = newResult.resolvedUrl;
				oldSpecHtml.value = oldResult.html;
				newSpecHtml.value = newResult.html;
				loading.value = false;
				return comparePages();
			});
		}
		onMounted(async () => {
			try {
				allowedSites.value = (await axios.get("allowed-sites.json")).data.allowedSites;
			} catch (e) {
				console.error("Failed to load allowed sites", e);
			}
			const params = new URLSearchParams(window.location.search);
			const qOld = params.get("old");
			if (qOld) oldUrl.value = qOld;
			const qNew = params.get("new");
			if (qNew) newUrl.value = qNew;
			const editMode = params.get("edit") === "1";
			if (qOld && qNew && !editMode) {
				if (!validateUrls(oldUrl.value, newUrl.value)) {
					rawError.value = validationError.value;
					rawMode.value = true;
					return;
				}
				downloadAndCompare(oldUrl.value, newUrl.value);
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(VApp, null, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
					_cache[9] || (_cache[9] = createBaseVNode("h2", null, "HL7 FHIR Spec Diff Viewer", -1)),
					_cache[10] || (_cache[10] = createBaseVNode("br", null, null, -1)),
					rawMode.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
						createVNode(VTextField, {
							density: "compact",
							label: "Old Page URL  (" + formatBytes(rawProgressOld.value) + ")",
							modelValue: oldUrl.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => oldUrl.value = $event),
							readonly: loading.value,
							loading: loading.value,
							"error-messages": rawErrorOld.value
						}, null, 8, [
							"label",
							"modelValue",
							"readonly",
							"loading",
							"error-messages"
						]),
						createVNode(VTextField, {
							density: "compact",
							label: "New Page URL  (" + formatBytes(rawProgressNew.value) + ")",
							modelValue: newUrl.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newUrl.value = $event),
							readonly: loading.value,
							loading: loading.value,
							"error-messages": rawErrorNew.value
						}, null, 8, [
							"label",
							"modelValue",
							"readonly",
							"loading",
							"error-messages"
						]),
						createVNode(VBtn, {
							onClick: startCompare,
							disabled: !oldUrl.value || !newUrl.value || loading.value
						}, {
							default: withCtx(() => [createVNode(VIcon, null, {
								default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode(" mdi-file-compare ", -1)])]),
								_: 1
							}), _cache[5] || (_cache[5] = createTextVNode(" Compare ", -1))]),
							_: 1
						}, 8, ["disabled"]),
						_cache[6] || (_cache[6] = createBaseVNode("p", null, null, -1)),
						validationError.value ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(validationError.value), 1)) : createCommentVNode("", true),
						createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, toDisplayString(rawStatus.value), 1)]),
						rawError.value ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(rawError.value), 1)) : createCommentVNode("", true)
					])) : (openBlock(), createElementBlock("div", _hoisted_8, [createBaseVNode("div", null, [
						createVNode(VTextField, {
							density: "compact",
							label: "Old Page URL",
							modelValue: oldUrl.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => oldUrl.value = $event)
						}, null, 8, ["modelValue"]),
						createVNode(VTextField, {
							density: "compact",
							label: "New Page URL",
							modelValue: newUrl.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => newUrl.value = $event)
						}, null, 8, ["modelValue"]),
						createVNode(VBtn, {
							onClick: startCompare,
							disabled: !oldUrl.value || !newUrl.value
						}, {
							default: withCtx(() => [createVNode(VIcon, null, {
								default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode(" mdi-file-compare ", -1)])]),
								_: 1
							}), _cache[8] || (_cache[8] = createTextVNode(" Compare ", -1))]),
							_: 1
						}, 8, ["disabled"]),
						validationError.value ? (openBlock(), createElementBlock("p", _hoisted_9, toDisplayString(validationError.value), 1)) : createCommentVNode("", true)
					])]))
				])])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region src/App.vue
var App_default = /* @__PURE__ */ _plugin_vue_export_helper_default(App_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-782a3240"]]);
//#endregion
//#region src/main.ts
var vuetify = createVuetify({
	theme: {
		defaultTheme: "light",
		themes: { light: {
			dark: false,
			colors: {
				primary: "#3F81AE",
				secondary: "#79B6E6",
				error: "#ff5252"
			}
		} }
	},
	defaults: {
		VTextField: { variant: "underlined" },
		VTextarea: { variant: "underlined" },
		VSelect: { variant: "underlined" },
		VCombobox: { variant: "underlined" },
		VAutocomplete: { variant: "underlined" }
	}
});
var app = createApp(App_default);
app.use(vuetify);
app.mount("#app");
//#endregion
