# Heart rate rhythm clinical result observation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: Heart rate rhythm clinical result observation example

Profile: [US Quality Core Observation Clinical Result](StructureDefinition-us-quality-core-observation-clinical-result.md)

**status**: Final

**category**: Exam

**code**: Heart rate rhythm

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: Cardiology Consult

**effective**: 2021-11-10 16:48:57-0800

**performer**: [Practitioner](Practitioner-example.md)

**value**: Regular (R)



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "clinical-result-heart-rate-rhythm",
  "meta" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/instance-name",
      "valueString" : "Heart rate rhythm Example"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/instance-description",
      "valueMarkdown" : "This is a Heart rate rhythm Example for the *Clinical Result Observation Profile*."
    }],
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-observation-clinical-result"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/observation-category",
      "code" : "exam",
      "display" : "Exam"
    }],
    "text" : "Exam"
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "8884-9",
      "display" : "Heart rate rhythm"
    }],
    "text" : "Heart rate rhythm"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "display" : "Cardiology Consult"
  },
  "effectiveDateTime" : "2021-11-10T16:48:57.246958-08:00",
  "performer" : [{
    "reference" : "Practitioner/example",
    "display" : "Practitioner"
  }],
  "valueString" : "Regular (R)"
}

```
