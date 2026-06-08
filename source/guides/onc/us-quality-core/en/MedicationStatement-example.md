# MedicationStatment example - 2026 US Quality Core Implementation Guide v0.5.0

## Example MedicationStatement: MedicationStatment example

Profile: [US Quality Core MedicationStatement](StructureDefinition-us-quality-core-medicationstatement.md)

**status**: Active

**medication**: [Medication alemtuzumab 10 MG/ML [Lemtrada]](Medication-example.md)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**effective**: 2015-03-26 --> 2015-03-30

**dateAsserted**: 2015-03-25 15:00:00-0500

**informationSource**: [Practitioner Adam Careful ](Practitioner-example.md)

**derivedFrom**: [MedicationRequest: status = active; intent = order; medication[x] = ->Medication alemtuzumab 10 MG/ML [Lemtrada]; authoredOn = 2015-03-25 19:32:52-0500; reasonCode = Multiple sclerosis (disorder)](MedicationRequest-example.md)

> **dosage****text**: Infuse alemtuzumab 12 mg intravenously once daily for 5 days.**timing**: Once per 1 day**route**: Infusion, intravenous

### DoseAndRates

| | |
| :--- | :--- |
| - | **Dose[x]** |
| * | 12 mg (Details: UCUM codemg = 'mg') |




## Resource Content

```json
{
  "resourceType" : "MedicationStatement",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationstatement"]
  },
  "status" : "active",
  "medicationReference" : {
    "reference" : "Medication/example"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "effectivePeriod" : {
    "start" : "2015-03-26",
    "end" : "2015-03-30"
  },
  "dateAsserted" : "2015-03-25T15:00:00-05:00",
  "informationSource" : {
    "reference" : "Practitioner/example"
  },
  "derivedFrom" : [{
    "reference" : "MedicationRequest/example"
  }],
  "dosage" : [{
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
