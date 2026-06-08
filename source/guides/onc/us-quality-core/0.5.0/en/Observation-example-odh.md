# ODH Observation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: ODH Observation example

Profile: [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)

**status**: Final

**category**: Social History

**code**: History of Usual Occupation

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**effective**: 2020-04-09 06:30:00+0500 --> 2023-10-22 08:30:10+0500

**performer**: [Practitioner](Practitioner-example.md)

**value**: Radiology Technician (Radiology Tech) [Radiologic Technicians]



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "example-odh",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-simple-observation"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "social-history",
      "display" : "Social History"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "21843-8",
      "display" : "History of Usual Occupation"
    }]
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "effectivePeriod" : {
    "start" : "2020-04-09T06:30:00+05:00",
    "end" : "2023-10-22T08:30:10+05:00"
  },
  "performer" : [{
    "reference" : "Practitioner/example",
    "display" : "Practitioner"
  }],
  "valueCodeableConcept" : {
    "text" : "Radiology Technician (Radiology Tech) [Radiologic Technicians]"
  }
}

```
