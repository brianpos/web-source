# MedicationRequest example - 2026 US Quality Core Implementation Guide v0.5.0

## Example MedicationRequest: MedicationRequest example

Profile: [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md)

**status**: Active

**intent**: Order

**medication**: [Medication alemtuzumab 10 MG/ML [Lemtrada]](Medication-example.md)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**authoredOn**: 2015-03-25 19:32:52-0500

**requester**: [Practitioner Adam Careful ](Practitioner-example.md)

**reasonCode**: Multiple sclerosis requiring disease-modifying therapy

**reasonReference**: Multiple sclerosis requiring disease-modifying therapy

> **dosageInstruction****text**: Infuse alemtuzumab 12 mg intravenously once daily for 5 days.**timing**: 1-1 per 1-1 day**asNeeded**: false**route**: Infusion, intravenous

### DoseAndRates

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Dose[x]** |
| * | Ordered | 12 mg (Details: UCUM codemg = 'mg') |


> **dispenseRequest****validityPeriod**: 2015-03-25 --> 2015-04-01**numberOfRepeatsAllowed**: 0**quantity**: 6 mL (Details: UCUM codemL = 'mL')

### ExpectedSupplyDurations

| | | | | |
| :--- | :--- | :--- | :--- | :--- |
| - | **Value** | **Unit** | **System** | **Code** |
| * | 5 | days | [http://unitsofmeasure.org](http://terminology.hl7.org/6.5.0/CodeSystem-v3-ucum.html) | d |




## Resource Content

```json
{
  "resourceType" : "MedicationRequest",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationrequest"]
  },
  "status" : "active",
  "intent" : "order",
  "medicationReference" : {
    "reference" : "Medication/example"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "authoredOn" : "2015-03-25T19:32:52-05:00",
  "requester" : {
    "reference" : "Practitioner/example"
  },
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "24700007",
      "display" : "Multiple sclerosis (disorder)"
    }],
    "text" : "Multiple sclerosis requiring disease-modifying therapy"
  }],
  "reasonReference" : [{
    "display" : "Multiple sclerosis requiring disease-modifying therapy"
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
        "frequencyMax" : 1,
        "period" : 1,
        "periodMax" : 1,
        "periodUnit" : "d"
      }
    },
    "asNeededBoolean" : false,
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
  }],
  "dispenseRequest" : {
    "validityPeriod" : {
      "start" : "2015-03-25",
      "end" : "2015-04-01"
    },
    "numberOfRepeatsAllowed" : 0,
    "quantity" : {
      "value" : 6,
      "unit" : "mL",
      "system" : "http://unitsofmeasure.org",
      "code" : "mL"
    },
    "expectedSupplyDuration" : {
      "value" : 5,
      "unit" : "days",
      "system" : "http://unitsofmeasure.org",
      "code" : "d"
    }
  }
}

```
