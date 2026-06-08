# DeviceRequest negation with code example - 2026 US Quality Core Implementation Guide v0.5.0

## Example DeviceRequest: DeviceRequest negation with code example

Profile: [US Quality Core Device Not Requested](StructureDefinition-us-quality-core-devicenotrequested.md)

**US Quality Core Do Not Perform Reason**: Not indicated (qualifier value)

**Extension Definition for DeviceRequest.doNotPerform for Version 5.0**: true

**status**: Completed

**intent**: Original Order

**code**: Venous foot pump, device (physical object)

**subject**: [Peter Chalmers](Patient-example.md)

**authoredOn**: 2016-04-05 09:20:00-0400



## Resource Content

```json
{
  "resourceType" : "DeviceRequest",
  "id" : "negation-with-code-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-devicenotrequested"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason",
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "410534003",
        "display" : "Not indicated (qualifier value)"
      }]
    }
  }],
  "modifierExtension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-DeviceRequest.doNotPerform",
    "valueBoolean" : true
  }],
  "status" : "completed",
  "intent" : "original-order",
  "codeCodeableConcept" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108",
      "code" : "442023007",
      "display" : "Venous foot pump, device (physical object)"
    }],
    "text" : "Venous foot pump, device (physical object)"
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Peter Chalmers"
  },
  "authoredOn" : "2016-04-05T09:20:00-04:00"
}

```
