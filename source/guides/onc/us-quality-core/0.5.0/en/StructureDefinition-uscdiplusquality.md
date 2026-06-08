# US Quality Core USCDI+ Quality Extension - 2026 US Quality Core Implementation Guide v0.5.0

## Extension: US Quality Core USCDI+ Quality Extension 

This extension is only used in the US Quality Core Implementation Guide's Profile StructureDefinition elements.

**Context of Use**

**Usage info**

**Usages:**

* Examples for this Extension: [USQualityCoreAdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [USQualityCoreAllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md), [USQualityCoreCarePlan](StructureDefinition-us-quality-core-careplan.md), [USQualityCoreCareTeam](StructureDefinition-us-quality-core-careteam.md)... Show 36 more, [USQualityCoreConditionEncounterDiagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md), [USQualityCoreConditionProblemsHealthConcerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md), [USQualityCoreCoverage](StructureDefinition-us-quality-core-coverage.md), [USQualityCoreDeviceNotRequested](StructureDefinition-us-quality-core-devicenotrequested.md), [USQualityCoreDeviceRequest](StructureDefinition-us-quality-core-devicerequest.md), [USQualityCoreDiagnosticReportLab](StructureDefinition-us-quality-core-diagnosticreport-lab.md), [USQualityCoreDiagnosticReportNote](StructureDefinition-us-quality-core-diagnosticreport-note.md), [USQualityCoreEncounter](StructureDefinition-us-quality-core-encounter.md), [USQualityCoreFamilyMemberHistory](StructureDefinition-us-quality-core-familymemberhistory.md), [USQualityCoreGoal](StructureDefinition-us-quality-core-goal.md), [USQualityCoreImmunization](StructureDefinition-us-quality-core-immunization.md), [USQualityCoreImmunizationNotDone](StructureDefinition-us-quality-core-immunizationnotdone.md), [USQualityCoreLocation](StructureDefinition-us-quality-core-location.md), [USQualityCoreMedication](StructureDefinition-us-quality-core-medication.md), [USQualityCoreMedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md), [USQualityCoreMedicationAdministrationNotDone](StructureDefinition-us-quality-core-medicationadministrationnotdone.md), [USQualityCoreMedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md), [USQualityCoreMedicationDispenseDeclined](StructureDefinition-us-quality-core-medicationdispensedeclined.md), [USQualityCoreMedicationNotRequested](StructureDefinition-us-quality-core-medicationnotrequested.md), [USQualityCoreMedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md), [USQualityCoreObservationClinicalResult](StructureDefinition-us-quality-core-observation-clinical-result.md), [USQualityCoreLaboratoryResultObservation](StructureDefinition-us-quality-core-observation-lab.md), [USQualityCoreObservationScreeningAssessment](StructureDefinition-us-quality-core-observation-screening-assessment.md), [USQualityCoreObservationCancelled](StructureDefinition-us-quality-core-observationcancelled.md), [USQualityCoreOrganization](StructureDefinition-us-quality-core-organization.md), [USQualityCorePatient](StructureDefinition-us-quality-core-patient.md), [USQualityCorePractitioner](StructureDefinition-us-quality-core-practitioner.md), [USQualityCorePractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md), [USQualityCoreProcedure](StructureDefinition-us-quality-core-procedure.md), [USQualityCoreProcedureNotDone](StructureDefinition-us-quality-core-procedurenotdone.md), [USQualityCoreRelatedPerson](StructureDefinition-us-quality-core-relatedperson.md), [USQualityCoreServiceNotRequested](StructureDefinition-us-quality-core-servicenotrequested.md), [USQualityCoreServiceRequest](StructureDefinition-us-quality-core-servicerequest.md), [USQualityCoreSimpleObservation](StructureDefinition-us-quality-core-simple-observation.md), [USQualityCoreTask](StructureDefinition-us-quality-core-task.md) and [USQualityCoreTaskRejected](StructureDefinition-us-quality-core-taskrejected.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-uscdiplusquality.json)

### Formal Views of Extension Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-uscdiplusquality.csv), [Excel](../StructureDefinition-uscdiplusquality.xlsx), [Schematron](../StructureDefinition-uscdiplusquality.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "uscdiplusquality",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
  "version" : "0.5.0",
  "name" : "USQualityCoreUSCDIQualityExtension",
  "title" : "US Quality Core USCDI+ Quality Extension",
  "status" : "active",
  "date" : "2026-06-05",
  "publisher" : "Office of the National Coordinator for Health Information Technology (ONC)",
  "contact" : [{
    "name" : "Office of the National Coordinator for Health Information Technology (ONC)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.healthit.gov/feedback"
    }]
  }],
  "description" : "This extension is only used in the US Quality Core Implementation Guide's Profile StructureDefinition elements.",
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
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "ElementDefinition"
  },
  {
    "type" : "element",
    "expression" : "ElementDefinition.type.targetProfile"
  },
  {
    "type" : "element",
    "expression" : "ElementDefinition.type"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "USCDI+ Quality Element Flag: ONLY USED FOR US Quality Core Profile StructureDefinitions",
      "definition" : "**This extension is only used on US Quality Core Profile StructureDefinition elements**.",
      "min" : 0,
      "max" : "1",
      "isModifier" : false,
      "mapping" : [{
        "identity" : "v2",
        "map" : "No v2 equivalent"
      },
      {
        "identity" : "rim",
        "map" : "No RIM equivalent"
      }]
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "boolean"
      }]
    }]
  }
}

```
