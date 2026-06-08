# Encounter example of emergency visit that escalated into inpatient patient - 2026 US Quality Core Implementation Guide v0.5.0

## Example Encounter: Encounter example of emergency visit that escalated into inpatient patient

Profile: [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md)

**status**: In Progress

**class**: [v3 Code System ActCode: IMP](http://hl7.org/fhir/R4/v3/ActCode/cs.html#v3-ActCode-IMP) (inpatient encounter)

**type**: Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**period**: 2017-02-01 07:15:00+1000 --> (ongoing)

> **location****location**: [Emergency Waiting Room](Location-example.md)**status**: Active**period**: 2017-02-01 07:15:00+1000 --> 2017-02-01 08:45:00+1000

> **location****location**: [Emergency](Location-example.md)**status**: Active**period**: 2017-02-01 08:45:00+1000 --> 2017-02-01 09:27:00+1000

> **location****location**: [Ward 1, Room 42, Bed 1](Location-example.md)**status**: Active**period**: 2017-02-01 09:27:00+1000 --> 2017-02-01 12:15:00+1000

> **location****location**: [Ward 1, Room 42, Bed 1](Location-example.md)**status**: Reserved**period**: 2017-02-01 12:15:00+1000 --> 2017-02-01 12:45:00+1000

> **location****location**: [Ward 1, Room 42, Bed 1](Location-example.md)**status**: Active**period**: 2017-02-01 12:45:00+1000 --> (ongoing)



## Resource Content

```json
{
  "resourceType" : "Encounter",
  "id" : "encounter-ed-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter"]
  },
  "status" : "in-progress",
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
    "start" : "2017-02-01T07:15:00+10:00"
  },
  "location" : [{
    "location" : {
      "reference" : "Location/example",
      "display" : "Emergency Waiting Room"
    },
    "status" : "active",
    "period" : {
      "start" : "2017-02-01T07:15:00+10:00",
      "end" : "2017-02-01T08:45:00+10:00"
    }
  },
  {
    "location" : {
      "reference" : "Location/example",
      "display" : "Emergency"
    },
    "status" : "active",
    "period" : {
      "start" : "2017-02-01T08:45:00+10:00",
      "end" : "2017-02-01T09:27:00+10:00"
    }
  },
  {
    "location" : {
      "reference" : "Location/example",
      "display" : "Ward 1, Room 42, Bed 1"
    },
    "status" : "active",
    "period" : {
      "start" : "2017-02-01T09:27:00+10:00",
      "end" : "2017-02-01T12:15:00+10:00"
    }
  },
  {
    "location" : {
      "reference" : "Location/example",
      "display" : "Ward 1, Room 42, Bed 1"
    },
    "status" : "reserved",
    "period" : {
      "start" : "2017-02-01T12:15:00+10:00",
      "end" : "2017-02-01T12:45:00+10:00"
    }
  },
  {
    "location" : {
      "reference" : "Location/example",
      "display" : "Ward 1, Room 42, Bed 1"
    },
    "status" : "active",
    "period" : {
      "start" : "2017-02-01T12:45:00+10:00"
    }
  }]
}

```
