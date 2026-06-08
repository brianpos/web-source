# UsQualityCoreDeviceusestatementPatient - 2026 US Quality Core Implementation Guide v0.5.0

## SearchParameter: UsQualityCoreDeviceusestatementPatient 

 
US Quality Core DeviceUseStatement Patient Search Parameter 



## Resource Content

```json
{
  "resourceType" : "SearchParameter",
  "id" : "us-quality-core-deviceusestatement-patient",
  "url" : "http://fhir.org/guides/onc/us-quality-core/SearchParameter/us-quality-core-deviceusestatement-patient",
  "version" : "0.5.0",
  "name" : "UsQualityCoreDeviceusestatementPatient",
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
  "description" : "US Quality Core DeviceUseStatement Patient Search Parameter",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "code" : "patient",
  "base" : ["DeviceUseStatement"],
  "type" : "reference",
  "expression" : "DeviceUseStatement.subject.where(resolve() is Patient)",
  "xpathUsage" : "normal",
  "multipleOr" : true,
  "multipleAnd" : true
}

```
