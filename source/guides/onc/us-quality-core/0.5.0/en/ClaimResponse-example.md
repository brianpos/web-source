# ClaimResponse example - 2026 US Quality Core Implementation Guide v0.5.0

## Example ClaimResponse: ClaimResponse example

Profile: [US Quality Core ClaimResponse](StructureDefinition-us-quality-core-claimresponse.md)

**status**: Active

**type**: Professional

**use**: Preauthorization

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**created**: 2018-02-24

**insurer**: [Organization Health Level Seven International](Organization-example.md)

**requestor**: [Practitioner Adam Careful ](Practitioner-example.md)

**request**: [Claim: identifier = http://example.org/claims#6612346; status = active; type = Professional; use = claim; created = 2014-08-16; priority = Normal](Claim-example.md)

**outcome**: Queued

> **item****itemSequence**: 1
> **adjudication****category**: Submitted Amount

### Amounts

| | | |
| :--- | :--- | :--- |
| - | **Value** | **Currency** |
| * | 4000.00 | United States dollar |


> **detail****detailSequence**: 1
> **adjudication****category**: Submitted Amount

### Amounts

| | | |
| :--- | :--- | :--- |
| - | **Value** | **Currency** |
| * | 4000.00 | United States dollar |






## Resource Content

```json
{
  "resourceType" : "ClaimResponse",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-claimresponse"]
  },
  "status" : "active",
  "type" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/claim-type",
      "code" : "professional",
      "display" : "Professional"
    }]
  },
  "use" : "preauthorization",
  "patient" : {
    "reference" : "Patient/example"
  },
  "created" : "2018-02-24",
  "insurer" : {
    "reference" : "Organization/example"
  },
  "requestor" : {
    "reference" : "Practitioner/example"
  },
  "request" : {
    "reference" : "Claim/example"
  },
  "outcome" : "queued",
  "item" : [{
    "itemSequence" : 1,
    "adjudication" : [{
      "category" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/adjudication",
          "code" : "submitted"
        }]
      },
      "amount" : {
        "value" : 4000.00,
        "currency" : "USD"
      }
    }],
    "detail" : [{
      "detailSequence" : 1,
      "adjudication" : [{
        "category" : {
          "coding" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/adjudication",
            "code" : "submitted"
          }]
        },
        "amount" : {
          "value" : 4000.00,
          "currency" : "USD"
        }
      }]
    }]
  }]
}

```
