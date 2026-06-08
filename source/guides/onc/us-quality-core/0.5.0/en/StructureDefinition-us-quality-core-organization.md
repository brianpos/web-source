# US Quality Core Organization - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Organization 

 
Profile of Organization for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* identifier: (USCDI+ Quality) Identifies this organization across multiple systems

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md), [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core ClaimResponse](StructureDefinition-us-quality-core-claimresponse.md), [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md)... Show 21 more, [US Quality Core CommunicationRequest](StructureDefinition-us-quality-core-communicationrequest.md), [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md), [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md), [US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md), [US Quality Core Flag](StructureDefinition-us-quality-core-flag.md), [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core ImmunizationEvaluation](StructureDefinition-us-quality-core-immunizationevaluation.md), [US Quality Core ImmunizationRecommendation](StructureDefinition-us-quality-core-immunizationrecommendation.md), [US Quality Core Location](StructureDefinition-us-quality-core-location.md), [US Quality Core Medication](StructureDefinition-us-quality-core-medication.md), [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md), [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md), [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md), [US Quality Core Organization](StructureDefinition-us-quality-core-organization.md), [US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md), [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md), [US Quality Core QuestionnaireResponse](StructureDefinition-us-quality-core-questionnaireresponse.md), [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md), [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md) and [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)
* Examples for this Profile: [Health Level Seven International](Organization-example.md) and [HENDRICKS COUNTY HOSPITAL](Organization-example1.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-organization.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-organization.csv), [Excel](../StructureDefinition-us-quality-core-organization.xlsx), [Schematron](../StructureDefinition-us-quality-core-organization.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-organization",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization",
  "version" : "0.5.0",
  "name" : "USQualityCoreOrganization",
  "title" : "US Quality Core Organization",
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
  "description" : "Profile of Organization for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Organization",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Organization",
      "path" : "Organization"
    },
    {
      "id" : "Organization.identifier",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Organization.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "short" : "(USCDI+ Quality) Identifies this organization across multiple systems"
    },
    {
      "id" : "Organization.identifier:ccn",
      "path" : "Organization.identifier",
      "sliceName" : "ccn",
      "short" : "CMS Certification Number",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Identifier"
      }],
      "patternIdentifier" : {
        "system" : "http://terminology.hl7.org/NamingSystem/CMSCertificationNumber"
      }
    },
    {
      "id" : "Organization.identifier:ccn.use",
      "path" : "Organization.identifier.use",
      "short" : "usual | official | temp | secondary | old (If known)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }]
    },
    {
      "id" : "Organization.identifier:ccn.value",
      "path" : "Organization.identifier.value",
      "short" : "The value that is unique",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Organization.identifier:ein",
      "path" : "Organization.identifier",
      "sliceName" : "ein",
      "short" : "Employer Identification Number",
      "comment" : "There is not a general Tax Identifier Numer (TIN) OID. There is an SSN, a PTIN, and an ITIN, but no TIN generally. So the only slice specified here is EIN, if consumers determine a need for an SSN, submit a comment to that effect.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Identifier"
      }],
      "patternIdentifier" : {
        "system" : "urn:oid:2.16.840.1.113883.4.4"
      }
    },
    {
      "id" : "Organization.identifier:ein.use",
      "path" : "Organization.identifier.use",
      "short" : "usual | official | temp | secondary | old (If known)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }]
    },
    {
      "id" : "Organization.identifier:ein.value",
      "path" : "Organization.identifier.value",
      "short" : "The value that is unique",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Organization.type",
      "path" : "Organization.type",
      "binding" : {
        "strength" : "preferred",
        "description" : "Used to categorize the organization",
        "valueSet" : "http://hl7.org/fhir/ValueSet/organization-type"
      }
    },
    {
      "id" : "Organization.partOf",
      "path" : "Organization.partOf",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
      }]
    },
    {
      "id" : "Organization.endpoint",
      "path" : "Organization.endpoint",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://hl7.org/fhir/StructureDefinition/Endpoint"]
      }]
    }]
  }
}

```
