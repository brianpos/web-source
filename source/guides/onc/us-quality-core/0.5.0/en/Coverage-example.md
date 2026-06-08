# Coverage example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Coverage: Coverage example

Profile: [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md)

**identifier**: Member Number/?ngen-9?

**status**: Active

**type**: Other Private Insurance

**policyHolder**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**subscriber**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**subscriberId**: 12191

**beneficiary**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**dependent**: 0

**relationship**: Self

**period**: 2011-05-23 --> 2012-05-23

**payor**: [Organization Health Level Seven International](Organization-example.md)

> **class****type**: Group**value**: CBI35**name**: Corporate Baker's Inc. Local #35

> **class****type**: Plan**value**: B37FC**name**: Full Coverage: Medical, Dental, Pharmacy, Vision, EHC

**order**: 9



## Resource Content

```json
{
  "resourceType" : "Coverage",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-coverage"]
  },
  "identifier" : [{
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code" : "MB"
      }]
    }
  }],
  "status" : "active",
  "type" : {
    "coding" : [{
      "system" : "https://nahdo.org/sopt",
      "code" : "59",
      "display" : "Other Private Insurance"
    }]
  },
  "policyHolder" : {
    "reference" : "Patient/example"
  },
  "subscriber" : {
    "reference" : "Patient/example"
  },
  "subscriberId" : "12191",
  "beneficiary" : {
    "reference" : "Patient/example"
  },
  "dependent" : "0",
  "relationship" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
      "code" : "self"
    }]
  },
  "period" : {
    "start" : "2011-05-23",
    "end" : "2012-05-23"
  },
  "payor" : [{
    "reference" : "Organization/example"
  }],
  "class" : [{
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/coverage-class",
        "code" : "group",
        "display" : "Group"
      }]
    },
    "value" : "CBI35",
    "name" : "Corporate Baker's Inc. Local #35"
  },
  {
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/coverage-class",
        "code" : "plan",
        "display" : "Plan"
      }]
    },
    "value" : "B37FC",
    "name" : "Full Coverage: Medical, Dental, Pharmacy, Vision, EHC"
  }],
  "order" : 9
}

```
