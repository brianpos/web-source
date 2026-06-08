# DeviceUseStatement example - 2026 US Quality Core Implementation Guide v0.5.0

## Example DeviceUseStatement: DeviceUseStatement example

Profile: [US Quality Core DeviceUseStatement](StructureDefinition-us-quality-core-deviceusestatement.md)

**identifier**: 51ebb7a9-4e3a-4360-9a05-0cc2d869086f

**status**: Active

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**timing**: 2013-04-04 18:30:00-0400 --> (ongoing)

**device**: [Electrocardiographic monitor and recorder](Device-example.md)



## Resource Content

```json
{
  "resourceType" : "DeviceUseStatement",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-deviceusestatement"]
  },
  "identifier" : [{
    "value" : "51ebb7a9-4e3a-4360-9a05-0cc2d869086f"
  }],
  "status" : "active",
  "subject" : {
    "reference" : "Patient/example"
  },
  "timingPeriod" : {
    "start" : "2013-04-04T18:30:00-04:00"
  },
  "device" : {
    "reference" : "Device/example",
    "display" : "Electrocardiographic monitor and recorder"
  }
}

```
