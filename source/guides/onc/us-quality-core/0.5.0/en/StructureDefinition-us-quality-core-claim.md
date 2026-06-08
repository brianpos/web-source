# US Quality Core Claim - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Claim 

 
Profile of Claim for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core ClaimResponse](StructureDefinition-us-quality-core-claimresponse.md)
* Examples for this Profile: [Claim/example](Claim-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-claim.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-claim.csv), [Excel](../StructureDefinition-us-quality-core-claim.xlsx), [Schematron](../StructureDefinition-us-quality-core-claim.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-claim",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-claim",
  "version" : "0.5.0",
  "name" : "USQualityCoreClaim",
  "title" : "US Quality Core Claim",
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
  "description" : "Profile of Claim for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "Claim",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Claim",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Claim",
      "path" : "Claim",
      "mustSupport" : false
    },
    {
      "id" : "Claim.patient",
      "path" : "Claim.patient",
      "short" : "The recipient of the products and services",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "Claim.billablePeriod",
      "path" : "Claim.billablePeriod",
      "short" : "Relevant time frame for the claim"
    },
    {
      "id" : "Claim.created",
      "path" : "Claim.created",
      "short" : "Resource creation date"
    },
    {
      "id" : "Claim.provider",
      "path" : "Claim.provider",
      "short" : "Party responsible for the claim",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
      }]
    },
    {
      "id" : "Claim.prescription",
      "path" : "Claim.prescription",
      "short" : "Prescription authorizing services and products",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-devicerequest",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationrequest",
        "http://hl7.org/fhir/StructureDefinition/VisionPrescription"]
      }]
    },
    {
      "id" : "Claim.payee",
      "path" : "Claim.payee",
      "mustSupport" : false
    },
    {
      "id" : "Claim.payee.party",
      "path" : "Claim.payee.party",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Claim.referral",
      "path" : "Claim.referral",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Claim.facility",
      "path" : "Claim.facility",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Claim.careTeam",
      "path" : "Claim.careTeam",
      "mustSupport" : false
    },
    {
      "id" : "Claim.careTeam.provider",
      "path" : "Claim.careTeam.provider",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "Claim.diagnosis",
      "path" : "Claim.diagnosis",
      "short" : "Pertinent diagnosis information"
    },
    {
      "id" : "Claim.diagnosis.sequence",
      "path" : "Claim.diagnosis.sequence",
      "short" : "Diagnosis instance identifier",
      "type" : [{
        "code" : "positiveInt"
      }]
    },
    {
      "id" : "Claim.diagnosis.diagnosis[x]",
      "path" : "Claim.diagnosis.diagnosis[x]",
      "short" : "Nature of illness or problem",
      "type" : [{
        "code" : "CodeableConcept"
      },
      {
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-encounter-diagnosis"]
      }],
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "ICD10"
        }],
        "strength" : "example",
        "description" : "Example ICD10 Diagnostic codes.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/icd-10"
      }
    },
    {
      "id" : "Claim.diagnosis.onAdmission",
      "path" : "Claim.diagnosis.onAdmission",
      "short" : "Present on admission",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "required",
        "description" : "Present on admission.",
        "valueSet" : "http://terminology.hl7.org/ValueSet/POAIndicators"
      }
    },
    {
      "id" : "Claim.procedure.sequence",
      "path" : "Claim.procedure.sequence",
      "short" : "Procedure instance identifier",
      "type" : [{
        "code" : "positiveInt"
      }],
      "isModifier" : false,
      "isSummary" : false
    },
    {
      "id" : "Claim.procedure.procedure[x]",
      "path" : "Claim.procedure.procedure[x]",
      "short" : "Specific clinical procedure",
      "type" : [{
        "code" : "CodeableConcept"
      },
      {
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-procedure"]
      }],
      "binding" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
          "valueString" : "ICD10_Procedures"
        }],
        "strength" : "example",
        "description" : "Example ICD10 Procedure codes.",
        "valueSet" : "http://hl7.org/fhir/ValueSet/icd-10-procedures"
      }
    },
    {
      "id" : "Claim.item.encounter",
      "path" : "Claim.item.encounter",
      "short" : "Encounters related to this billed item",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-encounter"]
      }]
    }]
  }
}

```
