# US Quality Core Communication Not Done - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Communication Not Done 

 
Profile of CommunicationNotDone for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents a communication event that intentionally did not occur for a medical, patient, or system reason. To represent communication events that did occur, use the [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [Communication/negation-example](Communication-negation-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-communicationnotdone.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-communicationnotdone.csv), [Excel](../StructureDefinition-us-quality-core-communicationnotdone.xlsx), [Schematron](../StructureDefinition-us-quality-core-communicationnotdone.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The Communication and CommunicationNotDone profiles represent the positive and negative statements for a communication event.

This example meets measure intent for exclusion as defined in the following illustrative CQL (informational; not part of conformance requirements):

```
[CommunicationNotDone: "Macular edema absent (finding)"] MacularEdemaAbsentNotCommunicated
  with "Diabetic Retinopathy Encounter" EncounterDiabeticRetinopathy
    such that MacularEdemaAbsentNotCommunicated.sent during EncounterDiabeticRetinopathy.period
      and ( MacularEdemaAbsentNotCommunicated.statusReason in "Medical Reason"
        or MacularEdemaAbsentNotCommunicated.statusReason in "Patient Reason"
      )
```

For a more complete discussion of representation of negation within US Quality Core and quality improvement artifacts, see the [Negation in US Quality Core](general-requirements.md#negation-in-us-quality-core) topic.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-communicationnotdone",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-communicationnotdone",
  "version" : "0.5.0",
  "name" : "USQualityCoreCommunicationNotDone",
  "title" : "US Quality Core Communication Not Done",
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
  "description" : "Profile of CommunicationNotDone for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Communication",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Communication",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Communication",
      "path" : "Communication",
      "constraint" : [{
        "key" : "cnd-1",
        "severity" : "error",
        "human" : "to indicate what communication was not carried out, either at least one coding in the topic or a notDoneValueSet extension shall be provided",
        "expression" : "topic.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor topic.coding.exists()"
      }],
      "mustSupport" : false
    },
    {
      "id" : "Communication.extension:recorded",
      "path" : "Communication.extension",
      "sliceName" : "recorded",
      "short" : "Extension",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-recorded"]
      }]
    },
    {
      "id" : "Communication.status",
      "path" : "Communication.status",
      "short" : "preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }],
      "fixedCode" : "not-done"
    },
    {
      "id" : "Communication.statusReason",
      "path" : "Communication.statusReason",
      "short" : "Reason for current status",
      "min" : 1,
      "max" : "1",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-negation-reason"
      }
    },
    {
      "id" : "Communication.subject",
      "path" : "Communication.subject",
      "short" : "Focus of message",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://hl7.org/fhir/StructureDefinition/Group"]
      }]
    },
    {
      "id" : "Communication.topic",
      "path" : "Communication.topic",
      "short" : "Description of the purpose/content",
      "min" : 1,
      "max" : "1",
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "CommunicationTopic"
        }],
        "strength" : "preferred",
        "description" : "Codes describing the purpose or content of the communication.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/communication-topic"
      }
    },
    {
      "id" : "Communication.topic.extension:notDoneValueSet",
      "path" : "Communication.topic.extension",
      "sliceName" : "notDoneValueSet",
      "short" : "Url of a value set of activities not requested or performed",
      "definition" : "A logical reference (e.g. a reference to ValueSet.url) to a value set/version that identifies a set of possible coded values representing activities that were not requested, ordered, or performed.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }]
    }]
  }
}

```
