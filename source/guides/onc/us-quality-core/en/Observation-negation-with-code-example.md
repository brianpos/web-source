# ObservationCancelled with code example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: ObservationCancelled with code example

Profile: [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md)

**US Quality Core Not Done Reason**: Contraindicated (qualifier value)

**status**: Cancelled

**category**: Laboratory

**code**: Hemoglobin [Mass/volume] in Arterial blood

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**effective**: 2013-04-02 10:30:10+0100 --> 2013-04-05 10:30:10+0100

**issued**: 2013-04-03 15:30:10+0100

**performer**: [Hendricks Country Hospital](Organization-example1.md)



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "negation-with-code-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-observationcancelled"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneReason",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "410536001",
        "display" : "Contraindicated (qualifier value)"
      }]
    }
  }],
  "status" : "cancelled",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "laboratory",
      "display" : "Laboratory"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "30313-1",
      "display" : "Hemoglobin [Mass/volume] in Arterial blood"
    }]
  },
  "subject" : {
    "reference" : "Patient/example"
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
    "reference" : "Organization/example1",
    "display" : "Hendricks Country Hospital"
  }]
}

```
