# US Quality Core Substance - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Substance 

 
Profile of Substance for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core Medication](StructureDefinition-us-quality-core-medication.md) and [US Quality Core Substance](StructureDefinition-us-quality-core-substance.md)
* Examples for this Profile: [Substance/example](Substance-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-substance.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-substance.csv), [Excel](../StructureDefinition-us-quality-core-substance.xlsx), [Schematron](../StructureDefinition-us-quality-core-substance.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-substance",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-substance",
  "version" : "0.5.0",
  "name" : "USQualityCoreSubstance",
  "title" : "US Quality Core Substance",
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
  "description" : "Profile of Substance for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "orim",
    "uri" : "http://hl7.org/orim",
    "name" : "Ontological RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Substance",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Substance",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Substance",
      "path" : "Substance"
    },
    {
      "id" : "Substance.code",
      "path" : "Substance.code",
      "short" : "If this describes a specific package/container of the substance",
      "binding" : {
        "strength" : "preferred",
        "description" : "Substance codes",
        "valueSet" : "http://hl7.org/fhir/ValueSet/substance-code"
      }
    },
    {
      "id" : "Substance.instance",
      "path" : "Substance.instance",
      "mustSupport" : false
    },
    {
      "id" : "Substance.instance.quantity",
      "path" : "Substance.instance.quantity",
      "short" : "Amount of substance in the package"
    },
    {
      "id" : "Substance.ingredient",
      "path" : "Substance.ingredient",
      "mustSupport" : false
    },
    {
      "id" : "Substance.ingredient.quantity",
      "path" : "Substance.ingredient.quantity",
      "short" : "Optional amount (concentration)"
    },
    {
      "id" : "Substance.ingredient.substance[x]",
      "path" : "Substance.ingredient.substance[x]",
      "short" : "A component of the substance",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-substance"]
      }]
    }]
  }
}

```
