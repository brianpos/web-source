# US Quality Core QuestionnaireResponse - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core QuestionnaireResponse 

 
The US Quality Core QuestionnaireResponse Profile is based upon the US Core QuestionnaireResponse Profile and sets minimum expectations for the QuestionnaireResponse resource to record, search, and fetch retrieve captures the responses to form/survey and defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md), [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md), [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md) and [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)
* Examples for this Profile: [QuestionnaireResponse/PHQ-9-example](QuestionnaireResponse-PHQ-9-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-questionnaireresponse.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-questionnaireresponse.csv), [Excel](../StructureDefinition-us-quality-core-questionnaireresponse.xlsx), [Schematron](../StructureDefinition-us-quality-core-questionnaireresponse.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-questionnaireresponse",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-questionnaireresponse",
  "version" : "0.5.0",
  "name" : "USQualityCoreQuestionnaireResponse",
  "title" : "US Quality Core QuestionnaireResponse",
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
  "description" : "The US Quality Core QuestionnaireResponse Profile is based upon the US Core QuestionnaireResponse Profile and sets minimum expectations for the QuestionnaireResponse resource to record, search, and fetch retrieve captures the responses to form/survey and defines the core set of elements and extensions for quality rule and measure authors.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "copyright" : "Used by permission of HL7 International, all rights reserved Creative Commons License",
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
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "QuestionnaireResponse",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-questionnaireresponse|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "QuestionnaireResponse",
      "path" : "QuestionnaireResponse"
    },
    {
      "id" : "QuestionnaireResponse.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "QuestionnaireResponse.subject",
      "short" : "(USCDI) The subject of the questions",
      "comment" : "-",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "QuestionnaireResponse.author",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "QuestionnaireResponse.author",
      "short" : "(USCDI) Person who received and recorded the answers",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-device",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson",
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device|6.1.0"]
      }]
    },
    {
      "id" : "QuestionnaireResponse.item",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "QuestionnaireResponse.item",
      "short" : "(USCDI) Groups and questions"
    },
    {
      "id" : "QuestionnaireResponse.item.linkId",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "QuestionnaireResponse.item.linkId",
      "short" : "(USCDI) Pointer to specific item from Questionnaire"
    },
    {
      "id" : "QuestionnaireResponse.item.answer.value[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "QuestionnaireResponse.item.answer.value[x]",
      "short" : "(USCDI) Single-valued answer to the question",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Coding"
      },
      {
        "code" : "string"
      },
      {
        "code" : "decimal"
      },
      {
        "code" : "date"
      },
      {
        "code" : "dateTime"
      },
      {
        "code" : "integer"
      },
      {
        "code" : "Quantity"
      }]
    }]
  }
}

```
