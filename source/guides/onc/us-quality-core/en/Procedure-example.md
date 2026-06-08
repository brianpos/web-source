# Procedure example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Procedure: Procedure example

Profile: [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md)

**US Quality Core Not Done Recorded**: 2013-04-05 09:35:00-0400

**partOf**: Inpatient appendicitis surgical care

**status**: Completed

**statusReason**: Appendectomy completed after surgical confirmation of acute appendicitis

**code**: Excision of appendix (procedure)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**performed**: 2013-04-05 09:20:00-0400 --> 2013-04-05 10:30:00-0400

### Performers

| | |
| :--- | :--- |
| - | **Actor** |
| * | [Dr Cecil Surgeon](Practitioner-example.md) |

**reasonCode**: Abdominal pain (finding)

**reasonReference**: [Condition Appendicitis (disorder)](Condition-appendicitis-example.md)

**bodySite**: Appendix structure

**report**: [Diagnostic Report for 'CBC panel - Blood by Automated count' for '->Peter Chalmers'](DiagnosticReport-example.md)



## Resource Content

```json
{
  "resourceType" : "Procedure",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-procedure"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-recorded",
    "valueDateTime" : "2013-04-05T09:35:00-04:00"
  }],
  "partOf" : [{
    "display" : "Inpatient appendicitis surgical care"
  }],
  "status" : "completed",
  "statusReason" : {
    "text" : "Appendectomy completed after surgical confirmation of acute appendicitis"
  },
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "80146002",
      "display" : "Excision of appendix (procedure)"
    }],
    "text" : "Excision of appendix (procedure)"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "performedPeriod" : {
    "start" : "2013-04-05T09:20:00-04:00",
    "end" : "2013-04-05T10:30:00-04:00"
  },
  "performer" : [{
    "actor" : {
      "reference" : "Practitioner/example",
      "display" : "Dr Cecil Surgeon"
    }
  }],
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "21522001",
      "display" : "Abdominal pain (finding)"
    }]
  }],
  "reasonReference" : [{
    "reference" : "Condition/appendicitis-example"
  }],
  "bodySite" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "66754008",
      "display" : "Appendix structure"
    }]
  }],
  "report" : [{
    "reference" : "DiagnosticReport/example"
  }]
}

```
