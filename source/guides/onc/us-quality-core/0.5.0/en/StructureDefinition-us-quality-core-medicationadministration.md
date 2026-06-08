# US Quality Core MedicationAdministration - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core MedicationAdministration 

 
Profile of MedicationAdministration for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) in-progress | on-hold | completed | entered-in-error | stopped | unknown
* medication[x]: (USCDI+ Quality) What was administered
* effective[x]: (USCDI+ Quality) Start and end time of administration
* dosage: (USCDI+ Quality)
* dosage.route: (USCDI+ Quality) Path of substance into body
* dosage.dose: (USCDI+ Quality) Amount of medication per dose

The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

To represent that a medication administration intentionally did not occur for a medical, patient, or system reason, use the [US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md)
* Examples for this Profile: [MedicationAdministration/cmd-example](MedicationAdministration-cmd-example.md) and [MedicationAdministration/example](MedicationAdministration-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-medicationadministration.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-medicationadministration.csv), [Excel](../StructureDefinition-us-quality-core-medicationadministration.xlsx), [Schematron](../StructureDefinition-us-quality-core-medicationadministration.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

To create an expression specifically requesting information that a MedicationAdministration intentionally did not occur for a medical, patient or system reason, use the profile [USQualityCore MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md).

The following example illustrates accessing MedicationAdministration data:

```
define "Low Dose Unfractionated Heparin Administration":
  ["MedicationAdministration": medication in "Low Dose Unfractionated Heparin for VTE Prophylaxis"] VTEMedication
    where VTEMedication.status = 'completed'
```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-medicationadministration",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationadministration",
  "version" : "0.5.0",
  "name" : "USQualityCoreMedicationAdministration",
  "title" : "US Quality Core MedicationAdministration",
  "status" : "draft",
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
  "description" : "Profile of MedicationAdministration for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  },
  {
    "identity" : "w3c.prov",
    "uri" : "http://www.w3.org/ns/prov",
    "name" : "W3C PROV"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "MedicationAdministration",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "MedicationAdministration",
      "path" : "MedicationAdministration"
    },
    {
      "id" : "MedicationAdministration.status",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationAdministration.status",
      "short" : "(USCDI+ Quality) in-progress | on-hold | completed | entered-in-error | stopped | unknown",
      "binding" : {
        "strength" : "required",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-non-negative-medication-admin-status"
      }
    },
    {
      "id" : "MedicationAdministration.statusReason",
      "path" : "MedicationAdministration.statusReason",
      "short" : "Reason administration not performed"
    },
    {
      "id" : "MedicationAdministration.medication[x]",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationAdministration.medication[x]",
      "short" : "(USCDI+ Quality) What was administered",
      "type" : [{
        "code" : "CodeableConcept"
      },
      {
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medication"]
      }],
      "binding" : {
        "strength" : "preferred",
        "description" : "The set of RxNorm codes to represent medications",
        "valueSet" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4"
      }
    },
    {
      "id" : "MedicationAdministration.subject",
      "path" : "MedicationAdministration.subject",
      "short" : "Who received medication",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "MedicationAdministration.context",
      "path" : "MedicationAdministration.context",
      "short" : "Encounter or Episode of Care administered as part of",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter",
        "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare"]
      }]
    },
    {
      "id" : "MedicationAdministration.effective[x]",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationAdministration.effective[x]",
      "short" : "(USCDI+ Quality) Start and end time of administration"
    },
    {
      "id" : "MedicationAdministration.request",
      "path" : "MedicationAdministration.request",
      "short" : "Request administration performed against",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationrequest"]
      }]
    },
    {
      "id" : "MedicationAdministration.dosage",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationAdministration.dosage",
      "short" : "(USCDI+ Quality)",
      "mustSupport" : false
    },
    {
      "id" : "MedicationAdministration.dosage.route",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationAdministration.dosage.route",
      "short" : "(USCDI+ Quality) Path of substance into body",
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/route-codes"
      }
    },
    {
      "id" : "MedicationAdministration.dosage.dose",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationAdministration.dosage.dose",
      "short" : "(USCDI+ Quality) Amount of medication per dose"
    }]
  }
}

```
