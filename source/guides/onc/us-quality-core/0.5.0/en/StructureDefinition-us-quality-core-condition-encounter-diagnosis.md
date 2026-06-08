# US Quality Core Condition Encounter Diagnosis - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Condition Encounter Diagnosis 

 
The US Quality Core Condition Encounter Diagnosis Profile is based upon the US Core Condition Encounter Diagnosis Profile. In version 5.0.0, The US Quality Core Condition Profile has been split into the US Quality Core Condition Encounter Diagnosis Profile and US Quality Core Condition Problems and Health Concerns Profile. To promote interoperability and adoption through common implementation, this profile defines constraints and extensions on the Condition resource for the minimal set of data to record, search, and fetch information about an encounter diagnosis. It Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* code: (USCDI+ Quality) (USCDI) Identification of the condition, problem or diagnosis
* encounter: (USCDI+ Quality) (USCDI) Encounter created as part of
* onset[x]: (USCDI+ Quality) (USCDI) Estimated or actual date, date-time, or age
* recordedDate: (USCDI+ Quality) (USCDI) Date record was first recorded

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md), [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md)... Show 4 more, [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md), [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md), [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) and [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)
* Examples for this Profile: [Condition/appendicitis-example](Condition-appendicitis-example.md) and [Condition/example](Condition-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-condition-encounter-diagnosis.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-condition-encounter-diagnosis.csv), [Excel](../StructureDefinition-us-quality-core-condition-encounter-diagnosis.xlsx), [Schematron](../StructureDefinition-us-quality-core-condition-encounter-diagnosis.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

```
[ConditionEncounterDiagnosis: Diabetes] Condition
  where Condition.getEncounter().status = 'finished'
```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-condition-encounter-diagnosis",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis",
  "version" : "0.5.0",
  "name" : "USQualityCoreConditionEncounterDiagnosis",
  "title" : "US Quality Core Condition Encounter Diagnosis",
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
  "description" : "The US Quality Core Condition Encounter Diagnosis Profile is based upon the US Core Condition Encounter Diagnosis Profile.   In version 5.0.0, The US Quality Core Condition Profile has been split into the US Quality Core Condition Encounter Diagnosis Profile and US Quality Core Condition Problems and Health Concerns Profile. To promote interoperability and adoption through common implementation, this profile defines constraints and extensions on the Condition resource for the minimal set of data to record, search, and fetch information about an encounter diagnosis.  It Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "Condition",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Condition",
      "path" : "Condition"
    },
    {
      "id" : "Condition.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.code",
      "short" : "(USCDI+ Quality) (USCDI) Identification of the condition, problem or diagnosis"
    },
    {
      "id" : "Condition.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Condition.subject",
      "short" : "(USCDI) Who has the condition?",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "Condition.encounter",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.encounter",
      "short" : "(USCDI+ Quality) (USCDI) Encounter created as part of",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter"]
      }]
    },
    {
      "id" : "Condition.onset[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.onset[x]",
      "short" : "(USCDI+ Quality) (USCDI) Estimated or actual date, date-time, or age",
      "type" : [{
        "code" : "dateTime"
      },
      {
        "code" : "Age"
      },
      {
        "code" : "Period"
      },
      {
        "code" : "Range"
      }]
    },
    {
      "id" : "Condition.abatement[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Condition.abatement[x]",
      "short" : "(USCDI) When in resolution/remission",
      "type" : [{
        "code" : "dateTime"
      },
      {
        "code" : "Age"
      },
      {
        "code" : "Period"
      },
      {
        "code" : "Range"
      }]
    },
    {
      "id" : "Condition.recordedDate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Condition.recordedDate",
      "short" : "(USCDI+ Quality) (USCDI) Date record was first recorded"
    }]
  }
}

```
