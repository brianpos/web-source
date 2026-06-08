# US Quality Core MedicationDispense - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core MedicationDispense 

 
Profile of MedicationDispense for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) (USCDI) preparation​ | in-progress​ | cancelled​ | on-hold​ | completed​ | entered-in-error​ | stopped​ | unknown
* medication[x]: (USCDI+ Quality) (USCDI) What medication was supplied
* quantity: (USCDI+ Quality) (USCDI) Amount dispensed
* daysSupply: (USCDI+ Quality) Amount of medication expressed as a timing amount
* dosageInstruction: (USCDI+ Quality) (USCDI) How the medication is to be used by the patient or administered by the caregiver
* dosageInstruction.text: (USCDI+ Quality) (USCDI) Free text dosage instructions e.g. SIG
* dosageInstruction.timing: (USCDI+ Quality) (USCDI) When medication should be administered
* dosageInstruction.route: (USCDI+ Quality) How drug should enter body
* dosageInstruction.doseAndRate: (USCDI+ Quality) (USCDI) Amount of medication administered
* dosageInstruction.doseAndRate.dose[x]: (USCDI+ Quality) (USCDI) Amount of medication per dose

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

To represent that a medication dispense intentionally did not occur for a medical, patient, or system reason, use the [US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [MedicationDispense/cmd-example](MedicationDispense-cmd-example.md) and [MedicationDispense/example](MedicationDispense-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-medicationdispense.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-medicationdispense.csv), [Excel](../StructureDefinition-us-quality-core-medicationdispense.xlsx), [Schematron](../StructureDefinition-us-quality-core-medicationdispense.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

To create an expression specifically requesting information that a MedicationDispense intentionally did not occur for a medical, patient or system reason, use the profile [USQualityCore-medicationnotdispensed](StructureDefinition-us-quality-core-medicationdispensedeclined.md).

The following example illustrates the use of the MedicationDispense profile:

```
define "Dementia Medication Dispensed":
  ["MedicationDispense": "Dementia Medications"] MedicationDispense
    where MedicationDispense.status in { 'active', 'completed', 'on-hold' }
```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-medicationdispense",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationdispense",
  "version" : "0.5.0",
  "name" : "USQualityCoreMedicationDispense",
  "title" : "US Quality Core MedicationDispense",
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
  "description" : "Profile of MedicationDispense for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
      "path" : "MedicationDispense"
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
      "short" : "(USCDI+ Quality) (USCDI) preparation​ | in-progress​ | cancelled​ | on-hold​ | completed​ | entered-in-error​ | stopped​ | unknown",
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-non-negative-medicationdispense-status"
      }
    },
    {
      "id" : "MedicationDispense.medication[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.medication[x]",
      "short" : "(USCDI+ Quality) (USCDI) What medication was supplied",
      "type" : [{
        "code" : "CodeableConcept"
      },
      {
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medication"]
      }],
      "binding" : {
        "strength" : "extensible",
        "description" : "The set of RxNorm codes to represent medications",
        "valueSet" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4"
      }
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
      "short" : "(USCDI) Medication order that authorizes the dispense",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationrequest"]
      }]
    },
    {
      "id" : "MedicationDispense.type",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.type",
      "short" : "(USCDI) Trial fill, partial fill, emergency fill, etc.",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "http://terminology.hl7.org/ValueSet/v3-ActPharmacySupplyType"
      }
    },
    {
      "id" : "MedicationDispense.quantity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.quantity",
      "short" : "(USCDI+ Quality) (USCDI) Amount dispensed"
    },
    {
      "id" : "MedicationDispense.daysSupply",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.daysSupply",
      "short" : "(USCDI+ Quality) Amount of medication expressed as a timing amount"
    },
    {
      "id" : "MedicationDispense.whenPrepared",
      "path" : "MedicationDispense.whenPrepared",
      "short" : "When product was packaged and reviewed",
      "comment" : "When used as part of a cumulative medication duration calculation, the whenPrepared element is used if whenHandedOver is not available to determine a starting point for the period covered by the dispense.",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "MedicationDispense.whenHandedOver",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.whenHandedOver",
      "short" : "(USCDI) When product was given out or mailed"
    },
    {
      "id" : "MedicationDispense.dosageInstruction",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction",
      "short" : "(USCDI+ Quality) (USCDI) How the medication is to be used by the patient or administered by the caregiver"
    },
    {
      "id" : "MedicationDispense.dosageInstruction.text",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction.text",
      "short" : "(USCDI+ Quality) (USCDI) Free text dosage instructions e.g. SIG"
    },
    {
      "id" : "MedicationDispense.dosageInstruction.timing",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction.timing",
      "short" : "(USCDI+ Quality) (USCDI) When medication should be administered"
    },
    {
      "id" : "MedicationDispense.dosageInstruction.route",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction.route",
      "short" : "(USCDI+ Quality) How drug should enter body"
    },
    {
      "id" : "MedicationDispense.dosageInstruction.doseAndRate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction.doseAndRate",
      "short" : "(USCDI+ Quality) (USCDI) Amount of medication administered"
    },
    {
      "id" : "MedicationDispense.dosageInstruction.doseAndRate.dose[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationDispense.dosageInstruction.doseAndRate.dose[x]",
      "short" : "(USCDI+ Quality) (USCDI) Amount of medication per dose",
      "type" : [{
        "code" : "Quantity"
      },
      {
        "code" : "Range"
      }]
    }]
  }
}

```
