# FamilyMemberHistory example - 2026 US Quality Core Implementation Guide v0.5.0

## Example FamilyMemberHistory: FamilyMemberHistory example

Profile: [US Quality Core FamilyMemberHistory](StructureDefinition-us-quality-core-familymemberhistory.md)

**status**: Completed

**patient**: [Peter Patient](Patient-example.md)

**date**: 2011-03-18 17:49:10+0000

**relationship**: FATHER

### Conditions

| | | | | | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| - | **Extension** | **Code** | **Outcome** | **Onset[x]** | **Note** |
| * |  | Family history of myocardial infarction in male relative of first degree, age known (situation) | Congenital bent nose | 74 yr (Details: UCUM codea = 'a') | > Was fishing at the time. At least he went doing something he loved. |



## Resource Content

```json
{
  "resourceType" : "FamilyMemberHistory",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-familymemberhistory"]
  },
  "status" : "completed",
  "patient" : {
    "reference" : "Patient/example",
    "display" : "Peter Patient"
  },
  "date" : "2011-03-18T17:49:10+00:00",
  "relationship" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code" : "FTH",
      "display" : "FATHER"
    }]
  },
  "condition" : [{
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/familymemberhistory-severity",
      "valueCodeableConcept" : {
        "coding" : [{
          "system" : "http://snomed.info/sct",
          "code" : "399166001",
          "display" : "Fatal"
        }]
      }
    }],
    "code" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "315619001",
        "display" : "Family history of myocardial infarction in male relative of first degree, age known (situation)"
      }],
      "text" : "Family history of myocardial infarction in male relative of first degree, age known (situation)"
    },
    "outcome" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "520004",
        "display" : "Congenital bent nose"
      }]
    },
    "onsetAge" : {
      "value" : 74,
      "unit" : "yr",
      "system" : "http://unitsofmeasure.org",
      "code" : "a"
    },
    "note" : [{
      "text" : "Was fishing at the time. At least he went doing something he loved."
    }]
  }]
}

```
