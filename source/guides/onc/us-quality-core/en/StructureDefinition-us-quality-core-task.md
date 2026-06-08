# US Quality Core Task - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Task 

 
Profile of Task for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* basedOn: (USCDI+ Quality) Request fulfilled by this task
* status: (USCDI+ Quality) draft​ | requested​ | received​ | accepted​ | ready​ | cancelled​ | in-progress​ | on-hold​ | failed​ | completed | entered-in-error
* statusReason: (USCDI+ Quality) Reason for current status
* code: (USCDI+ Quality) Task Type
* focus: (USCDI+ Quality) What task is acting on
* executionPeriod: (USCDI+ Quality)
* reasonCode: (USCDI+ Quality)

The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

To represent that a task was rejected before execution, use the [US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md) profile.

**Usages:**

* Examples for this Profile: [Task/example](Task-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-task.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-task.csv), [Excel](../StructureDefinition-us-quality-core-task.xlsx), [Schematron](../StructureDefinition-us-quality-core-task.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-task",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-task",
  "version" : "0.5.0",
  "name" : "USQualityCoreTask",
  "title" : "US Quality Core Task",
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
  "description" : "Profile of Task for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
      "path" : "Task"
    },
    {
      "id" : "Task.identifier",
      "path" : "Task.identifier",
      "short" : "Task Instance Identifier",
      "min" : 1,
      "max" : "*"
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
      "short" : "(USCDI+ Quality) draft​ | requested​ | received​ | accepted​ | ready​ | cancelled​ | in-progress​ | on-hold​ | failed​ | completed | entered-in-error",
      "min" : 1,
      "max" : "1",
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-non-negative-task-status"
      }
    },
    {
      "id" : "Task.statusReason",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.statusReason",
      "short" : "(USCDI+ Quality) Reason for current status"
    },
    {
      "id" : "Task.intent",
      "path" : "Task.intent",
      "short" : "unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "Task.priority",
      "path" : "Task.priority",
      "short" : "routine | urgent | asap | stat",
      "min" : 1,
      "max" : "1"
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
      "binding" : {
        "strength" : "preferred",
        "description" : "Codes to identify what the task involves. These will typically be specific to a particular workflow",
        "valueSet" : "http://hl7.org/fhir/ValueSet/task-code"
      }
    },
    {
      "id" : "Task.focus",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.focus",
      "short" : "(USCDI+ Quality) What task is acting on"
    },
    {
      "id" : "Task.executionPeriod",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.executionPeriod",
      "short" : "(USCDI+ Quality)",
      "min" : 1,
      "max" : "1",
      "mustSupport" : false
    },
    {
      "id" : "Task.reasonCode",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Task.reasonCode",
      "short" : "(USCDI+ Quality)",
      "mustSupport" : false
    }]
  }
}

```
