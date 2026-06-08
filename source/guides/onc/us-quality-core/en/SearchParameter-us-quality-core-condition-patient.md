# UsQualityCoreConditionPatient - 2026 US Quality Core Implementation Guide v0.5.0

## SearchParameter: UsQualityCoreConditionPatient 

 
US Quality Core Condition Patient Search Parameter 



## Resource Content

```json
{
  "resourceType" : "SearchParameter",
  "id" : "us-quality-core-condition-patient",
  "url" : "http://fhir.org/guides/onc/us-quality-core/SearchParameter/us-quality-core-condition-patient",
  "version" : "0.5.0",
  "name" : "UsQualityCoreConditionPatient",
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
  "description" : "US Quality Core Condition Patient Search Parameter",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "code" : "patient",
  "base" : ["Condition"],
  "type" : "reference",
  "expression" : "Condition.subject.where(resolve() is Patient)",
  "xpathUsage" : "normal",
  "multipleOr" : true,
  "multipleAnd" : true
}

```
