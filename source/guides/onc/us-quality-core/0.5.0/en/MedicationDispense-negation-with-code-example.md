# MedicationDispense negation with code example - 2026 US Quality Core Implementation Guide v0.5.0

## Example MedicationDispense: MedicationDispense negation with code example

Profile: [US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md)

**US Quality Core Not Done Recorded**: 2017-01-17

**status**: Declined

**statusReason**: Drug treatment not indicated (situation)

**medication**: alcaftadine 2.5 MG/ML [Lastacaft]

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**authorizingPrescription**: [MedicationRequest: status = active; intent = order; medication[x] = ->Medication alemtuzumab 10 MG/ML [Lemtrada]; authoredOn = 2015-03-25 19:32:52-0500; reasonCode = Multiple sclerosis (disorder)](MedicationRequest-example.md)

> **dosageInstruction****timing**: 3 per 1 day**route**: oral administration of treatment

### DoseAndRates

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Dose[x]** |
| * | Ordered | 5 ml (Details: UCUM codeml = 'ml') |




## Resource Content

```json
{
  "resourceType" : "MedicationDispense",
  "id" : "negation-with-code-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationdispensedeclined"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-recorded",
    "valueDateTime" : "2017-01-17"
  }],
  "status" : "declined",
  "statusReasonCodeableConcept" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "183966005",
      "display" : "Drug treatment not indicated (situation)"
    }]
  },
  "medicationCodeableConcept" : {
    "coding" : [{
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "1000087",
      "display" : "alcaftadine 2.5 MG/ML [Lastacaft]"
    }]
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "authorizingPrescription" : [{
    "reference" : "MedicationRequest/example"
  }],
  "dosageInstruction" : [{
    "timing" : {
      "repeat" : {
        "frequency" : 3,
        "period" : 1,
        "periodUnit" : "d"
      }
    },
    "route" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "394899003",
        "display" : "oral administration of treatment"
      }]
    },
    "doseAndRate" : [{
      "type" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/dose-rate-type",
          "code" : "ordered",
          "display" : "Ordered"
        }]
      },
      "doseQuantity" : {
        "value" : 5,
        "unit" : "ml",
        "system" : "http://unitsofmeasure.org",
        "code" : "ml"
      }
    }]
  }]
}

```
