# US Quality Core ImmunizationRecommendation - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core ImmunizationRecommendation 

 
Profile of ImmunizationRecommendation for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md) and [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md)
* Examples for this Profile: [ImmunizationRecommendation/example](ImmunizationRecommendation-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-immunizationrecommendation.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-immunizationrecommendation.csv), [Excel](../StructureDefinition-us-quality-core-immunizationrecommendation.xlsx), [Schematron](../StructureDefinition-us-quality-core-immunizationrecommendation.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-immunizationrecommendation",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunizationrecommendation",
  "version" : "0.5.0",
  "name" : "USQualityCoreImmunizationRecommendation",
  "title" : "US Quality Core ImmunizationRecommendation",
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
  "description" : "Profile of ImmunizationRecommendation for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "ImmunizationRecommendation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "ImmunizationRecommendation",
      "path" : "ImmunizationRecommendation",
      "mustSupport" : false
    },
    {
      "id" : "ImmunizationRecommendation.patient",
      "path" : "ImmunizationRecommendation.patient",
      "short" : "Who this profile is for",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "ImmunizationRecommendation.authority",
      "path" : "ImmunizationRecommendation.authority",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "ImmunizationRecommendation.recommendation",
      "path" : "ImmunizationRecommendation.recommendation",
      "short" : "Vaccine administration recommendations"
    },
    {
      "id" : "ImmunizationRecommendation.recommendation.vaccineCode",
      "path" : "ImmunizationRecommendation.recommendation.vaccineCode",
      "short" : "Vaccine or vaccine group recommendation applies to",
      "binding" : {
        "strength" : "extensible",
        "description" : "CVX Vaccines Administered Vaccine Set",
        "valueSet" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.6"
      }
    },
    {
      "id" : "ImmunizationRecommendation.recommendation.doseNumber[x]",
      "path" : "ImmunizationRecommendation.recommendation.doseNumber[x]",
      "short" : "Recommended dose number within series"
    },
    {
      "id" : "ImmunizationRecommendation.recommendation.supportingImmunization",
      "path" : "ImmunizationRecommendation.recommendation.supportingImmunization",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunization",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunizationevaluation"]
      }],
      "mustSupport" : false
    },
    {
      "id" : "ImmunizationRecommendation.recommendation.supportingPatientInformation",
      "path" : "ImmunizationRecommendation.recommendation.supportingPatientInformation",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-simple-observation",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-allergyintolerance"]
      }],
      "mustSupport" : false
    }]
  }
}

```
