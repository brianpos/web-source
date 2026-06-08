# US Quality Core DiagnosticReport Profile for Laboratory Results Reporting - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core DiagnosticReport Profile for Laboratory Results Reporting 

 
Profile of DiagnosticReport for laboratory results for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) (USCDI) registered | partial | preliminary | final +
* category: (USCDI+ Quality) (USCDI) Service category
* category:LaboratorySlice: (USCDI+ Quality) (USCDI) Service category
* code: (USCDI+ Quality) (USCDI) US Core Laboratory Report Order Code
* effective[x]: (USCDI+ Quality) (USCDI) Diagnostically relevant time (typically the time of specimen collection)
* result: (USCDI+ Quality) (USCDI) Observations

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Examples for this Profile: [DiagnosticReport/example](DiagnosticReport-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-diagnosticreport-lab.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-diagnosticreport-lab.csv), [Excel](../StructureDefinition-us-quality-core-diagnosticreport-lab.xlsx), [Schematron](../StructureDefinition-us-quality-core-diagnosticreport-lab.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-diagnosticreport-lab",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-diagnosticreport-lab",
  "version" : "0.5.0",
  "name" : "USQualityCoreDiagnosticReportLab",
  "title" : "US Quality Core DiagnosticReport Profile for Laboratory Results Reporting",
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
  "description" : "Profile of DiagnosticReport for laboratory results for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "DiagnosticReport",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "DiagnosticReport",
      "path" : "DiagnosticReport"
    },
    {
      "id" : "DiagnosticReport.basedOn",
      "path" : "DiagnosticReport.basedOn",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-careplan",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunizationrecommendation",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationrequest",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-nutritionorder",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "DiagnosticReport.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "DiagnosticReport.status",
      "short" : "(USCDI+ Quality) (USCDI) registered | partial | preliminary | final +"
    },
    {
      "id" : "DiagnosticReport.category",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "DiagnosticReport.category",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "short" : "(USCDI+ Quality) (USCDI) Service category",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "isModifier" : false,
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "DiagnosticServiceSection"
        }],
        "strength" : "preferred",
        "description" : "Codes for diagnostic service sections.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/diagnostic-service-sections"
      }
    },
    {
      "id" : "DiagnosticReport.category:LaboratorySlice",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "DiagnosticReport.category",
      "sliceName" : "LaboratorySlice",
      "short" : "(USCDI+ Quality) (USCDI) Service category",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v2-0074",
          "code" : "LAB"
        }]
      },
      "isModifier" : false,
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "DiagnosticServiceSection"
        }],
        "strength" : "preferred",
        "description" : "Codes for diagnostic service sections.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/diagnostic-service-sections"
      }
    },
    {
      "id" : "DiagnosticReport.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "DiagnosticReport.code",
      "short" : "(USCDI+ Quality) (USCDI) US Core Laboratory Report Order Code"
    },
    {
      "id" : "DiagnosticReport.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "DiagnosticReport.subject",
      "short" : "(USCDI) The subject of the report - usually, but not always, the patient",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "DiagnosticReport.effective[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "DiagnosticReport.effective[x]",
      "short" : "(USCDI+ Quality) (USCDI) Diagnostically relevant time (typically the time of specimen collection)",
      "type" : [{
        "code" : "dateTime"
      },
      {
        "code" : "Period"
      }],
      "isModifier" : false,
      "isSummary" : true
    },
    {
      "id" : "DiagnosticReport.performer",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "DiagnosticReport.performer",
      "short" : "(USCDI) Responsible Diagnostic Service",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
      }]
    },
    {
      "id" : "DiagnosticReport.result",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "DiagnosticReport.result",
      "short" : "(USCDI+ Quality) (USCDI) Observations",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-observation-lab"]
      }]
    }]
  }
}

```
