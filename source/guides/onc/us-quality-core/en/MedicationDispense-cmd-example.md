# MedicationDispense cumulative dose example - 2026 US Quality Core Implementation Guide v0.5.0

## Example MedicationDispense: MedicationDispense cumulative dose example

Profile: [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md)

**status**: Completed

**medication**: [Medication alemtuzumab 10 MG/ML [Lemtrada]](Medication-example.md)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

### Performers

| | |
| :--- | :--- |
| - | **Actor** |
| * | [Practitioner Adam Careful ](Practitioner-example.md) |

**authorizingPrescription**: [MedicationRequest: status = active; intent = order; medication[x] = ->Medication alemtuzumab 10 MG/ML [Lemtrada]; authoredOn = 2015-03-25 19:32:52-0500; reasonCode = Multiple sclerosis (disorder)](MedicationRequest-example.md)

**quantity**: 6 mL (Details: UCUM codemL = 'mL')

**daysSupply**: 5 days (Details: UCUM coded = 'd')

**whenPrepared**: 2015-03-25 16:20:00+0000

**whenHandedOver**: 2015-03-26 10:20:00+0000

**destination**: [Location South Wing, second floor](Location-example.md)

**receiver**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

> **dosageInstruction****text**: Infuse alemtuzumab 12 mg intravenously once daily for 5 days.**timing**: Once per 1 day**route**: Infusion, intravenous

### DoseAndRates

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Dose[x]** |
| * | Ordered | 12 mg (Details: UCUM codemg = 'mg') |




## Resource Content

```json
{
  "resourceType" : "MedicationDispense",
  "id" : "cmd-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationdispense"]
  },
  "status" : "completed",
  "medicationReference" : {
    "reference" : "Medication/example"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "performer" : [{
    "actor" : {
      "reference" : "Practitioner/example"
    }
  }],
  "authorizingPrescription" : [{
    "reference" : "MedicationRequest/example"
  }],
  "quantity" : {
    "value" : 6,
    "unit" : "mL",
    "system" : "http://unitsofmeasure.org",
    "code" : "mL"
  },
  "daysSupply" : {
    "value" : 5,
    "unit" : "days",
    "system" : "http://unitsofmeasure.org",
    "code" : "d"
  },
  "whenPrepared" : "2015-03-25T16:20:00+00:00",
  "whenHandedOver" : "2015-03-26T10:20:00+00:00",
  "destination" : {
    "reference" : "Location/example"
  },
  "receiver" : [{
    "reference" : "Patient/example"
  }],
  "dosageInstruction" : [{
    "text" : "Infuse alemtuzumab 12 mg intravenously once daily for 5 days.",
    "timing" : {
      "repeat" : {
        "boundsPeriod" : {
          "start" : "2015-03-26",
          "end" : "2015-03-30"
        },
        "frequency" : 1,
        "period" : 1,
        "periodUnit" : "d"
      }
    },
    "route" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
        "code" : "IV",
        "display" : "Infusion, intravenous"
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
        "value" : 12,
        "unit" : "mg",
        "system" : "http://unitsofmeasure.org",
        "code" : "mg"
      }
    }]
  }]
}

```
