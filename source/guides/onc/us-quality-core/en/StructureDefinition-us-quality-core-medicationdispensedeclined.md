# US Quality Core MedicationDispense Declined - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core MedicationDispense Declined 

 
Negation profile of MedicationDispense for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) (USCDI) preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
* statusReason[x]: (USCDI+ Quality) Why a dispense was not performed

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents a medication dispense that was declined for a medical, patient, or system reason. To represent medication dispenses that were not declined, use the [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [MedicationDispense/negation-example](MedicationDispense-negation-example.md) and [MedicationDispense/negation-with-code-example](MedicationDispense-negation-with-code-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-medicationdispensedeclined.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-medicationdispensedeclined.csv), [Excel](../StructureDefinition-us-quality-core-medicationdispensedeclined.xlsx), [Schematron](../StructureDefinition-us-quality-core-medicationdispensedeclined.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The following example illustrates the use of the MedicationDispenseDeclined profile:

```
define "Dementia Medication Not Dispensed":
    ["MedicationDispenseNotDone": "Dementia Medications"] MedicationDispense
      where MedicationDispense.statusReason in "Medical Reason"
        or MedicationDispense.statusReason in "Patient Refusal"
```

For a more complete discussion of representation of negation within US Quality Core and quality improvement artifacts, see the [Negation in US Quality Core](general-requirements.md#negation-in-us-quality-core) topic.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-medicationdispensedeclined",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationdispensedeclined",
  "version" : "0.5.0",
  "name" : "USQualityCoreMedicationDispenseDeclined",
  "title" : "US Quality Core MedicationDispense Declined",
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
  "description" : "Negation profile of MedicationDispense for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "rx-dispense-rmim",
    "uri" : "http://www.hl7.org/v3/PORX_RM020070UV",
    "name" : "V3 Pharmacy Dispense RMIM"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "MedicationDispense",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationdispense|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "MedicationDispense",
      "path" : "MedicationDispense",
      "constraint" : [{
        "key" : "mnd-1",
        "severity" : "error",
        "human" : "To indicate what medication was not dispensed, either at least one coding in the medication or a notDoneValueSet extension shall be provided",
        "expression" : "medication.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor medication.coding.exists()",
        "xpath" : "exists(f:extension)"
      }]
    },
    {
      "id" : "MedicationDispense.extension:recorded",
      "path" : "MedicationDispense.extension",
      "sliceName" : "recorded",
      "short" : "Extension",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-recorded"]
      }]
    },
    {
      "id" : "MedicationDispense.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.status",
      "short" : "(USCDI+ Quality) (USCDI) preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown",
      "type" : [{
        "code" : "code"
      }],
      "fixedCode" : "declined",
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://hl7.org/fhir/ValueSet/medicationdispense-status"
      }
    },
    {
      "id" : "MedicationDispense.statusReason[x]",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.statusReason[x]",
      "short" : "(USCDI+ Quality) Why a dispense was not performed",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "extensible",
        "description" : "The reason the event did not occur or was not performed",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-negation-reason"
      }
    },
    {
      "id" : "MedicationDispense.medication[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.medication[x]",
      "short" : "(USCDI) What medication was supplied",
      "binding" : {
        "strength" : "extensible",
        "description" : "The set of RxNorm codes to represent medications",
        "valueSet" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4"
      }
    },
    {
      "id" : "MedicationDispense.medication[x].extension:notDoneValueSet",
      "path" : "MedicationDispense.medication[x].extension",
      "sliceName" : "notDoneValueSet",
      "short" : "Url of a value set of activities not requested or performed",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }]
    },
    {
      "id" : "MedicationDispense.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.subject",
      "short" : "(USCDI) Who the dispense is for",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "MedicationDispense.authorizingPrescription",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.authorizingPrescription",
      "short" : "(USCDI)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationrequest"]
      }]
    },
    {
      "id" : "MedicationDispense.quantity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.quantity",
      "short" : "(USCDI) Amount dispensed"
    },
    {
      "id" : "MedicationDispense.daysSupply",
      "path" : "MedicationDispense.daysSupply",
      "short" : "Amount of medication expressed as a timing amount"
    },
    {
      "id" : "MedicationDispense.dosageInstruction",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction",
      "short" : "(USCDI)"
    },
    {
      "id" : "MedicationDispense.dosageInstruction.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction.text",
      "short" : "(USCDI) Free text dosage instructions e.g. SIG"
    },
    {
      "id" : "MedicationDispense.dosageInstruction.timing",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction.timing",
      "short" : "(USCDI) When medication should be administered"
    },
    {
      "id" : "MedicationDispense.dosageInstruction.route",
      "path" : "MedicationDispense.dosageInstruction.route",
      "mustSupport" : false,
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/route-codes"
      }
    },
    {
      "id" : "MedicationDispense.dosageInstruction.doseAndRate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction.doseAndRate",
      "short" : "(USCDI) Amount of medication administered"
    },
    {
      "id" : "MedicationDispense.dosageInstruction.doseAndRate.type",
      "path" : "MedicationDispense.dosageInstruction.doseAndRate.type",
      "short" : "The kind of dose or rate specified",
      "min" : 1,
      "max" : "1",
      "binding" : {
        "strength" : "preferred",
        "description" : "Medication dose types (e.g., loading, maintenance, etc.)",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-medication-dose-type"
      }
    },
    {
      "id" : "MedicationDispense.dosageInstruction.doseAndRate.dose[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction.doseAndRate.dose[x]",
      "short" : "(USCDI) Amount of medication per dose"
    }]
  }
}

```
