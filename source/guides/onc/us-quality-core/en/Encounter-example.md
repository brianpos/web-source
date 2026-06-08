# Encounter example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Encounter: Encounter example

Profile: [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md)

**identifier**: `http://example.org/encounters`/ENC-20130404-appendicitis

**status**: Finished

**class**: [v3 Code System ActCode: IMP](http://hl7.org/fhir/R4/v3/ActCode/cs.html#v3-ActCode-IMP) (inpatient encounter)

**type**: Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**period**: 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400

### Diagnoses

| | | |
| :--- | :--- | :--- |
| - | **Extension** | **Condition** |
| * |  | [Condition Appendicitis (disorder)](Condition-appendicitis-example.md) |

### Hospitalizations

| | |
| :--- | :--- |
| - | **DischargeDisposition** |
| * | Home |

### Locations

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Location** | **Status** | **Period** |
| * | [South Wing, second floor](Location-example.md) | Completed | 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400 |



## Resource Content

```json
{
  "resourceType" : "Encounter",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter"]
  },
  "identifier" : [{
    "system" : "http://example.org/encounters",
    "value" : "ENC-20130404-appendicitis"
  }],
  "status" : "finished",
  "class" : {
    "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code" : "IMP",
    "display" : "inpatient encounter"
  },
  "type" : [{
    "coding" : [{
      "system" : "http://www.ama-assn.org/go/cpt",
      "code" : "99223",
      "display" : "Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded."
    }]
  }],
  "subject" : {
    "reference" : "Patient/example"
  },
  "period" : {
    "start" : "2013-04-04T18:00:00-04:00",
    "end" : "2013-04-06T11:00:00-04:00"
  },
  "diagnosis" : [{
    "extension" : [{
      "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter-diagnosisPresentOnAdmission",
      "valueCodeableConcept" : {
        "coding" : [{
          "system" : "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HospitalAcqCond/Coding",
          "code" : "Y"
        }]
      }
    }],
    "condition" : {
      "reference" : "Condition/appendicitis-example"
    }
  }],
  "hospitalization" : {
    "dischargeDisposition" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/discharge-disposition",
        "code" : "home",
        "display" : "Home"
      }]
    }
  },
  "location" : [{
    "location" : {
      "reference" : "Location/example",
      "display" : "South Wing, second floor"
    },
    "status" : "completed",
    "period" : {
      "start" : "2013-04-04T18:00:00-04:00",
      "end" : "2013-04-06T11:00:00-04:00"
    }
  }]
}

```
