# Observation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: Observation example

Profile: [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)

**Observation Body Position**: Sitting position (finding)

**status**: Final

**category**: Vital Signs

**code**: Hemoglobin [Mass/volume] in Venous blood

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**effective**: 2013-04-02 10:30:10+0100 --> 2013-04-05 10:30:10+0100

**issued**: 2013-04-03 15:30:10+0100

**performer**: [Practitioner](Practitioner-example.md)

**value**: 7.2 g/dl (Details: UCUM codeg/dL = 'g/dL')

**interpretation**: Below low normal

**bodySite**: Superficial forearm vein

**method**: Injection to forearm

**derivedFrom**: [Observation Hemoglobin [Mass/volume] in Venous blood](Observation-example.md)

> **component****code**: Systolic blood pressure**value**: 107 mmHg (Details: UCUM codemm[Hg] = 'mm[Hg]')**interpretation**: Normal

> **component****code**: Diastolic blood pressure**value**: 60 mmHg (Details: UCUM codemm[Hg] = 'mm[Hg]')**interpretation**: Below low normal



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-simple-observation"]
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/observation-bodyPosition",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "33586001",
        "display" : "Sitting position (finding)"
      }]
    }
  }],
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "vital-signs",
      "display" : "Vital Signs"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "30350-3",
      "display" : "Hemoglobin [Mass/volume] in Venous blood"
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
    "reference" : "Practitioner/example",
    "display" : "Practitioner"
  }],
  "valueQuantity" : {
    "value" : 7.2,
    "unit" : "g/dl",
    "system" : "http://unitsofmeasure.org",
    "code" : "g/dL"
  },
  "interpretation" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
      "code" : "L",
      "display" : "Low"
    }],
    "text" : "Below low normal"
  }],
  "bodySite" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "308046002",
      "display" : "Superficial forearm vein"
    }]
  },
  "method" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "120220003",
      "display" : "Injection to forearm"
    }]
  },
  "derivedFrom" : [{
    "reference" : "Observation/example"
  }],
  "component" : [{
    "code" : {
      "coding" : [{
        "system" : "http://loinc.org",
        "code" : "8480-6",
        "display" : "Systolic blood pressure"
      },
      {
        "system" : "http://snomed.info/sct",
        "code" : "271649006",
        "display" : "Systolic blood pressure"
      }]
    },
    "valueQuantity" : {
      "value" : 107,
      "unit" : "mmHg",
      "system" : "http://unitsofmeasure.org",
      "code" : "mm[Hg]"
    },
    "interpretation" : [{
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        "code" : "N",
        "display" : "Normal"
      }],
      "text" : "Normal"
    }]
  },
  {
    "code" : {
      "coding" : [{
        "system" : "http://loinc.org",
        "code" : "8462-4",
        "display" : "Diastolic blood pressure"
      }]
    },
    "valueQuantity" : {
      "value" : 60,
      "unit" : "mmHg",
      "system" : "http://unitsofmeasure.org",
      "code" : "mm[Hg]"
    },
    "interpretation" : [{
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
        "code" : "L",
        "display" : "Low"
      }],
      "text" : "Below low normal"
    }]
  }]
}

```
