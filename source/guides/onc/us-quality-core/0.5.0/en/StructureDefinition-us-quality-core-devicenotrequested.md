# US Quality Core Device Not Requested - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Device Not Requested 

 
Profile of DeviceRequest for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* code[x]: (USCDI+ Quality) Device requested

The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents a device request that was intentionally not requested for a medical, patient, or system reason. To represent device requests that were requested, use the [US Quality Core DeviceRequest](StructureDefinition-us-quality-core-devicerequest.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [DeviceRequest/negation-example](DeviceRequest-negation-example.md) and [DeviceRequest/negation-with-code-example](DeviceRequest-negation-with-code-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-devicenotrequested.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-devicenotrequested.csv), [Excel](../StructureDefinition-us-quality-core-devicenotrequested.xlsx), [Schematron](../StructureDefinition-us-quality-core-devicenotrequested.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The DeviceRequest and DeviceNotRequested profiles represent the positive and negative statements for a device request.

The following example illustrates accessing DeviceRequest not requested data:

```
define "Venous Foot Pumps Not Ordered":
[DeviceNotRequested: "Venous Foot Pumps (VFP)"] DeviceNotOrdered
  where (DeviceNotOrdered.doNotPerformReason() in "Medical Reason"
    or DeviceNotOrdered.doNotPerformReason() in "Patient Refusal"
  )
```

For a more complete discussion of representation of negation within US Quality Core and quality improvement artifacts, see the [Negation in US Quality Core](general-requirements.md#negation-in-us-quality-core) topic.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-devicenotrequested",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-devicenotrequested",
  "version" : "0.5.0",
  "name" : "USQualityCoreDeviceNotRequested",
  "title" : "US Quality Core Device Not Requested",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-06-05",
  "publisher" : "Office of the National Coordinator for Health Information Technology (ONC)",
  "contact" : [{
    "name" : "Office of the National Coordinator for Health Information Technology (ONC)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.healthit.gov/feedback"
    }]
  }],
  "description" : "Profile of DeviceRequest for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "quick",
    "uri" : "http://siframework.org/cqf",
    "name" : "Quality Improvement and Clinical Knowledge (QUICK)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DeviceRequest",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/DeviceRequest",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DeviceRequest",
      "path" : "DeviceRequest",
      "constraint" : [{
        "key" : "dnr-1",
        "severity" : "error",
        "human" : "to indicate what device was not requested, either at least one coding in the code or a notDoneValueSet extension shall be provided",
        "expression" : "code.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor code.coding.exists()",
        "xpath" : "exists(f:extension)"
      }],
      "mustSupport" : false
    },
    {
      "id" : "DeviceRequest.extension:doNotPerformReason",
      "path" : "DeviceRequest.extension",
      "sliceName" : "doNotPerformReason",
      "short" : "Extension",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason"]
      }]
    },
    {
      "id" : "DeviceRequest.modifierExtension:doNotPerform",
      "path" : "DeviceRequest.modifierExtension",
      "sliceName" : "doNotPerform",
      "short" : "Extension",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/5.0/StructureDefinition/extension-DeviceRequest.doNotPerform"]
      }],
      "isModifier" : true,
      "isModifierReason" : "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them"
    },
    {
      "id" : "DeviceRequest.modifierExtension:doNotPerform.value[x]",
      "path" : "DeviceRequest.modifierExtension.value[x]",
      "short" : "Value of extension",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "boolean"
      }],
      "fixedBoolean" : true
    },
    {
      "id" : "DeviceRequest.status",
      "path" : "DeviceRequest.status",
      "short" : "draft | active | on-hold | revoked | completed | entered-in-error | unknown"
    },
    {
      "id" : "DeviceRequest.intent",
      "path" : "DeviceRequest.intent",
      "short" : "proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option"
    },
    {
      "id" : "DeviceRequest.code[x]",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "DeviceRequest.code[x]",
      "short" : "(USCDI+ Quality) Device requested",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "condition" : ["dnr-1"],
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/device-kind"
      }
    },
    {
      "id" : "DeviceRequest.code[x].extension:doNotPerformValueSet",
      "path" : "DeviceRequest.code[x].extension",
      "sliceName" : "doNotPerformValueSet",
      "short" : "What was not done",
      "definition" : "Specifies the value set that characterizes the events or activities that did not occur or were not performed.",
      "requirements" : "Must be able to indicate the value set from which the expected event would be drawn, had it occurred.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }],
      "condition" : ["dnr-1"]
    },
    {
      "id" : "DeviceRequest.subject",
      "path" : "DeviceRequest.subject",
      "short" : "Focus of request",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "DeviceRequest.authoredOn",
      "path" : "DeviceRequest.authoredOn",
      "short" : "When recorded",
      "min" : 1,
      "max" : "1"
    }]
  }
}

```
