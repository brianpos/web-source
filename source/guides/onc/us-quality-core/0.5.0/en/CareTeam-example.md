# CareTeam example - 2026 US Quality Core Implementation Guide v0.5.0

## Example CareTeam: CareTeam example

Profile: [US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md)

**status**: Active

**subject**: Eve Everywoman

### Participants

| | | |
| :--- | :--- | :--- |
| - | **Role** | **Member** |
| * | midwife | Mabel Midwife |



## Resource Content

```json
{
  "resourceType" : "CareTeam",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-careteam"]
  },
  "status" : "active",
  "subject" : {
    "display" : "Eve Everywoman"
  },
  "participant" : [{
    "role" : [{
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction",
        "code" : "MDWF",
        "display" : "midwife"
      }]
    }],
    "member" : {
      "display" : "Mabel Midwife"
    }
  }]
}

```
