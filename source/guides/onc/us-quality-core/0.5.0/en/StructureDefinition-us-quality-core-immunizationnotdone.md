# US Quality Core Immunization Not Done - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Immunization Not Done 

 
Negation profile of Immunization for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) (USCDI) completed | entered-in-error | not-done
* occurrence[x]: (USCDI+ Quality) (USCDI) Vaccine administration date

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents an immunization event that intentionally did not occur for a medical, patient, or system reason. To represent immunization events that did occur, use the [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [Immunization/negation-example-code](Immunization-negation-example-code.md) and [Immunization/negation-example](Immunization-negation-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-immunizationnotdone.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-immunizationnotdone.csv), [Excel](../StructureDefinition-us-quality-core-immunizationnotdone.xlsx), [Schematron](../StructureDefinition-us-quality-core-immunizationnotdone.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The Immunization and ImmunizationNotDone profiles represent the positive and negative statements for an immunization event.

The following illustrative CQL shows an exclusion pattern for immunizations not performed:

```
define "Reason for No Polio Immunization":
  ["ImmunizationNotDone": "Inactivated Polio Vaccine (IPV)"] PolioVaccination
    where PolioVaccination.statusReason in "Medical Reason"
      or PolioVaccination.statusReason in "Patient Refusal"
```

For a more complete discussion of representation of negation within US Quality Core and quality improvement artifacts, see the [Negation in US Quality Core](general-requirements.md#negation-in-us-quality-core) topic.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-immunizationnotdone",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunizationnotdone",
  "version" : "0.5.0",
  "name" : "USQualityCoreImmunizationNotDone",
  "title" : "US Quality Core Immunization Not Done",
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
  "description" : "Negation profile of Immunization for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Immunization",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Immunization",
      "path" : "Immunization",
      "constraint" : [{
        "key" : "ind-1",
        "severity" : "error",
        "human" : "To indicate what immunization was not done, either at least one coding in the vaccineCode element or a notDoneValueSet extension shall be provided",
        "expression" : "vaccineCode.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor vaccineCode.coding.exists()",
        "xpath" : "exists(f:extension)"
      }],
      "mustSupport" : false
    },
    {
      "id" : "Immunization.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Immunization.status",
      "short" : "(USCDI+ Quality) (USCDI) completed | entered-in-error | not-done",
      "type" : [{
        "code" : "code"
      }],
      "fixedCode" : "not-done"
    },
    {
      "id" : "Immunization.statusReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Immunization.statusReason",
      "short" : "(USCDI) Reason not done",
      "min" : 1,
      "max" : "1",
      "binding" : {
        "strength" : "extensible",
        "description" : "The reason the service was not requested",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-negation-reason"
      }
    },
    {
      "id" : "Immunization.vaccineCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Immunization.vaccineCode",
      "short" : "(USCDI) Vaccine Product Type (bind to CVX)"
    },
    {
      "id" : "Immunization.vaccineCode.extension:notDoneValueSet",
      "path" : "Immunization.vaccineCode.extension",
      "sliceName" : "notDoneValueSet",
      "short" : "What wasn't administered",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }],
      "condition" : ["ind-1"]
    },
    {
      "id" : "Immunization.patient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Immunization.patient",
      "short" : "(USCDI) Who was immunized",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "Immunization.occurrence[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Immunization.occurrence[x]",
      "short" : "(USCDI+ Quality) (USCDI) Vaccine administration date"
    },
    {
      "id" : "Immunization.recorded",
      "path" : "Immunization.recorded",
      "short" : "When the immunization was first captured in the subject's record",
      "min" : 1,
      "max" : "1"
    }]
  }
}

```
