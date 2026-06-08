# US Quality Core Procedure Not Done - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Procedure Not Done 

 
Profile of Procedure for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* extension:recorded: (USCDI+ Quality) When the procedure was first captured in the subject's record
* partOf: (USCDI+ Quality) Part of referenced event
* status: (USCDI+ Quality) (USCDI) preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
* statusReason: (USCDI+ Quality) Reason for the current status
* code: (USCDI+ Quality) (USCDI) Identification of the procedure
* performed[x]: (USCDI+ Quality) (USCDI) When the procedure was performed
* reasonCode: (USCDI+ Quality) Coded reason procedure performed
* reasonReference: (USCDI+ Quality) US Core Profile justifying the reason procedure performed

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents a procedure that intentionally did not occur for a medical, patient, or system reason. To represent procedures that did occur, use the [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [Procedure/negation-example](Procedure-negation-example.md) and [Procedure/negation-with-code-example](Procedure-negation-with-code-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-procedurenotdone.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-procedurenotdone.csv), [Excel](../StructureDefinition-us-quality-core-procedurenotdone.xlsx), [Schematron](../StructureDefinition-us-quality-core-procedurenotdone.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The Procedure and ProcedureNotDone profiles represent the positive and negative statements for a procedure.

The following example illustrates the use of the ProcedureNotDone profile:

```
define "Intermittent Pneumatic Compression Devices Not Applied":
  [ProcedureNotDone: "Application of Intermittent Pneumatic Compression Devices (IPC)"] DeviceNotApplied
    where DeviceNotApplied.statusReason in "Medical Reason"
      or DeviceNotApplied.statusReason in "Patient Refusal"
```

For a more complete discussion of representation of negation within US Quality Core and quality improvement artifacts, see the [Negation in US Quality Core](general-requirements.md#negation-in-us-quality-core) topic.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-procedurenotdone",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-procedurenotdone",
  "version" : "0.5.0",
  "name" : "USQualityCoreProcedureNotDone",
  "title" : "US Quality Core Procedure Not Done",
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
      "path" : "Procedure",
      "constraint" : [{
        "key" : "pnd-1",
        "severity" : "error",
        "human" : "to indicate what procedure was not performed, either at least one coding in the code or a notDoneValueSet extension shall be provided",
        "expression" : "code.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor code.coding.exists()"
      }],
      "mustSupport" : false
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
      "min" : 1,
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
      "short" : "(USCDI+ Quality) (USCDI) preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }],
      "fixedCode" : "not-done"
    },
    {
      "id" : "Procedure.statusReason",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.statusReason",
      "short" : "(USCDI+ Quality) Reason for the current status",
      "min" : 1,
      "max" : "1",
      "binding" : {
        "strength" : "extensible",
        "description" : "The reason the procedure was not done",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-negation-reason"
      }
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
      "short" : "(USCDI+ Quality) (USCDI) Identification of the procedure",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "condition" : ["pnd-1"]
    },
    {
      "id" : "Procedure.code.extension:notDoneValueSet",
      "path" : "Procedure.code.extension",
      "sliceName" : "notDoneValueSet",
      "short" : "What was not performed",
      "definition" : "Specifies the value set that characterizes the events or activities that did not occur or were not performed.",
      "requirements" : "Must be able to indicate the value set from which the expected event would be drawn, had it occurred.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }],
      "condition" : ["pnd-1"]
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
      "id" : "Procedure.reasonCode",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.reasonCode",
      "short" : "(USCDI+ Quality) Coded reason procedure performed"
    },
    {
      "id" : "Procedure.reasonReference",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Procedure.reasonReference",
      "short" : "(USCDI+ Quality) US Core Profile justifying the reason procedure performed"
    }]
  }
}

```
