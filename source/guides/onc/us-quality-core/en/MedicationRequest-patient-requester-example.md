# MedicationRequest Patient Requester Example - 2026 US Quality Core Implementation Guide v0.5.0

## Example MedicationRequest: MedicationRequest Patient Requester Example

Profile: [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md)

**status**: Active

**intent**: Plan

**medication**: [Medication alemtuzumab 10 MG/ML [Lemtrada]](Medication-example.md)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**authoredOn**: 2015-03-25 19:32:52-0500

**requester**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

> **dosageInstruction****timing**: 4 per 2 days**site**: Digestive tract route (qualifier value)**route**: oral administration of treatment

### DoseAndRates

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Dose[x]** |
| * | Ordered | 20 ml (Details: UCUM codeml = 'ml') |


### DispenseRequests

| | |
| :--- | :--- |
| - | **Quantity** |
| * | 200 ml (Details: UCUM codeml = 'ml') |



## Resource Content

```json
{
  "resourceType" : "MedicationRequest",
  "id" : "patient-requester-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationrequest"]
  },
  "status" : "active",
  "intent" : "plan",
  "medicationReference" : {
    "reference" : "Medication/example"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "authoredOn" : "2015-03-25T19:32:52-05:00",
  "requester" : {
    "reference" : "Patient/example"
  },
  "dosageInstruction" : [{
    "timing" : {
      "repeat" : {
        "frequency" : 4,
        "period" : 2,
        "periodUnit" : "d"
      }
    },
    "site" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "447964005"
      }]
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
        "value" : 20,
        "unit" : "ml",
        "system" : "http://unitsofmeasure.org",
        "code" : "ml"
      }
    }]
  }],
  "dispenseRequest" : {
    "quantity" : {
      "value" : 200,
      "unit" : "ml",
      "system" : "http://unitsofmeasure.org",
      "code" : "ml"
    }
  }
}

```
