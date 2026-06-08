# US Quality Core RelatedPerson - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core RelatedPerson 

 
Profile of RelatedPerson for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* relationship: (USCDI+ Quality) (USCDI) The nature of the relationship
* name: (USCDI+ Quality) (USCDI) A name associated with the person
* telecom: (USCDI+ Quality) (USCDI) A contact detail for the person
* address: (USCDI+ Quality) (USCDI) Address where the related person can be contacted or visited

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md), [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md)... Show 15 more, [US Quality Core CommunicationRequest](StructureDefinition-us-quality-core-communicationrequest.md), [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md), [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md), [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md), [US Quality Core MedicationStatement](StructureDefinition-us-quality-core-medicationstatement.md), [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md), [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md), [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md), [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md), [US Quality Core QuestionnaireResponse](StructureDefinition-us-quality-core-questionnaireresponse.md), [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md), [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md) and [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)
* Examples for this Profile: [RelatedPerson/example](RelatedPerson-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-relatedperson.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-relatedperson.csv), [Excel](../StructureDefinition-us-quality-core-relatedperson.xlsx), [Schematron](../StructureDefinition-us-quality-core-relatedperson.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-relatedperson",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson",
  "version" : "0.5.0",
  "name" : "USQualityCoreRelatedPerson",
  "title" : "US Quality Core RelatedPerson",
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
  "description" : "Profile of RelatedPerson for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "RelatedPerson",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "RelatedPerson",
      "path" : "RelatedPerson"
    },
    {
      "id" : "RelatedPerson.active",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "RelatedPerson.active",
      "short" : "(USCDI) Whether this related person's record is in active use",
      "min" : 1
    },
    {
      "id" : "RelatedPerson.patient",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "RelatedPerson.patient",
      "short" : "(USCDI) The patient this person is related to",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "RelatedPerson.relationship",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "RelatedPerson.relationship",
      "short" : "(USCDI+ Quality) (USCDI) The nature of the relationship",
      "condition" : ["us-core-14"]
    },
    {
      "id" : "RelatedPerson.name",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "RelatedPerson.name",
      "short" : "(USCDI+ Quality) (USCDI) A name associated with the person",
      "condition" : ["us-core-14"]
    },
    {
      "id" : "RelatedPerson.telecom",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "RelatedPerson.telecom",
      "short" : "(USCDI+ Quality) (USCDI) A contact detail for the person"
    },
    {
      "id" : "RelatedPerson.address",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "RelatedPerson.address",
      "short" : "(USCDI+ Quality) (USCDI) Address where the related person can be contacted or visited"
    }]
  }
}

```
