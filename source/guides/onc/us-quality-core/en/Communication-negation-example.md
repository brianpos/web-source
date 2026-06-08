# Communication negation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Communication: Communication negation example

Profile: [US Quality Core Communication Not Done](StructureDefinition-us-quality-core-communicationnotdone.md)

**US Quality Core Not Done Recorded**: 2014-12-12 18:01:10-0800

**status**: Not Done

**statusReason**: Patient moved away and could not be reached

**category**: Alert

**medium**: written

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**topic**: Progress Update

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**recipient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**sender**: [Practitioner Adam Careful ](Practitioner-example.md)

### Payloads

| | |
| :--- | :--- |
| - | **Content[x]** |
| * | Patient could not be reached to discuss follow-up care after moving away. |



## Resource Content

```json
{
  "resourceType" : "Communication",
  "id" : "negation-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-communicationnotdone"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-recorded",
    "valueDateTime" : "2014-12-12T18:01:10-08:00"
  }],
  "status" : "not-done",
  "statusReason" : {
    "text" : "Patient moved away and could not be reached"
  },
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/communication-category",
      "code" : "alert"
    }],
    "text" : "Alert"
  }],
  "medium" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
      "code" : "WRITTEN",
      "display" : "written"
    }],
    "text" : "written"
  }],
  "subject" : {
    "reference" : "Patient/example"
  },
  "topic" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/communication-topic",
      "code" : "progress-update",
      "display" : "Progress Update"
    }]
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "recipient" : [{
    "reference" : "Patient/example"
  }],
  "sender" : {
    "reference" : "Practitioner/example"
  },
  "payload" : [{
    "contentString" : "Patient could not be reached to discuss follow-up care after moving away."
  }]
}

```
