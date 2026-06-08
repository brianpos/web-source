# US Quality Core AdverseEvent - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core AdverseEvent 

 
An adverse event (AE) is an untoward occurrence during treatment that should be reported, for example, to a clinical study sponsor or safety oversight organization. AEs include reportable serious medical errors such as those defined by National Quality Forum (see http://www.qualityforum.org/Topics/ SREs/List_of_SREs.aspx), and Patient Safety Healthcare Events as defined by AHRQ. Some AEs can involve conditions such as "recurring headaches" but others do not, such as accidental falls, surgical errors, sexual abuse of patient, and sudden death. An adverse event can also be an unsafe condition that increases the probability of a patient safety event, and near-misses. An adverse event can be caused by exposure to some agent (e.g., a medication, immunization, food, or environmental agent). An adverse reaction can range from a mild reaction, such as a harmless rash to a severe and life-threatening condition. They can occur immediately or develop over time. For example, a patient may develop a rash after taking a particular medication. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* category: (USCDI+ Quality) product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment
* event: (USCDI+ Quality) Type of the event itself in relation to the subject
* date: (USCDI+ Quality)
* detected: (USCDI+ Quality) When the event was detected
* recordedDate: (USCDI+ Quality) When the event was recorded
* suspectEntity.instance: (USCDI+ Quality) Refers to the specific entity that caused the adverse event

The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Examples for this Profile: [AdverseEvent/example](AdverseEvent-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-adverseevent.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-adverseevent.csv), [Excel](../StructureDefinition-us-quality-core-adverseevent.xlsx), [Schematron](../StructureDefinition-us-quality-core-adverseevent.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-adverseevent",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-adverseevent",
  "version" : "0.5.0",
  "name" : "USQualityCoreAdverseEvent",
  "title" : "US Quality Core AdverseEvent",
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
  "description" : "An adverse event (AE) is an untoward occurrence during treatment that should be reported, for example, to a clinical study sponsor or safety oversight organization.  AEs include reportable serious medical errors such as those defined by National Quality Forum (see http://www.qualityforum.org/Topics/ SREs/List_of_SREs.aspx), and Patient Safety Healthcare Events as defined by AHRQ.  Some AEs can involve conditions such as \"recurring headaches\" but others do not, such as accidental falls, surgical errors, sexual abuse of patient, and sudden death. An adverse event can also be an unsafe condition that increases the probability of a patient safety event, and near-misses. An adverse event can be caused by exposure to some agent (e.g., a medication, immunization, food, or environmental agent). An adverse reaction can range from a mild reaction, such as a harmless rash to a severe and life-threatening condition. They can occur immediately or develop over time. For example, a patient may develop a rash after taking a particular medication.",
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "AdverseEvent",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/AdverseEvent",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "AdverseEvent",
      "path" : "AdverseEvent"
    },
    {
      "id" : "AdverseEvent.actuality",
      "path" : "AdverseEvent.actuality",
      "short" : "actual | potential"
    },
    {
      "id" : "AdverseEvent.category",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AdverseEvent.category",
      "short" : "(USCDI+ Quality) product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment"
    },
    {
      "id" : "AdverseEvent.event",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AdverseEvent.event",
      "short" : "(USCDI+ Quality) Type of the event itself in relation to the subject",
      "min" : 1,
      "max" : "1",
      "binding" : {
        "strength" : "preferred",
        "description" : "Detailed type of event.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/adverse-event-type"
      }
    },
    {
      "id" : "AdverseEvent.subject",
      "path" : "AdverseEvent.subject",
      "short" : "Subject impacted by event",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson"]
      }]
    },
    {
      "id" : "AdverseEvent.encounter",
      "path" : "AdverseEvent.encounter",
      "short" : "Encounter created as part of",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter"]
      }]
    },
    {
      "id" : "AdverseEvent.date",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AdverseEvent.date",
      "short" : "(USCDI+ Quality)",
      "mustSupport" : false
    },
    {
      "id" : "AdverseEvent.detected",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AdverseEvent.detected",
      "short" : "(USCDI+ Quality) When the event was detected"
    },
    {
      "id" : "AdverseEvent.recordedDate",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AdverseEvent.recordedDate",
      "short" : "(USCDI+ Quality) When the event was recorded"
    },
    {
      "id" : "AdverseEvent.resultingCondition",
      "path" : "AdverseEvent.resultingCondition",
      "short" : "Effect on the subject due to this event",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-problems-health-concerns",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis"]
      }]
    },
    {
      "id" : "AdverseEvent.location",
      "path" : "AdverseEvent.location",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "AdverseEvent.seriousness",
      "path" : "AdverseEvent.seriousness",
      "short" : "Seriousness of the event"
    },
    {
      "id" : "AdverseEvent.recorder",
      "path" : "AdverseEvent.recorder",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "AdverseEvent.contributor",
      "path" : "AdverseEvent.contributor",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-device",
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device|6.1.0"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "AdverseEvent.suspectEntity",
      "path" : "AdverseEvent.suspectEntity",
      "mustSupport" : false
    },
    {
      "id" : "AdverseEvent.suspectEntity.instance",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "AdverseEvent.suspectEntity.instance",
      "short" : "(USCDI+ Quality) Refers to the specific entity that caused the adverse event",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-procedure",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-substance",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medication",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationadministration",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationstatement",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-device",
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device|6.1.0"]
      }]
    },
    {
      "id" : "AdverseEvent.suspectEntity.causality",
      "path" : "AdverseEvent.suspectEntity.causality",
      "min" : 0,
      "max" : "1",
      "mustSupport" : false
    },
    {
      "id" : "AdverseEvent.subjectMedicalHistory",
      "path" : "AdverseEvent.subjectMedicalHistory",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-simple-observation",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-allergyintolerance",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-familymemberhistory",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-procedure",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-problems-health-concerns",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis"]
      }],
      "mustSupport" : false
    }]
  }
}

```
