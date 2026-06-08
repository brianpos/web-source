# USQualityCore Present On Admission Codes - 2026 US Quality Core Implementation Guide v0.5.0

## ValueSet: USQualityCore Present On Admission Codes 

 
Value Set for USQualityCore Present On Admission. 

 **References** 

* [US Quality Core Diagnosis Present on Admission](StructureDefinition-us-quality-core-encounter-diagnosisPresentOnAdmission.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "us-quality-core-present-on-admission",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"]
  },
  "url" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-present-on-admission",
  "version" : "0.5.0",
  "name" : "USQualityCorePresentOnAdmission",
  "title" : "USQualityCore Present On Admission Codes",
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
  "description" : "Value Set for USQualityCore Present On Admission.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "compose" : {
    "include" : [{
      "system" : "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HospitalAcqCond/Coding",
      "concept" : [{
        "code" : "Y",
        "display" : "Yes"
      },
      {
        "code" : "N",
        "display" : "No"
      },
      {
        "code" : "U",
        "display" : "Unknown"
      },
      {
        "code" : "W",
        "display" : "Undetermined"
      },
      {
        "code" : "1",
        "display" : "Unreported"
      }]
    }]
  }
}

```
