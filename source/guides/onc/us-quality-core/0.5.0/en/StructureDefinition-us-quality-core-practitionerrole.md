# US Quality Core PractitionerRole - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core PractitionerRole 

 
Profile of PractitionerRole for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* identifier: (USCDI+ Quality) Business Identifiers that are specific to a role/location
* identifier.system: (USCDI+ Quality) The namespace for the identifier value
* identifier.value: (USCDI+ Quality) The value that is unique
* practitioner: (USCDI+ Quality) Practitioner that is able to provide the defined services for the organization
* code: (USCDI+ Quality) Roles which this practitioner may perform
* specialty: (USCDI+ Quality) Specific specialty of the practitioner
* location: (USCDI+ Quality) The location(s) at which this practitioner provides care
* telecom: (USCDI+ Quality) Contact details that are specific to the role/location/service
* telecom.system: (USCDI+ Quality) phone | fax | email | pager | url | sms | other
* telecom.value: (USCDI+ Quality) The actual contact point details

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md), [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core ClaimResponse](StructureDefinition-us-quality-core-claimresponse.md)... Show 11 more, [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md), [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md), [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md), [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md), [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md), [US Quality Core QuestionnaireResponse](StructureDefinition-us-quality-core-questionnaireresponse.md), [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md), [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md) and [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)
* Examples for this Profile: [PractitionerRole/example](PractitionerRole-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-practitionerrole.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-practitionerrole.csv), [Excel](../StructureDefinition-us-quality-core-practitionerrole.xlsx), [Schematron](../StructureDefinition-us-quality-core-practitionerrole.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-practitionerrole",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
  "version" : "0.5.0",
  "name" : "USQualityCorePractitionerRole",
  "title" : "US Quality Core PractitionerRole",
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
  "description" : "Profile of PractitionerRole for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "PractitionerRole",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "PractitionerRole",
      "path" : "PractitionerRole"
    },
    {
      "id" : "PractitionerRole.identifier",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.identifier",
      "short" : "(USCDI+ Quality) Business Identifiers that are specific to a role/location",
      "min" : 1,
      "max" : "*"
    },
    {
      "id" : "PractitionerRole.identifier.use",
      "path" : "PractitionerRole.identifier.use",
      "short" : "usual | official | temp | secondary | old (If known)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }]
    },
    {
      "id" : "PractitionerRole.identifier.system",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.identifier.system",
      "short" : "(USCDI+ Quality) The namespace for the identifier value",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "uri"
      }]
    },
    {
      "id" : "PractitionerRole.identifier.value",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.identifier.value",
      "short" : "(USCDI+ Quality) The value that is unique",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "PractitionerRole.active",
      "path" : "PractitionerRole.active",
      "short" : "Whether this practitioner role record is in active use",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "PractitionerRole.period",
      "path" : "PractitionerRole.period",
      "short" : "The period during which the practitioner is authorized to perform in these role(s)",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "PractitionerRole.practitioner",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.practitioner",
      "short" : "(USCDI+ Quality) Practitioner that is able to provide the defined services for the organization",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner"]
      }]
    },
    {
      "id" : "PractitionerRole.organization",
      "path" : "PractitionerRole.organization",
      "short" : "Organization where the roles are available",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
      }]
    },
    {
      "id" : "PractitionerRole.code",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.code",
      "short" : "(USCDI+ Quality) Roles which this practitioner may perform",
      "binding" : {
        "strength" : "extensible",
        "description" : "Indicates specific responsibility of an individual within the care team, such as Primary physician, Team coordinator, Caregiver, etc.",
        "valueSet" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.30"
      }
    },
    {
      "id" : "PractitionerRole.specialty",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.specialty",
      "short" : "(USCDI+ Quality) Specific specialty of the practitioner",
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066"
      }
    },
    {
      "id" : "PractitionerRole.location",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.location",
      "short" : "(USCDI+ Quality) The location(s) at which this practitioner provides care",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location"]
      }]
    },
    {
      "id" : "PractitionerRole.healthcareService",
      "path" : "PractitionerRole.healthcareService",
      "condition" : ["us-core-13"]
    },
    {
      "id" : "PractitionerRole.telecom",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.telecom",
      "short" : "(USCDI+ Quality) Contact details that are specific to the role/location/service",
      "condition" : ["pd-1"]
    },
    {
      "id" : "PractitionerRole.telecom.system",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.telecom.system",
      "short" : "(USCDI+ Quality) phone | fax | email | pager | url | sms | other",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "code"
      }]
    },
    {
      "id" : "PractitionerRole.telecom.value",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "PractitionerRole.telecom.value",
      "short" : "(USCDI+ Quality) The actual contact point details",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }]
    },
    {
      "id" : "PractitionerRole.endpoint",
      "path" : "PractitionerRole.endpoint",
      "short" : "Technical endpoints providing access to services operated for the practitioner with this role",
      "condition" : ["pd-1"]
    }]
  }
}

```
