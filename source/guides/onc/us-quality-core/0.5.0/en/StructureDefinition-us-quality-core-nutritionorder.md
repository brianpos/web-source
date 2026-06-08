# US Quality Core NutritionOrder - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core NutritionOrder 

 
Defines constraints and extensions on the NutritionOrder resource for the minimal set of data to query and retrieve a patient's Nutrition Order. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md)
* Examples for this Profile: [NutritionOrder/example](NutritionOrder-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-nutritionorder.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-nutritionorder.csv), [Excel](../StructureDefinition-us-quality-core-nutritionorder.xlsx), [Schematron](../StructureDefinition-us-quality-core-nutritionorder.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-nutritionorder",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-nutritionorder",
  "version" : "0.5.0",
  "name" : "USQualityCoreNutritionOrder",
  "title" : "US Quality Core NutritionOrder",
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
  "description" : "Defines constraints and extensions on the NutritionOrder resource for the minimal set of data to query and retrieve a patient's Nutrition Order.",
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
  "type" : "NutritionOrder",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "NutritionOrder",
      "path" : "NutritionOrder"
    },
    {
      "id" : "NutritionOrder.identifier",
      "path" : "NutritionOrder.identifier",
      "type" : [{
        "code" : "Identifier"
      }],
      "mustSupport" : false
    },
    {
      "id" : "NutritionOrder.intent",
      "path" : "NutritionOrder.intent",
      "short" : "proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option"
    },
    {
      "id" : "NutritionOrder.patient",
      "path" : "NutritionOrder.patient",
      "short" : "The person who requires the diet, formula or nutritional supplement",
      "definition" : "The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.",
      "requirements" : "The person who requires the diet, formula or nutritional supplement.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    }]
  }
}

```
