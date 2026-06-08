# AllergyIntolerance refuted example - 2026 US Quality Core Implementation Guide v0.5.0

## Example AllergyIntolerance: AllergyIntolerance refuted example

Profile: [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md)

**identifier**: `http://acme.com/ids/patients/risks`/49476534

**clinicalStatus**: Inactive

**verificationStatus**: Refuted

**type**: Allergy

**category**: Food

**code**: Cashew nuts

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**recordedDate**: 2014-10-09 14:58:00+1100

**recorder**: [Practitioner Adam Careful ](Practitioner-example.md)

**asserter**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)



## Resource Content

```json
{
  "resourceType" : "AllergyIntolerance",
  "id" : "example-refuted",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-allergyintolerance"]
  },
  "identifier" : [{
    "system" : "http://acme.com/ids/patients/risks",
    "value" : "49476534"
  }],
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
      "code" : "inactive"
    }]
  },
  "verificationStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
      "code" : "refuted"
    }]
  },
  "type" : "allergy",
  "category" : ["food"],
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "227493005",
      "display" : "Cashew nuts"
    }]
  },
  "patient" : {
    "reference" : "Patient/example"
  },
  "recordedDate" : "2014-10-09T14:58:00+11:00",
  "recorder" : {
    "reference" : "Practitioner/example"
  },
  "asserter" : {
    "reference" : "Patient/example"
  }
}

```
