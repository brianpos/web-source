# USQualityCore Not Done ValueSet - 2026 US Quality Core Implementation Guide v0.5.0

## Extension: USQualityCore Not Done ValueSet 

A logical reference (e.g. a reference to ValueSet.url) to a value set/version that identifies a set of possible coded values representing activities that were not requested, ordered, or performed.

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [US Quality Core Communication Not Done](StructureDefinition-us-quality-core-communicationnotdone.md), [US Quality Core Device Not Requested](StructureDefinition-us-quality-core-devicenotrequested.md), [US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md), [US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md)... Show 6 more, [US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md), [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md), [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md), [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md), [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) and [US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md)
* Examples for this Extension: [DeviceRequest/negation-example](DeviceRequest-negation-example.md), [Immunization/negation-example](Immunization-negation-example.md), [MedicationAdministration/negation-example](MedicationAdministration-negation-example.md), [MedicationDispense/negation-example](MedicationDispense-negation-example.md)... Show 5 more, [MedicationRequest/negation-example](MedicationRequest-negation-example.md), [Observation/negation-example](Observation-negation-example.md), [Procedure/negation-example](Procedure-negation-example.md), [ServiceRequest/negation-example](ServiceRequest-negation-example.md) and [Task/negation-example](Task-negation-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-notDoneValueSet.json)

### Formal Views of Extension Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-notDoneValueSet.csv), [Excel](../StructureDefinition-us-quality-core-notDoneValueSet.xlsx), [Schematron](../StructureDefinition-us-quality-core-notDoneValueSet.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-notDoneValueSet",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet",
  "version" : "0.5.0",
  "name" : "USQualityCoreNotDoneValueSet",
  "title" : "USQualityCore Not Done ValueSet",
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
  "description" : "A logical reference (e.g. a reference to ValueSet.url) to a value set/version that identifies a set of possible coded values representing activities that were not requested, ordered, or performed.",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "CodeableConcept"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "Url of a value set of activities not requested or performed",
      "definition" : "A logical reference (e.g. a reference to ValueSet.url) to a value set/version that identifies a set of possible coded values representing activities that were not requested, ordered, or performed.",
      "min" : 0,
      "max" : "1",
      "isModifier" : false,
      "mapping" : [{
        "identity" : "v2",
        "map" : "CWE."
      },
      {
        "identity" : "rim",
        "map" : "CD.valueSet/CD.valueSetVersion"
      }]
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "label" : "Not done value set",
      "min" : 1,
      "type" : [{
        "code" : "canonical",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/ValueSet"]
      }]
    }]
  }
}

```
