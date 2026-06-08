# DeviceRequest negation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example DeviceRequest: DeviceRequest negation example

Profile: [US Quality Core Device Not Requested](StructureDefinition-us-quality-core-devicenotrequested.md)

**US Quality Core Do Not Perform Reason**: Not indicated (qualifier value)

**Extension Definition for DeviceRequest.doNotPerform for Version 5.0**: true

**status**: Completed

**intent**: Original Order

**code**: Not Done Value Set: Venous Foot Pumps (VFP) (Not done value set: [Venous foot pumps](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.117.1.7.1.230/expansion))

**subject**: [Peter Chalmers](Patient-example.md)

**authoredOn**: 2016-04-05 09:20:00-0400



## Resource Content

```json
{
  "resourceType" : "DeviceRequest",
  "id" : "negation-example",
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
    "extension" : [{
      "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet",
      "valueCanonical" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.230"
    }],
    "text" : "Not Done Value Set: Venous Foot Pumps (VFP)"
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Peter Chalmers"
  },
  "authoredOn" : "2016-04-05T09:20:00-04:00"
}

```
