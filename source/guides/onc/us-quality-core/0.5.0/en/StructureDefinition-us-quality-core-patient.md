# US Quality Core Patient - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Patient 

 
Profile of Patient for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* extension:race: (USCDI+ Quality) (USCDI) US Core Race Extension
* extension:ethnicity: (USCDI+ Quality) (USCDI) US Core ethnicity Extension
* extension:tribalAffiliation: (USCDI+ Quality) (USCDI) Tribal Affiliation Extension
* identifier: (USCDI+ Quality) (USCDI) An identifier for this patient
* identifier.system: (USCDI+ Quality) (USCDI) The namespace for the identifier value
* identifier.value: (USCDI+ Quality) (USCDI) The value that is unique within the system.
* name: (USCDI+ Quality) (USCDI) A name associated with the patient
* name.use: (USCDI+ Quality) (USCDI) usual | official | temp | nickname | anonymous | old | maiden
* name.family: (USCDI+ Quality) (USCDI) Family name (often called 'Surname')
* name.given: (USCDI+ Quality) (USCDI) Given names (not always 'first'). Includes middle names
* name.suffix: (USCDI+ Quality) (USCDI) Parts that come after the name
* name.period: (USCDI+ Quality) (USCDI) Time period when name was/is in use
* telecom: (USCDI+ Quality) (USCDI) A contact detail for the individual
* telecom.system: (USCDI+ Quality) (USCDI) phone | fax | email | pager | url | sms | other
* telecom.value: (USCDI+ Quality) (USCDI) The actual contact point details
* telecom.use: (USCDI+ Quality) (USCDI) home | work | temp | old | mobile - purpose of this contact point
* birthDate: (USCDI+ Quality) (USCDI) The date of birth for the individual
* deceased[x]: (USCDI+ Quality) (USCDI) Indicates if the individual is deceased or not
* address: (USCDI+ Quality) (USCDI) An address for the individual
* address.use: (USCDI+ Quality) (USCDI) home | work | temp | old | billing - purpose of this address
* address.line: (USCDI+ Quality) (USCDI) Street name, number, direction & P.O. Box etc.
* address.city: (USCDI+ Quality) (USCDI) Name of city, town etc.
* address.state: (USCDI+ Quality) (USCDI) Sub-unit of country (abbreviations ok)
* address.postalCode: (USCDI+ Quality) (USCDI) US Zip Codes
* address.period: (USCDI+ Quality) (USCDI) Time period when address was/is in use
* communication: (USCDI+ Quality) (USCDI) A language which may be used to communicate with the patient about his or her health
* communication.language: (USCDI+ Quality) (USCDI) The language which can be used to communicate with the patient about his or her health

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md), [US Quality Core BodyStructure](StructureDefinition-us-quality-core-bodystructure.md), [US Quality Core CarePlan](StructureDefinition-us-quality-core-careplan.md)... Show 46 more, [US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md), [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core ClaimResponse](StructureDefinition-us-quality-core-claimresponse.md), [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md), [US Quality Core Communication Not Done](StructureDefinition-us-quality-core-communicationnotdone.md), [US Quality Core CommunicationRequest](StructureDefinition-us-quality-core-communicationrequest.md), [US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md), [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md), [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md), [US Quality Core Device](StructureDefinition-us-quality-core-device.md), [US Quality Core Device Not Requested](StructureDefinition-us-quality-core-devicenotrequested.md), [US Quality Core DeviceRequest](StructureDefinition-us-quality-core-devicerequest.md), [US Quality Core DeviceUseStatement](StructureDefinition-us-quality-core-deviceusestatement.md), [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md), [US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md), [US Quality Core FamilyMemberHistory](StructureDefinition-us-quality-core-familymemberhistory.md), [US Quality Core Flag](StructureDefinition-us-quality-core-flag.md), [US Quality Core Goal](StructureDefinition-us-quality-core-goal.md), [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md), [US Quality Core ImmunizationEvaluation](StructureDefinition-us-quality-core-immunizationevaluation.md), [US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md), [US Quality Core ImmunizationRecommendation](StructureDefinition-us-quality-core-immunizationrecommendation.md), [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md), [US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md), [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md), [US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md), [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md), [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md), [US Quality Core MedicationStatement](StructureDefinition-us-quality-core-medicationstatement.md), [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md), [US Quality Core NutritionOrder](StructureDefinition-us-quality-core-nutritionorder.md), [US Quality Core Observation Clinical Result](StructureDefinition-us-quality-core-observation-clinical-result.md), [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md), [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md), [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md), [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md), [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md), [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md), [US Quality Core QuestionnaireResponse](StructureDefinition-us-quality-core-questionnaireresponse.md), [US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md), [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md), [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md), [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) and [US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md)
* Examples for this Profile: [Patient/example-2](Patient-example-2.md), [Patient/example](Patient-example.md) and [Patient/infant-example](Patient-infant-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-patient.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-patient.csv), [Excel](../StructureDefinition-us-quality-core-patient.xlsx), [Schematron](../StructureDefinition-us-quality-core-patient.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-patient",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
  "version" : "0.5.0",
  "name" : "USQualityCorePatient",
  "title" : "US Quality Core Patient",
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
  "description" : "Profile of Patient for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
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
    "identity" : "loinc",
    "uri" : "http://loinc.org",
    "name" : "LOINC code for the element"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Patient",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Patient",
      "path" : "Patient"
    },
    {
      "id" : "Patient.extension:race",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.extension",
      "sliceName" : "race",
      "short" : "(USCDI+ Quality) (USCDI) US Core Race Extension",
      "definition" : "Concepts classifying the person into a named category of humans sharing common history, traits, geographical origin or nationality.  The race codes used to represent these concepts are based upon the [CDC Race and Ethnicity Code Set Version 1.0](http://www.cdc.gov/phin/resources/vocabulary/index.html) which includes over 900 concepts for representing race and ethnicity of which 921 reference race.  The race concepts are grouped by and pre-mapped to the 5 OMB race categories:\n\n   - American Indian or Alaska Native\n   - Asian\n   - Black or African American\n   - Native Hawaiian or Other Pacific Islander\n   - White.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "DomainResource.extension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-race|6.1.0"]
      }],
      "mustSupport" : false,
      "isModifier" : false
    },
    {
      "id" : "Patient.extension:ethnicity",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.extension",
      "sliceName" : "ethnicity",
      "short" : "(USCDI+ Quality) (USCDI) US Core ethnicity Extension",
      "definition" : "Concepts classifying the person into a named category of humans sharing common history, traits, geographical origin or nationality.  The ethnicity codes used to represent these concepts are based upon the [CDC ethnicity and Ethnicity Code Set Version 1.0](http://www.cdc.gov/phin/resources/vocabulary/index.html) which includes over 900 concepts for representing race and ethnicity of which 43 reference ethnicity.  The ethnicity concepts are grouped by and pre-mapped to the 2 OMB ethnicity categories: - Hispanic or Latino - Not Hispanic or Latino.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "DomainResource.extension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity|6.1.0"]
      }],
      "mustSupport" : false,
      "isModifier" : false
    },
    {
      "id" : "Patient.extension:tribalAffiliation",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.extension",
      "sliceName" : "tribalAffiliation",
      "short" : "(USCDI+ Quality) (USCDI) Tribal Affiliation Extension",
      "definition" : "A tribe or band with which a person associates whether or not they are an enrolled member.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "DomainResource.extension",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-tribal-affiliation|6.1.0"]
      }],
      "mustSupport" : false,
      "isModifier" : false
    },
    {
      "id" : "Patient.identifier",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.identifier",
      "short" : "(USCDI+ Quality) (USCDI) An identifier for this patient"
    },
    {
      "id" : "Patient.identifier.system",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.identifier.system",
      "short" : "(USCDI+ Quality) (USCDI) The namespace for the identifier value"
    },
    {
      "id" : "Patient.identifier.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.identifier.value",
      "short" : "(USCDI+ Quality) (USCDI) The value that is unique within the system."
    },
    {
      "id" : "Patient.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.name",
      "short" : "(USCDI+ Quality) (USCDI) A name associated with the patient"
    },
    {
      "id" : "Patient.name.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.name.use",
      "short" : "(USCDI+ Quality) (USCDI) usual | official | temp | nickname | anonymous | old | maiden",
      "definition" : "Identifies the purpose for this name.",
      "comment" : "Applications can assume that a name is current unless it explicitly says that it is temporary or old.",
      "requirements" : "Allows the appropriate name for a particular context of use to be selected from among a set of names.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "HumanName.use",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "code"
      }],
      "isModifier" : true,
      "isModifierReason" : "This is labeled as \"Is Modifier\" because applications should not mistake a temporary or old name etc.for a current/permanent one",
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "NameUse"
        }],
        "strength" : "required",
        "description" : "The use of a human name.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/name-use|4.0.1"
      }
    },
    {
      "id" : "Patient.name.family",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.name.family",
      "short" : "(USCDI+ Quality) (USCDI) Family name (often called 'Surname')"
    },
    {
      "id" : "Patient.name.given",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.name.given",
      "short" : "(USCDI+ Quality) (USCDI) Given names (not always 'first'). Includes middle names"
    },
    {
      "id" : "Patient.name.suffix",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.name.suffix",
      "short" : "(USCDI+ Quality) (USCDI) Parts that come after the name",
      "definition" : "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "HumanName.suffix",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "string"
      }],
      "orderMeaning" : "Suffixes appear in the correct order for presenting the name",
      "mustSupport" : false,
      "isModifier" : false,
      "isSummary" : true
    },
    {
      "id" : "Patient.name.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.name.period",
      "short" : "(USCDI+ Quality) (USCDI) Time period when name was/is in use",
      "definition" : "Indicates the period of time when this name was valid for the named person.",
      "requirements" : "Allows names to be placed in historical context.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "HumanName.period",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "Period"
      }],
      "mustSupport" : false,
      "isModifier" : false,
      "isSummary" : true
    },
    {
      "id" : "Patient.telecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.telecom",
      "short" : "(USCDI+ Quality) (USCDI) A contact detail for the individual"
    },
    {
      "id" : "Patient.telecom.extension:telecom-preferred",
      "path" : "Patient.telecom.extension",
      "sliceName" : "telecom-preferred",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/iso21090-preferred"]
      }],
      "mustSupport" : false,
      "mapping" : [{
        "identity" : "qidam",
        "map" : "Not in QIDAM, but CDS could need this for notifications in population health contexts, for example."
      }]
    },
    {
      "id" : "Patient.telecom.system",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.telecom.system",
      "short" : "(USCDI+ Quality) (USCDI) phone | fax | email | pager | url | sms | other"
    },
    {
      "id" : "Patient.telecom.value",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.telecom.value",
      "short" : "(USCDI+ Quality) (USCDI) The actual contact point details"
    },
    {
      "id" : "Patient.telecom.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.telecom.use",
      "short" : "(USCDI+ Quality) (USCDI) home | work | temp | old | mobile - purpose of this contact point"
    },
    {
      "id" : "Patient.birthDate",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.birthDate",
      "short" : "(USCDI+ Quality) (USCDI) The date of birth for the individual"
    },
    {
      "id" : "Patient.deceased[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.deceased[x]",
      "short" : "(USCDI+ Quality) (USCDI) Indicates if the individual is deceased or not",
      "comment" : "The \"Cause of death\" for a patient is typically captured as an Observation."
    },
    {
      "id" : "Patient.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.address",
      "short" : "(USCDI+ Quality) (USCDI) An address for the individual"
    },
    {
      "id" : "Patient.address.extension:address-preferred",
      "path" : "Patient.address.extension",
      "sliceName" : "address-preferred",
      "comment" : "Make general extension.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/iso21090-preferred"]
      }],
      "mustSupport" : false,
      "mapping" : [{
        "identity" : "qidam",
        "map" : "Not in QIDAM, but CDS could need this for notifications in population health contexts, for example."
      }]
    },
    {
      "id" : "Patient.address.use",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.address.use",
      "short" : "(USCDI+ Quality) (USCDI) home | work | temp | old | billing - purpose of this address",
      "definition" : "The purpose of this address.",
      "comment" : "Applications can assume that an address is current unless it explicitly says that it is temporary or old.",
      "requirements" : "Allows an appropriate address to be chosen from a list of many.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Address.use",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "code"
      }],
      "example" : [{
        "label" : "General",
        "valueCode" : "home"
      }],
      "isModifier" : true,
      "isModifierReason" : "This is labeled as \"Is Modifier\" because applications should not mistake a temporary or old address etc.for a current/permanent one",
      "isSummary" : true,
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "AddressUse"
        }],
        "strength" : "required",
        "description" : "The use of an address.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/address-use|4.0.1"
      }
    },
    {
      "id" : "Patient.address.line",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.address.line",
      "short" : "(USCDI+ Quality) (USCDI) Street name, number, direction & P.O. Box etc."
    },
    {
      "id" : "Patient.address.city",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.address.city",
      "short" : "(USCDI+ Quality) (USCDI) Name of city, town etc."
    },
    {
      "id" : "Patient.address.state",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.address.state",
      "short" : "(USCDI+ Quality) (USCDI) Sub-unit of country (abbreviations ok)"
    },
    {
      "id" : "Patient.address.postalCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.address.postalCode",
      "short" : "(USCDI+ Quality) (USCDI) US Zip Codes"
    },
    {
      "id" : "Patient.address.period",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.address.period",
      "short" : "(USCDI+ Quality) (USCDI) Time period when address was/is in use",
      "definition" : "Time period when address was/is in use.",
      "requirements" : "Allows addresses to be placed in historical context.",
      "min" : 0,
      "max" : "1",
      "base" : {
        "path" : "Address.period",
        "min" : 0,
        "max" : "1"
      },
      "type" : [{
        "code" : "Period"
      }],
      "example" : [{
        "label" : "General",
        "valuePeriod" : {
          "start" : "2010-03-23",
          "end" : "2010-07-01"
        }
      }],
      "isModifier" : false,
      "isSummary" : true
    },
    {
      "id" : "Patient.communication",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.communication",
      "short" : "(USCDI+ Quality) (USCDI) A language which may be used to communicate with the patient about his or her health",
      "definition" : "A language which may be used to communicate with the patient about his or her health.",
      "comment" : "If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.",
      "requirements" : "If a patient does not speak the local language, interpreters may be required, so languages spoken and proficiency are important things to keep track of both for patient and other persons of interest.",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "Patient.communication",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "BackboneElement"
      }],
      "mustSupport" : false,
      "isModifier" : false,
      "isSummary" : false
    },
    {
      "id" : "Patient.communication.language",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Patient.communication.language",
      "short" : "(USCDI+ Quality) (USCDI) The language which can be used to communicate with the patient about his or her health"
    },
    {
      "id" : "Patient.link",
      "path" : "Patient.link",
      "mustSupport" : false
    },
    {
      "id" : "Patient.link.other",
      "path" : "Patient.link.other",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }],
      "mustSupport" : false
    }]
  }
}

```
