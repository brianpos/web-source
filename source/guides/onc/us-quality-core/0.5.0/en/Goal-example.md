# Goal example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Goal: Goal example

Profile: [US Quality Core Goal](StructureDefinition-us-quality-core-goal.md)

**identifier**: 123

**lifecycleStatus**: On Hold

**category**: Dietary

**priority**: high

**description**: Target body weight is 160 to 180 lbs.

**subject**: [Peter James Chalmers](Patient-example.md)

**start**: 2015-04-05

### Targets

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Measure** | **Detail[x]** | **Due[x]** |
| * | Weight Measured | 160-180 lbs | 2016-04-05 |

**statusDate**: 2016-02-14

**statusReason**: Patient wants to defer weight loss until after honeymoon.

**expressedBy**: [Peter James Chalmers](Patient-example.md)

**addresses**: obesity condition

**outcomeReference**: [Body Weight Measured](Observation-example.md)



## Resource Content

```json
{
  "resourceType" : "Goal",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-goal"]
  },
  "identifier" : [{
    "value" : "123"
  }],
  "lifecycleStatus" : "on-hold",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/goal-category",
      "code" : "dietary"
    }]
  }],
  "priority" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/goal-priority",
      "code" : "high-priority",
      "display" : "High Priority"
    }],
    "text" : "high"
  },
  "description" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "50064-5",
      "display" : "Ideal body weight"
    }],
    "text" : "Target body weight is 160 to 180 lbs."
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Peter James Chalmers"
  },
  "startDate" : "2015-04-05",
  "target" : [{
    "measure" : {
      "coding" : [{
        "system" : "http://loinc.org",
        "code" : "3141-9",
        "display" : "Weight Measured"
      }]
    },
    "detailRange" : {
      "low" : {
        "value" : 160,
        "unit" : "lbs",
        "system" : "http://unitsofmeasure.org",
        "code" : "[lb_av]"
      },
      "high" : {
        "value" : 180,
        "unit" : "lbs",
        "system" : "http://unitsofmeasure.org",
        "code" : "[lb_av]"
      }
    },
    "dueDate" : "2016-04-05"
  }],
  "statusDate" : "2016-02-14",
  "statusReason" : "Patient wants to defer weight loss until after honeymoon.",
  "expressedBy" : {
    "reference" : "Patient/example",
    "display" : "Peter James Chalmers"
  },
  "addresses" : [{
    "display" : "obesity condition"
  }],
  "outcomeReference" : [{
    "reference" : "Observation/example",
    "display" : "Body Weight Measured"
  }]
}

```
