# US Quality Core Procedure - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Procedure 

 
Profile of Procedure for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* extension:recorded: (USCDI+ Quality) When the procedure was first captured in the subject's record
* partOf: (USCDI+ Quality) Part of referenced event
* status: (USCDI+ Quality) (USCDI) preparation | in-progress | ​on-hold​ | stopped​ | completed | entered-in-error​ | unknown​
* statusReason: (USCDI+ Quality) Reason for current status
* code: (USCDI+ Quality) (USCDI) Identification of the procedure
* performed[x]: (USCDI+ Quality) (USCDI) When the procedure was performed
* reasonCode: (USCDI+ Quality) Coded reason procedure performed
* reasonReference: (USCDI+ Quality) The justification that the procedure was performed

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

To represent that a procedure intentionally did not occur for a medical, patient, or system reason, use the [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) and [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md)
* Examples for this Profile: [Procedure/example](Procedure-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-procedure.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-procedure.csv), [Excel](../StructureDefinition-us-quality-core-procedure.xlsx), [Schematron](../StructureDefinition-us-quality-core-procedure.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

To create an expression specifically requesting information that a procedure intentionally did not occur for a medical, patient or system reason, use the profile [USQualityCore-Procedurenotdone](StructureDefinition-us-quality-core-procedurenotdone.md).

The following example illustrates the use of the Procedure profile:

```
define "Application of Intermittent Pneumatic Compression Devices":
  ["Procedure": "Application of Intermittent Pneumatic Compression Devices (IPC)"] DeviceApplied
    where DeviceApplied.status = 'completed'
```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-procedure",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-procedure",
  "version" : "0.5.0",
  "name" : "USQualityCoreProcedure",
  "title" : "US Quality Core Procedure",
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
  "description" : "Profile of Procedure for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Procedure",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Procedure",
      "path" : "Procedure"
    },
    {
      "id" : "Procedure.implicitRules",
      "path" : "Procedure.implicitRules",
      "short" : "A set of rules under which this content was created"
    },
    {
      "id" : "Procedure.extension:recorded",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.extension",
      "sliceName" : "recorded",
      "short" : "(USCDI+ Quality) When the procedure was first captured in the subject's record",
      "definition" : "The date the occurrence of the procedure was first captured in the record regardless of Procedure.status (potentially after the occurrence of the event).",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-recorded"]
      }]
    },
    {
      "id" : "Procedure.basedOn",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Procedure.basedOn",
      "short" : "(USCDI) A request for this procedure",
      "definition" : "A reference to a resource that contains details of the request for this procedure.",
      "alias" : ["fulfills"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "Procedure.basedOn",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-careplan",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest"]
      }],
      "mustSupport" : false,
      "isModifier" : false,
      "isSummary" : true
    },
    {
      "id" : "Procedure.partOf",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.partOf",
      "short" : "(USCDI+ Quality) Part of referenced event"
    },
    {
      "id" : "Procedure.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.status",
      "short" : "(USCDI+ Quality) (USCDI) preparation | in-progress | ​on-hold​ | stopped​ | completed | entered-in-error​ | unknown​",
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-non-negative-event-status"
      }
    },
    {
      "id" : "Procedure.statusReason",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.statusReason",
      "short" : "(USCDI+ Quality) Reason for current status"
    },
    {
      "id" : "Procedure.category",
      "path" : "Procedure.category",
      "short" : "Classification of the procedure"
    },
    {
      "id" : "Procedure.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.code",
      "short" : "(USCDI+ Quality) (USCDI) Identification of the procedure"
    },
    {
      "id" : "Procedure.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Procedure.subject",
      "short" : "(USCDI) Who the procedure was performed on",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "Procedure.performed[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.performed[x]",
      "short" : "(USCDI+ Quality) (USCDI) When the procedure was performed"
    },
    {
      "id" : "Procedure.performer.actor",
      "path" : "Procedure.performer.actor",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Procedure.reasonCode",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.reasonCode",
      "short" : "(USCDI+ Quality) Coded reason procedure performed",
      "binding" : {
        "strength" : "preferred",
        "description" : "A code that identifies the reason a procedure is required.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/procedure-reason"
      }
    },
    {
      "id" : "Procedure.reasonReference",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.reasonReference",
      "short" : "(USCDI+ Quality) The justification that the procedure was performed",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-problems-health-concerns",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-diagnosticreport-note",
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference|6.1.0"]
      }]
    }]
  }
}

```
