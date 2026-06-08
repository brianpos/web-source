# UsQualityCoreDiagnosticreportDate - 2026 US Quality Core Implementation Guide v0.5.0

## SearchParameter: UsQualityCoreDiagnosticreportDate 

 
US Quality Core DiagnosticReport date Search Parameter 



## Resource Content

```json
{
  "resourceType" : "SearchParameter",
  "id" : "us-quality-core-diagnosticreport-date",
  "url" : "http://fhir.org/guides/onc/us-quality-core/SearchParameter/us-quality-core-diagnosticreport-date",
  "version" : "0.5.0",
  "name" : "UsQualityCoreDiagnosticreportDate",
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
  "description" : "US Quality Core DiagnosticReport date Search Parameter",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "code" : "date",
  "base" : ["DiagnosticReport"],
  "type" : "date",
  "expression" : "DiagnosticReport.effective",
  "xpathUsage" : "normal",
  "multipleOr" : true,
  "multipleAnd" : true,
  "comparator" : ["eq",
  "ne",
  "gt",
  "ge",
  "lt",
  "le",
  "sa",
  "eb",
  "ap"],
  "_comparator" : [{
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "MAY"
    }]
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "MAY"
    }]
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "SHALL"
    }]
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "SHALL"
    }]
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "SHALL"
    }]
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "SHALL"
    }]
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "MAY"
    }]
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "MAY"
    }]
  },
  {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
      "valueCode" : "MAY"
    }]
  }]
}

```
