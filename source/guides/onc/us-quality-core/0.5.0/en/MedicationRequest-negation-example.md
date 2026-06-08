# MedicationNotRequested using value set example - 2026 US Quality Core Implementation Guide v0.5.0

## Example MedicationRequest: MedicationNotRequested using value set example

Profile: [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md)

**status**: Completed

**intent**: Order

**category**: Community

**doNotPerform**: true

**medication**: Not Done Value Set: Low Dose Unfractionated Heparin for VTE Prophylaxis (Not done value set: [Low Dose Unfractionated Heparin for VTE Prophylaxis](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1045.39/expansion))

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**authoredOn**: 2015-03-25 19:32:52-0500

**requester**: [Practitioner Adam Careful ](Practitioner-example.md)

**reasonCode**: Drug treatment not indicated (situation)



## Resource Content

```json
{
  "resourceType" : "MedicationRequest",
  "id" : "negation-example",
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
    "extension" : [{
      "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet",
      "valueCanonical" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1045.39"
    }],
    "text" : "Not Done Value Set: Low Dose Unfractionated Heparin for VTE Prophylaxis"
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
