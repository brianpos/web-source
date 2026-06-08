# US Quality Core AllergyIntolerance - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core AllergyIntolerance 

 
Profile of AllergyIntolerance for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* code: (USCDI+ Quality) (USCDI) Code that identifies the allergy or intolerance
* onset[x]: (USCDI+ Quality) When allergy or intolerance was identified
* recordedDate: (USCDI+ Quality) Date first version of the resource instance was recorded
* lastOccurrence: (USCDI+ Quality) Date(/time) of last known occurrence of a reaction
* reaction: (USCDI+ Quality) (USCDI) Adverse Reaction Events linked to exposure to substance

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md) and [US Quality Core ImmunizationRecommendation](StructureDefinition-us-quality-core-immunizationrecommendation.md)
* Examples for this Profile: [AllergyIntolerance/example-refuted](AllergyIntolerance-example-refuted.md) and [AllergyIntolerance/example](AllergyIntolerance-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-allergyintolerance.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-allergyintolerance.csv), [Excel](../StructureDefinition-us-quality-core-allergyintolerance.xlsx), [Schematron](../StructureDefinition-us-quality-core-allergyintolerance.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

```
define "Statin Allergy Intolerance":
  ["AllergyIntolerance": "Statin Allergen"] StatinAllergyIntolerance
    where StatinAllergyIntolerance.clinicalStatus ~ "allergy-active"

```

This example represents a situation where the subject is currently experiencing, or is at risk of, a reaction to the identified substance.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-allergyintolerance",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-allergyintolerance",
  "version" : "0.5.0",
  "name" : "USQualityCoreAllergyIntolerance",
  "title" : "US Quality Core AllergyIntolerance",
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
  "description" : "Profile of AllergyIntolerance for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "AllergyIntolerance",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "AllergyIntolerance",
      "path" : "AllergyIntolerance",
      "definition" : "The US Quality Core AllergyIntolerance Profile is based upon the US Core AllergyIntolerance Profile which is based upon the core FHIR AllergyIntolerance Resource and created to meet the 2015 Edition Common Clinical Data Set 'Medical allergies' requirements.",
      "mustSupport" : false
    },
    {
      "id" : "AllergyIntolerance.extension:resolutionAge",
      "path" : "AllergyIntolerance.extension",
      "sliceName" : "resolutionAge",
      "definition" : "The estimated patient age at which the allergy or intolerance resolved. Should be specified only if the status is resolved.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/allergyintolerance-resolutionAge"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "AllergyIntolerance.type",
      "path" : "AllergyIntolerance.type",
      "short" : "allergy | intolerance - Underlying mechanism (if known)"
    },
    {
      "id" : "AllergyIntolerance.category",
      "path" : "AllergyIntolerance.category",
      "short" : "food | medication | environment | biologic"
    },
    {
      "id" : "AllergyIntolerance.criticality",
      "path" : "AllergyIntolerance.criticality",
      "short" : "low | high | unable-to-assess"
    },
    {
      "id" : "AllergyIntolerance.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AllergyIntolerance.code",
      "short" : "(USCDI+ Quality) (USCDI) Code that identifies the allergy or intolerance"
    },
    {
      "id" : "AllergyIntolerance.patient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "AllergyIntolerance.patient",
      "short" : "(USCDI) Who the sensitivity is for",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "AllergyIntolerance.onset[x]",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AllergyIntolerance.onset[x]",
      "short" : "(USCDI+ Quality) When allergy or intolerance was identified",
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
      }],
      "mustSupport" : false
    },
    {
      "id" : "AllergyIntolerance.recordedDate",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AllergyIntolerance.recordedDate",
      "short" : "(USCDI+ Quality) Date first version of the resource instance was recorded",
      "type" : [{
        "code" : "dateTime"
      }]
    },
    {
      "id" : "AllergyIntolerance.lastOccurrence",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AllergyIntolerance.lastOccurrence",
      "short" : "(USCDI+ Quality) Date(/time) of last known occurrence of a reaction"
    },
    {
      "id" : "AllergyIntolerance.reaction",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AllergyIntolerance.reaction",
      "short" : "(USCDI+ Quality) (USCDI) Adverse Reaction Events linked to exposure to substance"
    },
    {
      "id" : "AllergyIntolerance.reaction.manifestation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "AllergyIntolerance.reaction.manifestation",
      "short" : "(USCDI) Clinical symptoms/signs associated with the Event"
    },
    {
      "id" : "AllergyIntolerance.reaction.severity",
      "path" : "AllergyIntolerance.reaction.severity",
      "short" : "mild | moderate | severe (of event as a whole)"
    }]
  }
}

```
