# US Quality Core Medication - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Medication 

 
Profile of Medication for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* code: (USCDI+ Quality) (USCDI) Codes that identify this medication

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core Medication](StructureDefinition-us-quality-core-medication.md), [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md), [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md) and [US Quality Core MedicationStatement](StructureDefinition-us-quality-core-medicationstatement.md)
* Examples for this Profile: [Medication/example](Medication-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-medication.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-medication.csv), [Excel](../StructureDefinition-us-quality-core-medication.xlsx), [Schematron](../StructureDefinition-us-quality-core-medication.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

```
define function "GetMedicationCode"(request MedicationRequest):
  if request.medication is CodeableConcept then
    request.medication as CodeableConcept
  else
    (singleton from ([Medication] M where M.id = GetId((request.medication as Reference).reference))).code

```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-medication",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medication",
  "version" : "0.5.0",
  "name" : "USQualityCoreMedication",
  "title" : "US Quality Core Medication",
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
  "description" : "Profile of Medication for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "Medication",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medication|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Medication",
      "path" : "Medication"
    },
    {
      "id" : "Medication.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Medication.code",
      "short" : "(USCDI+ Quality) (USCDI) Codes that identify this medication"
    },
    {
      "id" : "Medication.manufacturer",
      "path" : "Medication.manufacturer",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Medication.ingredient.item[x]",
      "path" : "Medication.ingredient.item[x]",
      "type" : [{
        "code" : "CodeableConcept"
      },
      {
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-substance",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medication"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Medication.ingredient.isActive",
      "path" : "Medication.ingredient.isActive",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "boolean"
      }],
      "mustSupport" : false,
      "mapping" : [{
        "identity" : "qidam",
        "map" : "Not in QIDAM, but added because it was determined to be important for drug-allergy checking. For example, if the patient is allergic to Depakote\n(a trade name, and includes blue dye as an inactive ingredient), then when patient is prescribed warfarin, it shoots out a drug-allergy alert because warfarin also contains blue dye.  Providers hate this. We recently overcame this problem by having the drug-allergy alert interaction settings only check for allergies to active ingredients."
      }]
    }]
  }
}

```
