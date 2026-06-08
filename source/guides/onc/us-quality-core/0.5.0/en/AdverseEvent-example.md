# AdverseEvent example - 2026 US Quality Core Implementation Guide v0.5.0

## Example AdverseEvent: AdverseEvent example

Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md)

**identifier**: 49476534

**actuality**: Adverse Event

**category**: Product Use Error

**event**: Generalized rash (disorder)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**date**: 2017-01-29 12:34:56+0000

**detected**: 2017-01-29 12:34:56+0000

**recordedDate**: 2017-01-29 13:10:00+0000

**seriousness**: Non-serious

**recorder**: [Practitioner Adam Careful ](Practitioner-example.md)

> **suspectEntity****instance**: [alemtuzumab 10 MG/ML [Lemtrada]](Medication-example.md)

### Causalities

| | |
| :--- | :--- |
| - | **Assessment** |
| * | Possible |




## Resource Content

```json
{
  "resourceType" : "AdverseEvent",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-adverseevent"]
  },
  "identifier" : {
    "value" : "49476534"
  },
  "actuality" : "actual",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/adverse-event-category",
      "version" : "4.0.1",
      "code" : "product-use-error",
      "display" : "Product Use Error"
    }]
  }],
  "event" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "725119006",
      "display" : "Generalized rash (disorder)"
    }]
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "date" : "2017-01-29T12:34:56+00:00",
  "detected" : "2017-01-29T12:34:56+00:00",
  "recordedDate" : "2017-01-29T13:10:00+00:00",
  "seriousness" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness",
      "code" : "Non-serious",
      "display" : "Non-serious"
    }]
  },
  "recorder" : {
    "reference" : "Practitioner/example"
  },
  "suspectEntity" : [{
    "instance" : {
      "reference" : "Medication/example",
      "display" : "alemtuzumab 10 MG/ML [Lemtrada]"
    },
    "causality" : [{
      "assessment" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess",
          "code" : "Possible",
          "display" : "Possible"
        }]
      }
    }]
  }]
}

```
