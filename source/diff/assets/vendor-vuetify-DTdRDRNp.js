import { A as watch, B as ref, C as onMounted, D as resolveDynamicComponent, E as provide, F as getCurrentScope, G as toValue, H as toRaw, I as isRef, J as normalizeClass, K as unref, L as onScopeDispose, N as withDirectives, O as useId, P as effectScope, R as reactive, S as onBeforeUnmount, U as toRef, V as shallowRef, W as toRefs, X as toDisplayString, Y as normalizeStyle, _ as h, a as Fragment, b as nextTick, c as computed, g as getCurrentInstance$1, h as defineComponent$1, i as vShow, j as watchEffect, k as warn, l as createBaseVNode, m as createVNode, n as TransitionGroup, o as Text, q as capitalize, s as cloneVNode, t as Transition, v as inject$1, w as onUpdated, x as onBeforeMount, y as mergeProps, z as readonly } from "./vendor-vue-B0fXMx36.js";
//#region node_modules/vuetify/lib/util/console.js
function consoleWarn(message) {
	warn(`Vuetify: ${message}`);
}
function consoleError(message) {
	warn(`Vuetify error: ${message}`);
}
function deprecate(original, replacement) {
	replacement = Array.isArray(replacement) ? replacement.slice(0, -1).map((s) => `'${s}'`).join(", ") + ` or '${replacement.at(-1)}'` : `'${replacement}'`;
	warn(`[Vuetify UPGRADE] '${original}' is deprecated, use ${replacement} instead.`);
}
//#endregion
//#region node_modules/vuetify/lib/util/globals.js
var IN_BROWSER = typeof window !== "undefined";
var SUPPORTS_INTERSECTION = IN_BROWSER && "IntersectionObserver" in window;
var SUPPORTS_TOUCH = IN_BROWSER && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
IN_BROWSER && "EyeDropper" in window;
var SUPPORTS_MATCH_MEDIA = IN_BROWSER && "matchMedia" in window && typeof window.matchMedia === "function";
var PREFERS_REDUCED_MOTION = () => SUPPORTS_MATCH_MEDIA && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//#endregion
//#region node_modules/vuetify/lib/util/helpers.js
function getNestedValue(obj, path, fallback) {
	const last = path.length - 1;
	if (last < 0) return obj === void 0 ? fallback : obj;
	for (let i = 0; i < last; i++) {
		if (obj == null) return fallback;
		obj = obj[path[i]];
	}
	if (obj == null) return fallback;
	return obj[path[last]] === void 0 ? fallback : obj[path[last]];
}
function getObjectValueByPath(obj, path, fallback) {
	if (obj == null || !path || typeof path !== "string") return fallback;
	if (obj[path] !== void 0) return obj[path];
	path = path.replace(/\[(\w+)\]/g, ".$1");
	path = path.replace(/^\./, "");
	return getNestedValue(obj, path.split("."), fallback);
}
function createRange(length, start = 0) {
	return Array.from({ length }, (v, k) => start + k);
}
function convertToUnit(str, unit = "px") {
	if (str == null || str === "") return;
	const num = Number(str);
	if (isNaN(num)) return String(str);
	else if (!isFinite(num)) return;
	else return `${num}${unit}`;
}
function isObject(obj) {
	return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}
