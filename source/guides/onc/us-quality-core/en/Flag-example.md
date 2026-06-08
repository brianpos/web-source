# Flag example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Flag: Flag example

Profile: [US Quality Core Flag](StructureDefinition-us-quality-core-flag.md)

**identifier**: 12345

**status**: Active

**category**: Safety

**code**: Patient is at increased risk for falls during inpatient care

**subject**: [Peter Patient](Patient-example.md)

**period**: 2013-04-04 --> (ongoing)

**author**: [Nancy Nurse](Practitioner-example.md)



## Resource Content

```json
{
  "resourceType" : "Flag",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-flag"]
  },
  "identifier" : [{
    "value" : "12345"
  }],
  "status" : "active",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/flag-category",
      "code" : "safety",
      "display" : "Safety"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "129839007",
      "display" : "At risk for falls"
    }],
    "text" : "Patient is at increased risk for falls during inpatient care"
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Peter Patient"
  },
  "period" : {
    "start" : "2013-04-04"
  },
  "author" : {
    "reference" : "Practitioner/example",
    "display" : "Nancy Nurse"
  }
}

```
