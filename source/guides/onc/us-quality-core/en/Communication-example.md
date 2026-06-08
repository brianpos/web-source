# Communication example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Communication: Communication example

Profile: [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md)

**partOf**: [Portable chest radiograph report](DiagnosticReport-note-example.md)

**status**: Completed

**category**: Alert

**medium**: written

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**topic**: Chest radiograph report available

**about**: [Portable chest radiograph report](DiagnosticReport-note-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**sent**: 2019-02-03 19:45:00+0000

**received**: 2019-02-03 19:45:30+0000

**recipient**: [Practitioner Adam Careful ](Practitioner-example.md)

**sender**: [Organization Health Level Seven International](Organization-example.md)

> **payload****content**: Portable chest radiograph report is final with no acute cardiopulmonary abnormality.

> **payload****content**: [Portable chest radiograph report](DiagnosticReport-note-example.md)



## Resource Content

```json
{
  "resourceType" : "Communication",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-communication"]
  },
  "partOf" : [{
    "reference" : "DiagnosticReport/note-example",
    "display" : "Portable chest radiograph report"
  }],
  "status" : "completed",
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
    "text" : "Chest radiograph report available"
  },
  "about" : [{
    "reference" : "DiagnosticReport/note-example",
    "display" : "Portable chest radiograph report"
  }],
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "sent" : "2019-02-03T19:45:00Z",
  "received" : "2019-02-03T19:45:30Z",
  "recipient" : [{
    "reference" : "Practitioner/example"
  }],
  "sender" : {
    "reference" : "Organization/example"
  },
  "payload" : [{
    "contentString" : "Portable chest radiograph report is final with no acute cardiopulmonary abnormality."
  },
  {
    "contentReference" : {
      "reference" : "DiagnosticReport/note-example",
      "display" : "Portable chest radiograph report"
    }
  }]
}

```
