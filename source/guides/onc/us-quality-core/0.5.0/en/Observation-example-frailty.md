# Frailty observation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: Frailty observation example

Profile: [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)

**status**: Final

**category**: exam

**code**: Mobility device or aid is regularly used

**subject**: [Sarah Hugankiss (official) Female, DoB: 1946-09-25 ( Social Security number (use: usual, period: 1995-05-06 --> (ongoing)))](Patient-example-2.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**effective**: 2013-04-02 10:30:10+0100 --> 2013-04-05 10:30:10+0100

**issued**: 2013-04-03 15:30:10+0100

**performer**: [Practitioner](Practitioner-example.md)

**value**: Dependence on wheelchair (finding)



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "example-frailty",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-simple-observation"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "exam",
      "display" : "exam"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "99354-3",
      "display" : "Mobility device or aid is regularly used"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-2"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "effectivePeriod" : {
    "start" : "2013-04-02T10:30:10+01:00",
    "end" : "2013-04-05T10:30:10+01:00"
  },
  "issued" : "2013-04-03T15:30:10+01:00",
  "performer" : [{
    "reference" : "Practitioner/example",
    "display" : "Practitioner"
  }],
  "valueCodeableConcept" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "105503008",
      "display" : "Dependence on wheelchair (finding)"
    }]
  }
}

```
