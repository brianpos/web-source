# US Quality Core Goal - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Goal 

 
Profile of Goal for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* description: (USCDI+ Quality) (USCDI) Code or text describing goal
* target: (USCDI+ Quality) (USCDI) Target outcome for the goal

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Examples for this Profile: [Goal/example](Goal-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-goal.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-goal.csv), [Excel](../StructureDefinition-us-quality-core-goal.xlsx), [Schematron](../StructureDefinition-us-quality-core-goal.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-goal",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-goal",
  "version" : "0.5.0",
  "name" : "USQualityCoreGoal",
  "title" : "US Quality Core Goal",
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
  "description" : "Profile of Goal for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Goal",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-goal|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Goal",
      "path" : "Goal"
    },
    {
      "id" : "Goal.description",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Goal.description",
      "short" : "(USCDI+ Quality) (USCDI) Code or text describing goal"
    },
    {
      "id" : "Goal.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Goal.subject",
      "short" : "(USCDI) Who this goal is intended for",
      "comment" : "Should include us-quality-core-organization, but the base profile only allows USCore-Patient derivatives.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "Goal.start[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Goal.start[x]",
      "short" : "(USCDI) When goal pursuit begins",
      "definition" : "The date or event after which the goal should begin being pursued.",
      "requirements" : "Goals can be established prior to there being an intention to start pursuing them; e.g. Goals for post-surgical recovery established prior to surgery.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Goal.start[x]",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "date"
      },
      {
        "code" : "CodeableConcept"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "GoalStartEvent"
        }],
        "strength" : "preferred",
        "description" : "Codes describing events that can trigger the initiation of a goal.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/goal-start-event"
      }
    },
    {
      "id" : "Goal.target",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Goal.target",
      "short" : "(USCDI+ Quality) (USCDI) Target outcome for the goal"
    }]
  }
}

```
