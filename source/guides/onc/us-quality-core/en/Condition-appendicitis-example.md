# Condition example - appendicitis - 2026 US Quality Core Implementation Guide v0.5.0

## Example Condition: Condition example - appendicitis

Profile: [US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md)

**clinicalStatus**: Active

**verificationStatus**: Confirmed

**category**: Encounter Diagnosis

**severity**: Severe (severity modifier)

**code**: Appendicitis

**bodySite**: Appendix structure

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**onset**: 2012-05-24 00:00:00+0000

**recordedDate**: 2012-05-24 00:00:00+0000



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "appendicitis-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis"]
  },
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "code" : "active"
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
  "severity" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "24484000",
      "display" : "Severe (severity modifier)"
    }]
  },
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "74400008",
      "display" : "Appendicitis (disorder)"
    }],
    "text" : "Appendicitis"
  },
  "bodySite" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "66754008",
      "display" : "Appendix structure"
    }]
  }],
  "subject" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "onsetDateTime" : "2012-05-24T00:00:00+00:00",
  "recordedDate" : "2012-05-24T00:00:00+00:00"
}

```
