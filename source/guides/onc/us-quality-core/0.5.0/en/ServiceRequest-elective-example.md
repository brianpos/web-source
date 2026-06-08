# ServiceRequest elective example - 2026 US Quality Core Implementation Guide v0.5.0

## Example ServiceRequest: ServiceRequest elective example

Profile: [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)

**US Quality Core IsElective**: true

**status**: Completed

**intent**: Order

**code**: Stomach Bypass

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**authoredOn**: 2015-03-30

**requester**: Dr. Beverly Crusher

**performer**: [Dr Cecil Surgeon](Practitioner-example.md)



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "elective-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest"]
  },
  "modifierExtension" : [{
    "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-isElective",
    "valueBoolean" : true
  }],
  "status" : "completed",
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "442338001",
      "display" : "Bypass of stomach (procedure)"
    }],
    "text" : "Stomach Bypass"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "authoredOn" : "2015-03-30",
  "requester" : {
    "display" : "Dr. Beverly Crusher"
  },
  "performer" : [{
    "reference" : "Practitioner/example",
    "display" : "Dr Cecil Surgeon"
  }]
}

```
