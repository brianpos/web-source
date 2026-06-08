# US Quality Core Do Not Perform Reason - 2026 US Quality Core Implementation Guide v0.5.0

## Extension: US Quality Core Do Not Perform Reason 

Indicates the reason the event was not performed.

**Context of Use**

**Usage**
  See the [patterns](patterns.md) page for implementation and usage patterns.  

### Examples

 

| |
| :--- |
| [DeviceRequest Negation Example](DeviceRequest-negation-example.md) |
| [ServiceRequest Negation Example](ServiceRequest-negation-example.md) |

 

**Usage info**

**Usages:**

* Use this Extension: [US Quality Core Device Not Requested](StructureDefinition-us-quality-core-devicenotrequested.md) and [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md)
* Examples for this Extension: [DeviceRequest/negation-example](DeviceRequest-negation-example.md), [DeviceRequest/negation-with-code-example](DeviceRequest-negation-with-code-example.md), [ServiceRequest/negation-example-code](ServiceRequest-negation-example-code.md) and [ServiceRequest/negation-example](ServiceRequest-negation-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-doNotPerformReason.json)

### Formal Views of Extension Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-doNotPerformReason.csv), [Excel](../StructureDefinition-us-quality-core-doNotPerformReason.xlsx), [Schematron](../StructureDefinition-us-quality-core-doNotPerformReason.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-doNotPerformReason",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason",
  "version" : "0.5.0",
  "name" : "USQualityCoreDoNotPerformReason",
  "title" : "US Quality Core Do Not Perform Reason",
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
  "description" : "Indicates the reason the event was not performed.",
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
      "definition" : "Indicates the reason the event was not performed.",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "type" : [{
        "code" : "uri"
      }],
      "fixedUri" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "extensible",
        "description" : "The reason the event did not occur or was not performed",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-negation-reason"
      }
    }]
  }
}

```
