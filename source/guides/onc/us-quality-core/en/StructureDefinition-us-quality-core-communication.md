# US Quality Core Communication - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Communication 

 
Profile of Communication for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

To represent that a communication event intentionally did not occur for a medical, patient, or system reason, use the [US Quality Core Communication Not Done](StructureDefinition-us-quality-core-communicationnotdone.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [Communication/example](Communication-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-communication.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-communication.csv), [Excel](../StructureDefinition-us-quality-core-communication.xlsx), [Schematron](../StructureDefinition-us-quality-core-communication.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

To create an expression specifically requesting information that a communication intentionally did not occur for a medical, patient or system reason, use the profile [USQualityCore-communicationnotdone](StructureDefinition-us-quality-core-communicationnotdone.md).

The Communication and CommunicationNotDone profiles represent the positive and negative statements for a communication event. To ensure instances retrieved meet positive intent, applications should check the status as illustrated in this example:

```
define Communication:
  [Communication] C
    where C.status in { 'preparation', 'in-progress', 'on-hold', 'completed' }

```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-communication",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-communication",
  "version" : "0.5.0",
  "name" : "USQualityCoreCommunication",
  "title" : "US Quality Core Communication",
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
  "description" : "Profile of Communication for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
      "mustSupport" : false
    },
    {
      "id" : "Communication.status",
      "path" : "Communication.status",
      "short" : "preparation | in-progress | on-hold | stopped | completed | entered-in-error | unknown",
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-non-negative-event-status"
      }
    },
    {
      "id" : "Communication.subject",
      "path" : "Communication.subject",
      "short" : "Focus of message",
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
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://terminology.hl7.org/ValueSet/communication-topic"
      }
    },
    {
      "id" : "Communication.sent",
      "path" : "Communication.sent",
      "short" : "When sent"
    },
    {
      "id" : "Communication.received",
      "path" : "Communication.received",
      "short" : "When received"
    },
    {
      "id" : "Communication.recipient",
      "path" : "Communication.recipient",
      "short" : "Message recipient",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-device",
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device|6.1.0",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson",
        "http://hl7.org/fhir/StructureDefinition/Group"]
      }]
    },
    {
      "id" : "Communication.sender",
      "path" : "Communication.sender",
      "short" : "Message sender",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-device",
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device|6.1.0",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson"]
      }]
    }]
  }
}

```
