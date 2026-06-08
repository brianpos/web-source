# US Quality Core Flag - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Flag 

 
Profile of Flag for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Examples for this Profile: [Flag/example](Flag-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-flag.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-flag.csv), [Excel](../StructureDefinition-us-quality-core-flag.xlsx), [Schematron](../StructureDefinition-us-quality-core-flag.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-flag",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-flag",
  "version" : "0.5.0",
  "name" : "USQualityCoreFlag",
  "title" : "US Quality Core Flag",
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
  "description" : "Profile of Flag for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Flag",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Flag",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Flag",
      "path" : "Flag"
    },
    {
      "id" : "Flag.status",
      "path" : "Flag.status",
      "short" : "active | inactive | entered-in-error"
    },
    {
      "id" : "Flag.category",
      "path" : "Flag.category",
      "short" : "Clinical, administrative, etc.",
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/flag-category"
      }
    },
    {
      "id" : "Flag.code",
      "path" : "Flag.code",
      "short" : "Coded or textual message to display to user",
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/flag-code"
      }
    },
    {
      "id" : "Flag.subject",
      "path" : "Flag.subject",
      "short" : "Who/What is flag about?",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner"]
      }]
    },
    {
      "id" : "Flag.period",
      "path" : "Flag.period",
      "short" : "Time period when flag is active"
    }]
  }
}

```
