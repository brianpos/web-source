# US Quality Core Profiles - 2026 US Quality Core Implementation Guide v0.5.0

## US Quality Core Profiles

### US Quality Core Profiles

The following table lists the US Quality Core profiles that are part of the IG, which US Core profile they are derived from, if any, and the underlying FHIR resources.

US Quality Core inherits all profiles from QI-Core 6.0.0, but not all profiles included in this guide are required for conformance. Implementations are expected to support profiles with at least one USCDI+ Quality flagged data element, as described in the [Summary of Conformance Requirements](general-requirements.md#summary-of-conformance-requirements) and the [USCDI+ Quality in-scope](uscdiquality.md#summary-list-of-in-scope-profiles-for-conformance) and [out-of-scope](uscdiquality.md#summary-list-of-out-of-scope-profiles-for-conformance) profile summaries. Profiles that are not part of the conformance expectations of this guide are marked with an asterisk (`*`) in the US Quality Core profile column.

| | | |
| :--- | :--- | :--- |
| **2.1.1 AdverseEvent** |   |   |
|  [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md) | — |  [ AdverseEvent](http://hl7.org/fhir/R4/adverseevent.html) |
| **2.1.2 AllergyIntolerance** |   |   |
|  [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md) | [US Core AllergyIntolerance](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-allergyintolerance.html) |  [ AllergyIntolerance](http://hl7.org/fhir/R4/allergyintolerance.html) |
| **2.1.3 BodyStructure** |   |   |
|  [US Quality Core BodyStructure](StructureDefinition-us-quality-core-bodystructure.md)* | — |  [ BodyStructure](http://hl7.org/fhir/R4/bodystructure.html) |
| **2.1.4 CarePlan** |   |   |
|  [US Quality Core CarePlan](StructureDefinition-us-quality-core-careplan.md) | [US Core CarePlan](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-careplan.html) |  [ CarePlan](http://hl7.org/fhir/R4/careplan.html) |
| **2.1.5 CareTeam** |   |   |
|  [US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md) | [US Core CareTeam](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-careteam.html) |  [ CareTeam](http://hl7.org/fhir/R4/careteam.html) |
| **2.1.6 Claim** |   |   |
|  [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md)* | — |  [ Claim](http://hl7.org/fhir/R4/claim.html) |
| **2.1.7 ClaimResponse** |   |   |
|  [US Quality Core ClaimResponse](StructureDefinition-us-quality-core-claimresponse.md)* | — |  [ ClaimResponse](http://hl7.org/fhir/R4/claimresponse.html) |
| **2.1.8 Communication** |   |   |
|  [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md)* | — |  [ Communication](http://hl7.org/fhir/R4/communication.html) |
|  [US Quality Core Communication Not Done](StructureDefinition-us-quality-core-communicationnotdone.md)* | — |  [ Communication](http://hl7.org/fhir/R4/communication.html) |
| **2.1.9 CommunicationRequest** |   |   |
|  [US Quality Core CommunicationRequest](StructureDefinition-us-quality-core-communicationrequest.md)* | — |  [ CommunicationRequest](http://hl7.org/fhir/R4/communicationrequest.html) |
| **2.1.10 Condition** |   |   |
|  [US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md) | [US Core Condition Encounter Diagnosis](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-condition-encounter-diagnosis.html) |  [ Condition](http://hl7.org/fhir/R4/condition.html) |
|  [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) | [US Core Condition Problems Health Concerns](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-condition-problems-health-concerns.html) |  [ Condition](http://hl7.org/fhir/R4/condition.html) |
| **2.1.11 Coverage** |   |   |
|  [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) | [US Core Coverage](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-coverage.html) |  [ Coverage](http://hl7.org/fhir/R4/coverage.html) |
| **2.1.12 Device** |   |   |
|  [US Quality Core Device](StructureDefinition-us-quality-core-device.md)* | — |  [ Device](http://hl7.org/fhir/R4/device.html) |
| — | [US Core Implantable Device](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-implantable-device.html) |  [ Device](http://hl7.org/fhir/R4/device.html) |
| **2.1.13 DeviceRequest** |   |   |
|  [US Quality Core Device Not Requested](StructureDefinition-us-quality-core-devicenotrequested.md) | — |  [ DeviceRequest](http://hl7.org/fhir/R4/devicerequest.html) |
|  [US Quality Core DeviceRequest](StructureDefinition-us-quality-core-devicerequest.md) | — |  [ DeviceRequest](http://hl7.org/fhir/R4/devicerequest.html) |
| **2.1.14 DeviceUseStatement** |   |   |
|  [US Quality Core DeviceUseStatement](StructureDefinition-us-quality-core-deviceusestatement.md)* | — |  [ DeviceUseStatement](http://hl7.org/fhir/R4/deviceusestatement.html) |
| **2.1.15 DiagnosticReport** |   |   |
|  [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md)  | [US Core DiagnosticReport Profile for Laboratory Results Reporting](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-diagnosticreport-lab.html) |  [ DiagnosticReport](http://hl7.org/fhir/R4/diagnosticreport.html) |
|  [US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md) | [US Core DiagnosticReport Profile for Report and Note Exchange](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-diagnosticreport-note.html) |  [ DiagnosticReport](http://hl7.org/fhir/R4/diagnosticreport.html) |
| **2.1.16 Encounter** |   |   |
|  [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) | [US Core Encounter](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-encounter.html) |  [ Encounter](http://hl7.org/fhir/R4/encounter.html) |
| **2.1.17 FamilyMemberHistory** |   |   |
|  [US Quality Core FamilyMemberHistory](StructureDefinition-us-quality-core-familymemberhistory.md) | — |  [ FamilyMemberHistory](http://hl7.org/fhir/R4/familymemberhistory.html) |
| **2.1.18 Flag** |   |   |
|  [US Quality Core Flag](StructureDefinition-us-quality-core-flag.md)* | — |  [ Flag](http://hl7.org/fhir/R4/flag.html) |
| **2.1.19 Goal** |   |   |
|  [US Quality Core Goal](StructureDefinition-us-quality-core-goal.md) | [US Core Goal](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-goal.html) |  [ Goal](http://hl7.org/fhir/R4/goal.html) |
| **2.1.20 ImagingStudy** |   |   |
|  [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md)* | — |  [ ImagingStudy](http://hl7.org/fhir/R4/imagingstudy.html) |
| **2.1.21 Immunization** |   |   |
|  [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md) | [US Core Immunization](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-immunization.html) |  [ Immunization](http://hl7.org/fhir/R4/immunization.html) |
|  [US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md) | [US Core Immunization](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-immunization.html) |  [ Immunization](http://hl7.org/fhir/R4/immunization.html) |
| **2.1.22 ImmunizationEvaluation** |   |   |
|  [US Quality Core ImmunizationEvaluation](StructureDefinition-us-quality-core-immunizationevaluation.md)* | — |  [ ImmunizationEvaluation](http://hl7.org/fhir/R4/immunizationevaluation.html) |
| **2.1.23 ImmunizationRecommendation** |   |   |
|  [US Quality Core ImmunizationRecommendation](StructureDefinition-us-quality-core-immunizationrecommendation.md)* | — |  [ ImmunizationRecommendation](http://hl7.org/fhir/R4/immunizationrecommendation.html) |
| **2.1.24 Location** |   |   |
|  [US Quality Core Location](StructureDefinition-us-quality-core-location.md) | [US Core Location](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-location.html) |  [ Location](http://hl7.org/fhir/R4/location.html) |
| **2.1.25 Medication** |   |   |
|  [US Quality Core Medication](StructureDefinition-us-quality-core-medication.md) | [US Core Medication](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-medication.html) |  [ Medication](http://hl7.org/fhir/R4/medication.html) |
| **2.1.26 MedicationAdministration** |   |   |
|  [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md) | — |  [ MedicationAdministration](http://hl7.org/fhir/R4/medicationadministration.html) |
|  [US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md) | — |  [ MedicationAdministration](http://hl7.org/fhir/R4/medicationadministration.html) |
| **2.1.27 MedicationDispense** |   |   |
|  [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md) | [US Core MedicationDispense](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-medicationdispense.html) |  [ MedicationDispense](http://hl7.org/fhir/R4/medicationdispense.html) |
|  [US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md) | [US Core MedicationDispense](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-medicationdispense.html) |  [ MedicationDispense](http://hl7.org/fhir/R4/medicationdispense.html) |
| **2.1.28 MedicationRequest** |   |   |
|  [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md) | [US Core MedicationRequest](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-medicationrequest.html) |  [ MedicationRequest](http://hl7.org/fhir/R4/medicationrequest.html) |
|  [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) | [US Core MedicationRequest](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-medicationrequest.html) |  [ MedicationRequest](http://hl7.org/fhir/R4/medicationrequest.html) |
| **2.1.29 MedicationStatement** |   |   |
|  [US Quality Core MedicationStatement](StructureDefinition-us-quality-core-medicationstatement.md)* | — |  [ MedicationStatement](http://hl7.org/fhir/R4/medicationstatement.html) |
| **2.1.30 NutritionOrder** |   |   |
|  [US Quality Core NutritionOrder](StructureDefinition-us-quality-core-nutritionorder.md)* | — |  [ NutritionOrder](http://hl7.org/fhir/R4/nutritionorder.html) |
| **2.1.31 Observation** |   |   |
|  [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) | [US Core Simple Observation](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-simple-observation.html) |  [ Observation](http://hl7.org/fhir/R4/observation.html) |
|  [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md) | — |  [ Observation](http://hl7.org/fhir/R4/observation.html) |
|  [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md)* | — |  [ Observation](http://hl7.org/fhir/R4/observation.html) |
|  [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md) | [US Core Laboratory Result Observation](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-lab.html) |  [ Observation](http://hl7.org/fhir/R4/observation.html) |
|  [US Quality Core Observation Clinical Result](StructureDefinition-us-quality-core-observation-clinical-result.md) | [US Core Observation Clinical Result](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-clinical-result.html) |  [ Observation](http://hl7.org/fhir/R4/observation.html) |
|  [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md) | [US Core Observation Screening Assessment](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-screening-assessment.html) |  [ Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Vital Signs](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-vital-signs.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Blood Pressure](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-blood-pressure.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core BMI](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-bmi.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Body Height](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-body-height.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Body Temperature](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-body-temperature.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Body Weight](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-body-weight.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Head Circumference](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-head-circumference.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Heart Rate](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-heart-rate.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Pediatric BMI for Age Observation](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-pediatric-bmi-for-age.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Pediatric Head Occipital-frontal Circumference Percentile](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-head-occipital-frontal-circumference-percentile.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Pediatric Weight for Height Observation](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-pediatric-weight-for-height.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Pulse Oximetry](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-pulse-oximetry.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Respiratory Rate](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-respiratory-rate.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Smoking Status](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-smokingstatus.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Observation Occupation](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-occupation.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Observation Sexual Orientation](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-sexual-orientation.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Observation Pregnancy Intent](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-pregnancyintent.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| — | [US Core Observation Pregnancy Status](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-pregnancystatus.html) | [Observation](http://hl7.org/fhir/R4/observation.html) |
| **2.1.32 Organization** |   |   |
|  [US Quality Core Organization](StructureDefinition-us-quality-core-organization.md) | [US Core Organization](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-organization.html) |  [ Organization](http://hl7.org/fhir/R4/organization.html) |
| **2.1.33 Patient** |   |   |
|  [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) | [US Core Patient](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-patient.html) |  [ Patient](http://hl7.org/fhir/R4/patient.html) |
| **2.1.34 Practitioner** |   |   |
|  [US Quality Core Practitioner](StructureDefinition-us-quality-core-practitioner.md) | [US Core Practitioner](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-practitioner.html) |  [ Practitioner](http://hl7.org/fhir/R4/practitioner.html) |
| **2.1.35 PractitionerRole** |   |   |
|  [US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md) | [US Core PractitionerRole](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-practitionerrole.html) |  [ PractitionerRole](http://hl7.org/fhir/R4/practitionerrole.html) |
| **2.1.36 Procedure** |   |   |
|  [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md) | [US Core Procedure](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-procedure.html) |  [ Procedure](http://hl7.org/fhir/R4/procedure.html) |
|  [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md) | [US Core Procedure](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-procedure.html) |  [ Procedure](http://hl7.org/fhir/R4/procedure.html) |
| **2.1.37 QuestionnaireResponse** |   |   |
|  [US Quality Core QuestionnaireResponse](StructureDefinition-us-quality-core-questionnaireresponse.md)* | [US Core QuestionnaireResponse](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-questionnaireresponse.html) |  [ QuestionnaireResponse](http://hl7.org/fhir/R4/questionnaireresponse.html) |
| **2.1.38 RelatedPerson** |   |   |
|  [US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md) |  [ US Core RelatedPerson](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-relatedperson.html) |  [ RelatedPerson](http://hl7.org/fhir/R4/relatedperson.html) |
| **2.1.39 ServiceRequest** |   |   |
|  [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) |  [ US Core ServiceRequest](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-servicerequest.html) |  [ ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html) |
|  [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md) |  [ US Core ServiceRequest](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-servicerequest.html) |  [ ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html) |
| **2.1.40 Specimen** |   |   |
| — | [US Core Specimen](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-specimen.html) |  [ Specimen](http://hl7.org/fhir/R4/specimen.html) |
| **2.1.41 Substance** |   |   |
|  [US Quality Core Substance](StructureDefinition-us-quality-core-substance.md)* | — |  [ Substance](http://hl7.org/fhir/R4/substance.html) |
| **2.1.42 Task** |   |   |
|  [US Quality Core Task](StructureDefinition-us-quality-core-task.md) | — |  [ Task](http://hl7.org/fhir/R4/task.html) |
|  [US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md) | — |  [ Task](http://hl7.org/fhir/R4/task.html) |

### Referencing US Quality Core Profiles

There are a number of US Quality Core profiles inherited directly from US Core profiles, if any, or other FHIR resources (i.e. US Core Implantable Device Profile, FHIR Vital Signs, US Core Smoking Status etc.) and the underlying Reference elements can address the US Core or FHIR profiles for the items referenced. For any other references to base FHIR resources or not formally defined in a US Quality Core Profile, the referenced resource **SHALL** be a US Quality Core Profile if a US Quality Core Profile exists for the resource type. For example, US Core Smoking Status references US Core Patient profile, the reference to Patient **SHALL** be a valid US Quality Core Patient.

Note to Implementers: US Quality Core profiles have been developed with the principle that if the profiles only need to provide references to US Quality Core Profiles, that is insufficient to require individual US Quality Core profiles for all US Core profiles. There are edge cases using this approach where the FHIR validator would not validate an assumption made by the measure author, such as that an encounter traced through an observation is a US Quality Core Encounter. We think that general validation of all the resources provided to the context of a measure evaluation can address that risk without the need for deriving specific profiles that only constrain reference types. We seek feedback on this point.

This change will strengthen the requirement to use a US Quality Core profile when using a base FHIR or US Core profile not formally defined in US Quality Core and to use US Quality Core profiles as referenced resources if a US Quality Core Profile exists for that resource.

