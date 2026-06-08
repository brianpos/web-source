# US Quality Core Task Rejected - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Task Rejected 

 
Profile of TaskRejected for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* basedOn: (USCDI+ Quality) Request fulfilled by this task
* status: (USCDI+ Quality) The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action
* statusReason: (USCDI+ Quality)
* code: (USCDI+ Quality) Task Type
* focus: (USCDI+ Quality)
* executionPeriod: (USCDI+ Quality) The timing the task was rejected and the reason.
* reasonCode: (USCDI+ Quality) Why task is needed

The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents a task that was rejected before execution. To represent tasks that were not rejected, use the [US Quality Core Task](StructureDefinition-us-quality-core-task.md) profile.

**Usages:**

* Examples for this Profile: [Task/negation-example](Task-negation-example.md) and [Task/negation-with-code-example](Task-negation-with-code-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-taskrejected.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-taskrejected.csv), [Excel](../StructureDefinition-us-quality-core-taskrejected.xlsx), [Schematron](../StructureDefinition-us-quality-core-taskrejected.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-taskrejected",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-taskrejected",
  "version" : "0.5.0",
  "name" : "USQualityCoreTaskRejected",
  "title" : "US Quality Core Task Rejected",
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
  "description" : "Profile of TaskRejected for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "Task",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Task",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Task",
      "path" : "Task",
      "constraint" : [{
        "key" : "tnd-1",
        "severity" : "error",
        "human" : "to indicate what task was not performed, either at least one coding in the code or a notDoneValueSet extension shall be provided",
        "expression" : "code.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor  code.coding.exists()",
        "xpath" : "exists(f:extension)"
      }],
      "mustSupport" : false
    },
    {
      "id" : "Task.basedOn",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.basedOn",
      "short" : "(USCDI+ Quality) Request fulfilled by this task"
    },
    {
      "id" : "Task.status",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.status",
      "short" : "(USCDI+ Quality) The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }],
      "fixedCode" : "rejected"
    },
    {
      "id" : "Task.statusReason",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.statusReason",
      "short" : "(USCDI+ Quality)",
      "min" : 1,
      "max" : "1",
      "mustSupport" : false,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-negation-reason"
      }
    },
    {
      "id" : "Task.code",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.code",
      "short" : "(USCDI+ Quality) Task Type",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "condition" : ["tnd-1"],
      "binding" : {
        "strength" : "preferred",
        "description" : "Codes to identify what the task involves. These will typically be specific to a particular workflow.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/task-code"
      }
    },
    {
      "id" : "Task.code.extension:notDoneValueSet",
      "path" : "Task.code.extension",
      "sliceName" : "notDoneValueSet",
      "short" : "Url of a value set of activities not requested or performed",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }],
      "condition" : ["tnd-1"]
    },
    {
      "id" : "Task.focus",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.focus",
      "short" : "(USCDI+ Quality)",
      "min" : 1,
      "max" : "1",
      "mustSupport" : false
    },
    {
      "id" : "Task.for",
      "path" : "Task.for",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Task.encounter",
      "path" : "Task.encounter",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Task.executionPeriod",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.executionPeriod",
      "short" : "(USCDI+ Quality) The timing the task was rejected and the reason.",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "Task.reasonCode",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.reasonCode",
      "short" : "(USCDI+ Quality) Why task is needed"
    }]
  }
}

```
