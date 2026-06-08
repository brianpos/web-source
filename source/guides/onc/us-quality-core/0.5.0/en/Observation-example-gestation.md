# Gestation age at birth observation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: Gestation age at birth observation example

Profile: [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)

**status**: Final

**category**: exam

**code**: Gestational age--at birth

**subject**: [Sarah Hugankiss (official) Female, DoB: 1946-09-25 ( Social Security number (use: usual, period: 1995-05-06 --> (ongoing)))](Patient-example-2.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**effective**: 2022-04-09

**performer**: [Hendricks Country Hospital](Organization-example1.md)

**value**: 37 week (Details: UCUM codewk = 'wk')



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "example-gestation",
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
      "code" : "76516-4",
      "display" : "Gestational age--at birth"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-2"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "effectiveDateTime" : "2022-04-09",
  "performer" : [{
    "reference" : "Organization/example1",
    "display" : "Hendricks Country Hospital"
  }],
  "valueQuantity" : {
    "value" : 37,
    "unit" : "week",
    "system" : "http://unitsofmeasure.org",
    "code" : "wk"
  }
}

```
