# US Quality Core DeviceRequest - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core DeviceRequest 

 
Profile of DeviceRequest for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* code[x]: (USCDI+ Quality) Device requested

The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

To represent that a device request was intentionally not requested for a medical, patient, or system reason, use the [US Quality Core Device Not Requested](StructureDefinition-us-quality-core-devicenotrequested.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md)
* Examples for this Profile: [DeviceRequest/example](DeviceRequest-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-devicerequest.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-devicerequest.csv), [Excel](../StructureDefinition-us-quality-core-devicerequest.xlsx), [Schematron](../StructureDefinition-us-quality-core-devicerequest.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The FHIR R4 DeviceRequest resource and the US Quality Core DeviceRequest profile describe a request for a patient to use a device. The device may be any pertinent device specified in the Device resource. Examples of devices that may be requested include a wheelchair, hearing aids, or an insulin pump. The request may lead to the dispensing of the device to the patient or for use by the patient. Orders or recommendations for use of a device for a patient use the ServiceRequest resource.

To create an expression specifically requesting information that a DeviceRequest intentionally did not occur for a medical, patient or system reason, use the profile [USQualityCore-Devicenotrequested](StructureDefinition-us-quality-core-devicenotrequested.md).

The following example illustrates the use of DeviceRequest:

```
define "Device Indicating Frailty":
  [DeviceRequest: "Frailty Device"] FrailtyDeviceOrder
    where FrailtyDeviceOrder.status in { 'active', 'on-hold', 'completed' }
      and FrailtyDeviceOrder.intent in { 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order' }
```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-devicerequest",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-devicerequest",
  "version" : "0.5.0",
  "name" : "USQualityCoreDeviceRequest",
  "title" : "US Quality Core DeviceRequest",
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
      "path" : "DeviceRequest"
    },
    {
      "id" : "DeviceRequest.modifierExtension:doNotPerform",
      "path" : "DeviceRequest.modifierExtension",
      "sliceName" : "doNotPerform",
      "short" : "Extension",
      "min" : 0,
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
      "fixedBoolean" : false
    },
    {
      "id" : "DeviceRequest.identifier",
      "path" : "DeviceRequest.identifier",
      "short" : "External Request identifier"
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
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/device-kind"
      }
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
      "short" : "When recorded"
    }]
  }
}

```