function isPlainObject(obj) {
	let proto;
	return obj !== null && typeof obj === "object" && ((proto = Object.getPrototypeOf(obj)) === Object.prototype || proto === null);
}
function refElement(obj) {
	if (obj && "$el" in obj) {
		const el = obj.$el;
		if (el?.nodeType === Node.TEXT_NODE) return el.nextElementSibling;
		return el;
	}
	return obj;
}
Object.freeze({
	enter: 13,
	tab: 9,
	delete: 46,
	esc: 27,
	space: 32,
	up: 38,
	down: 40,
	left: 37,
	right: 39,
	end: 35,
	home: 36,
	del: 46,
	backspace: 8,
	insert: 45,
	pageup: 33,
	pagedown: 34,
	shift: 16
});
Object.freeze({
	enter: "Enter",
	tab: "Tab",
	delete: "Delete",
	esc: "Escape",
	space: "Space",
	up: "ArrowUp",
	down: "ArrowDown",
	left: "ArrowLeft",
	right: "ArrowRight",
	end: "End",
	home: "Home",
	del: "Delete",
	backspace: "Backspace",
	insert: "Insert",
	pageup: "PageUp",
	pagedown: "PageDown",
	shift: "Shift"
});
function has(obj, key) {
	return key.every((k) => obj.hasOwnProperty(k));
}
function pick(obj, paths) {
	const found = {};
	for (const key of paths) if (Object.prototype.hasOwnProperty.call(obj, key)) found[key] = obj[key];
	return found;
}
function pickWithRest(obj, paths, exclude) {
	const found = Object.create(null);
	const rest = Object.create(null);
	for (const key in obj) if (paths.some((path) => path instanceof RegExp ? path.test(key) : path === key) && !exclude?.some((path) => path === key)) found[key] = obj[key];
	else rest[key] = obj[key];
	return [found, rest];
}
function omit(obj, exclude) {
	const clone = { ...obj };
	exclude.forEach((prop) => delete clone[prop]);
	return clone;
}
var onRE = /^on[^a-z]/;
var bubblingEvents = [
	"onAfterscriptexecute",
	"onAnimationcancel",
	"onAnimationend",
	"onAnimationiteration",
	"onAnimationstart",
	"onAuxclick",
	"onBeforeinput",
	"onBeforescriptexecute",
	"onChange",
	"onClick",
	"onCompositionend",
	"onCompositionstart",
	"onCompositionupdate",
	"onContextmenu",
	"onCopy",
	"onCut",
	"onDblclick",
	"onFocusin",
	"onFocusout",
	"onFullscreenchange",
	"onFullscreenerror",
	"onGesturechange",
	"onGestureend",
	"onGesturestart",
	"onGotpointercapture",
	"onInput",
	"onKeydown",
	"onKeypress",
	"onKeyup",
	"onLostpointercapture",
	"onMousedown",
	"onMousemove",
	"onMouseout",
	"onMouseover",
	"onMouseup",
	"onMousewheel",
	"onPaste",
	"onPointercancel",
	"onPointerdown",
	"onPointerenter",
	"onPointerleave",
	"onPointermove",
	"onPointerout",
	"onPointerover",
	"onPointerup",
	"onReset",
	"onSelect",
	"onSubmit",
	"onTouchcancel",
	"onTouchend",
	"onTouchmove",
	"onTouchstart",
	"onTransitioncancel",
	"onTransitionend",
	"onTransitionrun",
	"onTransitionstart",
	"onWheel"
];
/**
* Filter attributes that should be applied to
* the root element of an input component. Remaining
* attributes should be passed to the <input> element inside.
*/
function filterInputAttrs(attrs) {
	const [events, props] = pickWithRest(attrs, [onRE]);
	const inputEvents = omit(events, bubblingEvents);
	const [rootAttrs, inputAttrs] = pickWithRest(props, [
		"class",
		"style",
		"id",
		"inert",
		/^data-/
	]);
	Object.assign(rootAttrs, events);
	Object.assign(inputAttrs, inputEvents);
	return [rootAttrs, inputAttrs];
}
function wrapInArray(v) {
	return v == null ? [] : Array.isArray(v) ? v : [v];
}
function clamp(value, min = 0, max = 1) {
	return Math.max(min, Math.min(max, value));
}
function padEnd(str, length, char = "0") {
	return str + char.repeat(Math.max(0, length - str.length));
}
function padStart(str, length, char = "0") {
	return char.repeat(Math.max(0, length - str.length)) + str;
}
function chunk(str, size = 1) {
	const chunked = [];
	let index = 0;
	while (index < str.length) {
		chunked.push(str.substr(index, size));
		index += size;
	}
	return chunked;
}
function mergeDeep(source = {}, target = {}, arrayFn, targetCondition) {
	const out = {};
	for (const key in source) out[key] = source[key];
	for (const key in target) {
		const targetProperty = target[key];
		if (targetCondition && !targetCondition(key, targetProperty)) continue;
		const sourceProperty = source[key];
		if (isPlainObject(sourceProperty) && isPlainObject(targetProperty)) {
			out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn, targetCondition);
			continue;
		}
		if (arrayFn && Array.isArray(sourceProperty) && Array.isArray(targetProperty)) {
			out[key] = arrayFn(sourceProperty, targetProperty);
			continue;
		}
		out[key] = targetProperty;
	}
	return out;
}
function flattenFragments(nodes) {
	return nodes.map((node) => {
		if (node.type === Fragment) return flattenFragments(node.children);
		else return node;
	}).flat();
}
function toKebabCase(str = "") {
	if (toKebabCase.cache.has(str)) return toKebabCase.cache.get(str);
	const kebab = str.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
	toKebabCase.cache.set(str, kebab);
	return kebab;
}
toKebabCase.cache = /* @__PURE__ */ new Map();
function findChildrenWithProvide(key, vnode) {
	if (!vnode || typeof vnode !== "object") return [];
	if (Array.isArray(vnode)) return vnode.map((child) => findChildrenWithProvide(key, child)).flat(1);
	else if (vnode.suspense) return findChildrenWithProvide(key, vnode.ssContent);
	else if (Array.isArray(vnode.children)) return vnode.children.map((child) => findChildrenWithProvide(key, child)).flat(1);
	else if (vnode.component) {
		if (Object.getOwnPropertyDescriptor(vnode.component.provides, key)) return [vnode.component];
		else if (vnode.component.subTree) return findChildrenWithProvide(key, vnode.component.subTree).flat(1);
	}
	return [];
}
/**
* Convert a computed ref to a record of refs.
* The getter function must always return an object with the same keys.
*/
function destructComputed(getter) {
	const refs = reactive({});
	watchEffect(() => {
		const base = getter();
		for (const key in base) refs[key] = base[key];
	}, { flush: "sync" });
	const obj = {};
	for (const key in refs) obj[key] = toRef(() => refs[key]);
	return obj;
}
/** Array.includes but value can be any type */
function includes(arr, val) {
	return arr.includes(val);
}
var EventProp = () => [Function, Array];
function hasEvent(props, name) {
	name = "on" + capitalize(name);
	return !!(props[name] || props[`${name}Once`] || props[`${name}Capture`] || props[`${name}OnceCapture`] || props[`${name}CaptureOnce`]);
}
function callEvent(handler, ...args) {
	if (Array.isArray(handler)) for (const h of handler) h(...args);
	else if (typeof handler === "function") handler(...args);
}
function templateRef() {
	const el = shallowRef();
	const fn = (target) => {
		el.value = target;
	};
	Object.defineProperty(fn, "value", {
		enumerable: true,
		get: () => el.value,
		set: (val) => el.value = val
	});
	Object.defineProperty(fn, "el", {
		enumerable: true,
		get: () => refElement(el.value)
	});
	return fn;
}
function isPrimitive(value) {
	return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "bigint";
}
function onlyDefinedProps(props) {
	const booleanAttributes = ["checked", "disabled"];
	return Object.fromEntries(Object.entries(props).filter(([key, v]) => booleanAttributes.includes(key) ? !!v : v !== void 0));
}
//#endregion
//#region node_modules/vuetify/lib/util/anchor.js
var block = ["top", "bottom"];
var inline = [
	"start",
	"end",
	"left",
	"right"
];
/** Parse a raw anchor string into an object */
function parseAnchor(anchor, isRtl) {
	let [side, align] = anchor.split(" ");
	if (!align) align = includes(block, side) ? "start" : includes(inline, side) ? "top" : "center";
	return {
		side: toPhysical(side, isRtl),
		align: toPhysical(align, isRtl)
	};
}
function toPhysical(str, isRtl) {
	if (str === "start") return isRtl ? "right" : "left";
	if (str === "end") return isRtl ? "left" : "right";
	return str;
}
//#endregion
//#region node_modules/vuetify/lib/util/box.js
var Box = class {
	constructor(args) {
		const pageScale = document.body.currentCSSZoom ?? 1;
		const isElement = args instanceof Element;
		const factor = isElement ? 1 + (1 - pageScale) / pageScale : 1;
		const { x, y, width, height } = isElement ? args.getBoundingClientRect() : args;
		this.x = x * factor;
		this.y = y * factor;
		this.width = width * factor;
		this.height = height * factor;
	}
	get top() {
		return this.y;
	}
	get bottom() {
		return this.y + this.height;
	}
	get left() {
		return this.x;
	}
	get right() {
		return this.x + this.width;
	}
};
function getTargetBox(target) {
	if (Array.isArray(target)) {
		const pageScale = document.body.currentCSSZoom ?? 1;
		const factor = 1 + (1 - pageScale) / pageScale;
		return new Box({
			x: target[0] * factor,
			y: target[1] * factor,
			width: 0 * factor,
			height: 0 * factor
		});
	} else return new Box(target);
}
//#endregion
//#region node_modules/vuetify/lib/util/animation.js
/** @see https://stackoverflow.com/a/57876601/2074736 */
function nullifyTransforms(el) {
	const rect = new Box(el);
	const style = getComputedStyle(el);
	const tx = style.transform;
	if (tx) {
		let ta, sx, sy, dx, dy;
		if (tx.startsWith("matrix3d(")) {
			ta = tx.slice(9, -1).split(/, /);
			sx = Number(ta[0]);
			sy = Number(ta[5]);
			dx = Number(ta[12]);
			dy = Number(ta[13]);
		} else if (tx.startsWith("matrix(")) {
			ta = tx.slice(7, -1).split(/, /);
			sx = Number(ta[0]);
			sy = Number(ta[3]);
			dx = Number(ta[4]);
			dy = Number(ta[5]);
		} else return new Box(rect);
		const to = style.transformOrigin;
		return new Box({
			x: rect.x - dx - (1 - sx) * parseFloat(to),
			y: rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1)),
			width: sx ? rect.width / sx : el.offsetWidth + 1,
			height: sy ? rect.height / sy : el.offsetHeight + 1
		});
	} else return new Box(rect);
}
function animate(el, keyframes, options) {
	if (typeof el.animate === "undefined") return { finished: Promise.resolve() };
	let animation;
	try {
		animation = el.animate(keyframes, options);
	} catch (err) {
		return { finished: Promise.resolve() };
	}
	if (typeof animation.finished === "undefined") animation.finished = new Promise((resolve) => {
		animation.onfinish = () => {
			resolve(animation);
		};
	});
	return animation;
}
//#endregion
//#region node_modules/vuetify/lib/util/color/APCA.js
/**
* WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
* @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
* @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
*/
var mainTRC = 2.4;
var Rco = .2126729;
var Gco = .7151522;
var Bco = .072175;
var normBG = .55;
var normTXT = .58;
var revTXT = .57;
var revBG = .62;
var blkThrs = .03;
var blkClmp = 1.45;
var deltaYmin = 5e-4;
var scaleBoW = 1.25;
var scaleWoB = 1.25;
var loConThresh = .078;
var loConFactor = 12.82051282051282;
var loConOffset = .06;
var loClip = .001;
function APCAcontrast(text, background) {
	const Rtxt = (text.r / 255) ** mainTRC;
	const Gtxt = (text.g / 255) ** mainTRC;
	const Btxt = (text.b / 255) ** mainTRC;
	const Rbg = (background.r / 255) ** mainTRC;
	const Gbg = (background.g / 255) ** mainTRC;
	const Bbg = (background.b / 255) ** mainTRC;
	let Ytxt = Rtxt * Rco + Gtxt * Gco + Btxt * Bco;
	let Ybg = Rbg * Rco + Gbg * Gco + Bbg * Bco;
	if (Ytxt <= blkThrs) Ytxt += (blkThrs - Ytxt) ** blkClmp;
	if (Ybg <= blkThrs) Ybg += (blkThrs - Ybg) ** blkClmp;
	if (Math.abs(Ybg - Ytxt) < deltaYmin) return 0;
	let outputContrast;
	if (Ybg > Ytxt) {
		const SAPC = (Ybg ** normBG - Ytxt ** normTXT) * scaleBoW;
		outputContrast = SAPC < loClip ? 0 : SAPC < loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC - loConOffset;
	} else {
		const SAPC = (Ybg ** revBG - Ytxt ** revTXT) * scaleWoB;
		outputContrast = SAPC > -loClip ? 0 : SAPC > -loConThresh ? SAPC - SAPC * loConFactor * loConOffset : SAPC + loConOffset;
	}
	return outputContrast * 100;
}
//#endregion
//#region node_modules/vuetify/lib/util/color/transformCIELAB.js
var delta = .20689655172413793;
var cielabForwardTransform = (t) => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;
var cielabReverseTransform = (t) => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);
function fromXYZ$1(xyz) {
	const transform = cielabForwardTransform;
	const transformedY = transform(xyz[1]);
	return [
		116 * transformedY - 16,
		500 * (transform(xyz[0] / .95047) - transformedY),
		200 * (transformedY - transform(xyz[2] / 1.08883))
	];
}
function toXYZ$1(lab) {
	const transform = cielabReverseTransform;
	const Ln = (lab[0] + 16) / 116;
	return [
		transform(Ln + lab[1] / 500) * .95047,
		transform(Ln),
		transform(Ln - lab[2] / 200) * 1.08883
	];
}
//#endregion
//#region node_modules/vuetify/lib/util/color/transformSRGB.js
var srgbForwardMatrix = [
	[
		3.2406,
		-1.5372,
		-.4986
	],
	[
		-.9689,
		1.8758,
		.0415
	],
	[
		.0557,
		-.204,
		1.057
	]
];
var srgbForwardTransform = (C) => C <= .0031308 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - .055;
var srgbReverseMatrix = [
	[
		.4124,
		.3576,
		.1805
	],
	[
		.2126,
		.7152,
		.0722
	],
	[
		.0193,
		.1192,
		.9505
	]
];
var srgbReverseTransform = (C) => C <= .04045 ? C / 12.92 : ((C + .055) / 1.055) ** 2.4;
function fromXYZ(xyz) {
	const rgb = Array(3);
	const transform = srgbForwardTransform;
	const matrix = srgbForwardMatrix;
	for (let i = 0; i < 3; ++i) rgb[i] = Math.round(clamp(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
	return {
		r: rgb[0],
		g: rgb[1],
		b: rgb[2]
	};
}
function toXYZ({ r, g, b }) {
	const xyz = [
		0,
		0,
		0
	];
	const transform = srgbReverseTransform;
	const matrix = srgbReverseMatrix;
	r = transform(r / 255);
	g = transform(g / 255);
	b = transform(b / 255);
	for (let i = 0; i < 3; ++i) xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
	return xyz;
}
//#endregion
//#region node_modules/vuetify/lib/util/colorUtils.js
function isCssColor(color) {
	return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color);
}
function isParsableColor(color) {
	return isCssColor(color) && !/^((rgb|hsl)a?\()?var\(--/.test(color);
}
var cssColorRe = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/;
var mappers = {
	rgb: (r, g, b, a) => ({
		r,
		g,
		b,
		a
	}),
	rgba: (r, g, b, a) => ({
		r,
		g,
		b,
		a
	}),
	hsl: (h, s, l, a) => HSLtoRGB({
		h,
		s,
		l,
		a
	}),
	hsla: (h, s, l, a) => HSLtoRGB({
		h,
		s,
		l,
		a
	}),
	hsv: (h, s, v, a) => HSVtoRGB({
		h,
		s,
		v,
		a
	}),
	hsva: (h, s, v, a) => HSVtoRGB({
		h,
		s,
		v,
		a
	})
};
function parseColor(color) {
	if (typeof color === "number") {
		if (isNaN(color) || color < 0 || color > 16777215) consoleWarn(`'${color}' is not a valid hex color`);
		return {
			r: (color & 16711680) >> 16,
			g: (color & 65280) >> 8,
			b: color & 255
		};
	} else if (typeof color === "string" && cssColorRe.test(color)) {
		const { groups } = color.match(cssColorRe);
		const { fn, values } = groups;
		const realValues = values.split(/,\s*|\s*\/\s*|\s+/).map((v, i) => {
			if (v.endsWith("%") || i > 0 && i < 3 && [
				"hsl",
				"hsla",
				"hsv",
				"hsva"
			].includes(fn)) return parseFloat(v) / 100;
			else return parseFloat(v);
		});
		return mappers[fn](...realValues);
	} else if (typeof color === "string") {
		let hex = color.startsWith("#") ? color.slice(1) : color;
		if ([3, 4].includes(hex.length)) hex = hex.split("").map((char) => char + char).join("");
		else if (![6, 8].includes(hex.length)) consoleWarn(`'${color}' is not a valid hex(a) color`);
		const int = parseInt(hex, 16);
		if (isNaN(int) || int < 0 || int > 4294967295) consoleWarn(`'${color}' is not a valid hex(a) color`);
		return HexToRGB(hex);
	} else if (typeof color === "object") {
		if (has(color, [
			"r",
			"g",
			"b"
		])) return color;
		else if (has(color, [
			"h",
			"s",
			"l"
		])) return HSVtoRGB(HSLtoHSV(color));
		else if (has(color, [
			"h",
			"s",
			"v"
		])) return HSVtoRGB(color);
	}
	throw new TypeError(`Invalid color: ${color == null ? color : String(color) || color.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
/** Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV */
function HSVtoRGB(hsva) {
	const { h, s, v, a } = hsva;
	const f = (n) => {
		const k = (n + h / 60) % 6;
		return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
	};
	const rgb = [
		f(5),
		f(3),
		f(1)
	].map((v) => Math.round(v * 255));
	return {
		r: rgb[0],
		g: rgb[1],
		b: rgb[2],
		a
	};
}
function HSLtoRGB(hsla) {
	return HSVtoRGB(HSLtoHSV(hsla));
}
function HSLtoHSV(hsl) {
	const { h, s, l, a } = hsl;
	const v = l + s * Math.min(l, 1 - l);
	return {
		h,
		s: v === 0 ? 0 : 2 - 2 * l / v,
		v,
		a
	};
}
function toHex(v) {
	const h = Math.round(v).toString(16);
	return ("00".substr(0, 2 - h.length) + h).toUpperCase();
}
function RGBtoHex({ r, g, b, a }) {
	return `#${[
		toHex(r),
		toHex(g),
		toHex(b),
		a !== void 0 ? toHex(Math.round(a * 255)) : ""
	].join("")}`;
}
function HexToRGB(hex) {
	hex = parseHex(hex);
	let [r, g, b, a] = chunk(hex, 2).map((c) => parseInt(c, 16));
	a = a === void 0 ? a : a / 255;
	return {
		r,
		g,
		b,
		a
	};
}
function parseHex(hex) {
	if (hex.startsWith("#")) hex = hex.slice(1);
	hex = hex.replace(/([^0-9a-f])/gi, "F");
	if (hex.length === 3 || hex.length === 4) hex = hex.split("").map((x) => x + x).join("");
	if (hex.length !== 6) hex = padEnd(padEnd(hex, 6), 8, "F");
	return hex;
}
function lighten(value, amount) {
	const lab = fromXYZ$1(toXYZ(value));
	lab[0] = lab[0] + amount * 10;
	return fromXYZ(toXYZ$1(lab));
}
function darken(value, amount) {
	const lab = fromXYZ$1(toXYZ(value));
	lab[0] = lab[0] - amount * 10;
	return fromXYZ(toXYZ$1(lab));
}
/**
* Calculate the relative luminance of a given color
* @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
*/
function getLuma(color) {
	return toXYZ(parseColor(color))[1];
}
function hasLightForeground(color) {
	const blackContrast = Math.abs(APCAcontrast(parseColor(0), parseColor(color)));
	return Math.abs(APCAcontrast(parseColor(16777215), parseColor(color))) > Math.min(blackContrast, 50);
}
//#endregion
//#region node_modules/vuetify/lib/util/propsFactory.js
/**
* Creates a factory function for props definitions.
* This is used to define props in a composable then override
* default values in an implementing component.
*
* @example Simplified signature
* (props: Props) => (defaults?: Record<keyof props, any>) => Props
*
* @example Usage
* const makeProps = propsFactory({
*   foo: String,
* })
*
* defineComponent({
*   props: {
*     ...makeProps({
*       foo: 'a',
*     }),
*   },
*   setup (props) {
*     // would be "string | undefined", now "string" because a default has been provided
*     props.foo
*   },
* }
*/
function propsFactory(props, source) {
	return (defaults) => {
		return Object.keys(props).reduce((obj, prop) => {
			const definition = typeof props[prop] === "object" && props[prop] != null && !Array.isArray(props[prop]) ? props[prop] : { type: props[prop] };
			if (defaults && prop in defaults) obj[prop] = {
				...definition,
				default: defaults[prop]
			};
			else obj[prop] = definition;
			if (source && !obj[prop].source) obj[prop].source = source;
			return obj;
		}, {});
	};
}
/**
* Like `Partial<T>` but doesn't care what the value is
*/
//#endregion
//#region node_modules/vuetify/lib/composables/component.js
var makeComponentProps = propsFactory({
	class: [
		String,
		Array,
		Object
	],
	style: {
		type: [
			String,
			Array,
			Object
		],
		default: null
	}
}, "component");
//#endregion
//#region node_modules/vuetify/lib/util/getCurrentInstance.js
function getCurrentInstance(name, message) {
	const vm = getCurrentInstance$1();
	if (!vm) throw new Error(`[Vuetify] ${name} ${message || "must be called from inside a setup function"}`);
	return vm;
}
function getCurrentInstanceName(name = "composables") {
	const vm = getCurrentInstance(name).type;
	return toKebabCase(vm?.aliasName || vm?.name);
}
//#endregion
//#region node_modules/vuetify/lib/util/injectSelf.js
function injectSelf(key, vm = getCurrentInstance("injectSelf")) {
	const { provides } = vm;
	if (provides && key in provides) return provides[key];
}
//#endregion
//#region node_modules/vuetify/lib/composables/defaults.js
var DefaultsSymbol = Symbol.for("vuetify:defaults");
function createDefaults(options) {
	return ref(options);
}
function injectDefaults() {
	const defaults = inject$1(DefaultsSymbol);
	if (!defaults) throw new Error("[Vuetify] Could not find defaults instance");
	return defaults;
}
function provideDefaults(defaults, options) {
	const injectedDefaults = injectDefaults();
	const providedDefaults = ref(defaults);
	const newDefaults = computed(() => {
		if (unref(options?.disabled)) return injectedDefaults.value;
		const scoped = unref(options?.scoped);
		const reset = unref(options?.reset);
		const root = unref(options?.root);
		if (providedDefaults.value == null && !(scoped || reset || root)) return injectedDefaults.value;
		let properties = mergeDeep(providedDefaults.value, { prev: injectedDefaults.value });
		if (scoped) return properties;
		if (reset || root) {
			const len = Number(reset || Infinity);
			for (let i = 0; i <= len; i++) {
				if (!properties || !("prev" in properties)) break;
				properties = properties.prev;
			}
			if (properties && typeof root === "string" && root in properties) properties = mergeDeep(mergeDeep(properties, { prev: properties }), properties[root]);
			return properties;
		}
		return properties.prev ? mergeDeep(properties.prev, properties, void 0, (_, v) => v !== void 0) : properties;
	});
	provide(DefaultsSymbol, newDefaults);
	return newDefaults;
}
function propIsDefined(vnode, prop) {
	return vnode.props && (typeof vnode.props[prop] !== "undefined" || typeof vnode.props[toKebabCase(prop)] !== "undefined");
}
function internalUseDefaults(props = {}, name, defaults = injectDefaults()) {
	const vm = getCurrentInstance("useDefaults");
	name = name ?? vm.type.name ?? vm.type.__name;
	if (!name) throw new Error("[Vuetify] Could not determine component name");
	const componentDefaults = computed(() => defaults.value?.[props._as ?? name]);
	const _props = new Proxy(props, { get(target, prop) {
		const propValue = Reflect.get(target, prop);
		if (prop === "class" || prop === "style") return [componentDefaults.value?.[prop], propValue].filter((v) => v != null);
		if (propIsDefined(vm.vnode, prop)) return propValue;
		const _componentDefault = componentDefaults.value?.[prop];
		if (_componentDefault !== void 0) return _componentDefault;
		const _globalDefault = defaults.value?.global?.[prop];
		if (_globalDefault !== void 0) return _globalDefault;
		return propValue;
	} });
	const _subcomponentDefaults = shallowRef();
	watchEffect(() => {
		if (componentDefaults.value) {
			const subComponents = Object.entries(componentDefaults.value).filter(([key]) => key.startsWith(key[0].toUpperCase()));
			_subcomponentDefaults.value = subComponents.length ? Object.fromEntries(subComponents) : void 0;
		} else _subcomponentDefaults.value = void 0;
	});
	function provideSubDefaults() {
		const injected = injectSelf(DefaultsSymbol, vm);
		provide(DefaultsSymbol, computed(() => {
			return _subcomponentDefaults.value ? mergeDeep(injected?.value ?? {}, _subcomponentDefaults.value) : injected?.value;
		}));
	}
	return {
		props: _props,
		provideSubDefaults
	};
}
//#endregion
//#region node_modules/vuetify/lib/util/defineComponent.js
function defineComponent(options) {
	options._setup = options._setup ?? options.setup;
	if (!options.name) {
		consoleWarn("The component is missing an explicit name, unable to generate default prop value");
		return options;
	}
	if (options._setup) {
		options.props = propsFactory(options.props ?? {}, options.name)();
		const propKeys = Object.keys(options.props).filter((key) => key !== "class" && key !== "style");
		options.filterProps = function filterProps(props) {
			return pick(props, propKeys);
		};
		options.props._as = String;
		options.setup = function setup(props, ctx) {
			const defaults = injectDefaults();
			if (!defaults.value) return options._setup(props, ctx);
			const { props: _props, provideSubDefaults } = internalUseDefaults(props, props._as ?? options.name, defaults);
			const setupBindings = options._setup(_props, ctx);
			provideSubDefaults();
			return setupBindings;
		};
	}
	return options;
}
function genericComponent(exposeDefaults = true) {
	return (options) => (exposeDefaults ? defineComponent : defineComponent$1)(options);
}
//#endregion
//#region node_modules/vuetify/lib/util/deepEqual.js
function updateRecursionCache(a, b, cache, result) {
	if (!cache || isPrimitive(a) || isPrimitive(b)) return;
	const visitedObject = cache.get(a);
	if (visitedObject) visitedObject.set(b, result);
	else {
		const newCacheItem = /* @__PURE__ */ new WeakMap();
		newCacheItem.set(b, result);
		cache.set(a, newCacheItem);
	}
}
function findCachedComparison(a, b, cache) {
	if (!cache || isPrimitive(a) || isPrimitive(b)) return null;
	const r1 = cache.get(a)?.get(b);
	if (typeof r1 === "boolean") return r1;
	const r2 = cache.get(b)?.get(a);
	if (typeof r2 === "boolean") return r2;
	return null;
}
function deepEqual(a, b, recursionCache = /* @__PURE__ */ new WeakMap()) {
	if (a === b) return true;
	if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) return false;
	if (a !== Object(a) || b !== Object(b)) return false;
	const props = Object.keys(a);
	if (props.length !== Object.keys(b).length) return false;
	const cachedComparisonResult = findCachedComparison(a, b, recursionCache);
	if (cachedComparisonResult) return cachedComparisonResult;
	updateRecursionCache(a, b, recursionCache, true);
	return props.every((p) => deepEqual(a[p], b[p], recursionCache));
}
//#endregion
//#region node_modules/vuetify/lib/util/easing.js
var standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
var easingPatterns = {
	linear: (t) => t,
	easeInQuad: (t) => t ** 2,
	easeOutQuad: (t) => t * (2 - t),
	easeInOutQuad: (t) => t < .5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t,
	easeInCubic: (t) => t ** 3,
	easeOutCubic: (t) => --t ** 3 + 1,
	easeInOutCubic: (t) => t < .5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
	easeInQuart: (t) => t ** 4,
	easeOutQuart: (t) => 1 - --t ** 4,
	easeInOutQuart: (t) => t < .5 ? 8 * t ** 4 : 1 - 8 * --t ** 4,
	easeInQuint: (t) => t ** 5,
	easeOutQuint: (t) => 1 + --t ** 5,
	easeInOutQuint: (t) => t < .5 ? 16 * t ** 5 : 1 + 16 * --t ** 5,
	instant: (t) => 1
};
//#endregion
//#region node_modules/vuetify/lib/util/useRender.js
function useRender(render) {
	const vm = getCurrentInstance("useRender");
	vm.render = render;
}
//#endregion
//#region node_modules/vuetify/lib/composables/icons.js
var IconValue = [
	String,
	Function,
	Object,
	Array
];
var IconSymbol = Symbol.for("vuetify:icons");
var makeIconProps = propsFactory({
	icon: { type: IconValue },
	tag: {
		type: [
			String,
			Object,
			Function
		],
		required: true
	}
}, "icon");
var VComponentIcon = genericComponent()({
	name: "VComponentIcon",
	props: makeIconProps(),
	setup(props, { slots }) {
		return () => {
			const Icon = props.icon;
			return createVNode(props.tag, null, { default: () => [props.icon ? createVNode(Icon, null, null) : slots.default?.()] });
		};
	}
});
var VSvgIcon = defineComponent({
	name: "VSvgIcon",
	inheritAttrs: false,
	props: makeIconProps(),
	setup(props, { attrs }) {
		return () => {
			return createVNode(props.tag, mergeProps(attrs, { "style": null }), { default: () => [createBaseVNode("svg", {
				"class": "v-icon__svg",
				"xmlns": "http://www.w3.org/2000/svg",
				"viewBox": "0 0 24 24",
				"role": "img",
				"aria-hidden": "true"
			}, [Array.isArray(props.icon) ? props.icon.map((path) => Array.isArray(path) ? createBaseVNode("path", {
				"d": path[0],
				"fill-opacity": path[1]
			}, null) : createBaseVNode("path", { "d": path }, null)) : createBaseVNode("path", { "d": props.icon }, null)])] });
		};
	}
});
defineComponent({
	name: "VLigatureIcon",
	props: makeIconProps(),
	setup(props) {
		return () => {
			return createVNode(props.tag, null, { default: () => [props.icon] });
		};
	}
});
var VClassIcon = defineComponent({
	name: "VClassIcon",
	props: makeIconProps(),
	setup(props) {
		return () => {
			return createVNode(props.tag, { "class": normalizeClass(props.icon) }, null);
		};
	}
});
var useIcon = (props) => {
	const icons = inject$1(IconSymbol);
	if (!icons) throw new Error("Missing Vuetify Icons provide!");
	return { iconData: computed(() => {
		const iconAlias = toValue(props);
		if (!iconAlias) return { component: VComponentIcon };
		let icon = iconAlias;
		if (typeof icon === "string") {
			icon = icon.trim();
			if (icon.startsWith("$")) icon = icons.aliases?.[icon.slice(1)];
		}
		if (!icon) consoleWarn(`Could not find aliased icon "${iconAlias}"`);
		if (Array.isArray(icon)) return {
			component: VSvgIcon,
			icon
		};
		else if (typeof icon !== "string") return {
			component: VComponentIcon,
			icon
		};
		const iconSetName = Object.keys(icons.sets).find((setName) => typeof icon === "string" && icon.startsWith(`${setName}:`));
		const iconName = iconSetName ? icon.slice(iconSetName.length + 1) : icon;
		return {
			component: icons.sets[iconSetName ?? icons.defaultSet].component,
			icon: iconName
		};
	}) };
};
//#endregion
//#region node_modules/vuetify/lib/iconsets/mdi.js
var aliases = {
	collapse: "mdi-chevron-up",
	complete: "mdi-check",
	cancel: "mdi-close-circle",
	close: "mdi-close",
	delete: "mdi-close-circle",
	clear: "mdi-close-circle",
	success: "mdi-check-circle",
	info: "mdi-information",
	warning: "mdi-alert-circle",
	error: "mdi-close-circle",
	prev: "mdi-chevron-left",
	next: "mdi-chevron-right",
	checkboxOn: "mdi-checkbox-marked",
	checkboxOff: "mdi-checkbox-blank-outline",
	checkboxIndeterminate: "mdi-minus-box",
	delimiter: "mdi-circle",
	sortAsc: "mdi-arrow-up",
	sortDesc: "mdi-arrow-down",
	expand: "mdi-chevron-down",
	menu: "mdi-menu",
	subgroup: "mdi-menu-down",
	dropdown: "mdi-menu-down",
	radioOn: "mdi-radiobox-marked",
	radioOff: "mdi-radiobox-blank",
	edit: "mdi-pencil",
	ratingEmpty: "mdi-star-outline",
	ratingFull: "mdi-star",
	ratingHalf: "mdi-star-half-full",
	loading: "mdi-cached",
	first: "mdi-page-first",
	last: "mdi-page-last",
	unfold: "mdi-unfold-more-horizontal",
	file: "mdi-paperclip",
	plus: "mdi-plus",
	minus: "mdi-minus",
	calendar: "mdi-calendar",
	treeviewCollapse: "mdi-menu-down",
	treeviewExpand: "mdi-menu-right",
	tableGroupCollapse: "mdi-chevron-down",
	tableGroupExpand: "mdi-chevron-right",
	eyeDropper: "mdi-eyedropper",
	upload: "mdi-cloud-upload",
	color: "mdi-palette",
	command: "mdi-apple-keyboard-command",
	ctrl: "mdi-apple-keyboard-control",
	space: "mdi-keyboard-space",
	shift: "mdi-apple-keyboard-shift",
	alt: "mdi-apple-keyboard-option",
	enter: "mdi-keyboard-return",
	arrowup: "mdi-arrow-up",
	arrowdown: "mdi-arrow-down",
	arrowleft: "mdi-arrow-left",
	arrowright: "mdi-arrow-right",
	backspace: "mdi-backspace",
	play: "mdi-play",
	pause: "mdi-pause",
	fullscreen: "mdi-fullscreen",
	fullscreenExit: "mdi-fullscreen-exit",
	volumeHigh: "mdi-volume-high",
	volumeMedium: "mdi-volume-medium",
	volumeLow: "mdi-volume-low",
	volumeOff: "mdi-volume-variant-off",
	search: "mdi-magnify"
};
var mdi = { component: (props) => h(VClassIcon, {
	...props,
	class: "mdi"
}) };
//#endregion
//#region node_modules/vuetify/lib/icons.js
function genDefaults$3() {
	return {
		svg: { component: VSvgIcon },
		class: { component: VClassIcon }
	};
}
function createIcons(options) {
	const sets = genDefaults$3();
	const defaultSet = options?.defaultSet ?? "mdi";
	if (defaultSet === "mdi" && !sets.mdi) sets.mdi = mdi;
	return mergeDeep({
		defaultSet,
		sets,
		aliases: {
			...aliases,
			vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", .6]],
			"vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
			"vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", .6]]
		}
	}, options);
}
//#endregion
//#region node_modules/vuetify/lib/composables/toggleScope.js
function useToggleScope(source, fn) {
	let scope;
	function start() {
		scope = effectScope();
		scope.run(() => fn.length ? fn(() => {
			scope?.stop();
			start();
		}) : fn());
	}
	watch(source, (active) => {
		if (active && !scope) start();
		else if (!active) {
			scope?.stop();
			scope = void 0;
		}
	}, { immediate: true });
	onScopeDispose(() => {
		scope?.stop();
	});
}
//#endregion
//#region node_modules/vuetify/lib/composables/proxiedModel.js
function useProxiedModel(props, prop, defaultValue, transformIn = (v) => v, transformOut = (v) => v) {
	const vm = getCurrentInstance("useProxiedModel");
	const internal = ref(props[prop] !== void 0 ? props[prop] : defaultValue);
	const kebabProp = toKebabCase(prop);
	const isControlled = kebabProp !== prop ? computed(() => {
		props[prop];
		return !!((vm.vnode.props?.hasOwnProperty(prop) || vm.vnode.props?.hasOwnProperty(kebabProp)) && (vm.vnode.props?.hasOwnProperty(`onUpdate:${prop}`) || vm.vnode.props?.hasOwnProperty(`onUpdate:${kebabProp}`)));
	}) : computed(() => {
		props[prop];
		return !!(vm.vnode.props?.hasOwnProperty(prop) && vm.vnode.props?.hasOwnProperty(`onUpdate:${prop}`));
	});
	useToggleScope(() => !isControlled.value, () => {
		watch(() => props[prop], (val) => {
			internal.value = val;
		});
	});
	const model = computed({
		get() {
			const externalValue = props[prop];
			return transformIn(isControlled.value ? externalValue : internal.value);
		},
		set(internalValue) {
			const newValue = transformOut(internalValue);
			const value = toRaw(isControlled.value ? props[prop] : internal.value);
			if (value === newValue || transformIn(value) === internalValue) return;
			internal.value = newValue;
			vm?.emit(`update:${prop}`, newValue);
		}
	});
	Object.defineProperty(model, "externalValue", { get: () => isControlled.value ? props[prop] : internal.value });
	return model;
}
//#endregion
//#region node_modules/vuetify/lib/locale/en.js
var en_default = {
	badge: "Badge",
	open: "Open",
	close: "Close",
	dismiss: "Dismiss",
	confirmEdit: {
		ok: "OK",
		cancel: "Cancel"
	},
	dataIterator: {
		noResultsText: "No matching records found",
		loadingText: "Loading items..."
	},
	dataTable: {
		itemsPerPageText: "Rows per page:",
		ariaLabel: {
			sortDescending: "Sorted descending.",
			sortAscending: "Sorted ascending.",
			sortNone: "Not sorted.",
			activateNone: "Activate to remove sorting.",
			activateDescending: "Activate to sort descending.",
			activateAscending: "Activate to sort ascending."
		},
		sortBy: "Sort by"
	},
	dataFooter: {
		itemsPerPageText: "Items per page:",
		itemsPerPageAll: "All",
		nextPage: "Next page",
		prevPage: "Previous page",
		firstPage: "First page",
		lastPage: "Last page",
		pageText: "{0}-{1} of {2}"
	},
	dateRangeInput: { divider: "to" },
	datePicker: {
		itemsSelected: "{0} selected",
		range: {
			title: "Select dates",
			header: "Enter dates"
		},
		title: "Select date",
		header: "Enter date",
		input: { placeholder: "Enter date" },
		ariaLabel: {
			previousMonth: "Previous month",
			nextMonth: "Next month",
			selectYear: "Select year",
			previousYear: "Previous year",
			nextYear: "Next year",
			selectMonth: "Select month",
			selectDate: "{0}",
			currentDate: "Today, {0}"
		}
	},
	noDataText: "No data available",
	carousel: {
		prev: "Previous visual",
		next: "Next visual",
		ariaLabel: { delimiter: "Carousel slide {0} of {1}" }
	},
	calendar: {
		moreEvents: "{0} more",
		today: "Today"
	},
	input: {
		clear: "Clear {0}",
		prependAction: "{0} prepended action",
		appendAction: "{0} appended action",
		otp: "Please enter OTP character {0}"
	},
	fileInput: {
		counter: "{0} files",
		counterSize: "{0} files ({1} in total)"
	},
	fileUpload: {
		title: "Drag and drop files here",
		divider: "or",
		browse: "Browse Files"
	},
	timePicker: {
		am: "AM",
		pm: "PM",
		title: "Select Time",
		hour: "Hour",
		minute: "Minute",
		second: "Second",
		notAllowed: "Value is not allowed"
	},
	pagination: { ariaLabel: {
		root: "Pagination Navigation",
		next: "Next page",
		previous: "Previous page",
		page: "Go to page {0}",
		currentPage: "Page {0}, Current page",
		first: "First page",
		last: "Last page"
	} },
	stepper: {
		next: "Next",
		prev: "Previous"
	},
	rating: { ariaLabel: { item: "Rating {0} of {1}" } },
	loading: "Loading...",
	infiniteScroll: {
		loadMore: "Load more",
		empty: "No more"
	},
	rules: {
		required: "This field is required",
		email: "Please enter a valid email",
		number: "This field can only contain numbers",
		integer: "This field can only contain integer values",
		capital: "This field can only contain uppercase letters",
		maxLength: "You must enter a maximum of {0} characters",
		minLength: "You must enter a minimum of {0} characters",
		strictLength: "The length of the entered field is invalid",
		exclude: "The {0} character is not allowed",
		notEmpty: "Please choose at least one value",
		pattern: "Invalid format"
	},
	command: { search: "Type a command or search..." },
	hotkey: {
		then: "then",
		ctrl: "Ctrl",
		command: "Command",
		space: "Space",
		shift: "Shift",
		alt: "Alt",
		enter: "Enter",
		escape: "Escape",
		upArrow: "Up Arrow",
		downArrow: "Down Arrow",
		leftArrow: "Left Arrow",
		rightArrow: "Right Arrow",
		backspace: "Backspace",
		option: "Option",
		plus: "plus",
		shortcut: "Keyboard shortcut: {0}",
		or: "or"
	},
	video: {
		play: "Play",
		pause: "Pause",
		seek: "Seek",
		volume: "Volume",
		showVolume: "Show volume control",
		mute: "Mute",
		unmute: "Unmute",
		enterFullscreen: "Full screen",
		exitFullscreen: "Exit full screen"
	},
	colorPicker: { ariaLabel: {
		eyedropper: "Select color with eyedropper",
		hueSlider: "Hue",
		alphaSlider: "Alpha",
		redInput: "Red value",
		greenInput: "Green value",
		blueInput: "Blue value",
		alphaInput: "Alpha value",
		hueInput: "Hue value",
		saturationInput: "Saturation value",
		lightnessInput: "Lightness value",
		hexInput: "HEX value",
		hexaInput: "HEX with alpha value",
		changeFormat: "Change color format"
	} }
};
//#endregion
//#region node_modules/vuetify/lib/locale/adapters/vuetify.js
var LANG_PREFIX = "$vuetify.";
var replace = (str, params) => {
	return str.replace(/\{(\d+)\}/g, (match, index) => {
		return String(params[Number(index)]);
	});
};
var createTranslateFunction = (current, fallback, messages) => {
	return (key, ...params) => {
		if (!key.startsWith(LANG_PREFIX)) return replace(key, params);
		const shortKey = key.replace(LANG_PREFIX, "");
		const currentLocale = current.value && messages.value[current.value];
		const fallbackLocale = fallback.value && messages.value[fallback.value];
		let str = getObjectValueByPath(currentLocale, shortKey, null);
		if (!str) {
			consoleWarn(`Translation key "${key}" not found in "${current.value}", trying fallback locale`);
			str = getObjectValueByPath(fallbackLocale, shortKey, null);
		}
		if (!str) {
			consoleError(`Translation key "${key}" not found in fallback`);
			str = key;
		}
		if (typeof str !== "string") {
			consoleError(`Translation key "${key}" has a non-string value`);
			str = key;
		}
		return replace(str, params);
	};
};
function createNumberFunction(current, fallback) {
	return (value, options) => {
		return new Intl.NumberFormat([current.value, fallback.value], options).format(value);
	};
}
function inferDecimalSeparator(current, fallback) {
	return createNumberFunction(current, fallback)(.1).includes(",") ? "," : ".";
}
function useProvided(props, prop, provided) {
	const internal = useProxiedModel(props, prop, props[prop] ?? provided.value);
	internal.value = props[prop] ?? provided.value;
	watch(provided, (v) => {
		if (props[prop] == null) internal.value = provided.value;
	});
	return internal;
}
function createProvideFunction(state) {
	return (props) => {
		const current = useProvided(props, "locale", state.current);
		const fallback = useProvided(props, "fallback", state.fallback);
		const messages = useProvided(props, "messages", state.messages);
		return {
			name: "vuetify",
			current,
			fallback,
			messages,
			decimalSeparator: toRef(() => inferDecimalSeparator(current, fallback)),
			t: createTranslateFunction(current, fallback, messages),
			n: createNumberFunction(current, fallback),
			provide: createProvideFunction({
				current,
				fallback,
				messages
			})
		};
	};
}
function createVuetifyAdapter(options) {
	const current = shallowRef(options?.locale ?? "en");
	const fallback = shallowRef(options?.fallback ?? "en");
	const messages = ref({
		en: en_default,
		...options?.messages
	});
	return {
		name: "vuetify",
		current,
		fallback,
		messages,
		decimalSeparator: toRef(() => options?.decimalSeparator ?? inferDecimalSeparator(current, fallback)),
		t: createTranslateFunction(current, fallback, messages),
		n: createNumberFunction(current, fallback),
		provide: createProvideFunction({
			current,
			fallback,
			messages
		})
	};
}
//#endregion
//#region node_modules/vuetify/lib/composables/locale.js
var LocaleSymbol = Symbol.for("vuetify:locale");
function isLocaleInstance(obj) {
	return obj.name != null;
}
function createLocale(options) {
	const i18n = options?.adapter && isLocaleInstance(options?.adapter) ? options?.adapter : createVuetifyAdapter(options);
	const rtl = createRtl(i18n, options);
	return {
		...i18n,
		...rtl
	};
}
function useLocale() {
	const locale = inject$1(LocaleSymbol);
	if (!locale) throw new Error("[Vuetify] Could not find injected locale instance");
	return locale;
}
function genDefaults$2() {
	return {
		af: false,
		ar: true,
		bg: false,
		ca: false,
		ckb: false,
		cs: false,
		de: false,
		el: false,
		en: false,
		es: false,
		et: false,
		fa: true,
		fi: false,
		fr: false,
		hr: false,
		hu: false,
		he: true,
		id: false,
		it: false,
		ja: false,
		km: false,
		ko: false,
		lv: false,
		lt: false,
		nl: false,
		no: false,
		pl: false,
		pt: false,
		ro: false,
		ru: false,
		sk: false,
		sl: false,
		srCyrl: false,
		srLatn: false,
		sv: false,
		th: false,
		tr: false,
		az: false,
		uk: false,
		vi: false,
		zhHans: false,
		zhHant: false
	};
}
function createRtl(i18n, options) {
	const rtl = ref(options?.rtl ?? genDefaults$2());
	const isRtl = computed(() => rtl.value[i18n.current.value] ?? false);
	return {
		isRtl,
		rtl,
		rtlClasses: toRef(() => `v-locale--is-${isRtl.value ? "rtl" : "ltr"}`)
	};
}
function useRtl() {
	const locale = inject$1(LocaleSymbol);
	if (!locale) throw new Error("[Vuetify] Could not find injected rtl instance");
	return {
		isRtl: locale.isRtl,
		rtlClasses: locale.rtlClasses
	};
}
//#endregion
//#region node_modules/vuetify/lib/composables/date/adapters/vuetify.js
function weekInfo(locale) {
	const code = locale.slice(-2).toUpperCase();
	switch (true) {
		case locale === "GB-alt-variant": return {
			firstDay: 0,
			firstWeekSize: 4
		};
		case locale === "001": return {
			firstDay: 1,
			firstWeekSize: 1
		};
		case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(code): return {
			firstDay: 0,
			firstWeekSize: 1
		};
		case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(code): return {
			firstDay: 1,
			firstWeekSize: 1
		};
		case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(code): return {
			firstDay: 1,
			firstWeekSize: 4
		};
		case `AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY`.includes(code): return {
			firstDay: 6,
			firstWeekSize: 1
		};
		case code === "MV": return {
			firstDay: 5,
			firstWeekSize: 1
		};
		case code === "PT": return {
			firstDay: 0,
			firstWeekSize: 4
		};
		default: return null;
	}
}
function getWeekArray(date, locale, firstDayOfWeek) {
	const weeks = [];
	let currentWeek = [];
	const firstDayOfMonth = startOfMonth(date);
	const lastDayOfMonth = endOfMonth(date);
	const first = firstDayOfWeek ?? weekInfo(locale)?.firstDay ?? 0;
	const firstDayWeekIndex = (firstDayOfMonth.getDay() - first + 7) % 7;
	const lastDayWeekIndex = (lastDayOfMonth.getDay() - first + 7) % 7;
	for (let i = 0; i < firstDayWeekIndex; i++) {
		const adjacentDay = new Date(firstDayOfMonth);
		adjacentDay.setDate(adjacentDay.getDate() - (firstDayWeekIndex - i));
		currentWeek.push(adjacentDay);
	}
	for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
		const day = new Date(date.getFullYear(), date.getMonth(), i);
		currentWeek.push(day);
		if (currentWeek.length === 7) {
			weeks.push(currentWeek);
			currentWeek = [];
		}
	}
	for (let i = 1; i < 7 - lastDayWeekIndex; i++) {
		const adjacentDay = new Date(lastDayOfMonth);
		adjacentDay.setDate(adjacentDay.getDate() + i);
		currentWeek.push(adjacentDay);
	}
	if (currentWeek.length > 0) weeks.push(currentWeek);
	return weeks;
}
function startOfWeek(date, locale, firstDayOfWeek) {
	let day = (firstDayOfWeek ?? weekInfo(locale)?.firstDay ?? 0) % 7;
	if (![
		0,
		1,
		2,
		3,
		4,
		5,
		6
	].includes(day)) {
		consoleWarn("Invalid firstDayOfWeek, expected discrete number in range [0-6]");
		day = 0;
	}
	const d = new Date(date);
	while (d.getDay() !== day) d.setDate(d.getDate() - 1);
	return d;
}
function endOfWeek(date, locale) {
	const d = new Date(date);
	const lastDay = ((weekInfo(locale)?.firstDay ?? 0) + 6) % 7;
	while (d.getDay() !== lastDay) d.setDate(d.getDate() + 1);
	return d;
}
function startOfMonth(date) {
	return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function parseLocalDate(value) {
	const parts = value.split("-").map(Number);
	return new Date(parts[0], parts[1] - 1, parts[2]);
}
var _YYYMMDD = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function date(value) {
	if (value == null) return /* @__PURE__ */ new Date();
	if (value instanceof Date) return value;
	if (typeof value === "string") {
		let parsed;
		if (_YYYMMDD.test(value)) return parseLocalDate(value);
		else parsed = Date.parse(value);
		if (!isNaN(parsed)) return new Date(parsed);
	}
	return null;
}
var sundayJanuarySecond2000 = new Date(2e3, 0, 2);
function getWeekdays(locale, firstDayOfWeek, weekdayFormat) {
	const daysFromSunday = firstDayOfWeek ?? weekInfo(locale)?.firstDay ?? 0;
	return createRange(7).map((i) => {
		const weekday = new Date(sundayJanuarySecond2000);
		weekday.setDate(sundayJanuarySecond2000.getDate() + daysFromSunday + i);
		return new Intl.DateTimeFormat(locale, { weekday: weekdayFormat ?? "narrow" }).format(weekday);
	});
}
function format(value, formatString, locale, formats) {
	const newDate = date(value) ?? /* @__PURE__ */ new Date();
	const customFormat = formats?.[formatString];
	if (typeof customFormat === "function") return customFormat(newDate, formatString, locale);
	let options = {};
	switch (formatString) {
		case "fullDate":
			options = {
				year: "numeric",
				month: "short",
				day: "numeric"
			};
			break;
		case "fullDateWithWeekday":
			options = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric"
			};
			break;
		case "normalDate": return `${newDate.getDate()} ${new Intl.DateTimeFormat(locale, { month: "long" }).format(newDate)}`;
		case "normalDateWithWeekday":
			options = {
				weekday: "short",
				day: "numeric",
				month: "short"
			};
			break;
		case "shortDate":
			options = {
				month: "short",
				day: "numeric"
			};
			break;
		case "year":
			options = { year: "numeric" };
			break;
		case "month":
			options = { month: "long" };
			break;
		case "monthShort":
			options = { month: "short" };
			break;
		case "monthAndYear":
			options = {
				month: "long",
				year: "numeric"
			};
			break;
		case "monthAndDate":
			options = {
				month: "long",
				day: "numeric"
			};
			break;
		case "weekday":
			options = { weekday: "long" };
			break;
		case "weekdayShort":
			options = { weekday: "short" };
			break;
		case "dayOfMonth": return new Intl.NumberFormat(locale).format(newDate.getDate());
		case "hours12h":
			options = {
				hour: "numeric",
				hour12: true
			};
			break;
		case "hours24h":
			options = {
				hour: "numeric",
				hour12: false
			};
			break;
		case "minutes":
			options = { minute: "numeric" };
			break;
		case "seconds":
			options = { second: "numeric" };
			break;
		case "fullTime":
			options = {
				hour: "numeric",
				minute: "numeric"
			};
			break;
		case "fullTime12h":
			options = {
				hour: "numeric",
				minute: "numeric",
				hour12: true
			};
			break;
		case "fullTime24h":
			options = {
				hour: "numeric",
				minute: "numeric",
				hour12: false
			};
			break;
		case "fullDateTime":
			options = {
				year: "numeric",
				month: "short",
				day: "numeric",
				hour: "numeric",
				minute: "numeric"
			};
			break;
		case "fullDateTime12h":
			options = {
				year: "numeric",
				month: "short",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
				hour12: true
			};
			break;
		case "fullDateTime24h":
			options = {
				year: "numeric",
				month: "short",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
				hour12: false
			};
			break;
		case "keyboardDate":
			options = {
				year: "numeric",
				month: "2-digit",
				day: "2-digit"
			};
			break;
		case "keyboardDateTime":
			options = {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "numeric",
				minute: "numeric"
			};
			return new Intl.DateTimeFormat(locale, options).format(newDate).replace(/, /g, " ");
		case "keyboardDateTime12h":
			options = {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "numeric",
				minute: "numeric",
				hour12: true
			};
			return new Intl.DateTimeFormat(locale, options).format(newDate).replace(/, /g, " ");
		case "keyboardDateTime24h":
			options = {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "numeric",
				minute: "numeric",
				hour12: false
			};
			return new Intl.DateTimeFormat(locale, options).format(newDate).replace(/, /g, " ");
		default: options = customFormat ?? {
			timeZone: "UTC",
			timeZoneName: "short"
		};
	}
	return new Intl.DateTimeFormat(locale, options).format(newDate);
}
function toISO(adapter, value) {
	const date = adapter.toJsDate(value);
	return `${date.getFullYear()}-${padStart(String(date.getMonth() + 1), 2, "0")}-${padStart(String(date.getDate()), 2, "0")}`;
}
function parseISO(value) {
	const [year, month, day] = value.split("-").map(Number);
	return new Date(year, month - 1, day);
}
function addMinutes(date, amount) {
	const d = new Date(date);
	d.setMinutes(d.getMinutes() + amount);
	return d;
}
function addHours(date, amount) {
	const d = new Date(date);
	d.setHours(d.getHours() + amount);
	return d;
}
function addDays(date, amount) {
	const d = new Date(date);
	d.setDate(d.getDate() + amount);
	return d;
}
function addWeeks(date, amount) {
	const d = new Date(date);
	d.setDate(d.getDate() + amount * 7);
	return d;
}
function addMonths(date, amount) {
	const d = new Date(date);
	d.setDate(1);
	d.setMonth(d.getMonth() + amount);
	return d;
}
function getYear(date) {
	return date.getFullYear();
}
function getMonth(date) {
	return date.getMonth();
}
function getWeek(date, locale, firstDayOfWeek, firstDayOfYear) {
	const weekInfoFromLocale = weekInfo(locale);
	const weekStart = firstDayOfWeek ?? weekInfoFromLocale?.firstDay ?? 0;
	const minWeekSize = weekInfoFromLocale?.firstWeekSize ?? 1;
	return firstDayOfYear !== void 0 ? calculateWeekWithFirstDayOfYear(date, locale, weekStart, firstDayOfYear) : calculateWeekWithMinWeekSize(date, locale, weekStart, minWeekSize);
}
function calculateWeekWithFirstDayOfYear(date, locale, weekStart, firstDayOfYear) {
	const firstDayOfYearOffset = (7 + firstDayOfYear - weekStart) % 7;
	const currentWeekStart = startOfWeek(date, locale, weekStart);
	const currentWeekEnd = addDays(currentWeekStart, 6);
	function yearStartWeekdayOffset(year) {
		return (7 + new Date(year, 0, 1).getDay() - weekStart) % 7;
	}
	let year = getYear(currentWeekStart);
	if (year < getYear(currentWeekEnd) && yearStartWeekdayOffset(year + 1) <= firstDayOfYearOffset) year++;
	const yearStart = new Date(year, 0, 1);
	const offset = yearStartWeekdayOffset(year);
	const d1w1 = offset <= firstDayOfYearOffset ? addDays(yearStart, -offset) : addDays(yearStart, 7 - offset);
	return 1 + getDiff(endOfDay(currentWeekStart), startOfDay(d1w1), "weeks");
}
function calculateWeekWithMinWeekSize(date, locale, weekStart, minWeekSize) {
	const currentWeekStart = startOfWeek(date, locale, weekStart);
	const currentWeekEnd = addDays(startOfWeek(date, locale, weekStart), 6);
	function firstWeekSize(year) {
		const yearStart = new Date(year, 0, 1);
		return 7 - getDiff(yearStart, startOfWeek(yearStart, locale, weekStart), "days");
	}
	let year = getYear(currentWeekStart);
	if (year < getYear(currentWeekEnd) && firstWeekSize(year + 1) >= minWeekSize) year++;
	const yearStart = new Date(year, 0, 1);
	const size = firstWeekSize(year);
	const d1w1 = size >= minWeekSize ? addDays(yearStart, size - 7) : addDays(yearStart, size);
	return 1 + getDiff(endOfDay(currentWeekStart), startOfDay(d1w1), "weeks");
}
function getDate(date) {
	return date.getDate();
}
function getNextMonth(date) {
	return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}
function getPreviousMonth(date) {
	return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}
function getHours(date) {
	return date.getHours();
}
function getMinutes(date) {
	return date.getMinutes();
}
function startOfYear(date) {
	return new Date(date.getFullYear(), 0, 1);
}
function endOfYear(date) {
	return new Date(date.getFullYear(), 11, 31);
}
function isWithinRange(date, range) {
	return isEqual(date, range[0]) || isEqual(date, range[1]) || isAfter(date, range[0]) && isBefore(date, range[1]);
}
function isValid(date) {
	const d = new Date(date);
	return d instanceof Date && !isNaN(d.getTime());
}
function isAfter(date, comparing) {
	return date.getTime() > comparing.getTime();
}
function isAfterDay(date, comparing) {
	return isAfter(startOfDay(date), startOfDay(comparing));
}
function isBefore(date, comparing) {
	return date.getTime() < comparing.getTime();
}
function isEqual(date, comparing) {
	return date.getTime() === comparing.getTime();
}
function isSameDay(date, comparing) {
	return date.getDate() === comparing.getDate() && date.getMonth() === comparing.getMonth() && date.getFullYear() === comparing.getFullYear();
}
function isSameMonth(date, comparing) {
	return date.getMonth() === comparing.getMonth() && date.getFullYear() === comparing.getFullYear();
}
function isSameYear(date, comparing) {
	return date.getFullYear() === comparing.getFullYear();
}
function getDiff(date, comparing, unit) {
	const d = new Date(date);
	const c = new Date(comparing);
	switch (unit) {
		case "years": return d.getFullYear() - c.getFullYear();
		case "quarters": return Math.floor((d.getMonth() - c.getMonth() + (d.getFullYear() - c.getFullYear()) * 12) / 4);
		case "months": return d.getMonth() - c.getMonth() + (d.getFullYear() - c.getFullYear()) * 12;
		case "weeks": return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60 * 24 * 7));
		case "days": return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60 * 24));
		case "hours": return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60 * 60));
		case "minutes": return Math.floor((d.getTime() - c.getTime()) / (1e3 * 60));
		case "seconds": return Math.floor((d.getTime() - c.getTime()) / 1e3);
		default: return d.getTime() - c.getTime();
	}
}
function setHours(date, count) {
	const d = new Date(date);
	d.setHours(count);
	return d;
}
function setMinutes(date, count) {
	const d = new Date(date);
	d.setMinutes(count);
	return d;
}
function setMonth(date, count) {
	const d = new Date(date);
	d.setMonth(count);
	return d;
}
function setDate(date, day) {
	const d = new Date(date);
	d.setDate(day);
	return d;
}
function setYear(date, year) {
	const d = new Date(date);
	d.setFullYear(year);
	return d;
}
function startOfDay(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}
function endOfDay(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}
var VuetifyDateAdapter = class {
	constructor(options) {
		this.locale = options.locale;
		this.formats = options.formats;
	}
	date(value) {
		return date(value);
	}
	toJsDate(date) {
		return date;
	}
	toISO(date) {
		return toISO(this, date);
	}
	parseISO(date) {
		return parseISO(date);
	}
	addMinutes(date, amount) {
		return addMinutes(date, amount);
	}
	addHours(date, amount) {
		return addHours(date, amount);
	}
	addDays(date, amount) {
		return addDays(date, amount);
	}
	addWeeks(date, amount) {
		return addWeeks(date, amount);
	}
	addMonths(date, amount) {
		return addMonths(date, amount);
	}
	getWeekArray(date, firstDayOfWeek) {
		const firstDay = firstDayOfWeek !== void 0 ? Number(firstDayOfWeek) : void 0;
		return getWeekArray(date, this.locale, firstDay);
	}
	startOfWeek(date, firstDayOfWeek) {
		const firstDay = firstDayOfWeek !== void 0 ? Number(firstDayOfWeek) : void 0;
		return startOfWeek(date, this.locale, firstDay);
	}
	endOfWeek(date) {
		return endOfWeek(date, this.locale);
	}
	startOfMonth(date) {
		return startOfMonth(date);
	}
	endOfMonth(date) {
		return endOfMonth(date);
	}
	format(date, formatString) {
		return format(date, formatString, this.locale, this.formats);
	}
	isEqual(date, comparing) {
		return isEqual(date, comparing);
	}
	isValid(date) {
		return isValid(date);
	}
	isWithinRange(date, range) {
		return isWithinRange(date, range);
	}
	isAfter(date, comparing) {
		return isAfter(date, comparing);
	}
	isAfterDay(date, comparing) {
		return isAfterDay(date, comparing);
	}
	isBefore(date, comparing) {
		return !isAfter(date, comparing) && !isEqual(date, comparing);
	}
	isSameDay(date, comparing) {
		return isSameDay(date, comparing);
	}
	isSameMonth(date, comparing) {
		return isSameMonth(date, comparing);
	}
	isSameYear(date, comparing) {
		return isSameYear(date, comparing);
	}
	setMinutes(date, count) {
		return setMinutes(date, count);
	}
	setHours(date, count) {
		return setHours(date, count);
	}
	setMonth(date, count) {
		return setMonth(date, count);
	}
	setDate(date, day) {
		return setDate(date, day);
	}
	setYear(date, year) {
		return setYear(date, year);
	}
	getDiff(date, comparing, unit) {
		return getDiff(date, comparing, unit);
	}
	getWeekdays(firstDayOfWeek, weekdayFormat) {
		const firstDay = firstDayOfWeek !== void 0 ? Number(firstDayOfWeek) : void 0;
		return getWeekdays(this.locale, firstDay, weekdayFormat);
	}
	getYear(date) {
		return getYear(date);
	}
	getMonth(date) {
		return getMonth(date);
	}
	getWeek(date, firstDayOfWeek, firstDayOfYear) {
		const firstDay = firstDayOfWeek !== void 0 ? Number(firstDayOfWeek) : void 0;
		const firstWeekStart = firstDayOfYear !== void 0 ? Number(firstDayOfYear) : void 0;
		return getWeek(date, this.locale, firstDay, firstWeekStart);
	}
	getDate(date) {
		return getDate(date);
	}
	getNextMonth(date) {
		return getNextMonth(date);
	}
	getPreviousMonth(date) {
		return getPreviousMonth(date);
	}
	getHours(date) {
		return getHours(date);
	}
	getMinutes(date) {
		return getMinutes(date);
	}
	startOfDay(date) {
		return startOfDay(date);
	}
	endOfDay(date) {
		return endOfDay(date);
	}
	startOfYear(date) {
		return startOfYear(date);
	}
	endOfYear(date) {
		return endOfYear(date);
	}
};
//#endregion
//#region node_modules/vuetify/lib/composables/date/date.js
var DateOptionsSymbol = Symbol.for("vuetify:date-options");
var DateAdapterSymbol = Symbol.for("vuetify:date-adapter");
function createDate(options, locale) {
	const _options = mergeDeep({
		adapter: VuetifyDateAdapter,
		locale: {
			af: "af-ZA",
			bg: "bg-BG",
			ca: "ca-ES",
			ckb: "",
			cs: "cs-CZ",
			de: "de-DE",
			el: "el-GR",
			en: "en-US",
			et: "et-EE",
			fa: "fa-IR",
			fi: "fi-FI",
			hr: "hr-HR",
			hu: "hu-HU",
			he: "he-IL",
			id: "id-ID",
			it: "it-IT",
			ja: "ja-JP",
			ko: "ko-KR",
			lv: "lv-LV",
			lt: "lt-LT",
			nl: "nl-NL",
			no: "no-NO",
			pl: "pl-PL",
			pt: "pt-PT",
			ro: "ro-RO",
			ru: "ru-RU",
			sk: "sk-SK",
			sl: "sl-SI",
			srCyrl: "sr-SP",
			srLatn: "sr-SP",
			sv: "sv-SE",
			th: "th-TH",
			tr: "tr-TR",
			az: "az-AZ",
			uk: "uk-UA",
			vi: "vi-VN",
			zhHans: "zh-CN",
			zhHant: "zh-TW"
		}
	}, options);
	return {
		options: _options,
		instance: createInstance(_options, locale)
	};
}
function createInstance(options, locale) {
	const instance = reactive(typeof options.adapter === "function" ? new options.adapter({
		locale: options.locale[locale.current.value] ?? locale.current.value,
		formats: options.formats
	}) : options.adapter);
	watch(locale.current, (value) => {
		instance.locale = options.locale[value] ?? value ?? instance.locale;
	});
	return instance;
}
//#endregion
//#region node_modules/vuetify/lib/composables/display.js
var DisplaySymbol = Symbol.for("vuetify:display");
var defaultDisplayOptions = {
	mobileBreakpoint: "lg",
	thresholds: {
		xs: 0,
		sm: 600,
		md: 840,
		lg: 1145,
		xl: 1545,
		xxl: 2138
	}
};
var parseDisplayOptions = (options = defaultDisplayOptions) => {
	return mergeDeep(defaultDisplayOptions, options);
};
function getClientWidth(ssr) {
	return IN_BROWSER && !ssr ? window.innerWidth : typeof ssr === "object" && ssr.clientWidth || 0;
}
function getClientHeight(ssr) {
	return IN_BROWSER && !ssr ? window.innerHeight : typeof ssr === "object" && ssr.clientHeight || 0;
}
function getPlatform(ssr) {
	const userAgent = IN_BROWSER && !ssr ? window.navigator.userAgent : "ssr";
	function match(regexp) {
		return Boolean(userAgent.match(regexp));
	}
	return {
		android: match(/android/i),
		ios: match(/iphone|ipad|ipod/i),
		cordova: match(/cordova/i),
		electron: match(/electron/i),
		chrome: match(/chrome/i),
		edge: match(/edge/i),
		firefox: match(/firefox/i),
		opera: match(/opera/i),
		win: match(/win/i),
		mac: match(/mac/i),
		linux: match(/linux/i),
		touch: SUPPORTS_TOUCH,
		ssr: userAgent === "ssr"
	};
}
function createDisplay(options, ssr) {
	const { thresholds, mobileBreakpoint } = parseDisplayOptions(options);
	const height = shallowRef(getClientHeight(ssr));
	const platform = shallowRef(getPlatform(ssr));
	const state = reactive({});
	const width = shallowRef(getClientWidth(ssr));
	function updateSize() {
		height.value = getClientHeight();
		width.value = getClientWidth();
	}
	function update() {
		updateSize();
		platform.value = getPlatform();
	}
	watchEffect(() => {
		const xs = width.value < thresholds.sm;
		const sm = width.value < thresholds.md && !xs;
		const md = width.value < thresholds.lg && !(sm || xs);
		const lg = width.value < thresholds.xl && !(md || sm || xs);
		const xl = width.value < thresholds.xxl && !(lg || md || sm || xs);
		const xxl = width.value >= thresholds.xxl;
		const name = xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl ? "xl" : "xxl";
		const breakpointValue = typeof mobileBreakpoint === "number" ? mobileBreakpoint : thresholds[mobileBreakpoint];
		const mobile = width.value < breakpointValue;
		state.xs = xs;
		state.sm = sm;
		state.md = md;
		state.lg = lg;
		state.xl = xl;
		state.xxl = xxl;
		state.smAndUp = !xs;
		state.mdAndUp = !(xs || sm);
		state.lgAndUp = !(xs || sm || md);
		state.xlAndUp = !(xs || sm || md || lg);
		state.smAndDown = !(md || lg || xl || xxl);
		state.mdAndDown = !(lg || xl || xxl);
		state.lgAndDown = !(xl || xxl);
		state.xlAndDown = !xxl;
		state.name = name;
		state.height = height.value;
		state.width = width.value;
		state.mobile = mobile;
		state.mobileBreakpoint = mobileBreakpoint;
		state.platform = platform.value;
		state.thresholds = thresholds;
	});
	if (IN_BROWSER) {
		window.addEventListener("resize", updateSize, { passive: true });
		onScopeDispose(() => {
			window.removeEventListener("resize", updateSize);
		}, true);
	}
	return {
		...toRefs(state),
		update,
		ssr: !!ssr
	};
}
propsFactory({
	mobile: {
		type: Boolean,
		default: false
	},
	mobileBreakpoint: [Number, String]
}, "display");
//#endregion
//#region node_modules/vuetify/lib/composables/goto.js
var GoToSymbol = Symbol.for("vuetify:goto");
function genDefaults$1() {
	return {
		container: void 0,
		duration: 300,
		layout: false,
		offset: 0,
		easing: "easeInOutCubic",
		patterns: easingPatterns
	};
}
function createGoTo(options, locale) {
	return {
		rtl: locale.isRtl,
		options: mergeDeep(genDefaults$1(), options)
	};
}
//#endregion
//#region node_modules/vuetify/lib/composables/theme.js
var ThemeSymbol = Symbol.for("vuetify:theme");
var makeThemeProps = propsFactory({ theme: String }, "theme");
function genDefaults() {
	return {
		defaultTheme: "system",
		prefix: "v-",
		variations: {
			colors: [],
			lighten: 0,
			darken: 0
		},
		themes: {
			light: {
				dark: false,
				colors: {
					background: "#FFFFFF",
					surface: "#FFFFFF",
					"surface-bright": "#FFFFFF",
					"surface-light": "#EEEEEE",
					"surface-variant": "#424242",
					"on-surface-variant": "#EEEEEE",
					primary: "#1867C0",
					"primary-darken-1": "#1F5592",
					secondary: "#48A9A6",
					"secondary-darken-1": "#018786",
					error: "#B00020",
					info: "#2196F3",
					success: "#4CAF50",
					warning: "#FB8C00"
				},
				variables: {
					"border-color": "#000000",
					"border-opacity": .12,
					"shadow-color": "#000000",
					"high-emphasis-opacity": .87,
					"medium-emphasis-opacity": .6,
					"disabled-opacity": .38,
					"idle-opacity": .04,
					"hover-opacity": .04,
					"focus-opacity": .12,
					"selected-opacity": .08,
					"activated-opacity": .12,
					"pressed-opacity": .12,
					"dragged-opacity": .08,
					"theme-kbd": "#EEEEEE",
					"theme-on-kbd": "#000000",
					"theme-code": "#F5F5F5",
					"theme-on-code": "#000000",
					"theme-on-dark": "#FFF",
					"theme-on-light": "#000",
					"elevation-overlay-color": "black",
					"elevation-overlay-opacity-step": "2%"
				}
			},
			dark: {
				dark: true,
				colors: {
					background: "#121212",
					surface: "#212121",
					"surface-bright": "#ccbfd6",
					"surface-light": "#424242",
					"surface-variant": "#c8c8c8",
					"on-surface-variant": "#000000",
					primary: "#2196F3",
					"primary-darken-1": "#277CC1",
					secondary: "#54B6B2",
					"secondary-darken-1": "#48A9A6",
					error: "#CF6679",
					info: "#2196F3",
					success: "#4CAF50",
					warning: "#FB8C00"
				},
				variables: {
					"border-color": "#FFFFFF",
					"border-opacity": .12,
					"shadow-color": "#000000",
					"high-emphasis-opacity": 1,
					"medium-emphasis-opacity": .7,
					"disabled-opacity": .5,
					"idle-opacity": .1,
					"hover-opacity": .04,
					"focus-opacity": .12,
					"selected-opacity": .08,
					"activated-opacity": .12,
					"pressed-opacity": .16,
					"dragged-opacity": .08,
					"theme-kbd": "#424242",
					"theme-on-kbd": "#FFFFFF",
					"theme-code": "#343434",
					"theme-on-code": "#CCCCCC",
					"theme-on-dark": "#FFF",
					"theme-on-light": "#000",
					"elevation-overlay-color": "white",
					"elevation-overlay-opacity-step": "2%"
				}
			}
		},
		stylesheetId: "vuetify-theme-stylesheet",
		scoped: false,
		utilities: true
	};
}
function parseThemeOptions(options = genDefaults()) {
	const defaults = genDefaults();
	if (!options) return {
		...defaults,
		isDisabled: true
	};
	return mergeDeep(defaults, options);
}
function createCssClass(lines, selector, content, scope) {
	lines.push(`${getScopedSelector(selector, scope)} {\n`, ...content.map((line) => `  ${line};\n`), "}\n");
}
function genCssVariables(theme, prefix) {
	const lightOverlay = theme.dark ? 2 : 1;
	const darkOverlay = theme.dark ? 1 : 2;
	const variables = [];
	for (const [key, value] of Object.entries(theme.colors)) {
		const rgb = parseColor(value);
		variables.push(`--${prefix}theme-${key}: ${rgb.r},${rgb.g},${rgb.b}` + (rgb.a == null ? "" : `,${rgb.a}`));
		if (!key.startsWith("on-")) variables.push(`--${prefix}theme-${key}-overlay-multiplier: ${getLuma(value) > .18 ? lightOverlay : darkOverlay}`);
	}
	for (const [key, value] of Object.entries(theme.variables)) {
		const color = typeof value === "string" && value.startsWith("#") ? parseColor(value) : void 0;
		const rgb = color ? `${color.r}, ${color.g}, ${color.b}` : void 0;
		variables.push(`--${prefix}${key}: ${rgb ?? value}`);
	}
	return variables;
}
function genVariation(name, color, variations) {
	const object = {};
	if (variations) for (const variation of ["lighten", "darken"]) {
		const fn = variation === "lighten" ? lighten : darken;
		for (const amount of createRange(variations[variation], 1)) object[`${name}-${variation}-${amount}`] = RGBtoHex(fn(parseColor(color), amount));
	}
	return object;
}
function genVariations(colors, variations) {
	if (!variations) return {};
	let variationColors = {};
	for (const name of variations.colors) {
		const color = colors[name];
		if (!color) continue;
		variationColors = {
			...variationColors,
			...genVariation(name, color, variations)
		};
	}
	return variationColors;
}
function genOnColors(colors, variables) {
	const onColors = {};
	for (const color of Object.keys(colors)) {
		if (color.startsWith("on-") || colors[`on-${color}`]) continue;
		const onColor = `on-${color}`;
		onColors[onColor] = hasLightForeground(parseColor(colors[color])) ? variables["theme-on-dark"] : variables["theme-on-light"];
	}
	return onColors;
}
function getScopedSelector(selector, scope) {
	if (!scope) return selector;
	const scopeSelector = `:where(${scope})`;
	return selector === ":root" ? scopeSelector : `${scopeSelector} ${selector}`;
}
function upsertStyles(id, cspNonce, styles) {
	const styleEl = getOrCreateStyleElement(id, cspNonce);
	if (!styleEl) return;
	styleEl.innerHTML = styles;
}
function getOrCreateStyleElement(id, cspNonce) {
	if (!IN_BROWSER) return null;
	let style = document.getElementById(id);
	if (!style) {
		style = document.createElement("style");
		style.id = id;
		style.type = "text/css";
		if (cspNonce) style.setAttribute("nonce", cspNonce);
		document.head.appendChild(style);
	}
	return style;
}
function createTheme(options) {
	const parsedOptions = parseThemeOptions(options);
	const _name = shallowRef(parsedOptions.defaultTheme);
	const themes = ref(parsedOptions.themes);
	const systemName = shallowRef("light");
	const name = computed({
		get() {
			return _name.value === "system" ? systemName.value : _name.value;
		},
		set(val) {
			_name.value = val;
		}
	});
	const computedThemes = computed(() => {
		const acc = {};
		for (const [name, original] of Object.entries(themes.value)) {
			const merged = mergeDeep(original.dark || name === "dark" ? themes.value.dark : themes.value.light, original);
			const colors = {
				...merged.colors,
				...genVariations(merged.colors, parsedOptions.variations)
			};
			acc[name] = {
				...merged,
				colors: {
					...colors,
					...genOnColors(colors, merged.variables)
				}
			};
		}
		return acc;
	});
	const current = toRef(() => computedThemes.value[name.value]);
	const isSystem = toRef(() => _name.value === "system");
	const styles = computed(() => {
		const lines = [];
		const scoped = parsedOptions.scoped ? parsedOptions.prefix : "";
		lines.push("@layer theme-base {\n");
		if (current.value?.dark) createCssClass(lines, ":root", ["color-scheme: dark"], parsedOptions.scope);
		createCssClass(lines, ":root", genCssVariables(current.value, parsedOptions.prefix), parsedOptions.scope);
		for (const [themeName, theme] of Object.entries(computedThemes.value)) createCssClass(lines, `.${parsedOptions.prefix}theme--${themeName}`, [`color-scheme: ${theme.dark ? "dark" : "normal"}`, ...genCssVariables(theme, parsedOptions.prefix)], parsedOptions.scope);
		lines.push("}\n");
		if (parsedOptions.utilities) {
			const bgLines = [];
			const fgLines = [];
			const colors = new Set(Object.values(computedThemes.value).flatMap((theme) => Object.keys(theme.colors)));
			for (const key of colors) if (key.startsWith("on-")) createCssClass(fgLines, `.${key}`, [`color: rgb(var(--${parsedOptions.prefix}theme-${key}))`], parsedOptions.scope);
			else {
				createCssClass(bgLines, `.${scoped}bg-${key}`, [
					`--${parsedOptions.prefix}theme-overlay-multiplier: var(--${parsedOptions.prefix}theme-${key}-overlay-multiplier)`,
					`background-color: rgb(var(--${parsedOptions.prefix}theme-${key}))`,
					`color: rgb(var(--${parsedOptions.prefix}theme-on-${key}))`
				], parsedOptions.scope);
				createCssClass(fgLines, `.${scoped}text-${key}`, [`color: rgb(var(--${parsedOptions.prefix}theme-${key}))`], parsedOptions.scope);
				createCssClass(fgLines, `.${scoped}border-${key}`, [`--${parsedOptions.prefix}border-color: var(--${parsedOptions.prefix}theme-${key})`], parsedOptions.scope);
			}
			lines.push("@layer theme-background {\n", ...bgLines.map((v) => `  ${v}`), "}\n", "@layer theme-foreground {\n", ...fgLines.map((v) => `  ${v}`), "}\n");
		}
		return "@layer vuetify-utilities {\n" + lines.map((v) => `  ${v}`).join("") + "\n}";
	});
	const themeClasses = toRef(() => parsedOptions.isDisabled ? void 0 : `${parsedOptions.prefix}theme--${name.value}`);
	const themeNames = toRef(() => Object.keys(computedThemes.value));
	if (SUPPORTS_MATCH_MEDIA) {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		function updateSystemName() {
			systemName.value = media.matches ? "dark" : "light";
		}
		updateSystemName();
		media.addEventListener("change", updateSystemName, { passive: true });
		if (getCurrentScope()) onScopeDispose(() => {
			media.removeEventListener("change", updateSystemName);
		});
	}
	function install(app) {
		if (parsedOptions.isDisabled) return;
		const head = app._context.provides.usehead;
		if (head) {
			function getHead() {
				return { style: [{
					textContent: styles.value,
					id: parsedOptions.stylesheetId,
					nonce: parsedOptions.cspNonce || false,
					tagPosition: "bodyOpen"
				}] };
			}
			if (head.push) {
				const entry = head.push(getHead);
				if (IN_BROWSER) watch(styles, () => {
					entry.patch(getHead);
				});
			} else if (IN_BROWSER) {
				head.addHeadObjs(toRef(getHead));
				watchEffect(() => head.updateDOM());
			} else head.addHeadObjs(getHead());
		} else {
			if (IN_BROWSER) watch(styles, updateStyles, { immediate: true });
			else updateStyles();
			function updateStyles() {
				upsertStyles(parsedOptions.stylesheetId, parsedOptions.cspNonce, styles.value);
			}
		}
	}
	function change(themeName) {
		if (themeName !== "system" && !themeNames.value.includes(themeName)) {
			consoleWarn(`Theme "${themeName}" not found on the Vuetify theme instance`);
			return;
		}
		name.value = themeName;
	}
	function cycle(themeArray = themeNames.value) {
		const currentIndex = themeArray.indexOf(name.value);
		change(themeArray[currentIndex === -1 ? 0 : (currentIndex + 1) % themeArray.length]);
	}
	function toggle(themeArray = ["light", "dark"]) {
		cycle(themeArray);
	}
	const globalName = new Proxy(name, {
		get(target, prop) {
			return Reflect.get(target, prop);
		},
		set(target, prop, val) {
			if (prop === "value") deprecate(`theme.global.name.value = ${val}`, `theme.change('${val}')`);
			return Reflect.set(target, prop, val);
		}
	});
	return {
		install,
		change,
		cycle,
		toggle,
		isDisabled: parsedOptions.isDisabled,
		isSystem,
		name,
		themes,
		current,
		computedThemes,
		prefix: parsedOptions.prefix,
		themeClasses,
		styles,
		global: {
			name: globalName,
			current
		}
	};
}
function provideTheme(props) {
	getCurrentInstance("provideTheme");
	const theme = inject$1(ThemeSymbol, null);
	if (!theme) throw new Error("Could not find Vuetify theme injection");
	const name = toRef(() => props.theme ?? theme.name.value);
	const current = toRef(() => theme.themes.value[name.value]);
	const themeClasses = toRef(() => theme.isDisabled ? void 0 : `${theme.prefix}theme--${name.value}`);
	const newTheme = {
		...theme,
		name,
		current,
		themeClasses
	};
	provide(ThemeSymbol, newTheme);
	return newTheme;
}
function useTheme() {
	getCurrentInstance("useTheme");
	const theme = inject$1(ThemeSymbol, null);
	if (!theme) throw new Error("Could not find Vuetify theme injection");
	return theme;
}
//#endregion
//#region node_modules/vuetify/lib/composables/resizeObserver.js
function useResizeObserver(callback, box = "content") {
	const resizeRef = templateRef();
	const contentRect = ref();
	if (IN_BROWSER) {
		const observer = new ResizeObserver((entries) => {
			callback?.(entries, observer);
			if (!entries.length) return;
			if (box === "content") contentRect.value = entries[0].contentRect;
			else contentRect.value = entries[0].target.getBoundingClientRect();
		});
		onBeforeUnmount(() => {
			observer.disconnect();
		});
		watch(() => resizeRef.el, (newValue, oldValue) => {
			if (oldValue) {
				observer.unobserve(oldValue);
				contentRect.value = void 0;
			}
			if (newValue) observer.observe(newValue);
		}, { flush: "post" });
	}
	return {
		resizeRef,
		contentRect: readonly(contentRect)
	};
}
//#endregion
//#region node_modules/vuetify/lib/composables/layout.js
var VuetifyLayoutKey = Symbol.for("vuetify:layout");
var VuetifyLayoutItemKey = Symbol.for("vuetify:layout-item");
var ROOT_ZINDEX = 1e3;
var makeLayoutProps = propsFactory({
	overlaps: {
		type: Array,
		default: () => []
	},
	fullHeight: Boolean
}, "layout");
propsFactory({
	name: { type: String },
	order: {
		type: [Number, String],
		default: 0
	},
	absolute: Boolean
}, "layout-item");
var generateLayers = (layout, positions, layoutSizes, activeItems) => {
	let previousLayer = {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	};
	const layers = [{
		id: "",
		layer: { ...previousLayer }
	}];
	for (const id of layout) {
		const position = positions.get(id);
		const amount = layoutSizes.get(id);
		const active = activeItems.get(id);
		if (!position || !amount || !active) continue;
		const layer = {
			...previousLayer,
			[position.value]: parseInt(previousLayer[position.value], 10) + (active.value ? parseInt(amount.value, 10) : 0)
		};
		layers.push({
			id,
			layer
		});
		previousLayer = layer;
	}
	return layers;
};
function createLayout(props) {
	const parentLayout = inject$1(VuetifyLayoutKey, null);
	const rootZIndex = computed(() => parentLayout ? parentLayout.rootZIndex.value - 100 : ROOT_ZINDEX);
	const registered = ref([]);
	const positions = reactive(/* @__PURE__ */ new Map());
	const layoutSizes = reactive(/* @__PURE__ */ new Map());
	const priorities = reactive(/* @__PURE__ */ new Map());
	const activeItems = reactive(/* @__PURE__ */ new Map());
	const disabledTransitions = reactive(/* @__PURE__ */ new Map());
	const { resizeRef, contentRect: layoutRect } = useResizeObserver();
	const computedOverlaps = computed(() => {
		const map = /* @__PURE__ */ new Map();
		const overlaps = props.overlaps ?? [];
		for (const overlap of overlaps.filter((item) => item.includes(":"))) {
			const [top, bottom] = overlap.split(":");
			if (!registered.value.includes(top) || !registered.value.includes(bottom)) continue;
			const topPosition = positions.get(top);
			const bottomPosition = positions.get(bottom);
			const topAmount = layoutSizes.get(top);
			const bottomAmount = layoutSizes.get(bottom);
			if (!topPosition || !bottomPosition || !topAmount || !bottomAmount) continue;
			map.set(bottom, {
				position: topPosition.value,
				amount: parseInt(topAmount.value, 10)
			});
			map.set(top, {
				position: bottomPosition.value,
				amount: -parseInt(bottomAmount.value, 10)
			});
		}
		return map;
	});
	const layers = computed(() => {
		const uniquePriorities = [...new Set([...priorities.values()].map((p) => p.value))].sort((a, b) => a - b);
		const layout = [];
		for (const p of uniquePriorities) {
			const items = registered.value.filter((id) => priorities.get(id)?.value === p);
			layout.push(...items);
		}
		return generateLayers(layout, positions, layoutSizes, activeItems);
	});
	const transitionsEnabled = computed(() => {
		return !Array.from(disabledTransitions.values()).some((ref) => ref.value);
	});
	const mainRect = computed(() => {
		return layers.value[layers.value.length - 1].layer;
	});
	const mainStyles = toRef(() => {
		return {
			"--v-layout-left": convertToUnit(mainRect.value.left),
			"--v-layout-right": convertToUnit(mainRect.value.right),
			"--v-layout-top": convertToUnit(mainRect.value.top),
			"--v-layout-bottom": convertToUnit(mainRect.value.bottom),
			...transitionsEnabled.value ? void 0 : { transition: "none" }
		};
	});
	const items = computed(() => {
		return layers.value.slice(1).map(({ id }, index) => {
			const { layer } = layers.value[index];
			const size = layoutSizes.get(id);
			const position = positions.get(id);
			return {
				id,
				...layer,
				size: Number(size.value),
				position: position.value
			};
		});
	});
	const getLayoutItem = (id) => {
		return items.value.find((item) => item.id === id);
	};
	const rootVm = getCurrentInstance("createLayout");
	const isMounted = shallowRef(false);
	onMounted(() => {
		isMounted.value = true;
	});
	provide(VuetifyLayoutKey, {
		register: (vm, { id, order, position, layoutSize, elementSize, active, disableTransitions, absolute }) => {
			priorities.set(id, order);
			positions.set(id, position);
			layoutSizes.set(id, layoutSize);
			activeItems.set(id, active);
			disableTransitions && disabledTransitions.set(id, disableTransitions);
			const instanceIndex = findChildrenWithProvide(VuetifyLayoutItemKey, rootVm?.vnode).indexOf(vm);
			if (instanceIndex > -1) registered.value.splice(instanceIndex, 0, id);
			else registered.value.push(id);
			const index = computed(() => items.value.findIndex((i) => i.id === id));
			const zIndex = computed(() => rootZIndex.value + layers.value.length * 2 - index.value * 2);
			return {
				layoutItemStyles: computed(() => {
					const isHorizontal = position.value === "left" || position.value === "right";
					const isOppositeHorizontal = position.value === "right";
					const isOppositeVertical = position.value === "bottom";
					const size = Number(elementSize.value ?? layoutSize.value);
					const transformFunction = `translate${isHorizontal ? "X" : "Y"}`;
					const transformValue = active.value ? 0 : (size === 0 ? 100 : size + 1) * (isOppositeHorizontal || isOppositeVertical ? 1 : -1);
					const unit = size === 0 ? "%" : "px";
					const styles = {
						[position.value]: 0,
						zIndex: zIndex.value,
						transform: `${transformFunction}(${transformValue}${unit})`,
						position: absolute.value || rootZIndex.value !== ROOT_ZINDEX ? "absolute" : "fixed",
						...transitionsEnabled.value ? void 0 : { transition: "none" }
					};
					if (!isMounted.value) return styles;
					const item = items.value[index.value];
					if (!item) consoleWarn(`[Vuetify] Could not find layout item "${id}"`);
					const overlap = computedOverlaps.value.get(id);
					if (overlap) item[overlap.position] += overlap.amount;
					return {
						...styles,
						height: isHorizontal ? `calc(100% - ${item.top}px - ${item.bottom}px)` : elementSize.value ? `${elementSize.value}px` : void 0,
						left: isOppositeHorizontal ? void 0 : `${item.left}px`,
						right: isOppositeHorizontal ? `${item.right}px` : void 0,
						top: position.value !== "bottom" ? `${item.top}px` : void 0,
						bottom: position.value !== "top" ? `${item.bottom}px` : void 0,
						width: !isHorizontal ? `calc(100% - ${item.left}px - ${item.right}px)` : elementSize.value ? `${elementSize.value}px` : void 0
					};
				}),
				layoutItemScrimStyles: computed(() => ({ zIndex: zIndex.value - 1 })),
				zIndex
			};
		},
		unregister: (id) => {
			priorities.delete(id);
			positions.delete(id);
			layoutSizes.delete(id);
			activeItems.delete(id);
			disabledTransitions.delete(id);
			registered.value = registered.value.filter((v) => v !== id);
		},
		mainRect,
		mainStyles,
		getLayoutItem,
		items,
		layoutRect,
		rootZIndex
	});
	return {
		layoutClasses: toRef(() => ["v-layout", { "v-layout--full-height": props.fullHeight }]),
		layoutStyles: toRef(() => ({
			zIndex: parentLayout ? rootZIndex.value : void 0,
			position: parentLayout ? "relative" : void 0,
			overflow: parentLayout ? "hidden" : void 0
		})),
		getLayoutItem,
		items,
		layoutRect,
		layoutRef: resizeRef
	};
}
//#endregion
//#region node_modules/vuetify/lib/framework.js
function createVuetify(vuetify = {}) {
	const { blueprint, ...rest } = vuetify;
	const options = mergeDeep(blueprint, rest);
	const { aliases = {}, components = {}, directives = {} } = options;
	const scope = effectScope();
	return scope.run(() => {
		const defaults = createDefaults(options.defaults);
		const display = createDisplay(options.display, options.ssr);
		const theme = createTheme(options.theme);
		const icons = createIcons(options.icons);
		const locale = createLocale(options.locale);
		const date = createDate(options.date, locale);
		const goTo = createGoTo(options.goTo, locale);
		function install(app) {
			for (const key in directives) app.directive(key, directives[key]);
			for (const key in components) app.component(key, components[key]);
			for (const key in aliases) app.component(key, defineComponent({
				...aliases[key],
				name: key,
				aliasName: aliases[key].name
			}));
			const appScope = effectScope();
			appScope.run(() => {
				theme.install(app);
			});
			app.onUnmount(() => appScope.stop());
			app.provide(DefaultsSymbol, defaults);
			app.provide(DisplaySymbol, display);
			app.provide(ThemeSymbol, theme);
			app.provide(IconSymbol, icons);
			app.provide(LocaleSymbol, locale);
			app.provide(DateOptionsSymbol, date.options);
			app.provide(DateAdapterSymbol, date.instance);
			app.provide(GoToSymbol, goTo);
			if (IN_BROWSER && options.ssr) if (app.$nuxt) app.$nuxt.hook("app:suspense:resolve", () => {
				display.update();
			});
			else {
				const { mount } = app;
				app.mount = (...args) => {
					const vm = mount(...args);
					nextTick(() => display.update());
					app.mount = mount;
					return vm;
				};
			}
			app.mixin({ computed: { $vuetify() {
				return reactive({
					defaults: inject.call(this, DefaultsSymbol),
					display: inject.call(this, DisplaySymbol),
					theme: inject.call(this, ThemeSymbol),
					icons: inject.call(this, IconSymbol),
					locale: inject.call(this, LocaleSymbol),
					date: inject.call(this, DateAdapterSymbol)
				});
			} } });
		}
		function unmount() {
			scope.stop();
		}
		return {
			install,
			unmount,
			defaults,
			display,
			theme,
			icons,
			locale,
			date,
			goTo
		};
	});
}
createVuetify.version = "4.0.6";
function inject(key) {
	const vm = this.$;
	const provides = vm.parent?.provides ?? vm.vnode.appContext?.provides;
	if (provides && key in provides) return provides[key];
}
//#endregion
//#region node_modules/vuetify/lib/components/VApp/VApp.js
var makeVAppProps = propsFactory({
	...makeComponentProps(),
	...omit(makeLayoutProps(), ["fullHeight"]),
	...makeThemeProps()
}, "VApp");
var VApp = genericComponent()({
	name: "VApp",
	props: makeVAppProps(),
	setup(props, { slots }) {
		const theme = provideTheme(props);
		const { layoutClasses, getLayoutItem, items, layoutRef } = createLayout({
			...props,
			fullHeight: true
		});
		const { rtlClasses } = useRtl();
		useRender(() => createBaseVNode("div", {
			"ref": layoutRef,
			"class": normalizeClass([
				"v-application",
				theme.themeClasses.value,
				layoutClasses.value,
				rtlClasses.value,
				props.class
			]),
			"style": normalizeStyle([props.style])
		}, [createBaseVNode("div", { "class": "v-application__wrap" }, [slots.default?.()])]));
		return {
			getLayoutItem,
			items,
			theme
		};
	}
});
//#endregion
//#region node_modules/vuetify/lib/composables/border.js
var makeBorderProps = propsFactory({ border: [
	Boolean,
	Number,
	String
] }, "border");
function useBorder(props, name = getCurrentInstanceName()) {
	return { borderClasses: computed(() => {
		const border = props.border;
		if (border === true || border === "") return `${name}--border`;
		else if (typeof border === "string" || border === 0) return String(border).split(" ").map((v) => `border-${v}`);
		return [];
	}) };
}
//#endregion
//#region node_modules/vuetify/lib/composables/density.js
var allowedDensities = [
	null,
	"default",
	"comfortable",
	"compact"
];
var makeDensityProps = propsFactory({ density: {
	type: String,
	default: "default",
	validator: (v) => allowedDensities.includes(v)
} }, "density");
function useDensity(props, name = getCurrentInstanceName()) {
	return { densityClasses: toRef(() => {
		return `${name}--density-${props.density}`;
	}) };
}
//#endregion
//#region node_modules/vuetify/lib/composables/elevation.js
var makeElevationProps = propsFactory({ elevation: {
	type: [Number, String],
	validator: (value) => parseInt(value) >= 0
} }, "elevation");
function useElevation(props) {
	return { elevationClasses: toRef(() => {
		const elevation = isRef(props) ? props.value : props.elevation;
		if (elevation == null) return [];
		return [`elevation-${parseInt(elevation)}`];
	}) };
}
//#endregion
//#region node_modules/vuetify/lib/composables/rounded.js
var makeRoundedProps = propsFactory({
	rounded: {
		type: [
			Boolean,
			Number,
			String
		],
		default: void 0
	},
	tile: Boolean
}, "rounded");
function useRounded(props, name = getCurrentInstanceName()) {
	return { roundedClasses: computed(() => {
		const rounded = isRef(props) ? props.value : props.rounded;
		const tile = isRef(props) ? false : props.tile;
		const classes = [];
		if (tile || rounded === false) classes.push("rounded-0");
		else if (rounded === true || rounded === "") classes.push(`${name}--rounded`);
		else if (typeof rounded === "string" || rounded === 0) for (const value of String(rounded).split(" ")) classes.push(`rounded-${value}`);
		return classes;
	}) };
}
//#endregion
//#region node_modules/vuetify/lib/composables/tag.js
var makeTagProps = propsFactory({ tag: {
	type: [
		String,
		Object,
		Function
	],
	default: "div"
} }, "tag");
//#endregion
//#region node_modules/vuetify/lib/composables/color.js
function useColor(colors) {
	return destructComputed(() => {
		const { class: colorClasses, style: colorStyles } = computeColor(colors);
		return {
			colorClasses,
			colorStyles
		};
	});
}
function useTextColor(color) {
	const { colorClasses: textColorClasses, colorStyles: textColorStyles } = useColor(() => ({ text: toValue(color) }));
	return {
		textColorClasses,
		textColorStyles
	};
}
function useBackgroundColor(color) {
	const { colorClasses: backgroundColorClasses, colorStyles: backgroundColorStyles } = useColor(() => ({ background: toValue(color) }));
	return {
		backgroundColorClasses,
		backgroundColorStyles
	};
}
function normalizeColors(colors) {
	return {
		text: typeof colors.text === "string" ? colors.text.replace(/^text-/, "") : colors.text,
		background: typeof colors.background === "string" ? colors.background.replace(/^bg-/, "") : colors.background
	};
}
function computeColor(colors) {
	const _colors = normalizeColors(toValue(colors));
	const classes = [];
	const styles = {};
	if (_colors.background) if (isCssColor(_colors.background)) {
		styles.backgroundColor = _colors.background;
		if (!_colors.text && isParsableColor(_colors.background)) {
			const backgroundColor = parseColor(_colors.background);
			if (backgroundColor.a == null || backgroundColor.a === 1) classes.push(hasLightForeground(backgroundColor) ? "v-theme-on-dark" : "v-theme-on-light");
		}
	} else classes.push(`bg-${_colors.background}`);
	if (_colors.text) if (isCssColor(_colors.text)) {
		styles.color = _colors.text;
		styles.caretColor = _colors.text;
	} else classes.push(`text-${_colors.text}`);
	return {
		class: classes,
		style: styles
	};
}
//#endregion
//#region node_modules/vuetify/lib/composables/variant.js
var allowedVariants$1 = [
	"elevated",
	"flat",
	"tonal",
	"outlined",
	"text",
	"plain"
];
function genOverlays(isClickable, name) {
	return createBaseVNode(Fragment, null, [isClickable && createBaseVNode("span", {
		"key": "overlay",
		"class": normalizeClass(`${name}__overlay`)
	}, null), createBaseVNode("span", {
		"key": "underlay",
		"class": normalizeClass(`${name}__underlay`)
	}, null)]);
}
var makeVariantProps = propsFactory({
	color: String,
	variant: {
		type: String,
		default: "elevated",
		validator: (v) => allowedVariants$1.includes(v)
	}
}, "variant");
function useVariant(props, name = getCurrentInstanceName()) {
	const variantClasses = toRef(() => {
		const { variant } = toValue(props);
		return `${name}--variant-${variant}`;
	});
	const { colorClasses, colorStyles } = useColor(() => {
		const { variant, color } = toValue(props);
		return { [["elevated", "flat"].includes(variant) ? "background" : "text"]: color };
	});
	return {
		colorClasses,
		colorStyles,
		variantClasses
	};
}
//#endregion
//#region node_modules/vuetify/lib/components/VBtnGroup/VBtnGroup.js
var makeVBtnGroupProps = propsFactory({
	baseColor: String,
	divided: Boolean,
	direction: {
		type: String,
		default: "horizontal"
	},
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeElevationProps(),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps(),
	...makeVariantProps()
}, "VBtnGroup");
var VBtnGroup = genericComponent()({
	name: "VBtnGroup",
	props: makeVBtnGroupProps(),
	setup(props, { slots }) {
		const { themeClasses } = provideTheme(props);
		const { densityClasses } = useDensity(props);
		const { borderClasses } = useBorder(props);
		const { elevationClasses } = useElevation(props);
		const { roundedClasses } = useRounded(props);
		provideDefaults({ VBtn: {
			height: toRef(() => props.direction === "horizontal" ? "auto" : null),
			baseColor: toRef(() => props.baseColor),
			color: toRef(() => props.color),
			density: toRef(() => props.density),
			flat: true,
			variant: toRef(() => props.variant)
		} });
		useRender(() => {
			return createVNode(props.tag, {
				"class": normalizeClass([
					"v-btn-group",
					`v-btn-group--${props.direction}`,
					{ "v-btn-group--divided": props.divided },
					themeClasses.value,
					borderClasses.value,
					densityClasses.value,
					elevationClasses.value,
					roundedClasses.value,
					props.class
				]),
				"style": normalizeStyle(props.style)
			}, slots);
		});
	}
});
//#endregion
//#region node_modules/vuetify/lib/composables/group.js
var makeGroupProps = propsFactory({
	modelValue: {
		type: null,
		default: void 0
	},
	multiple: Boolean,
	mandatory: [Boolean, String],
	max: Number,
	selectedClass: String,
	disabled: Boolean
}, "group");
var makeGroupItemProps = propsFactory({
	value: null,
	disabled: Boolean,
	selectedClass: String
}, "group-item");
function useGroupItem(props, injectKey, required = true) {
	const vm = getCurrentInstance("useGroupItem");
	if (!vm) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
	const id = useId();
	provide(Symbol.for(`${injectKey.description}:id`), id);
	const group = inject$1(injectKey, null);
	if (!group) {
		if (!required) return group;
		throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
	}
	const value = toRef(() => props.value);
	const disabled = computed(() => !!(group.disabled.value || props.disabled));
	function register() {
		group?.register({
			id,
			value,
			disabled
		}, vm);
	}
	function unregister() {
		group?.unregister(id);
	}
	register();
	onBeforeUnmount(() => unregister());
	const isSelected = computed(() => {
		return group.isSelected(id);
	});
	const isFirst = computed(() => {
		return group.items.value[0].id === id;
	});
	const isLast = computed(() => {
		return group.items.value[group.items.value.length - 1].id === id;
	});
	const selectedClass = computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
	watch(isSelected, (value) => {
		vm.emit("group:selected", { value });
	}, { flush: "sync" });
	return {
		id,
		isSelected,
		isFirst,
		isLast,
		toggle: () => group.select(id, !isSelected.value),
		select: (value) => group.select(id, value),
		selectedClass,
		value,
		disabled,
		group,
		register,
		unregister
	};
}
function useGroup(props, injectKey) {
	let isUnmounted = false;
	const items = reactive([]);
	const selected = useProxiedModel(props, "modelValue", [], (v) => {
		if (v === void 0) return [];
		return getIds(items, v === null ? [null] : wrapInArray(v));
	}, (v) => {
		const arr = getValues(items, v);
		return props.multiple ? arr : arr[0];
	});
	const groupVm = getCurrentInstance("useGroup");
	function register(item, vm) {
		const unwrapped = item;
		const index = findChildrenWithProvide(Symbol.for(`${injectKey.description}:id`), groupVm?.vnode).indexOf(vm);
		if (unref(unwrapped.value) === void 0) {
			unwrapped.value = index;
			unwrapped.useIndexAsValue = true;
		}
		if (index > -1) items.splice(index, 0, unwrapped);
		else items.push(unwrapped);
	}
	function unregister(id) {
		if (isUnmounted) return;
		forceMandatoryValue();
		const index = items.findIndex((item) => item.id === id);
		items.splice(index, 1);
	}
	function forceMandatoryValue() {
		const item = items.find((item) => !item.disabled);
		if (item && props.mandatory === "force" && !selected.value.length) selected.value = [item.id];
	}
	onMounted(() => {
		forceMandatoryValue();
	});
	onBeforeUnmount(() => {
		isUnmounted = true;
	});
	onUpdated(() => {
		for (let i = 0; i < items.length; i++) if (items[i].useIndexAsValue) items[i].value = i;
	});
	function select(id, value) {
		const item = items.find((item) => item.id === id);
		if (value && item?.disabled) return;
		if (props.multiple) {
			const internalValue = selected.value.slice();
			const index = internalValue.findIndex((v) => v === id);
			const isSelected = ~index;
			value = value ?? !isSelected;
			if (isSelected && props.mandatory && internalValue.length <= 1) return;
			if (!isSelected && props.max != null && internalValue.length + 1 > props.max) return;
			if (index < 0 && value) internalValue.push(id);
			else if (index >= 0 && !value) internalValue.splice(index, 1);
			selected.value = internalValue;
		} else {
			const isSelected = selected.value.includes(id);
			if (props.mandatory && isSelected) return;
			if (!isSelected && !value) return;
			selected.value = value ?? !isSelected ? [id] : [];
		}
	}
	function step(offset) {
		if (props.multiple) consoleWarn("This method is not supported when using \"multiple\" prop");
		if (!selected.value.length) {
			const item = items.find((item) => !item.disabled);
			item && (selected.value = [item.id]);
		} else {
			const currentId = selected.value[0];
			const currentIndex = items.findIndex((i) => i.id === currentId);
			let newIndex = (currentIndex + offset) % items.length;
			let newItem = items[newIndex];
			while (newItem.disabled && newIndex !== currentIndex) {
				newIndex = (newIndex + offset) % items.length;
				newItem = items[newIndex];
			}
			if (newItem.disabled) return;
			selected.value = [items[newIndex].id];
		}
	}
	const state = {
		register,
		unregister,
		selected,
		select,
		disabled: toRef(() => props.disabled),
		prev: () => step(items.length - 1),
		next: () => step(1),
		isSelected: (id) => selected.value.includes(id),
		selectedClass: toRef(() => props.selectedClass),
		items: toRef(() => items),
		getItemIndex: (value) => getItemIndex(items, value)
	};
	provide(injectKey, state);
	return state;
}
function getItemIndex(items, value) {
	const ids = getIds(items, [value]);
	if (!ids.length) return -1;
	return items.findIndex((item) => item.id === ids[0]);
}
function getIds(items, modelValue) {
	const ids = [];
	modelValue.forEach((value) => {
		const item = items.find((item) => deepEqual(value, item.value));
		const itemByIndex = items[value];
		if (item?.value !== void 0) ids.push(item.id);
		else if (itemByIndex?.useIndexAsValue) ids.push(itemByIndex.id);
	});
	return ids;
}
function getValues(items, ids) {
	const values = [];
	ids.forEach((id) => {
		const itemIndex = items.findIndex((item) => item.id === id);
		if (~itemIndex) {
			const item = items[itemIndex];
			values.push(item.value !== void 0 ? item.value : itemIndex);
		}
	});
	return values;
}
//#endregion
//#region node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.js
var VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
var makeVBtnToggleProps = propsFactory({
	...makeVBtnGroupProps(),
	...makeGroupProps()
}, "VBtnToggle");
genericComponent()({
	name: "VBtnToggle",
	props: makeVBtnToggleProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, { slots }) {
		const { isSelected, next, prev, select, selected } = useGroup(props, VBtnToggleSymbol);
		useRender(() => {
			const btnGroupProps = VBtnGroup.filterProps(props);
			return createVNode(VBtnGroup, mergeProps({ "class": ["v-btn-toggle", props.class] }, btnGroupProps, { "style": props.style }), { default: () => [slots.default?.({
				isSelected,
				next,
				prev,
				select,
				selected
			})] });
		});
		return {
			next,
			prev,
			select
		};
	}
});
//#endregion
//#region node_modules/vuetify/lib/components/VDefaultsProvider/VDefaultsProvider.js
var makeVDefaultsProviderProps = propsFactory({
	defaults: Object,
	disabled: Boolean,
	reset: [Number, String],
	root: [Boolean, String],
	scoped: Boolean
}, "VDefaultsProvider");
var VDefaultsProvider = genericComponent(false)({
	name: "VDefaultsProvider",
	props: makeVDefaultsProviderProps(),
	setup(props, { slots }) {
		const { defaults, disabled, reset, root, scoped } = toRefs(props);
		provideDefaults(defaults, {
			reset,
			root,
			scoped,
			disabled
		});
		return () => slots.default?.();
	}
});
//#endregion
//#region node_modules/vuetify/lib/composables/size.js
var predefinedSizes = [
	"x-small",
	"small",
	"default",
	"large",
	"x-large"
];
var makeSizeProps = propsFactory({ size: {
	type: [String, Number],
	default: "default"
} }, "size");
function useSize(props, name = getCurrentInstanceName()) {
	return destructComputed(() => {
		const size = props.size;
		let sizeClasses;
		let sizeStyles;
		if (includes(predefinedSizes, size)) sizeClasses = `${name}--size-${size}`;
		else if (size) sizeStyles = {
			width: convertToUnit(size),
			height: convertToUnit(size)
		};
		return {
			sizeClasses,
			sizeStyles
		};
	});
}
//#endregion
//#region node_modules/vuetify/lib/components/VIcon/VIcon.js
var makeVIconProps = propsFactory({
	color: String,
	disabled: Boolean,
	start: Boolean,
	end: Boolean,
	icon: IconValue,
	opacity: [String, Number],
	...makeComponentProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "i" }),
	...makeThemeProps()
}, "VIcon");
var VIcon = genericComponent()({
	name: "VIcon",
	props: makeVIconProps(),
	setup(props, { attrs, slots }) {
		const slotIcon = shallowRef();
		const { themeClasses } = useTheme();
		const { iconData } = useIcon(() => slotIcon.value || props.icon);
		const { sizeClasses } = useSize(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		useRender(() => {
			const slotValue = slots.default?.();
			if (slotValue) slotIcon.value = flattenFragments(slotValue).filter((node) => node.type === Text && node.children && typeof node.children === "string")[0]?.children;
			const hasClick = !!(attrs.onClick || attrs.onClickOnce);
			return createVNode(iconData.value.component, {
				"tag": props.tag,
				"icon": iconData.value.icon,
				"class": normalizeClass([
					"v-icon",
					"notranslate",
					themeClasses.value,
					sizeClasses.value,
					textColorClasses.value,
					{
						"v-icon--clickable": hasClick,
						"v-icon--disabled": props.disabled,
						"v-icon--start": props.start,
						"v-icon--end": props.end
					},
					props.class
				]),
				"style": normalizeStyle([
					{ "--v-icon-opacity": props.opacity },
					!sizeClasses.value ? {
						fontSize: convertToUnit(props.size),
						height: convertToUnit(props.size),
						width: convertToUnit(props.size)
					} : void 0,
					textColorStyles.value,
					props.style
				]),
				"role": hasClick ? "button" : void 0,
				"aria-hidden": !hasClick,
				"tabindex": hasClick ? props.disabled ? -1 : 0 : void 0
			}, { default: () => [slotValue] });
		});
		return {};
	}
});
//#endregion
//#region node_modules/vuetify/lib/composables/intersectionObserver.js
function useIntersectionObserver(callback, options) {
	const intersectionRef = ref();
	const isIntersecting = shallowRef(false);
	if (SUPPORTS_INTERSECTION) {
		const observer = new IntersectionObserver((entries) => {
			callback?.(entries, observer);
			isIntersecting.value = !!entries.find((entry) => entry.isIntersecting);
		}, options);
		onScopeDispose(() => {
			observer.disconnect();
		});
		watch(intersectionRef, (newValue, oldValue) => {
			if (oldValue) {
				observer.unobserve(oldValue);
				isIntersecting.value = false;
			}
			if (newValue) observer.observe(newValue);
		}, { flush: "post" });
	}
	return {
		intersectionRef,
		isIntersecting
	};
}
//#endregion
//#region node_modules/vuetify/lib/composables/reveal.js
var makeRevealProps = propsFactory({ reveal: {
	type: [Boolean, Object],
	default: false
} }, "reveal");
function useReveal(props) {
	const defaultDuration = 900;
	const duration = toRef(() => typeof props.reveal === "object" ? Math.max(0, Number(props.reveal.duration ?? defaultDuration)) : defaultDuration);
	const state = shallowRef(props.reveal ? "initial" : "disabled");
	onMounted(async () => {
		if (props.reveal) {
			state.value = "initial";
			await new Promise((resolve) => requestAnimationFrame(resolve));
			state.value = "pending";
			await new Promise((resolve) => setTimeout(resolve, duration.value));
			state.value = "done";
		}
	});
	return {
		duration,
		state
	};
}
//#endregion
//#region node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var makeVProgressCircularProps = propsFactory({
	bgColor: String,
	color: String,
	indeterminate: [Boolean, String],
	rounded: Boolean,
	modelValue: {
		type: [Number, String],
		default: 0
	},
	rotate: {
		type: [Number, String],
		default: 0
	},
	width: {
		type: [Number, String],
		default: 4
	},
	...makeComponentProps(),
	...makeRevealProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "div" }),
	...makeThemeProps()
}, "VProgressCircular");
var VProgressCircular = genericComponent()({
	name: "VProgressCircular",
	props: makeVProgressCircularProps(),
	setup(props, { slots }) {
		const MAGIC_RADIUS_CONSTANT = 20;
		const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
		const root = ref();
		const { themeClasses } = provideTheme(props);
		const { sizeClasses, sizeStyles } = useSize(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		const { textColorClasses: underlayColorClasses, textColorStyles: underlayColorStyles } = useTextColor(() => props.bgColor);
		const { intersectionRef, isIntersecting } = useIntersectionObserver();
		const { resizeRef, contentRect } = useResizeObserver();
		const { state: revealState, duration: revealDuration } = useReveal(props);
		const normalizedValue = toRef(() => revealState.value === "initial" ? 0 : clamp(parseFloat(props.modelValue), 0, 100));
		const width = toRef(() => Number(props.width));
		const size = toRef(() => {
			return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
		});
		const diameter = toRef(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
		const strokeWidth = toRef(() => width.value / size.value * diameter.value);
		const strokeDashOffset = toRef(() => {
			const baseLength = (100 - normalizedValue.value) / 100 * CIRCUMFERENCE;
			return props.rounded && normalizedValue.value > 0 && normalizedValue.value < 100 ? convertToUnit(Math.min(CIRCUMFERENCE - .01, baseLength + strokeWidth.value)) : convertToUnit(baseLength);
		});
		const startAngle = computed(() => {
			const baseAngle = Number(props.rotate);
			return props.rounded ? baseAngle + strokeWidth.value / 2 / CIRCUMFERENCE * 360 : baseAngle;
		});
		watchEffect(() => {
			intersectionRef.value = root.value;
			resizeRef.value = root.value;
		});
		useRender(() => createVNode(props.tag, {
			"ref": root,
			"class": normalizeClass([
				"v-progress-circular",
				{
					"v-progress-circular--indeterminate": !!props.indeterminate,
					"v-progress-circular--visible": isIntersecting.value,
					"v-progress-circular--disable-shrink": props.indeterminate && (props.indeterminate === "disable-shrink" || PREFERS_REDUCED_MOTION()),
					"v-progress-circular--revealing": ["initial", "pending"].includes(revealState.value)
				},
				themeClasses.value,
				sizeClasses.value,
				textColorClasses.value,
				props.class
			]),
			"style": normalizeStyle([
				sizeStyles.value,
				textColorStyles.value,
				{ "--progress-reveal-duration": `${revealDuration.value}ms` },
				props.style
			]),
			"role": "progressbar",
			"aria-valuemin": "0",
			"aria-valuemax": "100",
			"aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
		}, { default: () => [createBaseVNode("svg", {
			"style": { transform: `rotate(calc(-90deg + ${startAngle.value}deg))` },
			"xmlns": "http://www.w3.org/2000/svg",
			"viewBox": `0 0 ${diameter.value} ${diameter.value}`
		}, [createBaseVNode("circle", {
			"class": normalizeClass(["v-progress-circular__underlay", underlayColorClasses.value]),
			"style": normalizeStyle(underlayColorStyles.value),
			"fill": "transparent",
			"cx": "50%",
			"cy": "50%",
			"r": MAGIC_RADIUS_CONSTANT,
			"stroke-width": strokeWidth.value,
			"stroke-dasharray": CIRCUMFERENCE,
			"stroke-dashoffset": 0
		}, null), createBaseVNode("circle", {
			"class": "v-progress-circular__overlay",
			"fill": "transparent",
			"cx": "50%",
			"cy": "50%",
			"r": MAGIC_RADIUS_CONSTANT,
			"stroke-width": strokeWidth.value,
			"stroke-dasharray": CIRCUMFERENCE,
			"stroke-dashoffset": strokeDashOffset.value,
			"stroke-linecap": props.rounded ? "round" : void 0
		}, null)]), slots.default && createBaseVNode("div", { "class": "v-progress-circular__content" }, [slots.default({ value: normalizedValue.value })])] }));
		return {};
	}
});
//#endregion
//#region node_modules/vuetify/lib/composables/dimensions.js
var makeDimensionProps = propsFactory({
	height: [Number, String],
	maxHeight: [Number, String],
	maxWidth: [Number, String],
	minHeight: [Number, String],
	minWidth: [Number, String],
	width: [Number, String]
}, "dimension");
function useDimension(props) {
	return { dimensionStyles: computed(() => {
		const styles = {};
		const height = convertToUnit(props.height);
		const maxHeight = convertToUnit(props.maxHeight);
		const maxWidth = convertToUnit(props.maxWidth);
		const minHeight = convertToUnit(props.minHeight);
		const minWidth = convertToUnit(props.minWidth);
		const width = convertToUnit(props.width);
		if (height != null) styles.height = height;
		if (maxHeight != null) styles.maxHeight = maxHeight;
		if (maxWidth != null) styles.maxWidth = maxWidth;
		if (minHeight != null) styles.minHeight = minHeight;
		if (minWidth != null) styles.minWidth = minWidth;
		if (width != null) styles.width = width;
		return styles;
	}) };
}
//#endregion
//#region node_modules/vuetify/lib/composables/location.js
var oppositeMap = {
	center: "center",
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
var makeLocationProps = propsFactory({ location: String }, "location");
function useLocation(props, opposite = false, offset) {
	const { isRtl } = useRtl();
	return { locationStyles: computed(() => {
		if (!props.location) return {};
		const { side, align } = parseAnchor(props.location.split(" ").length > 1 ? props.location : `${props.location} center`, isRtl.value);
		function getOffset(side) {
			return offset ? offset(side) : 0;
		}
		const styles = {};
		if (side !== "center") if (opposite) styles[oppositeMap[side]] = `calc(100% - ${getOffset(side)}px)`;
		else styles[side] = 0;
		if (align !== "center") if (opposite) styles[oppositeMap[align]] = `calc(100% - ${getOffset(align)}px)`;
		else styles[align] = 0;
		else {
			if (side === "center") styles.top = styles.left = "50%";
			else styles[{
				top: "left",
				bottom: "left",
				left: "top",
				right: "top"
			}[side]] = "50%";
			styles.transform = {
				top: "translateX(-50%)",
				bottom: "translateX(-50%)",
				left: "translateY(-50%)",
				right: "translateY(-50%)",
				center: "translate(-50%, -50%)"
			}[side];
		}
		return styles;
	}) };
}
//#endregion
//#region node_modules/vuetify/lib/components/VProgressLinear/chunks.js
var makeChunksProps = propsFactory({
	chunkCount: {
		type: [Number, String],
		default: null
	},
	chunkWidth: {
		type: [Number, String],
		default: null
	},
	chunkGap: {
		type: [Number, String],
		default: 4
	}
}, "chunks");
function useChunks(props, containerWidth) {
	const hasChunks = toRef(() => !!props.chunkCount || !!props.chunkWidth);
	const chunkWidth = computed(() => {
		const containerSize = toValue(containerWidth);
		if (!containerSize) return 0;
		if (!props.chunkCount) return Number(props.chunkWidth);
		const count = Number(props.chunkCount);
		return (containerSize - Number(props.chunkGap) * (count - 1)) / count;
	});
	const chunkGap = toRef(() => Number(props.chunkGap));
	const chunksMaskStyles = computed(() => {
		if (!hasChunks.value) return {};
		const chunkGapPx = convertToUnit(chunkGap.value);
		const chunkWidthPx = convertToUnit(chunkWidth.value);
		return {
			maskRepeat: "repeat-x",
			maskImage: `linear-gradient(90deg, #000, #000 ${chunkWidthPx}, transparent ${chunkWidthPx}, transparent)`,
			maskSize: `calc(${chunkWidthPx} + ${chunkGapPx}) 100%`
		};
	});
	function snapValueToChunk(val) {
		const containerSize = toValue(containerWidth);
		if (!containerSize) return val;
		const gapRelativeSize = 100 * chunkGap.value / containerSize;
		const chunkRelativeSize = 100 * (chunkWidth.value + chunkGap.value) / containerSize;
		return clamp(0, Math.floor((val + gapRelativeSize) / chunkRelativeSize) * chunkRelativeSize - gapRelativeSize / 2, 100);
	}
	return {
		hasChunks,
		chunksMaskStyles,
		snapValueToChunk
	};
}
//#endregion
//#region node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var makeVProgressLinearProps = propsFactory({
	absolute: Boolean,
	active: {
		type: Boolean,
		default: true
	},
	bgColor: String,
	bgOpacity: [Number, String],
	bufferValue: {
		type: [Number, String],
		default: 0
	},
	bufferColor: String,
	bufferOpacity: [Number, String],
	clickable: Boolean,
	color: String,
	height: {
		type: [Number, String],
		default: 4
	},
	indeterminate: Boolean,
	max: {
		type: [Number, String],
		default: 100
	},
	modelValue: {
		type: [Number, String],
		default: 0
	},
	opacity: [Number, String],
	reverse: Boolean,
	stream: Boolean,
	striped: Boolean,
	roundedBar: Boolean,
	...makeChunksProps(),
	...makeComponentProps(),
	...makeLocationProps({ location: "top" }),
	...makeRoundedProps(),
	...makeTagProps(),
	...makeThemeProps()
}, "VProgressLinear");
var VProgressLinear = genericComponent()({
	name: "VProgressLinear",
	props: makeVProgressLinearProps(),
	emits: { "update:modelValue": (value) => true },
	setup(props, { slots }) {
		const root = ref();
		const progress = useProxiedModel(props, "modelValue");
		const { isRtl, rtlClasses } = useRtl();
		const { themeClasses } = provideTheme(props);
		const { locationStyles } = useLocation(props);
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor || props.color);
		const { backgroundColorClasses: bufferColorClasses, backgroundColorStyles: bufferColorStyles } = useBackgroundColor(() => props.bufferColor || props.bgColor || props.color);
		const { backgroundColorClasses: barColorClasses, backgroundColorStyles: barColorStyles } = useBackgroundColor(() => props.color);
		const { roundedClasses } = useRounded(props);
		const { intersectionRef, isIntersecting } = useIntersectionObserver();
		const max = computed(() => parseFloat(props.max));
		const height = computed(() => parseFloat(props.height));
		const normalizedBuffer = computed(() => clamp(parseFloat(props.bufferValue) / max.value * 100, 0, 100));
		const normalizedValue = computed(() => clamp(parseFloat(progress.value) / max.value * 100, 0, 100));
		const isReversed = computed(() => isRtl.value !== props.reverse);
		const transition = computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
		const containerWidth = shallowRef(0);
		const { hasChunks, chunksMaskStyles, snapValueToChunk } = useChunks(props, containerWidth);
		useToggleScope(hasChunks, () => {
			const { resizeRef } = useResizeObserver((entries) => containerWidth.value = entries[0].contentRect.width);
			watchEffect(() => resizeRef.value = root.value);
		});
		const bufferWidth = computed(() => {
			return hasChunks.value ? snapValueToChunk(normalizedBuffer.value) : normalizedBuffer.value;
		});
		const barWidth = computed(() => {
			return hasChunks.value ? snapValueToChunk(normalizedValue.value) : normalizedValue.value;
		});
		function handleClick(e) {
			if (!intersectionRef.value) return;
			const { left, right, width } = intersectionRef.value.getBoundingClientRect();
			const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
			progress.value = Math.round(value / width * max.value);
		}
		watchEffect(() => {
			intersectionRef.value = root.value;
		});
		useRender(() => createVNode(props.tag, {
			"ref": root,
			"class": normalizeClass([
				"v-progress-linear",
				{
					"v-progress-linear--absolute": props.absolute,
					"v-progress-linear--active": props.active && isIntersecting.value,
					"v-progress-linear--reverse": isReversed.value,
					"v-progress-linear--rounded": props.rounded,
					"v-progress-linear--rounded-bar": props.roundedBar,
					"v-progress-linear--striped": props.striped,
					"v-progress-linear--clickable": props.clickable
				},
				roundedClasses.value,
				themeClasses.value,
				rtlClasses.value,
				props.class
			]),
			"style": normalizeStyle([
				{
					bottom: props.location === "bottom" ? 0 : void 0,
					top: props.location === "top" ? 0 : void 0,
					height: props.active ? convertToUnit(height.value) : 0,
					"--v-progress-linear-height": convertToUnit(height.value),
					...props.absolute ? locationStyles.value : {}
				},
				chunksMaskStyles.value,
				props.style
			]),
			"role": "progressbar",
			"aria-hidden": props.active ? "false" : "true",
			"aria-valuemin": "0",
			"aria-valuemax": props.max,
			"aria-valuenow": props.indeterminate ? void 0 : Math.min(parseFloat(progress.value), max.value),
			"onClick": props.clickable && handleClick
		}, { default: () => [
			props.stream && createBaseVNode("div", {
				"key": "stream",
				"class": normalizeClass(["v-progress-linear__stream", textColorClasses.value]),
				"style": {
					...textColorStyles.value,
					[isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
					borderTop: `${convertToUnit(height.value / 2)} dotted`,
					opacity: parseFloat(props.bufferOpacity),
					top: `calc(50% - ${convertToUnit(height.value / 4)})`,
					width: convertToUnit(100 - normalizedBuffer.value, "%"),
					"--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
				}
			}, null),
			createBaseVNode("div", {
				"class": normalizeClass(["v-progress-linear__background", backgroundColorClasses.value]),
				"style": normalizeStyle([backgroundColorStyles.value, {
					opacity: parseFloat(props.bgOpacity),
					width: props.stream ? 0 : void 0
				}])
			}, null),
			createBaseVNode("div", {
				"class": normalizeClass(["v-progress-linear__buffer", bufferColorClasses.value]),
				"style": normalizeStyle([bufferColorStyles.value, {
					opacity: parseFloat(props.bufferOpacity),
					width: convertToUnit(bufferWidth.value, "%")
				}])
			}, null),
			createVNode(Transition, { "name": transition.value }, { default: () => [!props.indeterminate ? createBaseVNode("div", {
				"class": normalizeClass(["v-progress-linear__determinate", barColorClasses.value]),
				"style": normalizeStyle([barColorStyles.value, { width: convertToUnit(barWidth.value, "%") }])
			}, null) : createBaseVNode("div", { "class": "v-progress-linear__indeterminate" }, [["long", "short"].map((bar) => createBaseVNode("div", {
				"key": bar,
				"class": normalizeClass([
					"v-progress-linear__indeterminate",
					bar,
					barColorClasses.value
				]),
				"style": normalizeStyle(barColorStyles.value)
			}, null))])] }),
			slots.default && createBaseVNode("div", { "class": "v-progress-linear__content" }, [slots.default({
				value: normalizedValue.value,
				buffer: normalizedBuffer.value
			})])
		] }));
		return {};
	}
});
//#endregion
//#region node_modules/vuetify/lib/composables/loader.js
var makeLoaderProps = propsFactory({ loading: [Boolean, String] }, "loader");
function useLoader(props, name = getCurrentInstanceName()) {
	return { loaderClasses: toRef(() => ({ [`${name}--loading`]: props.loading })) };
}
function LoaderSlot(props, { slots }) {
	return createBaseVNode("div", { "class": normalizeClass(`${props.name}__loader`) }, [slots.default?.({
		color: props.color,
		isActive: props.active
	}) || createVNode(VProgressLinear, {
		"absolute": props.absolute,
		"active": props.active,
		"color": props.color,
		"height": "2",
		"indeterminate": true
	}, null)]);
}
//#endregion
//#region node_modules/vuetify/lib/composables/position.js
var positionValues = [
	"static",
	"relative",
	"fixed",
	"absolute",
	"sticky"
];
var makePositionProps = propsFactory({ position: {
	type: String,
	validator: (v) => positionValues.includes(v)
} }, "position");
function usePosition(props, name = getCurrentInstanceName()) {
	return { positionClasses: toRef(() => {
		return props.position ? `${name}--${props.position}` : void 0;
	}) };
}
//#endregion
//#region node_modules/vuetify/lib/composables/router.js
function useRoute() {
	const vm = getCurrentInstance("useRoute");
	return computed(() => vm?.proxy?.$route);
}
function useLink(props, attrs) {
	const RouterLink = resolveDynamicComponent("RouterLink");
	const isLink = toRef(() => !!(props.href || props.to));
	const isClickable = computed(() => {
		return isLink?.value || hasEvent(attrs, "click") || hasEvent(props, "click");
	});
	if (typeof RouterLink === "string" || !("useLink" in RouterLink)) {
		const href = toRef(() => props.href);
		return {
			isLink,
			isRouterLink: toRef(() => false),
			isClickable,
			href,
			linkProps: reactive({ href }),
			route: toRef(() => void 0),
			navigate: toRef(() => void 0)
		};
	}
	const routerLink = RouterLink.useLink({
		to: toRef(() => props.to || ""),
		replace: toRef(() => props.replace)
	});
	const link = computed(() => props.to ? routerLink : void 0);
	const route = useRoute();
	const isActive = computed(() => {
		if (!link.value) return false;
		if (!props.exact) return link.value.isActive?.value ?? false;
		if (!route.value) return link.value.isExactActive?.value ?? false;
		return link.value.isExactActive?.value && deepEqual(link.value.route.value.query, route.value.query);
	});
	const href = computed(() => props.to ? link.value?.route.value.href : props.href);
	return {
		isLink,
		isRouterLink: toRef(() => !!props.to),
		isClickable,
		isActive,
		route: toRef(() => link.value?.route.value),
		navigate: toRef(() => link.value?.navigate),
		href,
		linkProps: reactive({
			href,
			"aria-current": toRef(() => isActive.value ? "page" : void 0),
			"aria-disabled": toRef(() => props.disabled && isLink.value ? "true" : void 0),
			tabindex: toRef(() => props.disabled && isLink.value ? "-1" : void 0)
		})
	};
}
var makeRouterProps = propsFactory({
	href: String,
	replace: Boolean,
	to: [String, Object],
	exact: Boolean
}, "router");
//#endregion
//#region node_modules/vuetify/lib/composables/selectLink.js
function useSelectLink(link, select) {
	watch(() => link.isActive?.value, (isActive) => {
		if (link.isLink.value && isActive != null && select) nextTick(() => {
			select(isActive);
		});
	}, { immediate: true });
}
//#endregion
//#region node_modules/vuetify/lib/directives/ripple/index.js
var stopSymbol = Symbol("rippleStop");
var DELAY_RIPPLE = 80;
function transform(el, value) {
	el.style.transform = value;
	el.style.webkitTransform = value;
}
function isTouchEvent(e) {
	return e.constructor.name === "TouchEvent";
}
function isKeyboardEvent(e) {
	return e.constructor.name === "KeyboardEvent";
}
var calculate = (e, el, value = {}) => {
	let localX = 0;
	let localY = 0;
	if (!isKeyboardEvent(e)) {
		const offset = new Box(el);
		const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
		const point = getTargetBox([target.clientX, target.clientY]);
		localX = point.x - offset.left;
		localY = point.y - offset.top;
	}
	let radius = 0;
	let scale = .3;
	if (el._ripple?.circle) {
		scale = .15;
		radius = el.clientWidth / 2;
		radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
	} else radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
	const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
	const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
	const x = value.center ? centerX : `${localX - radius}px`;
	const y = value.center ? centerY : `${localY - radius}px`;
	return {
		radius,
		scale,
		x,
		y,
		centerX,
		centerY
	};
};
var ripples = {
	show(e, el, value = {}) {
		if (!el?._ripple?.enabled) return;
		const container = document.createElement("span");
		const animation = document.createElement("span");
		container.appendChild(animation);
		container.className = "v-ripple__container";
		if (value.class) container.className += ` ${value.class}`;
		const { radius, scale, x, y, centerX, centerY } = calculate(e, el, value);
		const size = `${radius * 2}px`;
		animation.className = "v-ripple__animation";
		animation.style.width = size;
		animation.style.height = size;
		el.appendChild(container);
		const computed = window.getComputedStyle(el);
		if (computed && computed.position === "static") {
			el.style.position = "relative";
			el.dataset.previousPosition = "static";
		}
		animation.classList.add("v-ripple__animation--enter");
		animation.classList.add("v-ripple__animation--visible");
		transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
		animation.dataset.activated = String(performance.now());
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				animation.classList.remove("v-ripple__animation--enter");
				animation.classList.add("v-ripple__animation--in");
				transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
			});
		});
	},
	hide(el) {
		if (!el?._ripple?.enabled) return;
		const ripples = el.getElementsByClassName("v-ripple__animation");
		if (ripples.length === 0) return;
		const animation = Array.from(ripples).findLast((ripple) => !ripple.dataset.isHiding);
		if (!animation) return;
		else animation.dataset.isHiding = "true";
		const diff = performance.now() - Number(animation.dataset.activated);
		const delay = Math.max(250 - diff, 0);
		setTimeout(() => {
			animation.classList.remove("v-ripple__animation--in");
			animation.classList.add("v-ripple__animation--out");
			setTimeout(() => {
				if (el.getElementsByClassName("v-ripple__animation").length === 1 && el.dataset.previousPosition) {
					el.style.position = el.dataset.previousPosition;
					delete el.dataset.previousPosition;
				}
				if (animation.parentNode?.parentNode === el) el.removeChild(animation.parentNode);
			}, 300);
		}, delay);
	}
};
function isRippleEnabled(value) {
	return typeof value === "undefined" || !!value;
}
function rippleShow(e) {
	const value = {};
	const element = e.currentTarget;
	if (!element?._ripple || element._ripple.touched || e[stopSymbol]) return;
	e[stopSymbol] = true;
	if (isTouchEvent(e)) {
		element._ripple.touched = true;
		element._ripple.isTouch = true;
	} else if (element._ripple.isTouch) return;
	value.center = element._ripple.centered || isKeyboardEvent(e);
	if (element._ripple.class) value.class = element._ripple.class;
	if (isTouchEvent(e)) {
		if (element._ripple.showTimerCommit) return;
		element._ripple.showTimerCommit = () => {
			ripples.show(e, element, value);
		};
		element._ripple.showTimer = window.setTimeout(() => {
			if (element?._ripple?.showTimerCommit) {
				element._ripple.showTimerCommit();
				element._ripple.showTimerCommit = null;
			}
		}, DELAY_RIPPLE);
	} else ripples.show(e, element, value);
}
function rippleStop(e) {
	e[stopSymbol] = true;
}
function rippleHide(e) {
	const element = e.currentTarget;
	if (!element?._ripple) return;
	window.clearTimeout(element._ripple.showTimer);
	if (e.type === "touchend" && element._ripple.showTimerCommit) {
		element._ripple.showTimerCommit();
		element._ripple.showTimerCommit = null;
		element._ripple.showTimer = window.setTimeout(() => {
			rippleHide(e);
		});
		return;
	}
	window.setTimeout(() => {
		if (element._ripple) element._ripple.touched = false;
	});
	ripples.hide(element);
}
function rippleCancelShow(e) {
	const element = e.currentTarget;
	if (!element?._ripple) return;
	if (element._ripple.showTimerCommit) element._ripple.showTimerCommit = null;
	window.clearTimeout(element._ripple.showTimer);
}
var keyboardRipple = false;
function keyboardRippleShow(e, keys) {
	if (!keyboardRipple && keys.includes(e.key)) {
		keyboardRipple = true;
		rippleShow(e);
	}
}
function keyboardRippleHide(e) {
	keyboardRipple = false;
	rippleHide(e);
}
function focusRippleHide(e) {
	if (keyboardRipple) {
		keyboardRipple = false;
		rippleHide(e);
	}
}
function updateRipple(el, binding, wasEnabled) {
	const { value, modifiers } = binding;
	const enabled = isRippleEnabled(value);
	if (!enabled) ripples.hide(el);
	el._ripple = el._ripple ?? {};
	el._ripple.enabled = enabled;
	el._ripple.centered = modifiers.center;
	el._ripple.circle = modifiers.circle;
	const bindingValue = isObject(value) ? value : {};
	if (bindingValue.class) el._ripple.class = bindingValue.class;
	const allowedKeys = bindingValue.keys ?? ["Enter", "Space"];
	el._ripple.keyDownHandler = (e) => keyboardRippleShow(e, allowedKeys);
	if (enabled && !wasEnabled) {
		if (modifiers.stop) {
			el.addEventListener("touchstart", rippleStop, { passive: true });
			el.addEventListener("mousedown", rippleStop);
			return;
		}
		el.addEventListener("touchstart", rippleShow, { passive: true });
		el.addEventListener("touchend", rippleHide, { passive: true });
		el.addEventListener("touchmove", rippleCancelShow, { passive: true });
		el.addEventListener("touchcancel", rippleHide);
		el.addEventListener("mousedown", rippleShow);
		el.addEventListener("mouseup", rippleHide);
		el.addEventListener("mouseleave", rippleHide);
		el.addEventListener("keydown", el._ripple.keyDownHandler);
		el.addEventListener("keyup", keyboardRippleHide);
		el.addEventListener("blur", focusRippleHide);
		el.addEventListener("dragstart", rippleHide, { passive: true });
	} else if (!enabled && wasEnabled) removeListeners(el);
}
function removeListeners(el) {
	el.removeEventListener("touchstart", rippleStop);
	el.removeEventListener("mousedown", rippleStop);
	el.removeEventListener("touchstart", rippleShow);
	el.removeEventListener("touchend", rippleHide);
	el.removeEventListener("touchmove", rippleCancelShow);
	el.removeEventListener("touchcancel", rippleHide);
	el.removeEventListener("mousedown", rippleShow);
	el.removeEventListener("mouseup", rippleHide);
	el.removeEventListener("mouseleave", rippleHide);
	if (el._ripple?.keyDownHandler) el.removeEventListener("keydown", el._ripple.keyDownHandler);
	el.removeEventListener("keyup", keyboardRippleHide);
	el.removeEventListener("blur", focusRippleHide);
	el.removeEventListener("dragstart", rippleHide);
}
function mounted$1(el, binding) {
	updateRipple(el, binding, false);
}
function unmounted$1(el) {
	removeListeners(el);
	delete el._ripple;
}
function updated(el, binding) {
	if (binding.value === binding.oldValue) return;
	updateRipple(el, binding, isRippleEnabled(binding.oldValue));
}
var Ripple = {
	mounted: mounted$1,
	unmounted: unmounted$1,
	updated
};
//#endregion
//#region node_modules/vuetify/lib/components/VBtn/VBtn.js
var makeVBtnProps = propsFactory({
	active: {
		type: Boolean,
		default: void 0
	},
	activeColor: String,
	baseColor: String,
	symbol: {
		type: null,
		default: VBtnToggleSymbol
	},
	flat: Boolean,
	icon: [
		Boolean,
		String,
		Function,
		Object
	],
	prependIcon: IconValue,
	appendIcon: IconValue,
	block: Boolean,
	readonly: Boolean,
	slim: Boolean,
	stacked: Boolean,
	spaced: String,
	ripple: {
		type: [Boolean, Object],
		default: true
	},
	text: {
		type: [
			String,
			Number,
			Boolean
		],
		default: void 0
	},
	...makeBorderProps(),
	...makeComponentProps(),
	...makeDensityProps(),
	...makeDimensionProps(),
	...makeElevationProps(),
	...makeGroupItemProps(),
	...makeLoaderProps(),
	...makeLocationProps(),
	...makePositionProps(),
	...makeRoundedProps(),
	...makeRouterProps(),
	...makeSizeProps(),
	...makeTagProps({ tag: "button" }),
	...makeThemeProps(),
	...makeVariantProps({ variant: "elevated" })
}, "VBtn");
var VBtn = genericComponent()({
	name: "VBtn",
	props: makeVBtnProps(),
	emits: { "group:selected": (val) => true },
	setup(props, { attrs, slots }) {
		const { themeClasses } = provideTheme(props);
		const { borderClasses } = useBorder(props);
		const { densityClasses } = useDensity(props);
		const { dimensionStyles } = useDimension(props);
		const { elevationClasses } = useElevation(props);
		const { loaderClasses } = useLoader(props);
		const { locationStyles } = useLocation(props);
		const { positionClasses } = usePosition(props);
		const { roundedClasses } = useRounded(props);
		const { sizeClasses, sizeStyles } = useSize(props);
		const group = useGroupItem(props, props.symbol, false);
		const link = useLink(props, attrs);
		const isActive = computed(() => {
			if (props.active !== void 0) return props.active;
			if (link.isRouterLink.value) return link.isActive?.value;
			return group?.isSelected.value;
		});
		const color = toRef(() => isActive.value ? props.activeColor ?? props.color : props.color);
		const { colorClasses, colorStyles, variantClasses } = useVariant(computed(() => {
			return {
				color: group?.isSelected.value && (!link.isLink.value || link.isActive?.value) || !group || link.isActive?.value ? color.value ?? props.baseColor : props.baseColor,
				variant: props.variant
			};
		}));
		const isDisabled = computed(() => group?.disabled.value || props.disabled);
		const isElevated = toRef(() => {
			return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
		});
		const valueAttr = computed(() => {
			if (props.value === void 0 || typeof props.value === "symbol") return void 0;
			return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
		});
		function onClick(e) {
			if (isDisabled.value || link.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || attrs.target === "_blank")) return;
			if (link.isRouterLink.value) link.navigate.value?.(e);
			else group?.toggle();
		}
		useSelectLink(link, group?.select);
		useRender(() => {
			const Tag = link.isLink.value ? "a" : props.tag;
			const hasPrepend = !!(props.prependIcon || slots.prepend);
			const hasAppend = !!(props.appendIcon || slots.append);
			const hasIcon = !!(props.icon && props.icon !== true);
			return withDirectives(createVNode(Tag, mergeProps(link.linkProps, {
				"type": Tag === "a" ? void 0 : "button",
				"class": [
					"v-btn",
					group?.selectedClass.value,
					{
						"v-btn--active": isActive.value,
						"v-btn--block": props.block,
						"v-btn--disabled": isDisabled.value,
						"v-btn--elevated": isElevated.value,
						"v-btn--flat": props.flat,
						"v-btn--icon": !!props.icon,
						"v-btn--loading": props.loading,
						"v-btn--readonly": props.readonly,
						"v-btn--slim": props.slim,
						"v-btn--stacked": props.stacked
					},
					props.spaced ? ["v-btn--spaced", `v-btn--spaced-${props.spaced}`] : [],
					themeClasses.value,
					borderClasses.value,
					colorClasses.value,
					densityClasses.value,
					elevationClasses.value,
					loaderClasses.value,
					positionClasses.value,
					roundedClasses.value,
					sizeClasses.value,
					variantClasses.value,
					props.class
				],
				"style": [
					colorStyles.value,
					dimensionStyles.value,
					locationStyles.value,
					sizeStyles.value,
					props.style
				],
				"aria-busy": props.loading ? true : void 0,
				"disabled": isDisabled.value && Tag !== "a" || void 0,
				"tabindex": props.loading || props.readonly ? -1 : void 0,
				"onClick": onClick,
				"value": valueAttr.value
			}), { default: () => [
				genOverlays(true, "v-btn"),
				!props.icon && hasPrepend && createBaseVNode("span", {
					"key": "prepend",
					"class": "v-btn__prepend"
				}, [!slots.prepend ? createVNode(VIcon, {
					"key": "prepend-icon",
					"icon": props.prependIcon
				}, null) : createVNode(VDefaultsProvider, {
					"key": "prepend-defaults",
					"disabled": !props.prependIcon,
					"defaults": { VIcon: { icon: props.prependIcon } }
				}, slots.prepend)]),
				createBaseVNode("span", {
					"class": "v-btn__content",
					"data-no-activator": ""
				}, [!slots.default && hasIcon ? createVNode(VIcon, {
					"key": "content-icon",
					"icon": props.icon
				}, null) : createVNode(VDefaultsProvider, {
					"key": "content-defaults",
					"disabled": !hasIcon,
					"defaults": { VIcon: { icon: props.icon } }
				}, { default: () => [slots.default?.() ?? toDisplayString(props.text)] })]),
				!props.icon && hasAppend && createBaseVNode("span", {
					"key": "append",
					"class": "v-btn__append"
				}, [!slots.append ? createVNode(VIcon, {
					"key": "append-icon",
					"icon": props.appendIcon
				}, null) : createVNode(VDefaultsProvider, {
					"key": "append-defaults",
					"disabled": !props.appendIcon,
					"defaults": { VIcon: { icon: props.appendIcon } }
				}, slots.append)]),
				!!props.loading && createBaseVNode("span", {
					"key": "loader",
					"class": "v-btn__loader"
				}, [slots.loader?.() ?? createVNode(VProgressCircular, {
					"color": typeof props.loading === "boolean" ? void 0 : props.loading,
					"indeterminate": true,
					"width": "2"
				}, null)])
			] }), [[
				Ripple,
				!isDisabled.value && props.ripple,
				"",
				{ center: !!props.icon }
			]]);
		});
		return { group };
	}
});
//#endregion
//#region node_modules/vuetify/lib/components/transitions/createTransition.js
var makeTransitionProps$1 = propsFactory({
	disabled: Boolean,
	group: Boolean,
	hideOnLeave: Boolean,
	leaveAbsolute: Boolean,
	mode: String,
	origin: String
}, "transition");
function createCssTransition(name, origin, mode) {
	return genericComponent()({
		name,
		props: makeTransitionProps$1({
			mode,
			origin
		}),
		setup(props, { slots }) {
			const functions = {
				onBeforeEnter(el) {
					if (props.origin) el.style.transformOrigin = props.origin;
				},
				onLeave(el) {
					if (props.leaveAbsolute) {
						const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el;
						el._transitionInitialStyles = {
							position: el.style.position,
							top: el.style.top,
							left: el.style.left,
							width: el.style.width,
							height: el.style.height
						};
						el.style.position = "absolute";
						el.style.top = `${offsetTop}px`;
						el.style.left = `${offsetLeft}px`;
						el.style.width = `${offsetWidth}px`;
						el.style.height = `${offsetHeight}px`;
					}
					if (props.hideOnLeave) el.style.setProperty("display", "none", "important");
				},
				onAfterLeave(el) {
					if (props.leaveAbsolute && el?._transitionInitialStyles) {
						const { position, top, left, width, height } = el._transitionInitialStyles;
						delete el._transitionInitialStyles;
						el.style.position = position || "";
						el.style.top = top || "";
						el.style.left = left || "";
						el.style.width = width || "";
						el.style.height = height || "";
					}
				}
			};
			return () => {
				return h(props.group ? TransitionGroup : Transition, {
					name: props.disabled ? "" : name,
					css: !props.disabled,
					...props.group ? void 0 : { mode: props.mode },
					...props.disabled ? {} : functions
				}, slots.default);
			};
		}
	});
}
function createJavascriptTransition(name, functions, mode = "in-out") {
	return genericComponent()({
		name,
		props: {
			mode: {
				type: String,
				default: mode
			},
			disabled: {
				type: Boolean,
				default: PREFERS_REDUCED_MOTION()
			},
			group: Boolean,
			hideOnLeave: Boolean
		},
		setup(props, { slots }) {
			const tag = props.group ? TransitionGroup : Transition;
			return () => {
				return h(tag, {
					name: props.disabled ? "" : name,
					css: !props.disabled,
					...props.disabled ? {} : {
						...functions,
						onLeave: (el) => {
							if (props.hideOnLeave) el.style.setProperty("display", "none", "important");
							else functions.onLeave?.(el);
						}
					}
				}, slots.default);
			};
		}
	});
}
//#endregion
//#region node_modules/vuetify/lib/components/transitions/expand-transition.js
function expand_transition_default(expandedParentClass = "", type = "y") {
	return {
		onBeforeEnter(el) {
			el._parent = el.parentNode;
			el._initialStyle = {
				transition: el.style.transition,
				overflow: el.style.overflow,
				width: el.style.width,
				height: el.style.height
			};
		},
		onEnter(el) {
			const initialStyle = el._initialStyle;
			if (!initialStyle) return;
			el.style.setProperty("transition", "none", "important");
			el.style.overflow = "hidden";
			const offsetWidth = `${el.offsetWidth}px`;
			const offsetHeight = `${el.offsetHeight}px`;
			if (["x", "both"].includes(type)) el.style.width = "0";
			if (["y", "both"].includes(type)) el.style.height = "0";
			el.offsetHeight;
			el.style.transition = initialStyle.transition;
			if (expandedParentClass && el._parent) el._parent.classList.add(expandedParentClass);
			requestAnimationFrame(() => {
				if (["x", "both"].includes(type)) el.style.width = offsetWidth;
				if (["y", "both"].includes(type)) el.style.height = offsetHeight;
			});
		},
		onAfterEnter: resetStyles,
		onEnterCancelled: resetStyles,
		onLeave(el) {
			el._initialStyle = {
				transition: "",
				overflow: el.style.overflow,
				width: el.style.width,
				height: el.style.height
			};
			el.style.overflow = "hidden";
			if (["x", "both"].includes(type)) el.style.width = `${el.offsetWidth}px`;
			if (["y", "both"].includes(type)) el.style.height = `${el.offsetHeight}px`;
			el.offsetHeight;
			requestAnimationFrame(() => {
				if (["x", "both"].includes(type)) el.style.width = "0";
				if (["y", "both"].includes(type)) el.style.height = "0";
			});
		},
		onAfterLeave,
		onLeaveCancelled: onAfterLeave
	};
	function onAfterLeave(el) {
		if (expandedParentClass && el._parent) el._parent.classList.remove(expandedParentClass);
		resetStyles(el);
	}
	function resetStyles(el) {
		if (!el._initialStyle) return;
		const { width: w, height: h } = el._initialStyle;
		el.style.overflow = el._initialStyle.overflow;
		if (w != null && ["x", "both"].includes(type)) el.style.width = w;
		if (h != null && ["y", "both"].includes(type)) el.style.height = h;
		delete el._initialStyle;
	}
}
createCssTransition("fab-transition", "center center", "out-in");
createCssTransition("dialog-bottom-transition");
createCssTransition("dialog-top-transition");
createCssTransition("fade-transition");
createCssTransition("scale-transition");
createCssTransition("scroll-x-transition");
createCssTransition("scroll-x-reverse-transition");
createCssTransition("scroll-y-transition");
createCssTransition("scroll-y-reverse-transition");
createCssTransition("slide-x-transition");
createCssTransition("slide-x-reverse-transition");
var VSlideYTransition = createCssTransition("slide-y-transition");
createCssTransition("slide-y-reverse-transition");
createJavascriptTransition("expand-transition", expand_transition_default());
var VExpandXTransition = createJavascriptTransition("expand-x-transition", expand_transition_default("", "x"));
createJavascriptTransition("expand-both-transition", expand_transition_default("", "both"));
//#endregion
//#region node_modules/vuetify/lib/composables/transition.js
var makeTransitionProps = propsFactory({ transition: {
	type: null,
	default: "fade-transition",
	validator: (val) => val !== true
} }, "transition");
var MaybeTransition = (props, { slots }) => {
	const { transition, disabled, group, ...rest } = props;
	const { component = group ? TransitionGroup : Transition, ...customProps } = isObject(transition) ? transition : {};
	let transitionProps;
	if (isObject(transition)) transitionProps = mergeProps(customProps, onlyDefinedProps({
		disabled,
		group
	}), rest);
	else transitionProps = mergeProps({ name: disabled || !transition ? "" : transition }, rest);
	return h(component, transitionProps, slots);
};
//#endregion
//#region node_modules/vuetify/lib/components/VCounter/VCounter.js
var makeVCounterProps = propsFactory({
	active: Boolean,
	disabled: Boolean,
	max: [Number, String],
	value: {
		type: [Number, String],
		default: 0
	},
	...makeComponentProps(),
	...makeTransitionProps({ transition: { component: VSlideYTransition } })
}, "VCounter");
var VCounter = genericComponent()({
	name: "VCounter",
	functional: true,
	props: makeVCounterProps(),
	setup(props, { slots }) {
		const counter = toRef(() => {
			return props.max ? `${props.value} / ${props.max}` : String(props.value);
		});
		useRender(() => createVNode(MaybeTransition, { "transition": props.transition }, { default: () => [withDirectives(createBaseVNode("div", {
			"class": normalizeClass([
				"v-counter",
				{ "text-error": props.max && !props.disabled && parseFloat(props.value) > parseFloat(props.max) },
				props.class
			]),
			"style": normalizeStyle(props.style)
		}, [slots.default ? slots.default({
			counter: counter.value,
			max: props.max,
			value: props.value
		}) : counter.value]), [[vShow, props.active]])] }));
		return {};
	}
});
//#endregion
//#region node_modules/vuetify/lib/components/VLabel/VLabel.js
var makeVLabelProps = propsFactory({
	text: String,
	onClick: EventProp(),
	...makeComponentProps(),
	...makeThemeProps()
}, "VLabel");
var VLabel = genericComponent()({
	name: "VLabel",
	props: makeVLabelProps(),
	setup(props, { slots }) {
		useRender(() => createBaseVNode("label", {
			"class": normalizeClass([
				"v-label",
				{ "v-label--clickable": !!props.onClick },
				props.class
			]),
			"style": normalizeStyle(props.style),
			"onClick": props.onClick
		}, [props.text, slots.default?.()]));
		return {};
	}
});
//#endregion
//#region node_modules/vuetify/lib/components/VField/VFieldLabel.js
var makeVFieldLabelProps = propsFactory({
	floating: Boolean,
	...makeComponentProps()
}, "VFieldLabel");
var VFieldLabel = genericComponent()({
	name: "VFieldLabel",
	props: makeVFieldLabelProps(),
	setup(props, { slots }) {
		useRender(() => createVNode(VLabel, {
			"class": normalizeClass([
				"v-field-label",
				{ "v-field-label--floating": props.floating },
				props.class
			]),
			"style": normalizeStyle(props.style)
		}, slots));
		return {};
	}
});
//#endregion
//#region node_modules/vuetify/lib/components/VInput/InputIcon.js
function useInputIcon(props) {
	const { t } = useLocale();
	function InputIcon({ name, color, ...attrs }) {
		const localeKey = {
			prepend: "prependAction",
			prependInner: "prependAction",
			append: "appendAction",
			appendInner: "appendAction",
			clear: "clear"
		}[name];
		const listener = props[`onClick:${name}`];
		function onKeydown(e) {
			if (e.key !== "Enter" && e.key !== " ") return;
			e.preventDefault();
			e.stopPropagation();
			callEvent(listener, new PointerEvent("click", e));
		}
		const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? "") : void 0;
		return createVNode(VIcon, mergeProps({
			"icon": props[`${name}Icon`],
			"aria-label": label,
			"onClick": listener,
			"onKeydown": onKeydown,
			"color": color
		}, attrs), null);
	}
	return { InputIcon };
}
//#endregion
//#region node_modules/vuetify/lib/composables/focus.js
var makeFocusProps = propsFactory({
	focused: Boolean,
	"onUpdate:focused": EventProp()
}, "focus");
function useFocus(props, name = getCurrentInstanceName()) {
	const isFocused = useProxiedModel(props, "focused");
	const focusClasses = toRef(() => {
		return { [`${name}--focused`]: isFocused.value };
	});
	function focus() {
		isFocused.value = true;
	}
	function blur() {
		isFocused.value = false;
	}
	return {
		focusClasses,
		isFocused,
		focus,
		blur
	};
}
//#endregion
//#region node_modules/vuetify/lib/components/VField/VField.js
var allowedVariants = [
	"underlined",
	"outlined",
	"filled",
	"solo",
	"solo-inverted",
	"solo-filled",
	"plain"
];
var makeVFieldProps = propsFactory({
	appendInnerIcon: IconValue,
	bgColor: String,
	clearable: Boolean,
	clearIcon: {
		type: IconValue,
		default: "$clear"
	},
	active: Boolean,
	centerAffix: {
		type: Boolean,
		default: void 0
	},
	color: String,
	baseColor: String,
	dirty: Boolean,
	disabled: {
		type: Boolean,
		default: null
	},
	glow: Boolean,
	error: Boolean,
	flat: Boolean,
	iconColor: [Boolean, String],
	label: String,
	persistentClear: Boolean,
	prependInnerIcon: IconValue,
	reverse: Boolean,
	singleLine: Boolean,
	variant: {
		type: String,
		default: "filled",
		validator: (v) => allowedVariants.includes(v)
	},
	"onClick:clear": EventProp(),
	"onClick:appendInner": EventProp(),
	"onClick:prependInner": EventProp(),
	...makeComponentProps(),
	...makeLoaderProps(),
	...makeRoundedProps(),
	...makeThemeProps()
}, "VField");
var VField = genericComponent()({
	name: "VField",
	inheritAttrs: false,
	props: {
		id: String,
		details: Boolean,
		labelId: String,
		...makeFocusProps(),
		...makeVFieldProps()
	},
	emits: {
		"update:focused": (focused) => true,
		"update:modelValue": (value) => true
	},
	setup(props, { attrs, emit, slots }) {
		const { themeClasses } = provideTheme(props);
		const { loaderClasses } = useLoader(props);
		const { focusClasses, isFocused, focus, blur } = useFocus(props);
		const { InputIcon } = useInputIcon(props);
		const { roundedClasses } = useRounded(props);
		const { rtlClasses } = useRtl();
		const isActive = toRef(() => props.dirty || props.active);
		const hasLabel = toRef(() => !!(props.label || slots.label));
		const hasFloatingLabel = toRef(() => !props.singleLine && hasLabel.value);
		const uid = useId();
		const id = computed(() => props.id || `input-${uid}`);
		const messagesId = toRef(() => !props.details ? void 0 : `${id.value}-messages`);
		const labelRef = ref();
		const floatingLabelRef = ref();
		const controlRef = ref();
		const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
		const color = computed(() => {
			return props.error || props.disabled ? void 0 : isActive.value && isFocused.value ? props.color : props.baseColor;
		});
		const iconColor = computed(() => {
			if (props.iconColor === true || !props.iconColor && props.glow && isFocused.value) return color.value;
			if (!props.iconColor || props.glow && !isFocused.value) return void 0;
			return props.iconColor;
		});
		const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(() => props.bgColor);
		const { textColorClasses, textColorStyles } = useTextColor(color);
		watch(isActive, (val) => {
			if (hasFloatingLabel.value && !PREFERS_REDUCED_MOTION()) {
				const el = labelRef.value.$el;
				const targetEl = floatingLabelRef.value.$el;
				requestAnimationFrame(() => {
					const rect = nullifyTransforms(el);
					const targetRect = new Box(targetEl);
					const x = targetRect.x - rect.x;
					const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
					const targetWidth = targetRect.width / .75;
					const width = Math.abs(targetWidth - rect.width) > 1 ? { maxWidth: convertToUnit(targetWidth) } : void 0;
					const style = getComputedStyle(el);
					const targetStyle = getComputedStyle(targetEl);
					const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
					const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
					const color = targetStyle.getPropertyValue("color");
					el.style.visibility = "visible";
					targetEl.style.visibility = "hidden";
					animate(el, {
						transform: `translate(${x}px, ${y}px) scale(${scale})`,
						color,
						...width
					}, {
						duration,
						easing: standardEasing,
						direction: val ? "normal" : "reverse"
					}).finished.then(() => {
						el.style.removeProperty("visibility");
						targetEl.style.removeProperty("visibility");
					});
				});
			}
		}, { flush: "post" });
		const slotProps = computed(() => ({
			isActive,
			isFocused,
			controlRef,
			iconColor,
			blur,
			focus
		}));
		const floatingLabelProps = toRef(() => {
			const ariaHidden = !isActive.value;
			return {
				"aria-hidden": ariaHidden,
				for: ariaHidden ? void 0 : id.value
			};
		});
		const mainLabelProps = toRef(() => {
			const ariaHidden = hasFloatingLabel.value && isActive.value;
			return {
				"aria-hidden": ariaHidden,
				for: ariaHidden ? void 0 : id.value
			};
		});
		function onClick(e) {
			if (e.target !== document.activeElement) e.preventDefault();
		}
		useRender(() => {
			const isOutlined = props.variant === "outlined";
			const hasPrepend = !!(slots["prepend-inner"] || props.prependInnerIcon);
			const hasClear = !!(props.clearable || slots.clear) && !props.disabled;
			const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
			const label = () => slots.label ? slots.label({
				...slotProps.value,
				label: props.label,
				props: { for: id.value }
			}) : props.label;
			return createBaseVNode("div", mergeProps({
				"class": [
					"v-field",
					{
						"v-field--active": isActive.value,
						"v-field--appended": hasAppend,
						"v-field--center-affix": props.centerAffix ?? !isPlainOrUnderlined.value,
						"v-field--disabled": props.disabled,
						"v-field--dirty": props.dirty,
						"v-field--error": props.error,
						"v-field--glow": props.glow,
						"v-field--flat": props.flat,
						"v-field--has-background": !!props.bgColor,
						"v-field--persistent-clear": props.persistentClear,
						"v-field--prepended": hasPrepend,
						"v-field--reverse": props.reverse,
						"v-field--single-line": props.singleLine,
						"v-field--no-label": !label(),
						[`v-field--variant-${props.variant}`]: true
					},
					themeClasses.value,
					backgroundColorClasses.value,
					focusClasses.value,
					loaderClasses.value,
					roundedClasses.value,
					rtlClasses.value,
					props.class
				],
				"style": [backgroundColorStyles.value, props.style],
				"onClick": onClick
			}, attrs), [
				createBaseVNode("div", { "class": "v-field__overlay" }, null),
				createVNode(LoaderSlot, {
					"name": "v-field",
					"active": !!props.loading,
					"color": props.error ? "error" : typeof props.loading === "string" ? props.loading : props.color
				}, { default: slots.loader }),
				hasPrepend && createBaseVNode("div", {
					"key": "prepend",
					"class": "v-field__prepend-inner"
				}, [slots["prepend-inner"] ? slots["prepend-inner"](slotProps.value) : props.prependInnerIcon && createVNode(InputIcon, {
					"key": "prepend-icon",
					"name": "prependInner",
					"color": iconColor.value
				}, null)]),
				createBaseVNode("div", {
					"class": "v-field__field",
					"data-no-activator": ""
				}, [
					[
						"filled",
						"solo",
						"solo-inverted",
						"solo-filled"
					].includes(props.variant) && hasFloatingLabel.value && createVNode(VFieldLabel, mergeProps({
						"key": "floating-label",
						"ref": floatingLabelRef,
						"class": [textColorClasses.value],
						"floating": true
					}, floatingLabelProps.value, { "style": textColorStyles.value }), { default: () => [label()] }),
					hasLabel.value && createVNode(VFieldLabel, mergeProps({
						"key": "label",
						"ref": labelRef,
						"id": props.labelId
					}, mainLabelProps.value), { default: () => [label()] }),
					slots.default?.({
						...slotProps.value,
						props: {
							id: id.value,
							class: "v-field__input",
							"aria-describedby": messagesId.value
						},
						focus,
						blur
					}) ?? createBaseVNode("div", {
						"id": id.value,
						"class": "v-field__input",
						"aria-describedby": messagesId.value
					}, null)
				]),
				hasClear && createVNode(VExpandXTransition, { "key": "clear" }, { default: () => [withDirectives(createBaseVNode("div", {
					"class": "v-field__clearable",
					"onMousedown": (e) => {
						e.preventDefault();
						e.stopPropagation();
					}
				}, [createVNode(VDefaultsProvider, { "defaults": { VIcon: { icon: props.clearIcon } } }, { default: () => [slots.clear ? slots.clear({
					...slotProps.value,
					props: {
						onFocus: focus,
						onBlur: blur,
						onClick: props["onClick:clear"],
						tabindex: -1
					}
				}) : createVNode(InputIcon, {
					"name": "clear",
					"onFocus": focus,
					"onBlur": blur,
					"tabindex": -1
				}, null)] })]), [[vShow, props.dirty]])] }),
				hasAppend && createBaseVNode("div", {
					"key": "append",
					"class": "v-field__append-inner"
				}, [slots["append-inner"] ? slots["append-inner"](slotProps.value) : props.appendInnerIcon && createVNode(InputIcon, {
					"key": "append-icon",
					"name": "appendInner",
					"color": iconColor.value
				}, null)]),
				createBaseVNode("div", {
					"class": normalizeClass(["v-field__outline", textColorClasses.value]),
					"style": normalizeStyle(textColorStyles.value)
				}, [isOutlined && createBaseVNode(Fragment, null, [
					createBaseVNode("div", { "class": "v-field__outline__start" }, null),
					hasFloatingLabel.value && createBaseVNode("div", { "class": "v-field__outline__notch" }, [createVNode(VFieldLabel, mergeProps({
						"ref": floatingLabelRef,
						"floating": true
					}, floatingLabelProps.value), { default: () => [label()] })]),
					createBaseVNode("div", { "class": "v-field__outline__end" }, null)
				]), isPlainOrUnderlined.value && hasFloatingLabel.value && createVNode(VFieldLabel, mergeProps({
					"ref": floatingLabelRef,
					"floating": true
				}, floatingLabelProps.value), { default: () => [label()] })])
			]);
		});
		return {
			controlRef,
			fieldIconColor: iconColor
		};
	}
});
//#endregion
//#region node_modules/vuetify/lib/components/VMessages/VMessages.js
var makeVMessagesProps = propsFactory({
	active: Boolean,
	color: String,
	messages: {
		type: [Array, String],
		default: () => []
	},
	...makeComponentProps(),
	...makeTransitionProps({ transition: {
		component: VSlideYTransition,
		leaveAbsolute: true,
		group: true
	} })
}, "VMessages");
var VMessages = genericComponent()({
	name: "VMessages",
	props: makeVMessagesProps(),
	setup(props, { slots }) {
		const messages = computed(() => wrapInArray(props.messages));
		const { textColorClasses, textColorStyles } = useTextColor(() => props.color);
		useRender(() => createVNode(MaybeTransition, {
			"transition": props.transition,
			"tag": "div",
			"class": normalizeClass([
				"v-messages",
				textColorClasses.value,
				props.class
			]),
			"style": normalizeStyle([textColorStyles.value, props.style])
		}, { default: () => [props.active && messages.value.map((message, i) => createBaseVNode("div", {
			"class": "v-messages__message",
			"key": `${i}-${messages.value}`
		}, [slots.message ? slots.message({ message }) : message]))] }));
		return {};
	}
});
//#endregion
//#region node_modules/vuetify/lib/composables/form.js
var FormKey = Symbol.for("vuetify:form");
propsFactory({
	disabled: Boolean,
	fastFail: Boolean,
	readonly: Boolean,
	modelValue: {
		type: Boolean,
		default: null
	},
	validateOn: {
		type: String,
		default: "input"
	}
}, "form");
function useForm(props) {
	const form = inject$1(FormKey, null);
	return {
		...form,
		isReadonly: computed(() => !!(props?.readonly ?? form?.isReadonly.value)),
		isDisabled: computed(() => !!(props?.disabled ?? form?.isDisabled.value))
	};
}
//#endregion
//#region node_modules/vuetify/lib/labs/rules/rules.js
var RulesSymbol = Symbol.for("vuetify:rules");
function useRules(fn) {
	const rules = inject$1(RulesSymbol, null);
	if (!fn) {
		if (!rules) throw new Error("Could not find Vuetify rules injection");
		return rules.aliases;
	}
	return rules?.resolve(fn) ?? toRef(fn);
}
//#endregion
//#region node_modules/vuetify/lib/composables/validation.js
var makeValidationProps = propsFactory({
	disabled: {
		type: Boolean,
		default: null
	},
	error: Boolean,
	errorMessages: {
		type: [Array, String],
		default: () => []
	},
	maxErrors: {
		type: [Number, String],
		default: 1
	},
	name: String,
	label: String,
	readonly: {
		type: Boolean,
		default: null
	},
	rules: {
		type: Array,
		default: () => []
	},
	modelValue: null,
	validateOn: String,
	validationValue: null,
	...makeFocusProps()
}, "validation");
function useValidation(props, name = getCurrentInstanceName(), id = useId()) {
	const model = useProxiedModel(props, "modelValue");
	const validationModel = computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
	const form = useForm(props);
	const rules = useRules(() => props.rules);
	const internalErrorMessages = ref([]);
	const isPristine = shallowRef(true);
	const isDirty = computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
	const errorMessages = computed(() => {
		return props.errorMessages?.length ? wrapInArray(props.errorMessages).concat(internalErrorMessages.value).slice(0, Math.max(0, Number(props.maxErrors))) : internalErrorMessages.value;
	});
	const validateOn = computed(() => {
		let value = (props.validateOn ?? form.validateOn?.value) || "input";
		if (value === "lazy") value = "input lazy";
		if (value === "eager") value = "input eager";
		const set = new Set(value?.split(" ") ?? []);
		return {
			input: set.has("input"),
			blur: set.has("blur") || set.has("input") || set.has("invalid-input"),
			invalidInput: set.has("invalid-input"),
			lazy: set.has("lazy"),
			eager: set.has("eager")
		};
	});
	const isValid = computed(() => {
		if (props.error || props.errorMessages?.length) return false;
		if (!props.rules.length) return true;
		if (isPristine.value) return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
		else return !internalErrorMessages.value.length;
	});
	const isValidating = shallowRef(false);
	const validationClasses = computed(() => {
		return {
			[`${name}--error`]: isValid.value === false,
			[`${name}--dirty`]: isDirty.value,
			[`${name}--disabled`]: form.isDisabled.value,
			[`${name}--readonly`]: form.isReadonly.value
		};
	});
	const vm = getCurrentInstance("validation");
	const uid = computed(() => props.name ?? unref(id));
	onBeforeMount(() => {
		form.register?.({
			id: uid.value,
			vm,
			validate,
			reset,
			resetValidation
		});
	});
	onBeforeUnmount(() => {
		form.unregister?.(uid.value);
	});
	onMounted(async () => {
		if (!validateOn.value.lazy) await validate(!validateOn.value.eager);
		form.update?.(uid.value, isValid.value, errorMessages.value);
	});
	useToggleScope(() => validateOn.value.input || validateOn.value.invalidInput && isValid.value === false, () => {
		watch(validationModel, () => {
			if (validationModel.value != null) validate();
			else if (props.focused) {
				const unwatch = watch(() => props.focused, (val) => {
					if (!val) validate();
					unwatch();
				});
			}
		});
	});
	useToggleScope(() => validateOn.value.blur, () => {
		watch(() => props.focused, (val) => {
			if (!val) validate();
		});
	});
	watch([isValid, errorMessages], () => {
		form.update?.(uid.value, isValid.value, errorMessages.value);
	});
	async function reset() {
		model.value = null;
		await nextTick();
		await resetValidation();
	}
	async function resetValidation() {
		isPristine.value = true;
		if (!validateOn.value.lazy) await validate(!validateOn.value.eager);
		else internalErrorMessages.value = [];
	}
	async function validate(silent = false) {
		const results = [];
		isValidating.value = true;
		for (const rule of rules.value) {
			if (results.length >= Number(props.maxErrors ?? 1)) break;
			const result = await (typeof rule === "function" ? rule : () => rule)(validationModel.value);
			if (result === true) continue;
			if (result !== false && typeof result !== "string") {
				console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
				continue;
			}
			results.push(result || "");
		}
		internalErrorMessages.value = results;
		isValidating.value = false;
		isPristine.value = silent;
		return internalErrorMessages.value;
	}
	return {
		errorMessages,
		isDirty,
		isDisabled: form.isDisabled,
		isReadonly: form.isReadonly,
		isPristine,
		isValid,
		isValidating,
		reset,
		resetValidation,
		validate,
		validationClasses
	};
}
//#endregion
//#region node_modules/vuetify/lib/components/VInput/VInput.js
var makeVInputProps = propsFactory({
	id: String,
	appendIcon: IconValue,
	baseColor: String,
	centerAffix: {
		type: Boolean,
		default: true
	},
	color: String,
	glow: Boolean,
	iconColor: [Boolean, String],
	prependIcon: IconValue,
	hideDetails: [Boolean, String],
	hideSpinButtons: Boolean,
	hint: String,
	indentDetails: {
		type: Boolean,
		default: null
	},
	persistentHint: Boolean,
	messages: {
		type: [Array, String],
		default: () => []
	},
	direction: {
		type: String,
		default: "horizontal",
		validator: (v) => ["horizontal", "vertical"].includes(v)
	},
	"onClick:prepend": EventProp(),
	"onClick:append": EventProp(),
	...makeComponentProps(),
	...makeDensityProps(),
	...pick(makeDimensionProps(), [
		"maxWidth",
		"minWidth",
		"width"
	]),
	...makeThemeProps(),
	...makeValidationProps()
}, "VInput");
var VInput = genericComponent()({
	name: "VInput",
	props: { ...makeVInputProps() },
	emits: { "update:modelValue": (value) => true },
	setup(props, { attrs, slots, emit }) {
		const { densityClasses } = useDensity(props);
		const { dimensionStyles } = useDimension(props);
		const { themeClasses } = provideTheme(props);
		const { rtlClasses } = useRtl();
		const { InputIcon } = useInputIcon(props);
		const uid = useId();
		const id = computed(() => props.id || `input-${uid}`);
		const { errorMessages, isDirty, isDisabled, isReadonly, isPristine, isValid, isValidating, reset, resetValidation, validate, validationClasses } = useValidation(props, "v-input", id);
		const messages = computed(() => {
			if (props.errorMessages?.length || !isPristine.value && errorMessages.value.length) return errorMessages.value;
			else if (props.hint && (props.persistentHint || props.focused)) return props.hint;
			else return props.messages;
		});
		const hasMessages = toRef(() => messages.value.length > 0);
		const hasDetails = toRef(() => !props.hideDetails || props.hideDetails === "auto" && (hasMessages.value || !!slots.details));
		const messagesId = computed(() => hasDetails.value ? `${id.value}-messages` : void 0);
		const slotProps = computed(() => ({
			id,
			messagesId,
			isDirty,
			isDisabled,
			isReadonly,
			isPristine,
			isValid,
			isValidating,
			hasDetails,
			reset,
			resetValidation,
			validate
		}));
		const color = toRef(() => {
			return props.error || props.disabled ? void 0 : props.focused ? props.color : props.baseColor;
		});
		const iconColor = toRef(() => {
			if (!props.iconColor) return void 0;
			return props.iconColor === true ? color.value : props.iconColor;
		});
		useRender(() => {
			const hasPrepend = !!(slots.prepend || props.prependIcon);
			const hasAppend = !!(slots.append || props.appendIcon);
			return createBaseVNode("div", {
				"class": normalizeClass([
					"v-input",
					`v-input--${props.direction}`,
					{
						"v-input--center-affix": props.centerAffix,
						"v-input--focused": props.focused,
						"v-input--glow": props.glow,
						"v-input--hide-spin-buttons": props.hideSpinButtons,
						"v-input--indent-details": props.indentDetails
					},
					densityClasses.value,
					themeClasses.value,
					rtlClasses.value,
					validationClasses.value,
					props.class
				]),
				"style": normalizeStyle([dimensionStyles.value, props.style])
			}, [
				hasPrepend && createBaseVNode("div", {
					"key": "prepend",
					"class": "v-input__prepend"
				}, [slots.prepend ? slots.prepend(slotProps.value) : props.prependIcon && createVNode(InputIcon, {
					"key": "prepend-icon",
					"name": "prepend",
					"color": iconColor.value
				}, null)]),
				slots.default && createBaseVNode("div", { "class": "v-input__control" }, [slots.default?.(slotProps.value)]),
				hasAppend && createBaseVNode("div", {
					"key": "append",
					"class": "v-input__append"
				}, [slots.append ? slots.append(slotProps.value) : props.appendIcon && createVNode(InputIcon, {
					"key": "append-icon",
					"name": "append",
					"color": iconColor.value
				}, null)]),
				hasDetails.value && createBaseVNode("div", {
					"id": messagesId.value,
					"class": "v-input__details",
					"role": "alert",
					"aria-live": "polite"
				}, [createVNode(VMessages, {
					"active": hasMessages.value,
					"messages": messages.value
				}, { message: slots.message }), slots.details?.(slotProps.value)])
			]);
		});
		return {
			reset,
			resetValidation,
			validate,
			isValid,
			errorMessages
		};
	}
});
//#endregion
//#region node_modules/vuetify/lib/composables/autocomplete.js
var makeAutocompleteProps = propsFactory({ autocomplete: String }, "autocomplete");
function useAutocomplete(props) {
	const uniqueId = useId();
	const reloadTrigger = shallowRef(0);
	const isSuppressing = toRef(() => props.autocomplete === "suppress");
	const fieldName = toRef(() => {
		if (!props.name) return void 0;
		return isSuppressing.value ? `${props.name}-${uniqueId}-${reloadTrigger.value}` : props.name;
	});
	return {
		isSuppressing,
		fieldAutocomplete: toRef(() => {
			return isSuppressing.value ? "off" : props.autocomplete;
		}),
		fieldName,
		update: () => reloadTrigger.value = (/* @__PURE__ */ new Date()).getTime()
	};
}
//#endregion
//#region node_modules/vuetify/lib/composables/autofocus.js
function useAutofocus(props) {
	function onIntersect(isIntersecting, entries) {
		if (!props.autofocus || !isIntersecting) return;
		const el = entries[0].target;
		(el.matches("input,textarea") ? el : el.querySelector("input,textarea"))?.focus();
	}
	return { onIntersect };
}
//#endregion
//#region node_modules/vuetify/lib/composables/forwardRefs.js
var Refs = Symbol("Forwarded refs");
/** Omit properties starting with P */
/** Omit keyof $props from T */
function getDescriptor(obj, key) {
	let currentObj = obj;
	while (currentObj) {
		const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
		if (descriptor) return descriptor;
		currentObj = Object.getPrototypeOf(currentObj);
	}
}
function forwardRefs(target, ...refs) {
	target[Refs] = refs;
	return new Proxy(target, {
		get(target, key) {
			if (Reflect.has(target, key)) return Reflect.get(target, key);
			if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
			for (const ref of refs) if (ref.value && Reflect.has(ref.value, key)) {
				const val = Reflect.get(ref.value, key);
				return typeof val === "function" ? val.bind(ref.value) : val;
			}
		},
		has(target, key) {
			if (Reflect.has(target, key)) return true;
			if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
			for (const ref of refs) if (ref.value && Reflect.has(ref.value, key)) return true;
			return false;
		},
		set(target, key, value) {
			if (Reflect.has(target, key)) return Reflect.set(target, key, value);
			if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return false;
			for (const ref of refs) if (ref.value && Reflect.has(ref.value, key)) return Reflect.set(ref.value, key, value);
			return false;
		},
		getOwnPropertyDescriptor(target, key) {
			const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
			if (descriptor) return descriptor;
			if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__")) return;
			for (const ref of refs) {
				if (!ref.value) continue;
				const descriptor = getDescriptor(ref.value, key) ?? ("_" in ref.value ? getDescriptor(ref.value._?.setupState, key) : void 0);
				if (descriptor) return descriptor;
			}
			for (const ref of refs) {
				const childRefs = ref.value && ref.value[Refs];
				if (!childRefs) continue;
				const queue = childRefs.slice();
				while (queue.length) {
					const ref = queue.shift();
					const descriptor = getDescriptor(ref.value, key);
					if (descriptor) return descriptor;
					const childRefs = ref.value && ref.value[Refs];
					if (childRefs) queue.push(...childRefs);
				}
			}
		}
	});
}
//#endregion
//#region node_modules/vuetify/lib/directives/intersect/index.js
function mounted(el, binding) {
	if (!SUPPORTS_INTERSECTION) return;
	const modifiers = binding.modifiers || {};
	const value = binding.value;
	const { handler, options } = typeof value === "object" ? value : {
		handler: value,
		options: {}
	};
	const observer = new IntersectionObserver((entries = [], observer) => {
		const _observe = el._observe?.[binding.instance.$.uid];
		if (!_observe) return;
		const isIntersecting = entries.some((entry) => entry.isIntersecting);
		if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) handler(isIntersecting, entries, observer);
		if (isIntersecting && modifiers.once) unmounted(el, binding);
		else _observe.init = true;
	}, options);
	el._observe = Object(el._observe);
	el._observe[binding.instance.$.uid] = {
		init: false,
		observer
	};
	observer.observe(el);
}
function unmounted(el, binding) {
	const observe = el._observe?.[binding.instance.$.uid];
	if (!observe) return;
	observe.observer.unobserve(el);
	delete el._observe[binding.instance.$.uid];
}
var Intersect = {
	mounted,
	unmounted,
	updated: (el, binding) => {
		if (el._observe?.[binding.instance.$.uid]) {
			unmounted(el, binding);
			mounted(el, binding);
		}
	}
};
//#endregion
//#region node_modules/vuetify/lib/components/VTextField/VTextField.js
var activeTypes = [
	"color",
	"file",
	"time",
	"date",
	"datetime-local",
	"week",
	"month"
];
var makeVTextFieldProps = propsFactory({
	autofocus: Boolean,
	counter: [
		Boolean,
		Number,
		String
	],
	counterValue: [Number, Function],
	prefix: String,
	placeholder: String,
	persistentPlaceholder: Boolean,
	persistentCounter: Boolean,
	suffix: String,
	role: String,
	type: {
		type: String,
		default: "text"
	},
	modelModifiers: Object,
	...makeAutocompleteProps(),
	...omit(makeVInputProps(), ["direction"]),
	...makeVFieldProps()
}, "VTextField");
var VTextField = genericComponent()({
	name: "VTextField",
	directives: { vIntersect: Intersect },
	inheritAttrs: false,
	props: makeVTextFieldProps(),
	emits: {
		"click:control": (e) => true,
		"mousedown:control": (e) => true,
		"update:focused": (focused) => true,
		"update:modelValue": (val) => true
	},
	setup(props, { attrs, emit, slots }) {
		const model = useProxiedModel(props, "modelValue", void 0, (v) => {
			if (Object.is(v, -0)) return "-0";
			return v;
		});
		const { isFocused, focus, blur } = useFocus(props);
		const { onIntersect } = useAutofocus(props);
		const counterValue = computed(() => {
			return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : (model.value ?? "").toString().length;
		});
		const max = computed(() => {
			if (attrs.maxlength) return attrs.maxlength;
			if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
			return props.counter;
		});
		const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
		const vInputRef = ref();
		const vFieldRef = ref();
		const inputRef = ref();
		const autocomplete = useAutocomplete(props);
		const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
		function onFocus() {
			if (autocomplete.isSuppressing.value) autocomplete.update();
			if (!isFocused.value) focus();
			nextTick(() => {
				if (inputRef.value !== document.activeElement) inputRef.value?.focus();
			});
		}
		function onControlMousedown(e) {
			emit("mousedown:control", e);
			if (e.target === inputRef.value) return;
			onFocus();
			e.preventDefault();
		}
		function onControlClick(e) {
			emit("click:control", e);
		}
		function onClear(e, reset) {
			e.stopPropagation();
			onFocus();
			nextTick(() => {
				reset();
				callEvent(props["onClick:clear"], e);
			});
		}
		function onInput(e) {
			const el = e.target;
			if (!(props.modelModifiers?.trim && [
				"text",
				"search",
				"password",
				"tel",
				"url"
			].includes(props.type))) {
				model.value = el.value;
				return;
			}
			const value = el.value;
			const start = el.selectionStart;
			const end = el.selectionEnd;
			model.value = value;
			nextTick(() => {
				let offset = 0;
				if (value.trimStart().length === el.value.length) offset = value.length - el.value.length;
				if (start != null) el.selectionStart = start - offset;
				if (end != null) el.selectionEnd = end - offset;
			});
		}
		useRender(() => {
			const hasCounter = !!(slots.counter || props.counter !== false && props.counter != null);
			const hasDetails = !!(hasCounter || slots.details);
			const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
			const { modelValue: _, ...inputProps } = VInput.filterProps(props);
			const fieldProps = VField.filterProps(props);
			return createVNode(VInput, mergeProps({
				"ref": vInputRef,
				"modelValue": model.value,
				"onUpdate:modelValue": ($event) => model.value = $event,
				"class": [
					"v-text-field",
					{
						"v-text-field--prefixed": props.prefix,
						"v-text-field--suffixed": props.suffix,
						"v-input--plain-underlined": isPlainOrUnderlined.value
					},
					props.class
				],
				"style": props.style
			}, rootAttrs, inputProps, {
				"centerAffix": !isPlainOrUnderlined.value,
				"focused": isFocused.value,
				"indentDetails": props.indentDetails ?? !isPlainOrUnderlined.value
			}), {
				...slots,
				default: ({ id, isDisabled, isDirty, isReadonly, isValid, hasDetails, reset }) => createVNode(VField, mergeProps({
					"ref": vFieldRef,
					"onMousedown": onControlMousedown,
					"onClick": onControlClick,
					"onClick:clear": (e) => onClear(e, reset),
					"role": props.role
				}, omit(fieldProps, ["onClick:clear"]), {
					"id": id.value,
					"labelId": `${id.value}-label`,
					"active": isActive.value || isDirty.value,
					"dirty": isDirty.value || props.dirty,
					"disabled": isDisabled.value,
					"focused": isFocused.value,
					"details": hasDetails.value,
					"error": isValid.value === false
				}), {
					...slots,
					default: ({ props: { class: fieldClass, ...slotProps }, controlRef }) => {
						const inputNode = createBaseVNode("input", mergeProps({
							"ref": (val) => inputRef.value = controlRef.value = val,
							"value": model.value,
							"onInput": onInput,
							"autofocus": props.autofocus,
							"readonly": isReadonly.value,
							"disabled": isDisabled.value,
							"name": autocomplete.fieldName.value,
							"autocomplete": autocomplete.fieldAutocomplete.value,
							"placeholder": props.placeholder,
							"size": 1,
							"role": props.role,
							"type": props.type,
							"onFocus": focus,
							"onBlur": blur,
							"aria-labelledby": `${id.value}-label`
						}, slotProps, inputAttrs), null);
						return createBaseVNode(Fragment, null, [
							props.prefix && createBaseVNode("span", { "class": "v-text-field__prefix" }, [createBaseVNode("span", { "class": "v-text-field__prefix__text" }, [props.prefix])]),
							withDirectives(slots.default ? createBaseVNode("div", {
								"class": normalizeClass(fieldClass),
								"data-no-activator": ""
							}, [slots.default({ id }), inputNode]) : cloneVNode(inputNode, { class: fieldClass }), [[
								Intersect,
								onIntersect,
								null,
								{ once: true }
							]]),
							props.suffix && createBaseVNode("span", { "class": "v-text-field__suffix" }, [createBaseVNode("span", { "class": "v-text-field__suffix__text" }, [props.suffix])])
						]);
					}
				}),
				details: hasDetails ? (slotProps) => createBaseVNode(Fragment, null, [slots.details?.(slotProps), hasCounter && createBaseVNode(Fragment, null, [createBaseVNode("span", null, null), createVNode(VCounter, {
					"active": props.persistentCounter || isFocused.value,
					"value": counterValue.value,
					"max": max.value,
					"disabled": props.disabled
				}, slots.counter)])]) : void 0
			});
		});
		return forwardRefs({}, vInputRef, vFieldRef, inputRef);
	}
});
//#endregion
export { createVuetify as a, VApp as i, VBtn as n, VIcon as r, VTextField as t };
