# US Quality Core DeviceUseStatement - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core DeviceUseStatement 

 
Profile of DeviceUseStatement for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Examples for this Profile: [DeviceUseStatement/example](DeviceUseStatement-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-deviceusestatement.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-deviceusestatement.csv), [Excel](../StructureDefinition-us-quality-core-deviceusestatement.xlsx), [Schematron](../StructureDefinition-us-quality-core-deviceusestatement.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-deviceusestatement",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-deviceusestatement",
  "version" : "0.5.0",
  "name" : "USQualityCoreDeviceUseStatement",
  "title" : "US Quality Core DeviceUseStatement",
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
  "description" : "Profile of DeviceUseStatement for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "quick",
    "uri" : "http://siframework.org/cqf",
    "name" : "Quality Improvement and Clinical Knowledge (QUICK)"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DeviceUseStatement",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/DeviceUseStatement",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DeviceUseStatement",
      "path" : "DeviceUseStatement"
    },
    {
      "id" : "DeviceUseStatement.status",
      "path" : "DeviceUseStatement.status",
      "short" : "active | completed | entered-in-error +"
    },
    {
      "id" : "DeviceUseStatement.subject",
      "path" : "DeviceUseStatement.subject",
      "short" : "Patient using device",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "DeviceUseStatement.timing[x]",
      "path" : "DeviceUseStatement.timing[x]",
      "short" : "How often the device was used"
    },
    {
      "id" : "DeviceUseStatement.recordedOn",
      "path" : "DeviceUseStatement.recordedOn",
      "short" : "When statement was recorded"
    },
    {
      "id" : "DeviceUseStatement.device",
      "path" : "DeviceUseStatement.device",
      "short" : "Reference to device used",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-device",
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device|6.1.0"]
      }]
    },
    {
      "id" : "DeviceUseStatement.bodySite",
      "path" : "DeviceUseStatement.bodySite",
      "short" : "Target body site",
      "requirements" : "Knowing where the device is targeted is important for tracking if multiple sites are possible. If more information than just a code is required, use the extension http://hl7.org/fhir/StructureDefinition/bodySite.",
      "binding" : {
        "strength" : "preferred",
        "description" : "Codes describing anatomical locations. May include laterality.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/body-site"
      },
      "mapping" : [{
        "identity" : "v2",
        "map" : "anatomical location site"
      }]
    }]
  }
}

```
