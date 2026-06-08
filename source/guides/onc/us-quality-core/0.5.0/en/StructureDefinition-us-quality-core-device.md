# US Quality Core Device - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Device 

 
Profile of Device for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md), [US Quality Core CommunicationRequest](StructureDefinition-us-quality-core-communicationrequest.md), [US Quality Core DeviceUseStatement](StructureDefinition-us-quality-core-deviceusestatement.md)... Show 5 more, [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md), [US Quality Core QuestionnaireResponse](StructureDefinition-us-quality-core-questionnaireresponse.md), [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) and [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)
* Examples for this Profile: [Device/example](Device-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-device.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-device.csv), [Excel](../StructureDefinition-us-quality-core-device.xlsx), [Schematron](../StructureDefinition-us-quality-core-device.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-device",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-device",
  "version" : "0.5.0",
  "name" : "USQualityCoreDevice",
  "title" : "US Quality Core Device",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-06-05",
  "publisher" : "Office of the National Coordinator for Health Information Technology (ONC)",
  "contact" : [{
    "name" : "Office of the National Coordinator for Health Information Technology (ONC)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.healthit.gov/feedback"
    }]
  }],
  "description" : "Profile of Device for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "udi",
    "uri" : "http://fda.gov/UDI",
    "name" : "UDI Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Device",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Device",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Device",
      "path" : "Device"
    },
    {
      "id" : "Device.udiCarrier",
      "path" : "Device.udiCarrier",
      "short" : "Unique Device Identifier (UDI) Barcode string"
    },
    {
      "id" : "Device.udiCarrier.deviceIdentifier",
      "path" : "Device.udiCarrier.deviceIdentifier",
      "short" : "Mandatory fixed portion of UDI"
    },
    {
      "id" : "Device.type",
      "path" : "Device.type",
      "short" : "The kind or type of device"
    },
    {
      "id" : "Device.patient",
      "path" : "Device.patient",
      "short" : "Patient to whom Device is affixed",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    }]
  }
}

```
