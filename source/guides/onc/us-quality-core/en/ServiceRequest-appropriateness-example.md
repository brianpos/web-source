# ServiceRequest appropriateness example - 2026 US Quality Core Implementation Guide v0.5.0

## Example ServiceRequest: ServiceRequest appropriateness example

Profile: [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)

**USQualityCore Appropriateness Score**: appropriate

**status**: Completed

**intent**: Order

**code**: Computed tomography, head or brain; without contrast material

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**authoredOn**: 2015-03-30

**requester**: Dr. Beverly Crusher

**reasonCode**: Occipital headache



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "appropriateness-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest-appropriatenessScore",
    "valueCode" : "appropriate"
  }],
  "status" : "completed",
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://www.ama-assn.org/go/cpt",
      "code" : "70450",
      "display" : "Computed tomography, head or brain; without contrast material"
    }]
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "authoredOn" : "2015-03-30",
  "requester" : {
    "display" : "Dr. Beverly Crusher"
  },
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "330007",
      "display" : "Occipital headache"
    }]
  }]
}

```
