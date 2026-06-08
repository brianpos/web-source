# ServiceRequest example - 2026 US Quality Core Implementation Guide v0.5.0

## Example ServiceRequest: ServiceRequest example

Profile: [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)

**status**: Completed

**intent**: Order

**category**: Surgical Procedure

**priority**: Urgent

**code**: Excision of appendix (procedure)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**occurrence**: 2013-04-05 --> 2013-04-05

**asNeeded**: true

**authoredOn**: 2013-04-04

**reasonCode**: Abdominal pain (finding)

**reasonReference**: [Condition Appendicitis (disorder)](Condition-appendicitis-example.md)

**bodySite**: Appendix structure



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest"]
  },
  "status" : "completed",
  "intent" : "order",
  "category" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "387713003",
      "display" : "Surgical Procedure"
    }]
  }],
  "priority" : "urgent",
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
  "occurrencePeriod" : {
    "start" : "2013-04-05",
    "end" : "2013-04-05"
  },
  "asNeededBoolean" : true,
  "authoredOn" : "2013-04-04",
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
  }]
}

```
