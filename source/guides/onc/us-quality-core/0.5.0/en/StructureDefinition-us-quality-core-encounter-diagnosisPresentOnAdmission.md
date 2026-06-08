# US Quality Core Diagnosis Present on Admission - 2026 US Quality Core Implementation Guide v0.5.0

## Extension: US Quality Core Diagnosis Present on Admission 

Indicator of whether the Encounter diagnosis was present at the time of admission.

**Context of Use**

**Usage**
  See the [patterns](patterns.md) page for implementation and usage patterns.  

```
define "Encounter With Diabetes Diagnosis":
  "Non-Elective Inpatient Encounter Less Than 120 Days" IPEncounter
    where exists (IPEncounter.diagnosis D
      where D.condition.getCondition().code in "Diabetes"
    )
```

### Examples

 

| |
| :--- |
| [Inpatient Admission for Appendicitis](Encounter-example.md) |

 

**Usage info**

**Usages:**

* Use this Extension: [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md)
* Examples for this Extension: [Encounter/example](Encounter-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-encounter-diagnosisPresentOnAdmission.json)

### Formal Views of Extension Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-encounter-diagnosisPresentOnAdmission.csv), [Excel](../StructureDefinition-us-quality-core-encounter-diagnosisPresentOnAdmission.xlsx), [Schematron](../StructureDefinition-us-quality-core-encounter-diagnosisPresentOnAdmission.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-encounter-diagnosisPresentOnAdmission",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter-diagnosisPresentOnAdmission",
  "version" : "0.5.0",
  "name" : "USQualityCoreDiagnosisPresentOnAdmission",
  "title" : "US Quality Core Diagnosis Present on Admission",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-06-05T00:00:00-06:00",
  "publisher" : "Office of the National Coordinator for Health Information Technology (ONC)",
  "contact" : [{
    "name" : "Office of the National Coordinator for Health Information Technology (ONC)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.healthit.gov/feedback"
    }]
  }],
  "description" : "Indicator of whether the Encounter diagnosis was present at the time of admission.",
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
    "expression" : "Encounter.diagnosis"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "onAdmission",
      "definition" : "Indicator of whether the Encounter diagnosis was present at the time of admission.",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "type" : [{
        "code" : "uri"
      }],
      "fixedUri" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter-diagnosisPresentOnAdmission"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "required",
        "description" : "Indicator of whether the Encounter diagnosis was present at the time of admission",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-present-on-admission"
      }
    }]
  }
}

```
