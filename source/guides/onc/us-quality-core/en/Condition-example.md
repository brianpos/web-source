# Condition Encounter Diagnosis example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Condition: Condition Encounter Diagnosis example

Profile: [US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md)

**Condition Asserted Date**: 2015-10-31

**clinicalStatus**: Resolved

**verificationStatus**: Confirmed

**category**: Encounter Diagnosis

**code**: Burnt Ear

**bodySite**: Left Ear

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**onset**: 2015-10-31

**abatement**: 2015-12-01

**recordedDate**: 2015-11-01

### Stages

| | |
| :--- | :--- |
| - | **Summary** |
| * | stage II |



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis"]
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/condition-assertedDate",
    "valueDateTime" : "2015-10-31"
  }],
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "code" : "resolved"
    }]
  },
  "verificationStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-ver-status",
      "code" : "confirmed"
    }]
  },
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-category",
      "code" : "encounter-diagnosis",
      "display" : "Encounter Diagnosis"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "39065001",
      "display" : "Burn of ear"
    }],
    "text" : "Burnt Ear"
  },
  "bodySite" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "49521004",
      "display" : "Left external ear structure"
    }],
    "text" : "Left Ear"
  }],
  "subject" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "onsetDateTime" : "2015-10-31",
  "abatementDateTime" : "2015-12-01",
  "recordedDate" : "2015-11-01",
  "stage" : [{
    "summary" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "258219007",
        "display" : "stage II"
      }]
    }
  }]
}

```
