# Infant patient example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Patient: Infant patient example

Profile: [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md)

Infant Example Male, DoB: 2020-06-02 ( Social Security number: United States Social Security Number#999123458 (use: usual, ))

-------

| | |
| :--- | :--- |
| Active: | true |
| Contact Detail | * ph: 555-555-5555(Home)
* 49 Meadow St Mounds OK 74047 US 
 |



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "infant-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
  },
  "identifier" : [{
    "use" : "usual",
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code" : "SS",
        "display" : "Social Security number"
      }],
      "text" : "Social Security number"
    },
    "system" : "http://hl7.org/fhir/sid/us-ssn",
    "value" : "999123458"
  }],
  "active" : true,
  "name" : [{
    "family" : "Example",
    "given" : ["Infant"]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "555-555-5555",
    "use" : "home"
  }],
  "gender" : "male",
  "birthDate" : "2020-06-02",
  "address" : [{
    "line" : ["49 Meadow St"],
    "city" : "Mounds",
    "state" : "OK",
    "postalCode" : "74047",
    "country" : "US"
  }]
}

```
