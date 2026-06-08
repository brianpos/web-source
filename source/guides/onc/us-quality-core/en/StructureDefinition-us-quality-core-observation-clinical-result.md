# US Quality Core Observation Clinical Result - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Observation Clinical Result 

 
The US Quality Core Observation Clinical Result Profile is based upon the US Core Observation Clinical Result Profile. Clinical results includes non-imaging and non-laboratory tests performed on a patient that results in structured or unstructured (narrative) findings specific to the patient, such as electrocardiogram (ECG), visual acuity exam, macular exam, or graded exercise testing (GXT), to facilitate the diagnosis and management of conditions. The US Quality Core Observation Clinical Result Profile profile defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) (USCDI) registered | preliminary | final | amended | corrected | entered-in-error | unknown
* code: (USCDI+ Quality) (USCDI) Clinical Test or Procedure Name
* effective[x]: (USCDI+ Quality) (USCDI) Clinically relevant time/time-period for observation
* value[x]: (USCDI+ Quality) (USCDI) Result Value

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

To represent that an observation of this type intentionally did not occur for a medical, patient, or system reason, use the [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md) profile.

**Usages:**

* Refer to this Profile: [US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md)
* Examples for this Profile: [Observation/clinical-result-heart-rate-rhythm](Observation-clinical-result-heart-rate-rhythm.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-observation-clinical-result.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-observation-clinical-result.csv), [Excel](../StructureDefinition-us-quality-core-observation-clinical-result.xlsx), [Schematron](../StructureDefinition-us-quality-core-observation-clinical-result.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-observation-clinical-result",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-observation-clinical-result",
  "version" : "0.5.0",
  "name" : "USQualityCoreObservationClinicalResult",
  "title" : "US Quality Core Observation Clinical Result",
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
  "description" : "The US Quality Core Observation Clinical Result Profile is based upon the US Core Observation Clinical Result Profile. Clinical results includes non-imaging and non-laboratory tests performed on a patient that results in structured or unstructured (narrative) findings specific to the patient, such as electrocardiogram (ECG), visual acuity exam, macular exam, or graded exercise testing (GXT), to facilitate the diagnosis and management of conditions. The US Quality Core Observation Clinical Result Profile profile defines the core set of elements and extensions for quality rule and measure authors.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "copyright" : "Used by permission of HL7 International, all rights reserved Creative Commons License",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
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
  },
  {
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Observation",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-clinical-result|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation"
    },
    {
      "id" : "Observation.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.status",
      "short" : "(USCDI+ Quality) (USCDI) registered | preliminary | final | amended | corrected | entered-in-error | unknown",
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-non-negative-observation-status"
      }
    },
    {
      "id" : "Observation.category",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Observation.category",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "short" : "(USCDI) Classification of type of observation",
      "definition" : "A code that classifies the general type of observation being made.",
      "comment" : "In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.",
      "requirements" : "Used for filtering what observations are retrieved and displayed.",
      "min" : 1,
      "max" : "*",
      "base" : {
        "path" : "Observation.category",
        "min" : 0,
        "max" : "*"
      },
      "isModifier" : false,
      "isSummary" : false,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "ObservationCategory"
        }],
        "strength" : "preferred",
        "description" : "Codes for high level observation categories.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/observation-category"
      }
    },
    {
      "id" : "Observation.category:us-core",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Observation.category",
      "sliceName" : "us-core",
      "short" : "(USCDI) Classification of type of observation",
      "definition" : "A code that classifies the general type of observation being made.",
      "comment" : "In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.",
      "requirements" : "Used for filtering what observations are retrieved and displayed.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "Observation.category",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "binding" : {
        "strength" : "required",
        "description" : "Note that other codes are permitted, see [Required Bindings When Slicing by Value Sets](http://hl7.org/fhir/us/core/general-requirements.html#required-bindings-when-slicing-by-valuesets)",
        "valueSet" : "http://hl7.org/fhir/us/core/ValueSet/us-core-clinical-result-observation-category"
      }
    },
    {
      "id" : "Observation.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.code",
      "short" : "(USCDI+ Quality) (USCDI) Clinical Test or Procedure Name",
      "isModifier" : false,
      "isSummary" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "http://hl7.org/fhir/ValueSet/observation-codes"
      }
    },
    {
      "id" : "Observation.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Observation.subject",
      "short" : "(USCDI) Who and/or what the observation is about",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "Observation.effective[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.effective[x]",
      "short" : "(USCDI+ Quality) (USCDI) Clinically relevant time/time-period for observation",
      "type" : [{
        "code" : "dateTime"
      },
      {
        "code" : "Period"
      },
      {
        "code" : "Timing"
      },
      {
        "code" : "instant"
      }],
      "isModifier" : false
    },
    {
      "id" : "Observation.value[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.value[x]",
      "short" : "(USCDI+ Quality) (USCDI) Result Value",
      "type" : [{
        "code" : "Quantity"
      },
      {
        "code" : "CodeableConcept"
      },
      {
        "code" : "string"
      },
      {
        "code" : "boolean"
      },
      {
        "code" : "integer"
      },
      {
        "code" : "Range"
      },
      {
        "code" : "Ratio"
      },
      {
        "code" : "time"
      },
      {
        "code" : "dateTime"
      },
      {
        "code" : "Period"
      }]
    },
    {
      "id" : "Observation.dataAbsentReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Observation.dataAbsentReason",
      "short" : "(USCDI) Why the result is missing",
      "isModifier" : false,
      "isSummary" : false,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "ObservationValueAbsentReason"
        }],
        "strength" : "extensible",
        "description" : "Codes specifying why the result (`Observation.value[x]`) is missing.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/data-absent-reason"
      }
    },
    {
      "id" : "Observation.component",
      "path" : "Observation.component",
      "short" : "Component results"
    }]
  }
}

```
