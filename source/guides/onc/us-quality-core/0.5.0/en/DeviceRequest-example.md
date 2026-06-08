# DeviceRequest example - 2026 US Quality Core Implementation Guide v0.5.0

## Example DeviceRequest: DeviceRequest example

Profile: [US Quality Core DeviceRequest](StructureDefinition-us-quality-core-devicerequest.md)

**Extension Definition for DeviceRequest.doNotPerform for Version 5.0**: false

**status**: Active

**intent**: Original Order

**code**: Electrocardiographic monitor and recorder

**subject**: [Peter Chalmers](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**authoredOn**: 2015-01-15 13:15:00+0100

**requester**: [Practitioner Adam Careful ](Practitioner-example.md)



## Resource Content

```json
{
  "resourceType" : "DeviceRequest",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-devicerequest"]
  },
  "modifierExtension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-DeviceRequest.doNotPerform",
    "valueBoolean" : false
  }],
  "status" : "active",
  "intent" : "original-order",
  "codeCodeableConcept" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "86184003",
      "display" : "Electrocardiographic monitor and recorder"
    }],
    "text" : "Electrocardiographic monitor and recorder"
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Peter Chalmers"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "authoredOn" : "2015-01-15T13:15:00+01:00",
  "requester" : {
    "reference" : "Practitioner/example"
  }
}

```
