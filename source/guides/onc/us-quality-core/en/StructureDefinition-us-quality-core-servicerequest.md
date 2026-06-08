# US Quality Core ServiceRequest - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core ServiceRequest 

 
Profile of ServiceRequest for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) (USCDI) draft | active | on-hold | revoked | completed | entered-in-error | unknown
* intent: (USCDI+ Quality) (USCDI) proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
* code: (USCDI+ Quality) (USCDI) What is being requested/ordered
* authoredOn: (USCDI+ Quality) (USCDI) Date request signed
* reasonCode: (USCDI+ Quality) (USCDI) Explanation/Justification for procedure or service
* reasonReference: (USCDI+ Quality) (USCDI) Explanation/Justification for service or service

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

To represent that a service request was intentionally not requested for a medical, patient, or system reason, use the [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md), [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md) and [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)
* Examples for this Profile: [ServiceRequest/appropriateness-example](ServiceRequest-appropriateness-example.md), [ServiceRequest/elective-example](ServiceRequest-elective-example.md), [ServiceRequest/example](ServiceRequest-example.md) and [ServiceRequest/myringotomy-example](ServiceRequest-myringotomy-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-servicerequest.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-servicerequest.csv), [Excel](../StructureDefinition-us-quality-core-servicerequest.xlsx), [Schematron](../StructureDefinition-us-quality-core-servicerequest.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

To create an expression specifically requesting information that a ServiceRequest intentionally did not occur for a medical, patient or system reason, use the profile [USQualityCore-Servicenotrequested](StructureDefinition-us-quality-core-servicenotrequested.md).

The following example illustrates the use of the ServiceRequest profile:

```
define "Intermittent Pneumatic Compression Devices Ordered":
  ["ServiceRequest": "Application of intermittent pneumatic compression devices (IPC)"] DeviceOrdered
    where DeviceOrdered.status in { 'active', 'completed', 'on-hold' }
```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-servicerequest",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest",
  "version" : "0.5.0",
  "name" : "USQualityCoreServiceRequest",
  "title" : "US Quality Core ServiceRequest",
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
  "description" : "Profile of ServiceRequest for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "quick",
    "uri" : "http://siframework.org/cqf",
    "name" : "Quality Improvement and Clinical Knowledge (QUICK)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "ServiceRequest",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-servicerequest|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "ServiceRequest",
      "path" : "ServiceRequest",
      "constraint" : [{
        "key" : "dom-7",
        "severity" : "error",
        "human" : "if doNotPerform is present, it SHALL be false",
        "expression" : "doNotPerform.empty() or doNotPerform=false"
      }]
    },
    {
      "id" : "ServiceRequest.status",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.status",
      "short" : "(USCDI+ Quality) (USCDI) draft | active | on-hold | revoked | completed | entered-in-error | unknown"
    },
    {
      "id" : "ServiceRequest.intent",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.intent",
      "short" : "(USCDI+ Quality) (USCDI) proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option"
    },
    {
      "id" : "ServiceRequest.category",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.category",
      "slicing" : {
        "discriminator" : [{
          "type" : "pattern",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "short" : "(USCDI) Classification of service"
    },
    {
      "id" : "ServiceRequest.doNotPerform",
      "path" : "ServiceRequest.doNotPerform",
      "short" : "True if service/procedure should not be performed",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "boolean"
      }],
      "fixedBoolean" : false
    },
    {
      "id" : "ServiceRequest.code",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.code",
      "short" : "(USCDI+ Quality) (USCDI) What is being requested/ordered"
    },
    {
      "id" : "ServiceRequest.subject",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.subject",
      "short" : "(USCDI) Individual or Entity the service is ordered for",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "ServiceRequest.occurrence[x]",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.occurrence[x]",
      "short" : "(USCDI) When service should occur",
      "type" : [{
        "code" : "dateTime"
      },
      {
        "code" : "Period"
      },
      {
        "code" : "Timing"
      }]
    },
    {
      "id" : "ServiceRequest.authoredOn",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.authoredOn",
      "short" : "(USCDI+ Quality) (USCDI) Date request signed",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "ServiceRequest.requester",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.requester",
      "short" : "(USCDI)",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-device",
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device|6.1.0"]
      }]
    },
    {
      "id" : "ServiceRequest.reasonCode",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.reasonCode",
      "short" : "(USCDI+ Quality) (USCDI) Explanation/Justification for procedure or service"
    },
    {
      "id" : "ServiceRequest.reasonReference",
      "extension" : [{
        "url" : "http://hl7.org/fhir/us/core/StructureDefinition/uscdi-requirement",
        "valueBoolean" : true
      },
      {
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "ServiceRequest.reasonReference",
      "short" : "(USCDI+ Quality) (USCDI) Explanation/Justification for service or service",
      "definition" : "Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in `supportingInfo`.",
      "comment" : "This element represents why the referral is being made and may be used to decide how the service will be performed, or even if it will be performed at all.    To be as specific as possible,  a reference to  *Observation* or *Condition* should be used if available.  Otherwise when referencing  *DiagnosticReport*  it should contain a finding  in `DiagnosticReport.conclusion` and/or `DiagnosticReport.conclusionCode`.   When using a reference to *DocumentReference*, the target document should contain clear findings language providing the relevant reason for this service request.  Use  the CodeableConcept text element in `ServiceRequest.reasonCode` if the data is free (uncoded) text as shown in the [CT Scan example](servicerequest-example-di.html).",
      "min" : 0,
      "max" : "*",
      "base" : {
        "path" : "ServiceRequest.reasonReference",
        "min" : 0,
        "max" : "*"
      },
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-problems-health-concerns"]
      }],
      "isModifier" : false,
      "isSummary" : true
    }]
  }
}

```
