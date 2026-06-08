# UsQualityCoreMedicationrequestDoNotPerform - 2026 US Quality Core Implementation Guide v0.5.0

## SearchParameter: UsQualityCoreMedicationrequestDoNotPerform 

 
US Quality Core MedicationRequest do-not-perform Search Parameter 



## Resource Content

```json
{
  "resourceType" : "SearchParameter",
  "id" : "us-quality-core-medicationrequest-do-not-perform",
  "url" : "http://fhir.org/guides/onc/us-quality-core/SearchParameter/us-quality-core-medicationrequest-do-not-perform",
  "version" : "0.5.0",
  "name" : "UsQualityCoreMedicationrequestDoNotPerform",
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
  "description" : "US Quality Core MedicationRequest do-not-perform Search Parameter",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "code" : "do-not-perform",
  "base" : ["MedicationRequest"],
  "type" : "token",
  "expression" : "MedicationRequest.doNotPerform",
  "xpathUsage" : "normal",
  "multipleOr" : true,
  "multipleAnd" : true
}

```
