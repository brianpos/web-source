# US Quality Core Medication Not Requested - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Medication Not Requested 

 
Negation profile of MedicationRequest for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* doNotPerform: (USCDI+ Quality) True if medication was not requested
* reasonCode: (USCDI+ Quality) (USCDI) Reason or indication for ordering or not ordering the medication

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents a medication request that was intentionally not requested for a medical, patient, or system reason. To represent medication requests that were requested, use the [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [MedicationRequest/negation-example-code](MedicationRequest-negation-example-code.md) and [MedicationRequest/negation-example](MedicationRequest-negation-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-medicationnotrequested.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-medicationnotrequested.csv), [Excel](../StructureDefinition-us-quality-core-medicationnotrequested.xlsx), [Schematron](../StructureDefinition-us-quality-core-medicationnotrequested.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The MedicationRequest and MedicationNotRequested profiles represent the positive and negative statements for a medication order.

The following illustrative CQL shows an exclusion pattern for medications not requested:

```
define "Reason for Not Ordering Antithrombotic":
  ["MedicationNotRequested": "Antithrombotic Therapy"] NoAntithromboticDischarge
    where (NoAntithromboticDischarge.reasonCode in "Medical Reason"
      or NoAntithromboticDischarge.reasonCode in "Patient Refusal")
      and (NoAntithromboticDischarge.isCommunity() or NoAntithromboticDischarge.isDischarge())
      and NoAntithromboticDischarge.status in { 'active', 'completed' }
      and NoAntithromboticDischarge.intent = 'order'
```

For a more complete discussion of representation of negation within US Quality Core and quality improvement artifacts, see the [Negation in US Quality Core](general-requirements.md#negation-in-us-quality-core) topic.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-medicationnotrequested",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationnotrequested",
  "version" : "0.5.0",
  "name" : "USQualityCoreMedicationNotRequested",
  "title" : "US Quality Core Medication Not Requested",
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
  "description" : "Negation profile of MedicationRequest for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "script10.6",
    "uri" : "http://ncpdp.org/SCRIPT10_6",
    "name" : "Mapping to NCPDP SCRIPT 10.6"
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
  "type" : "MedicationRequest",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "MedicationRequest",
      "path" : "MedicationRequest",
      "constraint" : [{
        "key" : "mnr-1",
        "severity" : "error",
        "human" : "To indicate what medication was not requested, either at least one coding in the medication or a notDoneValueSet extension shall be provided",
        "expression" : "medication.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor medication.coding.exists()",
        "xpath" : "exists(f:extension)"
      }],
      "mustSupport" : false
    },
    {
      "id" : "MedicationRequest.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.status",
      "short" : "(USCDI) active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown"
    },
    {
      "id" : "MedicationRequest.doNotPerform",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.doNotPerform",
      "short" : "(USCDI+ Quality) True if medication was not requested",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "boolean"
      }],
      "fixedBoolean" : true
    },
    {
      "id" : "MedicationRequest.reported[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.reported[x]",
      "short" : "(USCDI) Reported rather than primary record",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson"]
      }]
    },
    {
      "id" : "MedicationRequest.medication[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.medication[x]",
      "short" : "(USCDI) Medication to be taken",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/medication-codes"
      }
    },
    {
      "id" : "MedicationRequest.medication[x].extension:notDoneValueSet",
      "path" : "MedicationRequest.medication[x].extension",
      "sliceName" : "notDoneValueSet",
      "short" : "What was not requested",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }],
      "condition" : ["mnr-1"]
    },
    {
      "id" : "MedicationRequest.medication[x].coding",
      "path" : "MedicationRequest.medication[x].coding",
      "condition" : ["mnr-1"],
      "mustSupport" : false
    },
    {
      "id" : "MedicationRequest.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.subject",
      "short" : "(USCDI) Who or group medication request is for",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "MedicationRequest.encounter",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.encounter",
      "short" : "(USCDI) Encounter created as part of encounter/admission/stay",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter"]
      }]
    },
    {
      "id" : "MedicationRequest.authoredOn",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.authoredOn",
      "short" : "(USCDI) When request was initially authored",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "MedicationRequest.requester",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.requester",
      "short" : "(USCDI) Who/What requested the Request",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "MedicationRequest.reasonCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.reasonCode",
      "short" : "(USCDI+ Quality) (USCDI) Reason or indication for ordering or not ordering the medication",
      "min" : 1,
      "max" : "1",
      "binding" : {
        "strength" : "extensible",
        "description" : "The reason the medication was not requested",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-negation-reason"
      }
    },
    {
      "id" : "MedicationRequest.reasonReference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.reasonReference",
      "short" : "(USCDI) US Core Condition or Observation that supports the prescription",
      "definition" : "Condition or observation that supports why the medication was ordered.",
      "comment" : "This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "MedicationRequest.reasonReference",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-problems-health-concerns",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-simple-observation"]
      }],
      "isModifier" : false,
      "isSummary" : false
    },
    {
      "id" : "MedicationRequest.dosageInstruction",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.dosageInstruction",
      "short" : "(USCDI) How the medication should be taken"
    },
    {
      "id" : "MedicationRequest.dosageInstruction.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.dosageInstruction.text",
      "short" : "(USCDI) Free text dosage instructions e.g. SIG"
    },
    {
      "id" : "MedicationRequest.dosageInstruction.timing",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.dosageInstruction.timing",
      "short" : "(USCDI) When medication should be administered"
    },
    {
      "id" : "MedicationRequest.dosageInstruction.asNeeded[x]",
      "path" : "MedicationRequest.dosageInstruction.asNeeded[x]",
      "short" : "Take \"as needed\" (for x)"
    },
    {
      "id" : "MedicationRequest.dosageInstruction.route",
      "path" : "MedicationRequest.dosageInstruction.route",
      "short" : "How drug should enter body"
    },
    {
      "id" : "MedicationRequest.dosageInstruction.doseAndRate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.dosageInstruction.doseAndRate",
      "short" : "(USCDI) Amount of medication administered"
    },
    {
      "id" : "MedicationRequest.dosageInstruction.doseAndRate.dose[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.dosageInstruction.doseAndRate.dose[x]",
      "short" : "(USCDI) Amount of medication per dose"
    },
    {
      "id" : "MedicationRequest.dispenseRequest.quantity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationRequest.dispenseRequest.quantity",
      "short" : "(USCDI) Amount of medication to supply per dispense"
    },
    {
      "id" : "MedicationRequest.dispenseRequest.expectedSupplyDuration",
      "path" : "MedicationRequest.dispenseRequest.expectedSupplyDuration",
      "short" : "Number of days supply per dispense"
    }]
  }
}

```
