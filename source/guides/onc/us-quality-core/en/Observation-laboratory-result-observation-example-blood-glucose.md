# Glucose Laboratory Result Observation Example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: Glucose Laboratory Result Observation Example

version: 1165; Last updated: 2016-03-09 15:29:58+0000

Profile: [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md)

**status**: Final

**category**: Laboratory

**code**: Glucose Bld-mCnc

**subject**: [Amy Shaw](Patient-example.md)

**effective**: 2005-07-05

**issued**: 2005-07-05 14:30:00-0500

**performer**: [Hendricks Country Hospital](Organization-example1.md)

**value**: 76.0 mg/dL

**interpretation**: Normal

### ReferenceRanges

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Low** | **High** | **Type** |
| * | 40.0 mg/dL (Details: UCUM codemg/dL = 'mg/dL') | 109.0 mg/dL (Details: UCUM codemg/dL = 'mg/dL') | Normal Range |



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "laboratory-result-observation-example-blood-glucose",
  "meta" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/instance-name",
      "valueString" : "Blood Glucose Example"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/instance-description",
      "valueMarkdown" : "This is a blood glucose example for the *US Quality Core Observation Lab Profile*."
    }],
    "versionId" : "1165",
    "lastUpdated" : "2016-03-09T15:29:58.328+00:00",
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-observation-lab"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "laboratory",
      "display" : "Laboratory"
    }],
    "text" : "Laboratory"
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "2339-0",
      "display" : "Glucose Bld-mCnc"
    }],
    "text" : "Glucose Bld-mCnc"
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Amy Shaw"
  },
  "effectiveDateTime" : "2005-07-05",
  "issued" : "2005-07-05T14:30:00-05:00",
  "performer" : [{
    "reference" : "Organization/example1",
    "display" : "Hendricks Country Hospital"
  }],
  "valueQuantity" : {
    "value" : 76.0,
    "unit" : "mg/dL",
    "system" : "http://unitsofmeasure.org"
  },
  "interpretation" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
      "code" : "N",
      "display" : "Normal"
    }],
    "text" : "Normal"
  }],
  "referenceRange" : [{
    "low" : {
      "value" : 40.0,
      "unit" : "mg/dL",
      "system" : "http://unitsofmeasure.org",
      "code" : "mg/dL"
    },
    "high" : {
      "value" : 109.0,
      "unit" : "mg/dL",
      "system" : "http://unitsofmeasure.org",
      "code" : "mg/dL"
    },
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        "code" : "normal",
        "display" : "Normal Range"
      }],
      "text" : "Normal Range"
    }
  }]
}

```
