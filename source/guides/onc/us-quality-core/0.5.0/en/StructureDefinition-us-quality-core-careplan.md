# US Quality Core CarePlan - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core CarePlan 

 
The US Quality Core CarePlan is based upon the US Core CarePlan Profile which is based upon the core FHIR CarePlan Resource and created to meet the 2015 Edition Common Clinical Data Set 'Assessment and Plan of Treatment requirements. Defines constraints and extensions on the CarePlan resource for the minimal set of data to query and retrieve a patient's Care Plan. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* text: (USCDI+ Quality) (USCDI) Text summary of the resource, for human interpretation

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md), [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md) and [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)
* Examples for this Profile: [CarePlan/example](CarePlan-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-careplan.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-careplan.csv), [Excel](../StructureDefinition-us-quality-core-careplan.xlsx), [Schematron](../StructureDefinition-us-quality-core-careplan.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-careplan",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-careplan",
  "version" : "0.5.0",
  "name" : "USQualityCoreCarePlan",
  "title" : "US Quality Core CarePlan",
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
  "description" : "The US Quality Core CarePlan is based upon the US Core CarePlan Profile which is based upon the core FHIR CarePlan Resource and created to meet the 2015 Edition Common Clinical Data Set 'Assessment and Plan of Treatment requirements. Defines constraints and extensions on the CarePlan resource for the minimal set of data to query and retrieve a patient's Care Plan.",
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
  "type" : "CarePlan",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "CarePlan",
      "path" : "CarePlan"
    },
    {
      "id" : "CarePlan.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "CarePlan.text",
      "short" : "(USCDI+ Quality) (USCDI) Text summary of the resource, for human interpretation"
    },
    {
      "id" : "CarePlan.category",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "CarePlan.category",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "short" : "(USCDI) Type of plan",
      "definition" : "Type of plan.",
      "comment" : "There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.",
      "requirements" : "Identifies what \"kind\" of plan this is to support differentiation between multiple co-existing plans; e.g. \"Home health\", \"psychiatric\", \"asthma\", \"disease management\", \"wellness plan\", etc.",
      "min" : 1,
      "max" : "*",
      "base" : {
        "path" : "CarePlan.category",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "CarePlanCategory"
        }],
        "strength" : "preferred",
        "description" : "Identifies what \"kind\" of plan this is to support differentiation between multiple co-existing plans; e.g. \"Home health\", \"psychiatric\", \"asthma\", \"disease management\", etc.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/care-plan-category"
      }
    },
    {
      "id" : "CarePlan.category:AssessPlan",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "CarePlan.category",
      "sliceName" : "AssessPlan",
      "short" : "(USCDI) Type of plan",
      "definition" : "Type of plan.",
      "comment" : "There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.",
      "requirements" : "Identifies what \"kind\" of plan this is to support differentiation between multiple co-existing plans; e.g. \"Home health\", \"psychiatric\", \"asthma\", \"disease management\", \"wellness plan\", etc.",
      "min" : 1,
      "max" : "1",
      "base" : {
        "path" : "CarePlan.category",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
          "code" : "assess-plan"
        }]
      },
      "isModifier" : false,
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "CarePlanCategory"
        }],
        "strength" : "preferred",
        "description" : "Identifies what \"kind\" of plan this is to support differentiation between multiple co-existing plans; e.g. \"Home health\", \"psychiatric\", \"asthma\", \"disease management\", etc.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/care-plan-category"
      }
    },
    {
      "id" : "CarePlan.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "CarePlan.subject",
      "short" : "(USCDI) Who the care plan is for.",
      "definition" : "Who care plan is for.",
      "requirements" : "Identifies the patient or group whose intended care is described by the plan.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    }]
  }
}

```
