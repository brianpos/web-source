# MedicationNotRequested using code example - 2026 US Quality Core Implementation Guide v0.5.0

## Example MedicationRequest: MedicationNotRequested using code example

Profile: [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md)

**status**: Completed

**intent**: Order

**category**: Community

**doNotPerform**: true

**medication**: Deoxycortone

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**authoredOn**: 2015-03-25 19:32:52-0500

**requester**: [Practitioner Adam Careful ](Practitioner-example.md)

**reasonCode**: Drug treatment not indicated (situation)



## Resource Content

```json
{
  "resourceType" : "MedicationRequest",
  "id" : "negation-example-code",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationnotrequested"]
  },
  "status" : "completed",
  "intent" : "order",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
      "code" : "community"
    }]
  }],
  "doNotPerform" : true,
  "medicationCodeableConcept" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "1336006",
      "display" : "Deoxycortone"
    }]
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "authoredOn" : "2015-03-25T19:32:52-05:00",
  "requester" : {
    "reference" : "Practitioner/example"
  },
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "183966005",
      "display" : "Drug treatment not indicated (situation)"
    }]
  }]
}

```
