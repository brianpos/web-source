# US Quality Core BodyStructure - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core BodyStructure 

 
Profile of BodyStructure for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Examples for this Profile: [BodyStructure/example](BodyStructure-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-bodystructure.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-bodystructure.csv), [Excel](../StructureDefinition-us-quality-core-bodystructure.xlsx), [Schematron](../StructureDefinition-us-quality-core-bodystructure.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-bodystructure",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-bodystructure",
  "version" : "0.5.0",
  "name" : "USQualityCoreBodyStructure",
  "title" : "US Quality Core BodyStructure",
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
  "description" : "Profile of BodyStructure for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "openehr",
    "uri" : "http://openehr.org",
    "name" : "Open EHR Archetype Mapping"
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
  "type" : "BodyStructure",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/BodyStructure",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "BodyStructure",
      "path" : "BodyStructure",
      "mustSupport" : false
    },
    {
      "id" : "BodyStructure.active",
      "path" : "BodyStructure.active",
      "short" : "Whether this record is in active use",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "BodyStructure.location",
      "path" : "BodyStructure.location",
      "short" : "Body site",
      "min" : 1,
      "max" : "1",
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/body-site"
      }
    },
    {
      "id" : "BodyStructure.locationQualifier",
      "path" : "BodyStructure.locationQualifier",
      "short" : "Body site modifier",
      "binding" : {
        "strength" : "preferred",
        "description" : "Concepts modifying the anatomic location",
        "valueSet" : "http://hl7.org/fhir/ValueSet/bodystructure-relative-location"
      }
    },
    {
      "id" : "BodyStructure.patient",
      "path" : "BodyStructure.patient",
      "short" : "Who this is about",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    }]
  }
}

```
