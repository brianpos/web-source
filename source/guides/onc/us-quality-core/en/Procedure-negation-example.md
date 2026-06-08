# ProcedureNotDone with value set example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Procedure: ProcedureNotDone with value set example

Profile: [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)

**US Quality Core Not Done Recorded**: 2013-04-05 10:30:00-0400

**partOf**: [Appendectomy admission surgical care](Procedure-example.md)

**status**: Not Done

**statusReason**: Complication of medical care (disorder)

**code**: Not Done Value Set: Intermittent pneumatic compression devices (IPC) (Not done value set: [Intermittent pneumatic compression devices](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.117.1.7.1.214/expansion))

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**performed**: Absent because : not-performed

### Performers

| | |
| :--- | :--- |
| - | **Actor** |
| * | [Dr Cecil Surgeon](Practitioner-example.md) |

**reasonCode**: Postoperative venous thromboembolism prophylaxis was considered during the appendicitis admission

**reasonReference**: [Condition Appendicitis (disorder)](Condition-appendicitis-example.md)



## Resource Content

```json
{
  "resourceType" : "Procedure",
  "id" : "negation-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-procedurenotdone"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-recorded",
    "valueDateTime" : "2013-04-05T10:30:00-04:00"
  }],
  "partOf" : [{
    "reference" : "Procedure/example",
    "display" : "Appendectomy admission surgical care"
  }],
  "status" : "not-done",
  "statusReason" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "35688006",
      "display" : "Complication of medical care (disorder)"
    }]
  },
  "code" : {
    "extension" : [{
      "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet",
      "valueCanonical" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.214"
    }],
    "text" : "Not Done Value Set: Intermittent pneumatic compression devices (IPC)"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "_performedDateTime" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
      "valueCode" : "not-performed"
    }]
  },
  "performer" : [{
    "actor" : {
      "reference" : "Practitioner/example",
      "display" : "Dr Cecil Surgeon"
    }
  }],
  "reasonCode" : [{
    "text" : "Postoperative venous thromboembolism prophylaxis was considered during the appendicitis admission"
  }],
  "reasonReference" : [{
    "reference" : "Condition/appendicitis-example"
  }]
}

```
