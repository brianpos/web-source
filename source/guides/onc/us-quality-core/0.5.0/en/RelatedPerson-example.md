# RelatedPerson example - 2026 US Quality Core Implementation Guide v0.5.0

## Example RelatedPerson: RelatedPerson example

Profile: [US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md)

**active**: true

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**relationship**: Emergency Contact

**name**: Peter James Chalmers (Official)

**telecom**: ph: (03) 5555 6473(Work)

**gender**: Male

**address**: 534 Erewhon St PleasantVille UT 84414 (home)

**period**: 2012-03-11 --> (ongoing)



## Resource Content

```json
{
  "resourceType" : "RelatedPerson",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson"]
  },
  "active" : true,
  "patient" : {
    "reference" : "Patient/example"
  },
  "relationship" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v2-0131",
      "code" : "C"
    }]
  }],
  "name" : [{
    "use" : "official",
    "family" : "Chalmers",
    "given" : ["Peter", "James"]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "(03) 5555 6473",
    "use" : "work"
  }],
  "gender" : "male",
  "address" : [{
    "use" : "home",
    "line" : ["534 Erewhon St"],
    "city" : "PleasantVille",
    "state" : "UT",
    "postalCode" : "84414"
  }],
  "period" : {
    "start" : "2012-03-11"
  }
}

```
