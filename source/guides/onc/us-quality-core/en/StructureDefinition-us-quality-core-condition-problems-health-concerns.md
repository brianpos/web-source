# US Quality Core Condition Problems Health Concerns - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Condition Problems Health Concerns 

 
Profile of Condition for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* clinicalStatus: (USCDI+ Quality) (USCDI) active | recurrence | relapse | inactive | remission | resolved
* verificationStatus: (USCDI+ Quality) (USCDI) unconfirmed | provisional | differential | confirmed | refuted | entered-in-error
* category:us-core: (USCDI+ Quality) (USCDI) problem-list-item | health-concern
* severity: (USCDI+ Quality) Subjective severity of condition
* code: (USCDI+ Quality) (USCDI) Identification of the condition, problem or diagnosis
* onset[x]: (USCDI+ Quality) (USCDI) Estimated or actual date, date-time, or age
* abatement[x]: (USCDI+ Quality) (USCDI) When in resolution/remission
* recordedDate: (USCDI+ Quality) (USCDI) Date record was first recorded

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md), [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md)... Show 4 more, [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md), [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md), [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) and [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)
* Examples for this Profile: [Condition/health-concern-example](Condition-health-concern-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-condition-problems-health-concerns.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-condition-problems-health-concerns.csv), [Excel](../StructureDefinition-us-quality-core-condition-problems-health-concerns.xlsx), [Schematron](../StructureDefinition-us-quality-core-condition-problems-health-concerns.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

```
define "Active Diabetes Conditions":
  [ConditionProblemsHealthConcerns: Diabetes] Condition
    where Condition.isActive()
```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-condition-problems-health-concerns",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-problems-health-concerns",
  "version" : "0.5.0",
  "name" : "USQualityCoreConditionProblemsHealthConcerns",
  "title" : "US Quality Core Condition Problems Health Concerns",
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
  "description" : "Profile of Condition for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
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
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Condition",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-problems-health-concerns|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Condition",
      "path" : "Condition",
      "definition" : "A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.",
      "mustSupport" : false
    },
    {
      "id" : "Condition.clinicalStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.clinicalStatus",
      "short" : "(USCDI+ Quality) (USCDI) active | recurrence | relapse | inactive | remission | resolved"
    },
    {
      "id" : "Condition.verificationStatus",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.verificationStatus",
      "short" : "(USCDI+ Quality) (USCDI) unconfirmed | provisional | differential | confirmed | refuted | entered-in-error"
    },
    {
      "id" : "Condition.category:us-core",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.category",
      "sliceName" : "us-core",
      "short" : "(USCDI+ Quality) (USCDI) problem-list-item | health-concern"
    },
    {
      "id" : "Condition.severity",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.severity",
      "short" : "(USCDI+ Quality) Subjective severity of condition"
    },
    {
      "id" : "Condition.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.code",
      "short" : "(USCDI+ Quality) (USCDI) Identification of the condition, problem or diagnosis"
    },
    {
      "id" : "Condition.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Condition.subject",
      "short" : "(USCDI) Who has the condition?",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "Condition.onset[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.onset[x]",
      "short" : "(USCDI+ Quality) (USCDI) Estimated or actual date, date-time, or age",
      "type" : [{
        "code" : "dateTime"
      },
      {
        "code" : "Age"
      },
      {
        "code" : "Period"
      },
      {
        "code" : "Range"
      }]
    },
    {
      "id" : "Condition.abatement[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.abatement[x]",
      "short" : "(USCDI+ Quality) (USCDI) When in resolution/remission",
      "type" : [{
        "code" : "dateTime"
      },
      {
        "code" : "Age"
      },
      {
        "code" : "Period"
      },
      {
        "code" : "Range"
      }]
    },
    {
      "id" : "Condition.recordedDate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.recordedDate",
      "short" : "(USCDI+ Quality) (USCDI) Date record was first recorded"
    }]
  }
}

```
