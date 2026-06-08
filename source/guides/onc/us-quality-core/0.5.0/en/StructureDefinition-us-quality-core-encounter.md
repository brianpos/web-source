# US Quality Core Encounter - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Encounter 

 
Profile of Encounter for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* identifier: (USCDI+ Quality) (USCDI) Identifier(s) by which this encounter is known
* identifier.system: (USCDI+ Quality) (USCDI) The namespace for the identifier value
* identifier.value: (USCDI+ Quality) (USCDI) The value that is unique
* status: (USCDI+ Quality) (USCDI) planned | arrived | triaged | in-progress | onleave | finished | cancelled +
* type: (USCDI+ Quality) (USCDI) Specific type of encounter
* priority: (USCDI+ Quality) Indicates the urgency of the encounter
* period: (USCDI+ Quality) (USCDI) The start and end time of the encounter
* diagnosis: (USCDI+ Quality) The list of diagnosis relevant to this encounter
* diagnosis.extension:diagnosisPresentOnAdmission: (USCDI+ Quality) onAdmission
* hospitalization: (USCDI+ Quality) (USCDI) Details about the admission to a healthcare service
* hospitalization.dischargeDisposition: (USCDI+ Quality) (USCDI) Category or kind of location after discharge
* location: (USCDI+ Quality) (USCDI) List of locations where the patient has been
* location.location: (USCDI+ Quality) (USCDI) Location the encounter takes place

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core CommunicationRequest](StructureDefinition-us-quality-core-communicationrequest.md), [US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md)... Show 8 more, [US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md), [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md), [US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md), [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md), [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) and [US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md)
* Examples for this Profile: [Encounter/encounter-ed-example](Encounter-encounter-ed-example.md) and [Encounter/example](Encounter-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-encounter.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-encounter.csv), [Excel](../StructureDefinition-us-quality-core-encounter.xlsx), [Schematron](../StructureDefinition-us-quality-core-encounter.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The following example illustrates accessing an inpatient encounter:

```
define "Ophthalmology Encounter Codes":
  [Encounter: class in "Inpatient Encounter Classes"] InpatientEncounter
    where InpatientEncounter.type in "Ophthalmology Encounter Codes"
```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-encounter",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter",
  "version" : "0.5.0",
  "name" : "USQualityCoreEncounter",
  "title" : "US Quality Core Encounter",
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
  "description" : "Profile of Encounter for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Encounter",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Encounter",
      "path" : "Encounter"
    },
    {
      "id" : "Encounter.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.identifier",
      "short" : "(USCDI+ Quality) (USCDI) Identifier(s) by which this encounter is known"
    },
    {
      "id" : "Encounter.identifier.system",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.identifier.system",
      "short" : "(USCDI+ Quality) (USCDI) The namespace for the identifier value"
    },
    {
      "id" : "Encounter.identifier.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.identifier.value",
      "short" : "(USCDI+ Quality) (USCDI) The value that is unique"
    },
    {
      "id" : "Encounter.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.status",
      "short" : "(USCDI+ Quality) (USCDI) planned | arrived | triaged | in-progress | onleave | finished | cancelled +"
    },
    {
      "id" : "Encounter.class",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Encounter.class",
      "short" : "(USCDI) Classification of patient encounter"
    },
    {
      "id" : "Encounter.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.type",
      "short" : "(USCDI+ Quality) (USCDI) Specific type of encounter"
    },
    {
      "id" : "Encounter.priority",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.priority",
      "short" : "(USCDI+ Quality) Indicates the urgency of the encounter"
    },
    {
      "id" : "Encounter.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Encounter.subject",
      "short" : "(USCDI) The patient or group present at the encounter",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "Encounter.participant",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Encounter.participant",
      "short" : "(USCDI) List of participants involved in the encounter"
    },
    {
      "id" : "Encounter.participant.individual",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Encounter.participant.individual",
      "short" : "(USCDI) Persons involved in the encounter other than the patient",
      "comment" : "Should include us-quality-core-relatedperson as a possible participant, but USCore-Encounter only allows USCore-Practitioner.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson"]
      }]
    },
    {
      "id" : "Encounter.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.period",
      "short" : "(USCDI+ Quality) (USCDI) The start and end time of the encounter"
    },
    {
      "id" : "Encounter.reasonCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Encounter.reasonCode",
      "short" : "(USCDI) Coded reason the encounter takes place"
    },
    {
      "id" : "Encounter.reasonReference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Encounter.reasonReference",
      "short" : "(USCDI) Reason the encounter takes place (reference)",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "Encounter.reasonReference",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-problems-health-concerns",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-procedure",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-simple-observation",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunizationrecommendation"]
      }],
      "isModifier" : false,
      "isSummary" : true
    },
    {
      "id" : "Encounter.diagnosis",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.diagnosis",
      "short" : "(USCDI+ Quality) The list of diagnosis relevant to this encounter"
    },
    {
      "id" : "Encounter.diagnosis.extension",
      "path" : "Encounter.diagnosis.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "open"
      },
      "short" : "Extension",
      "definition" : "An Extension",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "Element.extension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension"
      }],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div"
      },
      {
        "key" : "ext-1",
        "severity" : "error",
        "human" : "Must have either extensions or value[x], not both",
        "expression" : "extension.exists() != value.exists()",
        "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])"
      }],
      "isModifier" : false,
      "isSummary" : false
    },
    {
      "id" : "Encounter.diagnosis.extension:diagnosisPresentOnAdmission",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.diagnosis.extension",
      "sliceName" : "diagnosisPresentOnAdmission",
      "short" : "(USCDI+ Quality) onAdmission",
      "definition" : "Indicator of whether the Encounter diagnosis was present at the time of admission.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Element.extension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter-diagnosisPresentOnAdmission"]
      }],
      "condition" : ["ele-1"],
      "constraint" : [{
        "key" : "ele-1",
        "severity" : "error",
        "human" : "All FHIR elements must have a @value or children",
        "expression" : "hasValue() or (children().count() > id.count())",
        "xpath" : "@value|f:*|h:div"
      },
      {
        "key" : "ext-1",
        "severity" : "error",
        "human" : "Must have either extensions or value[x], not both",
        "expression" : "extension.exists() != value.exists()",
        "xpath" : "exists(f:extension)!=exists(f:*[starts-with(local-name(.), 'value')])"
      }],
      "mustSupport" : true,
      "isModifier" : false
    },
    {
      "id" : "Encounter.diagnosis.use",
      "path" : "Encounter.diagnosis.use",
      "short" : "Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …)"
    },
    {
      "id" : "Encounter.diagnosis.rank",
      "path" : "Encounter.diagnosis.rank",
      "short" : "Ranking of the diagnosis (for each role type)"
    },
    {
      "id" : "Encounter.hospitalization",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.hospitalization",
      "short" : "(USCDI+ Quality) (USCDI) Details about the admission to a healthcare service"
    },
    {
      "id" : "Encounter.hospitalization.origin",
      "path" : "Encounter.hospitalization.origin",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Encounter.hospitalization.destination",
      "path" : "Encounter.hospitalization.destination",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Encounter.hospitalization.dischargeDisposition",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.hospitalization.dischargeDisposition",
      "short" : "(USCDI+ Quality) (USCDI) Category or kind of location after discharge",
      "definition" : "Category or kind of location after discharge.",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "http://terminology.hl7.org/ValueSet/clinical-discharge-disposition"
      }
    },
    {
      "id" : "Encounter.location",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.location",
      "short" : "(USCDI+ Quality) (USCDI) List of locations where the patient has been"
    },
    {
      "id" : "Encounter.location.location",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Encounter.location.location",
      "short" : "(USCDI+ Quality) (USCDI) Location the encounter takes place",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location"]
      }]
    },
    {
      "id" : "Encounter.location.period",
      "path" : "Encounter.location.period",
      "short" : "Time period during which the patient was present at the location"
    },
    {
      "id" : "Encounter.serviceProvider",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "Encounter.serviceProvider",
      "short" : "(USCDI) The organization (facility) responsible for this encounter",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
      }]
    },
    {
      "id" : "Encounter.partOf",
      "path" : "Encounter.partOf",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter"]
      }],
      "mustSupport" : false
    }]
  }
}

```
