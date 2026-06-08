# Substance example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Substance: Substance example

Profile: [US Quality Core Substance](StructureDefinition-us-quality-core-substance.md)

**identifier**: `http://acme.org/identifiers/substances`/1463

**status**: Active

**category**: Allergen

**code**: apitoxin (Honey Bee Venom)



## Resource Content

```json
{
  "resourceType" : "Substance",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-substance"]
  },
  "identifier" : [{
    "system" : "http://acme.org/identifiers/substances",
    "value" : "1463"
  }],
  "status" : "active",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/substance-category",
      "code" : "allergen",
      "display" : "Allergen"
    }]
  }],
  "code" : {
    "text" : "apitoxin (Honey Bee Venom)"
  }
}

```
