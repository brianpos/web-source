# US Quality Core Observation Cancelled - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Observation Cancelled 

 
Profile of ObservationCancelled for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* extension:notDoneReason: (USCDI+ Quality) Extension
* status: (USCDI+ Quality) registered | preliminary | final | amended +
* category: (USCDI+ Quality) Classification of type of observation
* code: (USCDI+ Quality) Type of observation (code / type)
* effective[x]: (USCDI+ Quality) Clinically relevant time/time-period for observation
* value[x]: (USCDI+ Quality) Actual result

The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents an observation that intentionally did not occur for a medical, patient, or system reason. To represent simple observations that did occur, use the [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [Observation/negation-example](Observation-negation-example.md) and [Observation/negation-with-code-example](Observation-negation-with-code-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-observationcancelled.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-observationcancelled.csv), [Excel](../StructureDefinition-us-quality-core-observationcancelled.xlsx), [Schematron](../StructureDefinition-us-quality-core-observationcancelled.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The Simple Observation and ObservationCancelled profiles represent the positive and negative statements for an observation. To ensure instances retrieved meet negative intent, applications should check the status element as illustrated in this example:

```
define "Pap Test Refused":
  ["ObservationCancelled": "Pap Test"] PapTest
    where PapTest.notDoneReason in "Patient Refusal"
```

Note that when a more specific observation, such as a Blood Pressure, is negated, the resource instance should conform to both the specific observation profile and the general negation profile.

For a more complete discussion of representation of negation within US Quality Core and quality improvement artifacts, see the [Negation in US Quality Core](general-requirements.md#negation-in-us-quality-core) topic.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-observationcancelled",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-observationcancelled",
  "version" : "0.5.0",
  "name" : "USQualityCoreObservationCancelled",
  "title" : "US Quality Core Observation Cancelled",
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
  "description" : "Profile of ObservationCancelled for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Observation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation",
      "alias" : ["Vital Signs", "Measurement", "Results", "Tests"],
      "constraint" : [{
        "key" : "ond-1",
        "severity" : "error",
        "human" : "to indicate what observation was not recorded, either at least one coding in the code or a notDoneValueSet extension shall be provided",
        "expression" : "code.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor code.coding.exists()",
        "xpath" : "exists(f:extension)"
      }]
    },
    {
      "id" : "Observation.extension:notDoneReason",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.extension",
      "sliceName" : "notDoneReason",
      "short" : "(USCDI+ Quality) Extension",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneReason"]
      }]
    },
    {
      "id" : "Observation.status",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.status",
      "short" : "(USCDI+ Quality) registered | preliminary | final | amended +",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }],
      "fixedCode" : "cancelled"
    },
    {
      "id" : "Observation.category",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.category",
      "short" : "(USCDI+ Quality) Classification of type of observation",
      "min" : 1,
      "max" : "*"
    },
    {
      "id" : "Observation.code",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.code",
      "short" : "(USCDI+ Quality) Type of observation (code / type)",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "Observation.code.extension:notDoneValueSet",
      "path" : "Observation.code.extension",
      "sliceName" : "notDoneValueSet",
      "short" : "What was not done",
      "definition" : "Specifies the value set that characterizes the events or activities that did not occur or were not performed.",
      "requirements" : "Must be able to indicate the value set from which the expected event would be drawn, had it occurred.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }]
    },
    {
      "id" : "Observation.subject",
      "path" : "Observation.subject",
      "short" : "Who and/or what the observation is about",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "Observation.effective[x]",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.effective[x]",
      "short" : "(USCDI+ Quality) Clinically relevant time/time-period for observation"
    },
    {
      "id" : "Observation.issued",
      "path" : "Observation.issued",
      "short" : "Date/Time this version was made available",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "Observation.performer",
      "path" : "Observation.performer",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson"]
      }]
    },
    {
      "id" : "Observation.value[x]",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Observation.value[x]",
      "slicing" : {
        "discriminator" : [{
          "type" : "type",
          "path" : "$this"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "short" : "(USCDI+ Quality) Actual result",
      "definition" : "The information determined as a result of making the observation, if the information has a simple value.",
      "comment" : "An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](http://hl7.org/fhir/R4/observation.html#notes) below.",
      "requirements" : "An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Observation.value[x]",
        "min" : 0,
        "max" : "1"
      },
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
        "code" : "SampledData"
      },
      {
        "code" : "time"
      },
      {
        "code" : "dateTime"
      },
      {
        "code" : "Period"
      }],
      "isModifier" : false,
      "isSummary" : true
    },
    {
      "id" : "Observation.value[x]:valueCodeableConcept",
      "path" : "Observation.value[x]",
      "sliceName" : "valueCodeableConcept",
      "short" : "Actual result",
      "base" : {
        "path" : "Observation.value[x]",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "isModifier" : false,
      "binding" : {
        "strength" : "preferred",
        "description" : "SNOMED CT for coded results",
        "valueSet" : "http://hl7.org/fhir/us/core/ValueSet/us-core-observation-value-codes"
      }
    },
    {
      "id" : "Observation.interpretation",
      "path" : "Observation.interpretation",
      "short" : "High, low, normal, etc.",
      "definition" : "A categorical assessment of an observation value.  For example, high, low, normal.",
      "comment" : "Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.",
      "requirements" : "For some results, particularly numeric results, an interpretation is necessary to fully understand the significance of a result.",
      "alias" : ["Abnormal Flag"],
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "Observation.interpretation",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "isModifier" : false,
      "isSummary" : false,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "ObservationInterpretation"
        }],
        "strength" : "extensible",
        "description" : "Codes identifying interpretations of observations.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/observation-interpretation"
      }
    },
    {
      "id" : "Observation.derivedFrom",
      "path" : "Observation.derivedFrom",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-simple-observation",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-questionnaireresponse",
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference|6.1.0",
        "http://hl7.org/fhir/StructureDefinition/ImagingStudy",
        "http://hl7.org/fhir/StructureDefinition/Media",
        "http://hl7.org/fhir/StructureDefinition/MolecularSequence"]
      }],
      "mustSupport" : false
    }]
  }
}

```
