# UsQualityCoreCareteamStatus - 2026 US Quality Core Implementation Guide v0.5.0

## SearchParameter: UsQualityCoreCareteamStatus 

 
US Quality Core CareTeam Status Search Parameter 



## Resource Content

```json
{
  "resourceType" : "SearchParameter",
  "id" : "us-quality-core-careteam-status",
  "url" : "http://fhir.org/guides/onc/us-quality-core/SearchParameter/us-quality-core-careteam-status",
  "version" : "0.5.0",
  "name" : "UsQualityCoreCareteamStatus",
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
  "description" : "US Quality Core CareTeam Status Search Parameter",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "code" : "status",
  "base" : ["CareTeam"],
  "type" : "token",
  "expression" : "CareTeam.status",
  "xpathUsage" : "normal",
  "multipleOr" : true,
  "multipleAnd" : true
}

```
