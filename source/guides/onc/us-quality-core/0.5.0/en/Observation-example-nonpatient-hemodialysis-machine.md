# Hemodialysis Machine Availability (physical object) Observation Example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Observation: Hemodialysis Machine Availability (physical object) Observation Example

Profile: [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md)

**status**: Final

**category**: Device (physical object)

**code**: Hemodialysis machine, device (physical object)

**subject**: Hemodialysis machine inventory

**effective**: 2023-07-07

**performer**: [Hendricks Country Hospital](Organization-example.md)

**value**: Equipment available (finding)



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "example-nonpatient-hemodialysis-machine",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-nonpatient-observation"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "49062001",
      "display" : "Device (physical object)"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "36965003",
      "display" : "Hemodialysis machine, device (physical object)"
    }]
  },
  "subject" : {
    "display" : "Hemodialysis machine inventory"
  },
  "effectiveDateTime" : "2023-07-07",
  "performer" : [{
    "reference" : "Organization/example",
    "display" : "Hendricks Country Hospital"
  }],
  "valueCodeableConcept" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "735333005",
      "display" : "Equipment available (finding)"
    }]
  }
}

```
