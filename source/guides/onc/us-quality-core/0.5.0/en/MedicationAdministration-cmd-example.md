# MedicationAdministration Cumulative Duration example - 2026 US Quality Core Implementation Guide v0.5.0

## Example MedicationAdministration: MedicationAdministration Cumulative Duration example

Profile: [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md)

**status**: Completed

**medication**: [Medication alemtuzumab 10 MG/ML [Lemtrada]](Medication-example.md)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**context**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**supportingInformation**: [Condition Burn of ear](Condition-example.md)

**effective**: 2015-01-15 14:30:00+0100 --> 2015-01-29 14:30:00+0100

**request**: [MedicationRequest: status = active; intent = order; medication[x] = ->Medication alemtuzumab 10 MG/ML [Lemtrada]; authoredOn = 2015-03-25 19:32:52-0500; reasonCode = Multiple sclerosis (disorder)](MedicationRequest-example.md)

### Dosages

| | | |
| :--- | :--- | :--- |
| - | **Route** | **Dose** |
| * | Intravenous route (qualifier value) | 3 mg (Details: UCUM codemg = 'mg') |



## Resource Content

```json
{
  "resourceType" : "MedicationAdministration",
  "id" : "cmd-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationadministration"]
  },
  "status" : "completed",
  "medicationReference" : {
    "reference" : "Medication/example"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "context" : {
    "reference" : "Encounter/example"
  },
  "supportingInformation" : [{
    "reference" : "Condition/example"
  }],
  "effectivePeriod" : {
    "start" : "2015-01-15T14:30:00+01:00",
    "end" : "2015-01-29T14:30:00+01:00"
  },
  "request" : {
    "reference" : "MedicationRequest/example"
  },
  "dosage" : {
    "route" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "47625008",
        "display" : "Intravenous route (qualifier value)"
      }]
    },
    "dose" : {
      "value" : 3,
      "unit" : "mg",
      "system" : "http://unitsofmeasure.org",
      "code" : "mg"
    }
  }
}

```
