# UsQualityCoreServicerequestCategory - 2026 US Quality Core Implementation Guide v0.5.0

## SearchParameter: UsQualityCoreServicerequestCategory 

 
US Quality Core ServiceRequest Category Search Parameter 



## Resource Content

```json
{
  "resourceType" : "SearchParameter",
  "id" : "us-quality-core-servicerequest-category",
  "url" : "http://fhir.org/guides/onc/us-quality-core/SearchParameter/us-quality-core-servicerequest-category",
  "version" : "0.5.0",
  "name" : "UsQualityCoreServicerequestCategory",
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
  "description" : "US Quality Core ServiceRequest Category Search Parameter",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "code" : "category",
  "base" : ["ServiceRequest"],
  "type" : "token",
  "expression" : "ServiceRequest.category",
  "xpathUsage" : "normal",
  "multipleOr" : true,
  "multipleAnd" : true
}

```
