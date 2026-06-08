# US Quality Core Service Not Requested - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Service Not Requested 

 
Negation profile of ServiceRequest for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* status: (USCDI+ Quality) (USCDI) draft | active | on-hold | revoked | completed | entered-in-error | unknown
* code: (USCDI+ Quality) (USCDI) What is being requested/ordered
* authoredOn: (USCDI+ Quality) (USCDI) Date request signed
* reasonCode: (USCDI+ Quality) (USCDI) Explanation/Justification for procedure or service
* reasonReference: (USCDI+ Quality) (USCDI) Explanation/Justification for service or service

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

This profile represents a service request that was intentionally not requested for a medical, patient, or system reason. To represent service requests that were requested, use the [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md) profile.

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Examples for this Profile: [ServiceRequest/negation-example-code](ServiceRequest-negation-example-code.md) and [ServiceRequest/negation-example](ServiceRequest-negation-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-servicenotrequested.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-servicenotrequested.csv), [Excel](../StructureDefinition-us-quality-core-servicenotrequested.xlsx), [Schematron](../StructureDefinition-us-quality-core-servicenotrequested.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

The ServiceRequest and ServiceNotRequested profiles represent the positive and negative statements for a service request.

The following illustrative CQL shows an exclusion pattern for services not requested:

```
define "Intermittent Pneumatic Compression Devices Not Ordered":
  ["ServiceNotRequested": "Application of intermittent pneumatic compression devices (IPC)"] DeviceNotOrdered
    where (DeviceNotOrdered.reasonRefused() in "Medical Reason"
      or DeviceNotOrdered.reasonRefused() in "Patient Refusal")
      and DeviceNotOrdered.status in { 'active', 'completed', 'on-hold' }
```

For a more complete discussion of representation of negation within US Quality Core and quality improvement artifacts, see the [Negation in US Quality Core](general-requirements.md#negation-in-us-quality-core) topic.



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-servicenotrequested",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicenotrequested",
  "version" : "0.5.0",
  "name" : "USQualityCoreServiceNotRequested",
  "title" : "US Quality Core Service Not Requested",
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
  "description" : "Negation profile of ServiceRequest for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
        "key" : "snr-1",
        "severity" : "error",
        "human" : "to indicate what service was not performed, either at least one coding in the code or a notDoneValueSet extension shall be provided",
        "expression" : "code.extension('http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet').exists() xor code.coding.exists()"
      }],
      "mustSupport" : false
    },
    {
      "id" : "ServiceRequest.extension:reasonRefused",
      "path" : "ServiceRequest.extension",
      "sliceName" : "reasonRefused",
      "short" : "Extension",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason"]
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
      "id" : "ServiceRequest.doNotPerform",
      "path" : "ServiceRequest.doNotPerform",
      "short" : "True if service/procedure should not be performed",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "boolean"
      }],
      "fixedBoolean" : true
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
      "id" : "ServiceRequest.code.extension:notDoneValueSet",
      "path" : "ServiceRequest.code.extension",
      "sliceName" : "notDoneValueSet",
      "short" : "What was not requested",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet"]
      }],
      "condition" : ["snr-1"]
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
      "min" : 1,
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
      "short" : "(USCDI+ Quality) (USCDI) Explanation/Justification for procedure or service",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "http://hl7.org/fhir/us/core/ValueSet/us-core-condition-code"
      }
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
