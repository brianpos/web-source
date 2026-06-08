# US Quality Core IsElective - 2026 US Quality Core Implementation Guide v0.5.0

## Extension: US Quality Core IsElective 

Indicates whether this is an elective procedure.

**Context of Use**

**Usage**
  See the [patterns](patterns.md) page for implementation and usage patterns.  

### Examples

 

| |
| :--- |
| [Example of elective ServiceRequest](ServiceRequest-elective-example.md) |

 

**Usage info**

**Usages:**

* This Extension is not used by any profiles in this Specification

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-isElective.json)

### Formal Views of Extension Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-isElective.csv), [Excel](../StructureDefinition-us-quality-core-isElective.xlsx), [Schematron](../StructureDefinition-us-quality-core-isElective.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-isElective",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-isElective",
  "version" : "0.5.0",
  "name" : "USQualityCoreIsElective",
  "title" : "US Quality Core IsElective",
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
  "description" : "Indicates whether this is an elective procedure.",
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
      "definition" : "Indicates whether this is an elective procedure.",
      "min" : 0,
      "max" : "1",
      "isModifier" : true,
      "isModifierReason" : "Indicates whether this is an elective procedure"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "type" : [{
        "code" : "uri"
      }],
      "fixedUri" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-isElective"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "type" : [{
        "code" : "boolean"
      }]
    }]
  }
}

```
