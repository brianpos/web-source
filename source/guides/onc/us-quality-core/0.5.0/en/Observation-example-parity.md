# Number of parity obeservation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: Number of parity obeservation example

Profile: [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)

**status**: Final

**category**: exam

**code**: Parity

**subject**: [Sarah Hugankiss (official) Female, DoB: 1946-09-25 ( Social Security number (use: usual, period: 1995-05-06 --> (ongoing)))](Patient-example-2.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**effective**: 2023-10-22 06:30:00+0500 --> 2023-10-22 08:30:10+0500

**issued**: 2023-10-22 07:30:10+0500

**performer**: [Hendricks Country Hospital](Organization-example1.md)

**value**: 3



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "example-parity",
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
      "code" : "11977-6",
      "display" : "Parity"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-2"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "effectivePeriod" : {
    "start" : "2023-10-22T06:30:00+05:00",
    "end" : "2023-10-22T08:30:10+05:00"
  },
  "issued" : "2023-10-22T07:30:10+05:00",
  "performer" : [{
    "reference" : "Organization/example1",
    "display" : "Hendricks Country Hospital"
  }],
  "valueInteger" : 3
}

```
