# US Quality Core FamilyMemberHistory - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core FamilyMemberHistory 

 
Profile of Family Member History for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* condition.code: (USCDI+ Quality) Condition suffered by relation

The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md)
* Examples for this Profile: [FamilyMemberHistory/example](FamilyMemberHistory-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-familymemberhistory.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-familymemberhistory.csv), [Excel](../StructureDefinition-us-quality-core-familymemberhistory.xlsx), [Schematron](../StructureDefinition-us-quality-core-familymemberhistory.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-familymemberhistory",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-familymemberhistory",
  "version" : "0.5.0",
  "name" : "USQualityCoreFamilyMemberHistory",
  "title" : "US Quality Core FamilyMemberHistory",
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
  "description" : "Profile of Family Member History for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "FamilyMemberHistory",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "FamilyMemberHistory",
      "path" : "FamilyMemberHistory"
    },
    {
      "id" : "FamilyMemberHistory.patient",
      "path" : "FamilyMemberHistory.patient",
      "short" : "Patient history is about",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "FamilyMemberHistory.date",
      "path" : "FamilyMemberHistory.date",
      "short" : "When history was recorded or last updated"
    },
    {
      "id" : "FamilyMemberHistory.relationship",
      "path" : "FamilyMemberHistory.relationship",
      "short" : "Relationship to the subject",
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://terminology.hl7.org/ValueSet/v3-FamilyMember"
      }
    },
    {
      "id" : "FamilyMemberHistory.age[x]",
      "path" : "FamilyMemberHistory.age[x]",
      "short" : "(approximate) age"
    },
    {
      "id" : "FamilyMemberHistory.deceased[x]",
      "path" : "FamilyMemberHistory.deceased[x]",
      "short" : "Dead? How old/when?"
    },
    {
      "id" : "FamilyMemberHistory.condition",
      "path" : "FamilyMemberHistory.condition",
      "mustSupport" : false
    },
    {
      "id" : "FamilyMemberHistory.condition.extension:condition-abatement",
      "path" : "FamilyMemberHistory.condition.extension",
      "sliceName" : "condition-abatement",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/familymemberhistory-abatement"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "FamilyMemberHistory.condition.extension:condition-severity",
      "path" : "FamilyMemberHistory.condition.extension",
      "sliceName" : "condition-severity",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/StructureDefinition/familymemberhistory-severity"]
      }],
      "mustSupport" : false,
      "binding" : {
        "strength" : "preferred",
        "description" : "Valueset to identify the severity of the problem",
        "valueSet" : "http://hl7.org/fhir/ValueSet/condition-severity"
      }
    },
    {
      "id" : "FamilyMemberHistory.condition.code",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "FamilyMemberHistory.condition.code",
      "short" : "(USCDI+ Quality) Condition suffered by relation",
      "binding" : {
        "strength" : "extensible",
        "description" : "Identification of the Condition or diagnosis.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/condition-code"
      }
    },
    {
      "id" : "FamilyMemberHistory.condition.onset[x]",
      "path" : "FamilyMemberHistory.condition.onset[x]",
      "mustSupport" : false
    }]
  }
}

```
