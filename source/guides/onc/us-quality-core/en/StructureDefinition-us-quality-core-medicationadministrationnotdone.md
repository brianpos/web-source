# US Quality Core MedicationAdministration Not Done - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core MedicationAdministration Not Done 

 
Negation profile of MedicationAdministration for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
* statusReason: (USCDI+ Quality) Reason administration not performed

The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents a medication administration that intentionally did not occur for a medical, patient, or system reason. To represent medication administrations that did occur, use the [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [MedicationAdministration/negation-example](MedicationAdministration-negation-example.md) and [MedicationAdministration/negation-with-code-example](MedicationAdministration-negation-with-code-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-medicationadministrationnotdone.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-medicationadministrationnotdone.csv), [Excel](../StructureDefinition-us-quality-core-medicationadministrationnotdone.xlsx), [Schematron](../StructureDefinition-us-quality-core-medicationadministrationnotdone.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The following illustrative CQL shows an exclusion pattern for medication administrations not performed:

```
define "Low Dose Unfractionated Heparin for VTE Prophylaxis Not Administered":
  ["MedicationAdministrationNotDone": "Low Dose Unfractionated Heparin for VTE Prophylaxis"] VTEMedication
    where VTEMedication.reasonCode in "Medical Reason" or VTEMedication.reasonCode in "Patient Refusal"
```

For a more complete discussion of representation of negation within US Quality Core and quality improvement artifacts, see the [Negation in US Quality Core](general-requirements.md#negation-in-us-quality-core) topic.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-medicationadministrationnotdone",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationadministrationnotdone",
  "version" : "0.5.0",
  "name" : "USQualityCoreMedicationAdministrationNotDone",
  "title" : "US Quality Core MedicationAdministration Not Done",
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
  "description" : "Negation profile of MedicationAdministration for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
      "path" : "MedicationAdministration",
      "constraint" : [{
        "key" : "mna-1",
        "severity" : "error",
        "human" : "To indicate what medication was not administered, either at least one coding in the medication or a notDoneValueSet extension shall be provided",
        "expression" : "medication.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor medication.coding.exists()",
        "xpath" : "exists(f:extension)"
      }],
      "mustSupport" : false
    },
    {
      "id" : "MedicationAdministration.implicitRules",
      "path" : "MedicationAdministration.implicitRules",
      "short" : "A set of rules under which this content was created"
    },
    {
      "id" : "MedicationAdministration.extension:recorded",
      "path" : "MedicationAdministration.extension",
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
      "id" : "MedicationAdministration.status",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationAdministration.status",
      "short" : "(USCDI+ Quality) in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown",
      "type" : [{
        "code" : "code"
      }],
      "fixedCode" : "not-done"
    },
    {
      "id" : "MedicationAdministration.statusReason",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "MedicationAdministration.statusReason",
      "short" : "(USCDI+ Quality) Reason administration not performed",
      "min" : 1,
      "max" : "*",
      "binding" : {
        "strength" : "extensible",
        "description" : "The reason the event did not occur or was not performed",
        "valueSet" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-negation-reason"
      }
    },
    {
      "id" : "MedicationAdministration.medication[x]",
      "path" : "MedicationAdministration.medication[x]",
      "short" : "What was administered",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "condition" : ["mna-1"],
      "binding" : {
        "strength" : "preferred",
        "description" : "The set of RxNorm codes to represent medications",
        "valueSet" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4"
      }
    },
    {
      "id" : "MedicationAdministration.medication[x].extension:notDoneValueSet",
      "path" : "MedicationAdministration.medication[x].extension",
      "sliceName" : "notDoneValueSet",
      "short" : "Url of a value set of activities not requested or performed",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }],
      "condition" : ["mna-1"]
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
      "path" : "MedicationAdministration.effective[x]",
      "short" : "Start and end time of administration"
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
      "path" : "MedicationAdministration.dosage",
      "short" : "Details of how medication was taken"
    },
    {
      "id" : "MedicationAdministration.dosage.route",
      "path" : "MedicationAdministration.dosage.route",
      "short" : "Path of substance into body"
    },
    {
      "id" : "MedicationAdministration.dosage.dose",
      "path" : "MedicationAdministration.dosage.dose",
      "short" : "Amount of medication per dose"
    }]
  }
}

```
