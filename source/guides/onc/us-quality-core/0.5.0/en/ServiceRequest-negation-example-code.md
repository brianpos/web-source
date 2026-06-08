# ServiceNotRequested with code example - 2026 US Quality Core Implementation Guide v0.5.0

## Example ServiceRequest: ServiceNotRequested with code example

Profile: [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md)

**US Quality Core Do Not Perform Reason**: Procedure discontinued (situation)

**status**: Completed

**intent**: Order

**category**: Surgical Procedure

**priority**: Urgent

**doNotPerform**: true

**code**: Graduated compression elastic hosiery (physical object)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**occurrence**: 2013-04-05

**authoredOn**: 2013-04-04

**reasonCode**: Postoperative venous thromboembolism prophylaxis was considered during the appendicitis admission

**reasonReference**: [Condition Appendicitis (disorder)](Condition-appendicitis-example.md)



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "negation-example-code",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicenotrequested"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "416406003",
        "display" : "Procedure discontinued (situation)"
      }]
    }
  }],
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
  "doNotPerform" : true,
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "348681001",
      "display" : "Graduated compression elastic hosiery (physical object)"
    }]
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "occurrenceDateTime" : "2013-04-05",
  "authoredOn" : "2013-04-04",
  "reasonCode" : [{
    "text" : "Postoperative venous thromboembolism prophylaxis was considered during the appendicitis admission"
  }],
  "reasonReference" : [{
    "reference" : "Condition/appendicitis-example"
  }]
}

```
