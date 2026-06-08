# USQualityCore Appropriateness Score - 2026 US Quality Core Implementation Guide v0.5.0

## Extension: USQualityCore Appropriateness Score 

The appropriateness score for the requested action.

**Context of Use**

**Usage**
  See the [patterns](patterns.md) page for implementation and usage patterns.  

### Examples

**Usage info**

**Usages:**

* Examples for this Extension: [ServiceRequest/appropriateness-example](ServiceRequest-appropriateness-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-servicerequest-appropriatenessScore.json)

### Formal Views of Extension Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-servicerequest-appropriatenessScore.csv), [Excel](../StructureDefinition-us-quality-core-servicerequest-appropriatenessScore.xlsx), [Schematron](../StructureDefinition-us-quality-core-servicerequest-appropriatenessScore.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-servicerequest-appropriatenessScore",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest-appropriatenessScore",
  "version" : "0.5.0",
  "name" : "USQualityCoreServiceRequestAppropriatenessScore",
  "title" : "USQualityCore Appropriateness Score",
  "status" : "draft",
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
  "description" : "The appropriateness score for the requested action.",
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
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "ServiceRequest"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "Appropriateness Score",
      "definition" : "The RAND appropriateness score for the requested procedure.",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Extension.extension:extension",
      "path" : "Extension.extension",
      "sliceName" : "extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "type" : [{
        "code" : "uri"
      }],
      "fixedUri" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest-appropriatenessScore"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "code"
      },
      {
        "code" : "decimal"
      }],
      "binding" : {
        "strength" : "required",
        "description" : "The RAND scoring for appropriateness of the procedure.",
        "valueSet" : "http://terminology.hl7.org/ValueSet/appropriateness-score"
      }
    }]
  }
}

```
