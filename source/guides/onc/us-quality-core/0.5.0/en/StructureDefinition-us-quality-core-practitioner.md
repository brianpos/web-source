# US Quality Core Practitioner - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Practitioner 

 
Profile of Practitioner for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* identifier: (USCDI+ Quality) An identifier for the person as this agent
* identifier.system: (USCDI+ Quality) The namespace for the identifier value
* identifier.value: (USCDI+ Quality) The value that is unique
* identifier:NPI: (USCDI+ Quality) An identifier for the person as this agent
* identifier:NPI.system: (USCDI+ Quality) The namespace for the identifier value
* identifier:NPI.value: (USCDI+ Quality) The value that is unique
* identifier:ein: (USCDI+ Quality) There is not a general Tax Identifier Numer (TIN) OID. There is an SSN, a PTIN, and an ITIN, but no TIN generally. So the only slice specified here is EIN, if consumers determine a need for an SSN, submit a comment to that effect.
* identifier:ein.value: (USCDI+ Quality) The value that is unique
* name: (USCDI+ Quality) The name(s) associated with the practitioner
* name.family: (USCDI+ Quality) Family name (often called 'Surname')
* telecom: (USCDI+ Quality) A contact detail for the practitioner (that apply to all roles)
* telecom.system: (USCDI+ Quality) phone | fax | email | pager | url | sms | other
* telecom.value: (USCDI+ Quality) The actual contact point details
* address: (USCDI+ Quality) Address(es) of the practitioner
* address.line: (USCDI+ Quality) Street name, number, direction & P.O. Box etc.
* address.city: (USCDI+ Quality) Name of city, town etc.
* address.state: (USCDI+ Quality) Sub-unit of country (abbreviations ok)
* address.postalCode: (USCDI+ Quality) US Zip Codes
* address.country: (USCDI+ Quality) Country (e.g. can be ISO 3166 2 or 3 letter code)

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md), [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core ClaimResponse](StructureDefinition-us-quality-core-claimresponse.md)... Show 19 more, [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md), [US Quality Core CommunicationRequest](StructureDefinition-us-quality-core-communicationrequest.md), [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md), [US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md), [US Quality Core Flag](StructureDefinition-us-quality-core-flag.md), [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md), [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md), [US Quality Core MedicationStatement](StructureDefinition-us-quality-core-medicationstatement.md), [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md), [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md), [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md), [US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md), [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md), [US Quality Core QuestionnaireResponse](StructureDefinition-us-quality-core-questionnaireresponse.md), [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md), [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md) and [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)
* Examples for this Profile: [Practitioner/example](Practitioner-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-practitioner.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-practitioner.csv), [Excel](../StructureDefinition-us-quality-core-practitioner.xlsx), [Schematron](../StructureDefinition-us-quality-core-practitioner.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-practitioner",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
  "version" : "0.5.0",
  "name" : "USQualityCorePractitioner",
  "title" : "US Quality Core Practitioner",
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
  "description" : "Profile of Practitioner for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "Practitioner",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Practitioner",
      "path" : "Practitioner"
    },
    {
      "id" : "Practitioner.identifier",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "short" : "(USCDI+ Quality) An identifier for the person as this agent",
      "comment" : "NPI must be supported as the identifier system in the US, Tax id is allowed, Local id is allowed in addition to another identifier supplied by a jurisdictional authority such as a practitioner's *Drug Enforcement Administration (DEA)* number.",
      "min" : 1
    },
    {
      "id" : "Practitioner.identifier.system",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.identifier.system",
      "short" : "(USCDI+ Quality) The namespace for the identifier value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "uri"
      }]
    },
    {
      "id" : "Practitioner.identifier.value",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.identifier.value",
      "short" : "(USCDI+ Quality) The value that is unique",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Practitioner.identifier:NPI",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.identifier",
      "sliceName" : "NPI",
      "short" : "(USCDI+ Quality) An identifier for the person as this agent",
      "patternIdentifier" : {
        "system" : "http://hl7.org/fhir/sid/us-npi"
      },
      "condition" : ["us-core-16", "us-core-17"]
    },
    {
      "id" : "Practitioner.identifier:NPI.system",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.identifier.system",
      "short" : "(USCDI+ Quality) The namespace for the identifier value"
    },
    {
      "id" : "Practitioner.identifier:NPI.value",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.identifier.value",
      "short" : "(USCDI+ Quality) The value that is unique"
    },
    {
      "id" : "Practitioner.identifier:ein",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.identifier",
      "sliceName" : "ein",
      "short" : "(USCDI+ Quality) There is not a general Tax Identifier Numer (TIN) OID. There is an SSN, a PTIN, and an ITIN, but no TIN generally. So the only slice specified here is EIN, if consumers determine a need for an SSN, submit a comment to that effect.",
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
      "id" : "Practitioner.identifier:ein.use",
      "path" : "Practitioner.identifier.use",
      "short" : "usual | official | temp | secondary | old (If known)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }]
    },
    {
      "id" : "Practitioner.identifier:ein.value",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.identifier.value",
      "short" : "(USCDI+ Quality) The value that is unique",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "Practitioner.name",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.name",
      "short" : "(USCDI+ Quality) The name(s) associated with the practitioner"
    },
    {
      "id" : "Practitioner.name.family",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.name.family",
      "short" : "(USCDI+ Quality) Family name (often called 'Surname')"
    },
    {
      "id" : "Practitioner.telecom",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.telecom",
      "short" : "(USCDI+ Quality) A contact detail for the practitioner (that apply to all roles)"
    },
    {
      "id" : "Practitioner.telecom.system",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.telecom.system",
      "short" : "(USCDI+ Quality) phone | fax | email | pager | url | sms | other"
    },
    {
      "id" : "Practitioner.telecom.value",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.telecom.value",
      "short" : "(USCDI+ Quality) The actual contact point details"
    },
    {
      "id" : "Practitioner.address",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.address",
      "short" : "(USCDI+ Quality) Address(es) of the practitioner"
    },
    {
      "id" : "Practitioner.address.line",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.address.line",
      "short" : "(USCDI+ Quality) Street name, number, direction & P.O. Box etc."
    },
    {
      "id" : "Practitioner.address.city",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.address.city",
      "short" : "(USCDI+ Quality) Name of city, town etc."
    },
    {
      "id" : "Practitioner.address.state",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.address.state",
      "short" : "(USCDI+ Quality) Sub-unit of country (abbreviations ok)"
    },
    {
      "id" : "Practitioner.address.postalCode",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.address.postalCode",
      "short" : "(USCDI+ Quality) US Zip Codes"
    },
    {
      "id" : "Practitioner.address.country",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Practitioner.address.country",
      "short" : "(USCDI+ Quality) Country (e.g. can be ISO 3166 2 or 3 letter code)"
    }]
  }
}

```
