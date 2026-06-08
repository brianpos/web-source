# UsQualityCoreMedicationstatementCode - 2026 US Quality Core Implementation Guide v0.5.0

## SearchParameter: UsQualityCoreMedicationstatementCode 

 
US Quality Core MedicationStatement Code Search Parameter 



## Resource Content

```json
{
  "resourceType" : "SearchParameter",
  "id" : "us-quality-core-medicationstatement-code",
  "url" : "http://fhir.org/guides/onc/us-quality-core/SearchParameter/us-quality-core-medicationstatement-code",
  "version" : "0.5.0",
  "name" : "UsQualityCoreMedicationstatementCode",
  "status" : "active",
  "date" : "2026-06-05",
  "publisher" : "Office of the National Coordinator for Health Information Technology (ONC)",
  "contact" : [{
    "name" : "Office of the National Coordinator for Health Information Technology (ONC)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.healthit.gov/feedback"
    }]
  }],
  "description" : "US Quality Core MedicationStatement Code Search Parameter",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "code" : "code",
  "base" : ["MedicationStatement"],
  "type" : "token",
  "expression" : "MedicationStatement.medication.as(CodeableConcept)",
  "xpathUsage" : "normal",
  "multipleOr" : true,
  "multipleAnd" : true
}

```
