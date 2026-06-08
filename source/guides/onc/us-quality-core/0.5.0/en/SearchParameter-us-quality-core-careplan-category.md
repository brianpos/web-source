# UsQualityCoreCareplanCategory - 2026 US Quality Core Implementation Guide v0.5.0

## SearchParameter: UsQualityCoreCareplanCategory 

 
US Quality Core CarePlan Category Search Parameter 



## Resource Content

```json
{
  "resourceType" : "SearchParameter",
  "id" : "us-quality-core-careplan-category",
  "url" : "http://fhir.org/guides/onc/us-quality-core/SearchParameter/us-quality-core-careplan-category",
  "version" : "0.5.0",
  "name" : "UsQualityCoreCareplanCategory",
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
  "description" : "US Quality Core CarePlan Category Search Parameter",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "code" : "category",
  "base" : ["CarePlan"],
  "type" : "token",
  "expression" : "CarePlan.category",
  "xpathUsage" : "normal",
  "multipleOr" : true,
  "multipleAnd" : true
}

```
