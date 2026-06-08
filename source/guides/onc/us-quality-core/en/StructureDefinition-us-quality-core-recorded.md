# US Quality Core Not Done Recorded - 2026 US Quality Core Implementation Guide v0.5.0

## Extension: US Quality Core Not Done Recorded 

Captures the recorded date of the event.

**Context of Use**

**Usage**
  See the [patterns](patterns.md) page for implementation and usage patterns.  

### Examples

**Usage info**

**Usages:**

* Use this Extension: [US Quality Core Communication Not Done](StructureDefinition-us-quality-core-communicationnotdone.md), [US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md), [US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md), [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md) and [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)
* Examples for this Extension: [Communication/negation-example](Communication-negation-example.md), [MedicationAdministration/negation-example](MedicationAdministration-negation-example.md), [MedicationAdministration/negation-with-code-example](MedicationAdministration-negation-with-code-example.md), [MedicationDispense/negation-example](MedicationDispense-negation-example.md)... Show 4 more, [MedicationDispense/negation-with-code-example](MedicationDispense-negation-with-code-example.md), [Procedure/example](Procedure-example.md), [Procedure/negation-example](Procedure-negation-example.md) and [Procedure/negation-with-code-example](Procedure-negation-with-code-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-recorded.json)

### Formal Views of Extension Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-recorded.csv), [Excel](../StructureDefinition-us-quality-core-recorded.xlsx), [Schematron](../StructureDefinition-us-quality-core-recorded.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-recorded",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-recorded",
  "version" : "0.5.0",
  "name" : "USQualityCoreNotDoneRecorded",
  "title" : "US Quality Core Not Done Recorded",
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
  "description" : "Captures the recorded date of the event.",
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
    "expression" : "Resource"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "definition" : "Captures the recorded date of the event.",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "type" : [{
        "code" : "uri"
      }],
      "fixedUri" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-recorded"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "type" : [{
        "code" : "dateTime"
      }]
    }]
  }
}

```
