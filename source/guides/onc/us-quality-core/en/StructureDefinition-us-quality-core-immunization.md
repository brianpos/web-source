# US Quality Core Immunization - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Immunization 

 
Profile of Immunization for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) (USCDI) completed | entered-in-error
* statusReason: (USCDI+ Quality) (USCDI) Reason not done
* occurrence[x]: (USCDI+ Quality) (USCDI) Vaccine administration date
* primarySource: (USCDI+ Quality) (USCDI) Indicates context the data was recorded in

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

To represent that an immunization event intentionally did not occur for a medical, patient, or system reason, use the [US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core ImmunizationEvaluation](StructureDefinition-us-quality-core-immunizationevaluation.md) and [US Quality Core ImmunizationRecommendation](StructureDefinition-us-quality-core-immunizationrecommendation.md)
* Examples for this Profile: [Immunization/example](Immunization-example.md) and [Immunization/statusreason-example](Immunization-statusreason-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-immunization.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-immunization.csv), [Excel](../StructureDefinition-us-quality-core-immunization.xlsx), [Schematron](../StructureDefinition-us-quality-core-immunization.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The following example illustrates the use of the Immunization profile:

```
define "Polio Immunizations":
  ["Immunization": "Inactivated Polio Vaccine (IPV)"] PolioVaccination
    where PolioVaccination.status = 'completed'
```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-immunization",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunization",
  "version" : "0.5.0",
  "name" : "USQualityCoreImmunization",
  "title" : "US Quality Core Immunization",
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
  "description" : "Profile of Immunization for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
      "path" : "Immunization"
    },
    {
      "id" : "Immunization.id",
      "path" : "Immunization.id",
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
      "short" : "(USCDI+ Quality) (USCDI) completed | entered-in-error",
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-non-negative-immunization-status"
      }
    },
    {
      "id" : "Immunization.statusReason",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Immunization.statusReason",
      "short" : "(USCDI+ Quality) (USCDI) Reason not done",
      "min" : 0,
      "max" : "1",
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/immunization-status-reason"
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
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Immunization.primarySource",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Immunization.primarySource",
      "short" : "(USCDI+ Quality) (USCDI) Indicates context the data was recorded in"
    }]
  }
}

```
