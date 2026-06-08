# Device example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Device: Device example

Profile: [US Quality Core Device](StructureDefinition-us-quality-core-device.md)

**identifier**: 345675, Serial Number/AMID-342135-8464

### UdiCarriers

| | | |
| :--- | :--- | :--- |
| - | **DeviceIdentifier** | **CarrierHRF** |
| * | 09504000059118 | (01)09504000059118(17)141120(10)7654321D(21)10987654d321 |

**status**: Active

**manufacturer**: Acme Devices, Inc

**lotNumber**: 43453424

**modelNumber**: AB 45-J

**type**: ECG

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**contact**: ph: ext 4352

**note**: By Practitioner/example @2015-06-28 14:03:32+1000

> 

QA Checked




## Resource Content

```json
{
  "resourceType" : "Device",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-device"]
  },
  "identifier" : [{
    "value" : "345675"
  },
  {
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code" : "SNO"
      }],
      "text" : "Serial Number"
    },
    "value" : "AMID-342135-8464"
  }],
  "udiCarrier" : [{
    "deviceIdentifier" : "09504000059118",
    "carrierHRF" : "(01)09504000059118(17)141120(10)7654321D(21)10987654d321"
  }],
  "status" : "active",
  "manufacturer" : "Acme Devices, Inc",
  "lotNumber" : "43453424",
  "modelNumber" : "AB 45-J",
  "type" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "86184003",
      "display" : "Electrocardiographic monitor and recorder"
    }],
    "text" : "ECG"
  },
  "patient" : {
    "reference" : "Patient/example"
  },
  "contact" : [{
    "system" : "phone",
    "value" : "ext 4352"
  }],
  "note" : [{
    "authorReference" : {
      "reference" : "Practitioner/example"
    },
    "time" : "2015-06-28T14:03:32+10:00",
    "text" : "QA Checked"
  }]
}

```
