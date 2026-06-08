# 10 minute Apgar Heart Rate Observation Screening Assessment Example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: 10 minute Apgar Heart Rate Observation Screening Assessment Example

Profile: [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md)

**status**: Final

**category**: Survey

**code**: Apgar respiratory effort score

**subject**: [Infant Example Male, DoB: 2020-06-02 ( Social Security number: United States Social Security Number#999123458 (use: usual, ))](Patient-infant-example.md)

**effective**: 2016-05-18 22:33:22+0000

**performer**: [Practitioner Adam Careful ](Practitioner-example.md)

**value**: 2. At least 100 beats per minute



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "example-screening-assessment-10-minute-apgar-heart-rate",
  "meta" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/instance-name",
      "valueString" : "10 minute Apgar Heart Rate Screening Assessment Example"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/instance-description",
      "valueMarkdown" : "This example of a US Quality Core Observation Screening Assessment Profile illustrates its use to directly capture individual screening assessment items as an observation. It is not derived from a FHIR QuestionnaireResponse."
    }],
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-observation-screening-assessment"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "survey",
      "display" : "Survey"
    }],
    "text" : "Survey"
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "32402-0",
      "display" : "10 minute Apgar Heart Rate"
    }],
    "text" : "Apgar respiratory effort score"
  },
  "subject" : {
    "reference" : "Patient/infant-example"
  },
  "effectiveDateTime" : "2016-05-18T22:33:22+00:00",
  "performer" : [{
    "reference" : "Practitioner/example"
  }],
  "valueCodeableConcept" : {
    "coding" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/StructureDefinition/ordinalValue",
        "valueDecimal" : 2
      }],
      "system" : "http://loinc.org",
      "code" : "LA6718-6",
      "display" : "At least 100 beats per minute"
    }],
    "text" : "2. At least 100 beats per minute"
  }
}

```
