# Medication example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Medication: Medication example



## Resource Content

```json
{
  "resourceType" : "Medication",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medication"]
  },
  "contained" : [{
    "resourceType" : "Organization",
    "id" : "org6",
    "meta" : {
      "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
    },
    "identifier" : [{
      "use" : "temp",
      "system" : "http://hl7.org/fhir/sid/us-npi",
      "value" : "8635143786"
    }],
    "active" : true,
    "name" : "Genzyme",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.sanofigenzyme.com/",
      "use" : "work"
    }],
    "address" : [{
      "use" : "work",
      "city" : "Cambridge",
      "state" : "MA",
      "country" : "USA"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "1594660",
      "display" : "alemtuzumab 10 MG/ML [Lemtrada]"
    }]
  },
  "manufacturer" : {
    "reference" : "#org6"
  },
  "form" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "385219001",
      "display" : "Conventional release solution for injection (dose form)"
    }]
  },
  "ingredient" : [{
    "itemCodeableConcept" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "129472003",
        "display" : "Alemtuzumab (substance)"
      }]
    },
    "strength" : {
      "numerator" : {
        "value" : 12,
        "system" : "http://unitsofmeasure.org",
        "code" : "mg"
      },
      "denominator" : {
        "value" : 1.2,
        "system" : "http://unitsofmeasure.org",
        "code" : "mL"
      }
    }
  }],
  "batch" : {
    "lotNumber" : "9494788",
    "expirationDate" : "2017-05-22"
  }
}

```
