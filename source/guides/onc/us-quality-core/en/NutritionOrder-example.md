# NutrientOrder example - 2026 US Quality Core Implementation Guide v0.5.0

## Example NutritionOrder: NutrientOrder example

Profile: [US Quality Core NutritionOrder](StructureDefinition-us-quality-core-nutritionorder.md)

**identifier**: 123

**status**: Active

**intent**: Order

**patient**: [Peter Chalmers](Patient-example.md)

**encounter**: [Inpatient](Encounter-example.md)

**dateTime**: 2013-04-04

**orderer**: [Dr Adam Careful](Practitioner-example.md)

**allergyIntolerance**: [Food allergy](AllergyIntolerance-example.md)

**foodPreferenceModifier**: Dairy Free

> **oralDiet****type**: Diabetic diet**schedule**: 3 per 1 day

### Nutrients

| | | |
| :--- | :--- | :--- |
| - | **Modifier** | **Amount** |
| * | Carbohydrate | 75 grams (Details: UCUM codeg = 'g') |




## Resource Content

```json
{
  "resourceType" : "NutritionOrder",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-nutritionorder"]
  },
  "identifier" : [{
    "value" : "123"
  }],
  "status" : "active",
  "intent" : "order",
  "patient" : {
    "reference" : "Patient/example",
    "display" : "Peter Chalmers"
  },
  "encounter" : {
    "reference" : "Encounter/example",
    "display" : "Inpatient"
  },
  "dateTime" : "2013-04-04",
  "orderer" : {
    "reference" : "Practitioner/example",
    "display" : "Dr Adam Careful"
  },
  "allergyIntolerance" : [{
    "reference" : "AllergyIntolerance/example",
    "display" : "Food allergy"
  }],
  "foodPreferenceModifier" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/diet",
      "code" : "dairy-free"
    }]
  }],
  "oralDiet" : {
    "type" : [{
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "160670007",
        "display" : "Diabetic diet"
      }],
      "text" : "Diabetic diet"
    }],
    "schedule" : [{
      "repeat" : {
        "boundsPeriod" : {
          "start" : "2013-04-04"
        },
        "frequency" : 3,
        "period" : 1,
        "periodUnit" : "d"
      }
    }],
    "nutrient" : [{
      "modifier" : {
        "coding" : [{
          "system" : "http://snomed.info/sct",
          "code" : "2331003",
          "display" : "Carbohydrate"
        }]
      },
      "amount" : {
        "value" : 75,
        "unit" : "grams",
        "system" : "http://unitsofmeasure.org",
        "code" : "g"
      }
    }]
  }
}

```
