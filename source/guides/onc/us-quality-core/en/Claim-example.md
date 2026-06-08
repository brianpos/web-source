# Claim example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Claim: Claim example

Profile: [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md)

**identifier**: `http://example.org/claims`/6612346

**status**: Active

**type**: Professional

**use**: Claim

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**created**: 2014-08-16

**insurer**: [Organization Health Level Seven International](Organization-example.md)

**provider**: [Practitioner Adam Careful ](Practitioner-example.md)

**priority**: Normal

### Payees

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Party** |
| * | Provider | [Practitioner Adam Careful ](Practitioner-example.md) |

### CareTeams

| | | |
| :--- | :--- | :--- |
| - | **Sequence** | **Provider** |
| * | 1 | [Practitioner Adam Careful ](Practitioner-example.md) |

### Diagnoses

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Sequence** | **Diagnosis[x]** | **OnAdmission** |
| * | 1 | Unspecified acute appendicitis | Y |

### Insurances

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Sequence** | **Focal** | **Coverage** |
| * | 1 | true | [Coverage: identifier = Member Number; status = active; type = Other Private Insurance; subscriberId = 12191; dependent = 0; relationship = Self; period = 2011-05-23 --> 2012-05-23; order = 9](Coverage-example.md) |

> **item****sequence**: 1**careTeamSequence**: 1**diagnosisSequence**: 1**productOrService**: Appendectomy**serviced**: 2013-04-05

### UnitPrices

| | | |
| :--- | :--- | :--- |
| - | **Value** | **Currency** |
| * | 4000.00 | United States dollar |




## Resource Content

```json
{
  "resourceType" : "Claim",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-claim"]
  },
  "identifier" : [{
    "system" : "http://example.org/claims",
    "value" : "6612346"
  }],
  "status" : "active",
  "type" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/claim-type",
      "code" : "professional",
      "display" : "Professional"
    }]
  },
  "use" : "claim",
  "patient" : {
    "reference" : "Patient/example"
  },
  "created" : "2014-08-16",
  "insurer" : {
    "reference" : "Organization/example"
  },
  "provider" : {
    "reference" : "Practitioner/example"
  },
  "priority" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/processpriority",
      "code" : "normal"
    }]
  },
  "payee" : {
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/payeetype",
        "code" : "provider"
      }]
    },
    "party" : {
      "reference" : "Practitioner/example"
    }
  },
  "careTeam" : [{
    "sequence" : 1,
    "provider" : {
      "reference" : "Practitioner/example"
    }
  }],
  "diagnosis" : [{
    "sequence" : 1,
    "diagnosisCodeableConcept" : {
      "coding" : [{
        "system" : "http://hl7.org/fhir/sid/icd-10-cm",
        "code" : "K35.80",
        "display" : "Unspecified acute appendicitis"
      }]
    },
    "onAdmission" : {
      "coding" : [{
        "system" : "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HospitalAcqCond/Coding",
        "code" : "Y"
      }]
    }
  }],
  "insurance" : [{
    "sequence" : 1,
    "focal" : true,
    "coverage" : {
      "reference" : "Coverage/example"
    }
  }],
  "item" : [{
    "sequence" : 1,
    "careTeamSequence" : [1],
    "diagnosisSequence" : [1],
    "productOrService" : {
      "coding" : [{
        "system" : "http://www.ama-assn.org/go/cpt",
        "code" : "44950",
        "display" : "Appendectomy"
      }]
    },
    "servicedDate" : "2013-04-05",
    "unitPrice" : {
      "value" : 4000.00,
      "currency" : "USD"
    }
  }]
}

```
