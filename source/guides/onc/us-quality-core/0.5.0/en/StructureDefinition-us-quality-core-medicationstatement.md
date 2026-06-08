# US Quality Core MedicationStatement - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core MedicationStatement 

 
Profile of MedicationStatement for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

This profile does not include USCDI+ Quality flagged elements and is **not in scope** for USCDI+ Quality V1 conformance requirements in this guide. See the [USCDI+ Quality](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) page for the list of profiles and elements that are in scope for USCDI+ Quality V1.

This profile is inherited from QI-Core v6.0.0 and is included to ease adoption for systems that currently support QI-Core. Refer to the [Formal Views](#profile) section for the formal summary, definitions, terminology requirements, and mandatory element requirements.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md)
* Examples for this Profile: [MedicationStatement/example](MedicationStatement-example.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-medicationstatement.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-medicationstatement.csv), [Excel](../StructureDefinition-us-quality-core-medicationstatement.xlsx), [Schematron](../StructureDefinition-us-quality-core-medicationstatement.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-medicationstatement",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medicationstatement",
  "version" : "0.5.0",
  "name" : "USQualityCoreMedicationStatement",
  "title" : "US Quality Core MedicationStatement",
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
  "description" : "Profile of MedicationStatement for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
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
  "type" : "MedicationStatement",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "MedicationStatement",
      "path" : "MedicationStatement"
    },
    {
      "id" : "MedicationStatement.status",
      "path" : "MedicationStatement.status",
      "short" : "active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken"
    },
    {
      "id" : "MedicationStatement.medication[x]",
      "path" : "MedicationStatement.medication[x]",
      "short" : "What medication was taken",
      "type" : [{
        "code" : "CodeableConcept"
      },
      {
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-medication"]
      }],
      "binding" : {
        "strength" : "preferred",
        "description" : "The set of RxNorm codes to represent medications",
        "valueSet" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4"
      }
    },
    {
      "id" : "MedicationStatement.subject",
      "path" : "MedicationStatement.subject",
      "short" : "Who is/was taking the medication",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
      }]
    },
    {
      "id" : "MedicationStatement.effective[x]",
      "path" : "MedicationStatement.effective[x]",
      "short" : "The date/time or interval when the medication is/was/will be taken"
    },
    {
      "id" : "MedicationStatement.dateAsserted",
      "path" : "MedicationStatement.dateAsserted",
      "short" : "When the statement was asserted?",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "MedicationStatement.informationSource",
      "path" : "MedicationStatement.informationSource",
      "short" : "Person or organization that provided the information about the taking of this medication",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner",
        "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-relatedperson"]
      }]
    },
    {
      "id" : "MedicationStatement.derivedFrom",
      "path" : "MedicationStatement.derivedFrom",
      "short" : "Additional supporting information"
    },
    {
      "id" : "MedicationStatement.reasonCode",
      "path" : "MedicationStatement.reasonCode",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "mustSupport" : false
    },
    {
      "id" : "MedicationStatement.dosage",
      "path" : "MedicationStatement.dosage",
      "short" : "Details of how medication is/was taken or should be taken",
      "type" : [{
        "code" : "Dosage"
      }]
    },
    {
      "id" : "MedicationStatement.dosage.modifierExtension",
      "path" : "MedicationStatement.dosage.modifierExtension",
      "requirements" : "Modifier extensions allow for extensions that cannot be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored. This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions.",
      "mustSupport" : false,
      "isModifier" : true,
      "isModifierReason" : "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them"
    },
    {
      "id" : "MedicationStatement.dosage.timing",
      "path" : "MedicationStatement.dosage.timing",
      "short" : "When medication should be administered"
    },
    {
      "id" : "MedicationStatement.dosage.site",
      "path" : "MedicationStatement.dosage.site",
      "comment" : "If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension bodySite. May be a summary code, or a reference to a very precise definition of the location, or both.",
      "mustSupport" : false
    },
    {
      "id" : "MedicationStatement.dosage.route",
      "path" : "MedicationStatement.dosage.route",
      "short" : "How drug should enter body",
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/route-codes"
      }
    },
    {
      "id" : "MedicationStatement.dosage.doseAndRate",
      "path" : "MedicationStatement.dosage.doseAndRate",
      "short" : "Amount of medication administered"
    },
    {
      "id" : "MedicationStatement.dosage.doseAndRate.dose[x]",
      "path" : "MedicationStatement.dosage.doseAndRate.dose[x]",
      "short" : "Amount of medication per dose"
    }]
  }
}

```
