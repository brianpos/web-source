# USCDI+ Quality - 2026 US Quality Core Implementation Guide v0.5.0

## USCDI+ Quality

**USCDI+ Quality** is part of the [USCDI+ initiative](https://www.healthit.gov/topic/interoperability/uscdi-plus). The USCDI+ initiative supports the identification and establishment of domain- or program-specific data element lists that operate as extensions to the existing USCDI data element list.

USCDI+ Quality is intended to improve healthcare interoperability across quality programs by establishing a consistent baseline of harmonized data elements for a wide range of quality measurement and reporting use cases. The USCDI+ Quality data element list serves as a baseline dataset to support digital quality measurement and reporting across the healthcare ecosystem.

USCDI+ Quality includes [two data element lists](https://uscdiplus.healthit.gov/uscdiplus/en/announcing-the-release-of-uscdi-quality-version-1-january-2026?id=kb_article&sys_id=9ee9383c87f6fe108edc42e50cbb350b).

1. **Final USCDI+ Quality V1**: The USCDI+ Quality V1 data element list focuses on data elements that are standardized, ready for implementation, and directly support electronic clinical quality measures. This list will serve as the basis for developing implementation guidance for health IT systems.
1. **Quality Overarching**: Like USCDI, the USCDI+ Quality framework includes data classes and elements that are not yet part of USCDI+ Quality V1 but are under consideration for future inclusion. The Quality Overarching data element list tracks all quality-relevant data elements identified across selected programs and captures a wider range of data elements identified through community input that may be included in a future version of USCDI+ Quality.Content in the Overarching USCDI+ Quality data element list is outside the scope of this guide. However, implementers and partners are encouraged to review these emerging data elements and provide feedback through the [USCDI+ platform](https://uscdiplus.healthit.gov/uscdiplus) to help shape the development of future USCDI+ Quality versions.

### USCDI+ Quality V1 and US Quality Core Implementation Guide

**USCDI+ Quality V1** defines high-level data requirements, and the **US Quality Core Implementation Guide** provides detailed FHIR-based profiles to meet those requirements. This guidance is necessary to achieve interoperability and consistency in quality-related healthcare data exchange in the United States, given the flexibility of the FHIR standard in representing this data.

The US Quality Core Implementation Guide v0.5.0 is derived from the [QI-Core 6.0.0](https://hl7.org/fhir/us/qicore/STU6/), adopting its profiles and annotating them with specific requirements for USCDI+ Quality V1. It also defines specific expectations through [CapabilityStatements](capability-statements.md) for accessing the data over a standard FHIR RESTful API.

Note that:

* USCDI+ Quality V1 data class and element names may differ from the US Quality Core profile and element names.
* Not every USCDI+ Quality V1 data class and element maps to a single US Quality Core profile.

Additionally, this implementation guide's conformance requirements with respect to USCDI+ Quality V1 are limited to:

* Data elements that align with existing QI-Core 6.0.0 or US Core 6.1.0 profiles, and
* Data elements used by the 2026 draft CMS eCQMs, which are based on QI-Core 6.0.0.

Data elements that do not clearly fit within these limitations above are out of scope for this version's conformance requirements. The tables included in [section 3.1.2](uscdiquality.md#in-scope-uscdi-quality-v1-data-elements) and [section 3.1.3](uscdiquality.md#out-of-scope-uscdi-quality-v1-data-elements) below describe which USCDI+ Quality V1 data elements are in scope and which are out of scope for conformance requirements of this version of the guide.

### In-Scope USCDI+ Quality V1 Data Elements

Only those USCDI+ Quality V1 data classes and elements that are required to be implemented for conformance to this guide are included in this mapping table.

* In scope elements are determined by their support in the current USCDI+ Quality V1 baseline, which includes USCDI v3.1, US Core 6.1.0, and/or QI-Core 6.0.0.
* In scope elements also include data elements that are used by 2026 draft CMS eCQMs, which are based on QI-Core 6.0.0.

The mapping table identifies any US Quality Core profiles defined in this guide and any US Core 6.1.0 profiles that apply to each USCDI+ Quality V1 data class or element. If neither column references a profile, this guide does not identify a specific profile for representing that element in this version; implementers may determine the appropriate implementation approach to support the data element.

| | | |
| :--- | :--- | :--- |
|     •Adverse Event | [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md) |  |
|     •Adverse Event Category | [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md) |  |
|     •Adverse Event Recorded Time | [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md) |  |
|     •Adverse Event Suspect Entity | [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md) |  |
|     •Allergy Intolerance Onset Time | [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md) |  |
|     •Allergy Intolerance Recorded Date | [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md) |  |
|     •Drug Class Allergy Intolerance | [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md) |  |
|     •Medication Allergy Intolerance | [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md) |  |
|     •Reaction | [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md) |  |
|     •Reaction Date | [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md) |  |
|     •Care Team Member Identifier | [US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md)[US Quality Core Practitioner](StructureDefinition-us-quality-core-practitioner.md)[US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md) |  |
|     •Care Team Member Location | [US Quality Core Practitioner](StructureDefinition-us-quality-core-practitioner.md)[US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md)[US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md) |  |
|     •Care Team Member Name | [US Quality Core Practitioner](StructureDefinition-us-quality-core-practitioner.md)[US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md)[US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md) |  |
|     •Care Team Member Role | [US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md)[US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md)[US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md) |  |
|     •Care Team Member Telecom | [US Quality Core Practitioner](StructureDefinition-us-quality-core-practitioner.md)[US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md)[US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md) |  |
|     •Consultation Note |  | [US Core DocumentReference Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-documentreference.html) |
|     •Discharge Summary Note |  | [US Core DocumentReference Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-documentreference.html) |
|     •History & Physical |  | [US Core DocumentReference Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-documentreference.html) |
|     •Procedure Note | [US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md) |  |
|     •Progress Note |  | [US Core DocumentReference Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-documentreference.html) |
|     •Clinical Test | [US Quality Core Observation Clinical Result](StructureDefinition-us-quality-core-observation-clinical-result.md)[US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md) |  |
|     •Clinical Test Result/Report | [US Quality Core Observation Clinical Result](StructureDefinition-us-quality-core-observation-clinical-result.md)[US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md) |  |
|     •Clinical Test Status | [US Quality Core Observation Clinical Result](StructureDefinition-us-quality-core-observation-clinical-result.md)[US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md) |  |
|     •Diagnostic Imaging Report | [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md)[US Quality Core Observation Clinical Result](StructureDefinition-us-quality-core-observation-clinical-result.md) |  |
|     •Diagnostic Imaging Test | [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md)[US Quality Core Observation Clinical Result](StructureDefinition-us-quality-core-observation-clinical-result.md) |  |
|     •Diagnosis Rank [(see note)](#encounter-information-diagnosis-rank) |  |  |
|     •Encounter Diagnosis | [US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md)[US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) |  |
|     •Encounter Diagnosis Role | [US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md) |  |
|     •Encounter Disposition | [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) |  |
|     •Encounter Identifier | [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) |  |
|     •Encounter Location | [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) |  |
|     •Encounter Status | [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) |  |
|     •Encounter Time | [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) |  |
|     •Encounter Type | [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) |  |
|     •Present on Admission [(see note)](#encounter-information-present-on-admission) | [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) |  |
|     •Facility Address | [US Quality Core Location](StructureDefinition-us-quality-core-location.md) |  |
|     •Facility Name | [US Quality Core Location](StructureDefinition-us-quality-core-location.md) |  |
|     •Facility Type | [US Quality Core Location](StructureDefinition-us-quality-core-location.md) |  |
|     •Family Health History | [US Quality Core FamilyMemberHistory](StructureDefinition-us-quality-core-familymemberhistory.md) |  |
|     •Patient Goals | [US Quality Core Goal](StructureDefinition-us-quality-core-goal.md) |  |
|     •SDOH Goals | [US Quality Core Goal](StructureDefinition-us-quality-core-goal.md) |  |
|     •Coverage Period | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Coverage Status | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Coverage Type | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Group Identifier | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Health Insurance Beneficiary | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Insurance Plan Name | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Member Identifier | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Payer Identifier | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md)[US Quality Core Organization](StructureDefinition-us-quality-core-organization.md) |  |
|     •Plan Identifier | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Relationship to Subscriber | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Subscriber Identifier | [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) |  |
|     •Disability Status | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)[US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md)[US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md)[US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Functional Status | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)[US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md)[US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md)[US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Health Concerns | [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Mental/Cognitive Status | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)[US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md)[US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md)[US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Nutrition Assessment | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)[US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md)[US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md)[US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Pregnancy Status |  | [US Core Observation Pregnancy Intent Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-pregnancyintent.html)[US Core Observation Pregnancy Status Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-pregnancystatus.html) |
|     •SDOH Assessment | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md)[US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md)[US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md)[US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Smoking Status |  | [US Core Smoking Status Observation Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-smokingstatus.html) |
|     •Immunization Record Source | [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md) |  |
|     •Immunization Status | [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md) |  |
|     •Immunizations | [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md) |  |
|     •Reason Not Performed | [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md)[US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md) |  |
|     •Vaccination Administration Date | [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md) |  |
|     •Laboratory Result Report Date Time | [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md)[US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md) |  |
|     •Result Interpretation | [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md) |  |
|     •Result Status | [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md)[US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md) |  |
|     •Result Unit of Measure | [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md)[US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md) |  |
|     •Specimen Type |  | [US Core Specimen Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-specimen.html) |
|     •Tests | [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md)[US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md) |  |
|     •Values/Results | [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md)[US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md) |  |
|     •Device Type | [US Quality Core DeviceRequest](StructureDefinition-us-quality-core-devicerequest.md)[US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)[US Quality Core Device Not Requested](StructureDefinition-us-quality-core-devicenotrequested.md)[US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) |  |
|     •Date Medication Administered | [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md) |  |
|     •Date Medication Prescribed | [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) |  |
|     •Days Supply | [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md)[US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) |  |
|     •Dispense Status | [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md)[US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md) |  |
|     •Dose | [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md)[US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md)[US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md) |  |
|     •Dose unit of measure | [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md)[US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md)[US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md) |  |
|     •Indication | [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) |  |
|     •Medication Administration Status | [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md)[US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md) |  |
|     •Medication Instructions | [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md)[US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md)[US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md) |  |
|     •Medication Order | [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) |  |
|     •Medication Quantity | [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md)[US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) |  |
|     •Medications | [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md)[US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md)[US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md)[US Quality Core Medication](StructureDefinition-us-quality-core-medication.md) |  |
|     •Reason Not Performed | [US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md)[US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md)[US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md) |  |
|     •Birth Outcome | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Birth Time | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Birth Weight | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Gestational Age at Delivery | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Medication Order | [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) |  |
|     •Current Address | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Date of Birth | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Date of Death | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Email Address | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Ethnicity | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •First Name | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Last Name | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Middle Name (Including middle initial) | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Name Suffix | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Occupation |  | [US Core Observation Occupation Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-occupation.html) |
|     •Occupation Industry |  | [US Core Observation Occupation Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-occupation.html) |
|     •Patient Identifier | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Phone Number | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Phone Number Type | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Preferred Language | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Previous Address | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Previous Name | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Race | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Related Person's Name | [US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md) |  |
|     •Relationship Type | [US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md) |  |
|     •Tribal Affiliation | [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) |  |
|     •Assessment and Plan of Treatment | [US Quality Core CarePlan](StructureDefinition-us-quality-core-careplan.md) |  |
|     •Delivery Procedures | [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md)[US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md) |  |
|     •Delivery Time | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Estimated Date of Delivery | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Fetal Presentation | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Gestational Age | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Gravidity | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Parity | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Pregnancy Outcomes | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Preterm Births | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Term Births | [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) |  |
|     •Clinical Status | [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Condition Verification Status | [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Date of Diagnosis | [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md)[US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md) |  |
|     •Date of Onset | [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md)[US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md) |  |
|     •Date of Resolution | [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Problems | [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •SDOH Problems/Health Concerns | [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) |  |
|     •Performance Time | [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md)[US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md)[US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md)[US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)[US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md) |  |
|     •Procedure Reason Code | [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md)[US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)[US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)[US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md)[US Quality Core Task](StructureDefinition-us-quality-core-task.md)[US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md) |  |
|     •Procedure Status | [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md)[US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md) |  |
|     •Procedure Type | [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)[US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md) |  |
|     •Procedures [(see note)](#procedures-procedures) | [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md)[US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)[US Quality Core Task](StructureDefinition-us-quality-core-task.md)[US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md) |  |
|     •Reason for Referral | [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md)[US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)[US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)[US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) |  |
|     •SDOH Interventions | [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md)[US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)[US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)[US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) |  |
|     •Author Organization |  | [US Core Provenance Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-provenance.html) |
|     •Author Time Stamp |  | [US Core Provenance Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-provenance.html) |
|     •Reason for Referral | [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md) |  |
|     •Referral Status | [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)[US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) |  |
|     •Referral Time | [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)[US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) |  |
|     •Average Blood Pressure |  | [US Core Blood Pressure Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-blood-pressure.html) |
|     •BMI |  | [US Core BMI Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-bmi.html) |
|     •BMI Percentile (2 - 20 years) |  | [US Core Pediatric BMI for Age Observation Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-pediatric-bmi-for-age.html) |
|     •Body Height |  | [US Core Body Height Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-body-height.html) |
|     •Body Temperature |  | [US Core Body Temperature Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-body-temperature.html) |
|     •Body Weight |  | [US Core Body Weight Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-body-weight.html) |
|     •Diastolic Blood Pressure |  | [US Core Blood Pressure Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-blood-pressure.html) |
|     •Head Occipital-frontal Circumference Percentile (Birth - 36 Months) |  | [US Core Pediatric Head Occipital Frontal Circumference Percentile Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-head-occipital-frontal-circumference-percentile.html) |
|     •Heart Rate |  | [US Core Heart Rate Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-heart-rate.html) |
|     •Inhaled Oxygen Concentration |  | [US Core Pulse Oximetry Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-pulse-oximetry.html) |
|     •Pain Severity | [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md) |  |
|     •Pulse Oximetry |  | [US Core Pulse Oximetry Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-pulse-oximetry.html) |
|     •Respiratory Rate |  | [US Core Respiratory Rate Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-respiratory-rate.html) |
|     •Systolic Blood Pressure |  | [US Core Blood Pressure Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-blood-pressure.html) |
|     •Weight-for-length Percentile (Birth - 24 Months) |  | [US Core Pediatric Weight for Height Observation Profile (6.1.0)](https://hl7.org/fhir/us/core/STU6.1/StructureDefinition-pediatric-weight-for-height.html) |

#### Notes

##### Encounter Information: Diagnosis Rank

In QI-Core 6.0.0, information about principal diagnosis is represented using the Claim profile. In US Quality Core v0.5.0, support for the Claim profile is not required for conformance. Implementers may determine the appropriate implementation approach to support this USCDI+ Quality data element. We encourage the quality community to provide additional input on information needed to support quality measurement use cases through the HL7 ballot process for US Quality Core.

##### Encounter Information: Present on Admission

In QI-Core 6.0.0, information about present on admission is represented using the Claim profile. In US Quality Core v0.5.0, support for the Claim profile is not required for conformance. We have reintroduced the Present on Admission extension for Encounter.diagnosis in US Quality Core v0.5.0 and it is (USCDI+ Quality) tagged.

##### Procedures: Procedures

In QI-Core 6.0.0, information about principal procedure is represented using the Claim profile. In US Quality Core v0.5.0, support for the Claim profile is not required for conformance. Implementers may determine the appropriate implementation approach to support this USCDI+ Quality data element. We encourage the quality community to provide additional input on information needed to support quality measurement use cases through the HL7 ballot process for US Quality Core.

### Out-of-Scope USCDI+ Quality V1 Data Elements

The following data elements in USCDI+ Quality V1 are out of scope for the conformance expectations of this guide. Data elements listed here may map to newer published versions of QI-Core or US Core, and the applicable versions are indicated in parentheses next to the profile.

USCDI+ Quality V1 elements that do not have a mapping in the table below indicate those elements are not identified as mandatory or Must Support, or tagged (QI), (QI-Core), or "Additional USCDI" in any of the newer versions of QI-Core or US Core, including QI-Core 7.0.2 and 8.0.0-ballot, US Core 7.0.0, 8.0.1, and 9.0.0.

| | | |
| :--- | :--- | :--- |
|     •Advance Directive Observation |  | [US Core Observation ADI Documentation Profile (8.0.1)](https://hl7.org/fhir/us/core/STU8.0.1/StructureDefinition-us-core-observation-adi-documentation.html)[US Core ADI DocumentReference Profile (8.0.1)](https://hl7.org/fhir/us/core/STU8.0.1/StructureDefinition-us-core-adi-documentreference.html) |
|     •Adverse Event Degree of Harm | [QICore AdverseEvent (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-adverseevent.html) |  |
|     •Non-Medication Allergy Intolerance | [QICore AllergyIntolerance (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-allergyintolerance.html) |  |
|     •Diagnostic Imaging Reference |  |  |
|     •Facility Identifier | [QICore Location (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-location.html) |  |
|     •Care Experience Preference |  | [US Core Care Experience Preference Profile (7.0.0)](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-care-experience-preference.html) |
|     •Treatment Intent |  | [US Core Treatment Intervention Preference Profile (7.0.0)](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-treatment-intervention-preference.html) |
|     •Treatment Intervention Preference |  | [US Core Treatment Intervention Preference Profile (7.0.0)](https://hl7.org/fhir/us/core/STU7/StructureDefinition-us-core-treatment-intervention-preference.html) |
|     •Alcohol Use | [QICore Simple Observation (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-simple-observation.html)[QICore Observation Screening Assessment (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-observation-screening-assessment.html)[QICore Condition Problems Health Concerns (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-condition-problems-health-concerns.html) |  |
|     •Physical Activity | [QICore Simple Observation (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-simple-observation.html)[QICore Observation Screening Assessment (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-observation-screening-assessment.html)[QICore Condition Problems Health Concerns (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-condition-problems-health-concerns.html) |  |
|     •Substance Use | [QICore Simple Observation (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-simple-observation.html)[QICore Observation Screening Assessment (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-observation-screening-assessment.html)[QICore Condition Problems Health Concerns (7.0.2)](https://hl7.org/fhir/us/qicore/STU7.0.2/StructureDefinition-qicore-condition-problems-health-concerns.html) |  |
|     •Specimen Collection Date Time |  |  |
|     •Unique Device Identifier (UDI) |  | [US Core Device Profile (9.0.0)](https://hl7.org/fhir/us/core/STU9/StructureDefinition-us-core-device.html) |
|     •Advance Directive Observation |  | [US Core Observation ADI Documentation Profile (8.0.1)](https://hl7.org/fhir/us/core/STU8.0.1/StructureDefinition-us-core-observation-adi-documentation.html)[US Core ADI DocumentReference Profile (8.0.1)](https://hl7.org/fhir/us/core/STU8.0.1/StructureDefinition-us-core-adi-documentreference.html) |
|     •Author |  | [US Core Provenance Profile (8.0.1)](https://hl7.org/fhir/us/core/STU8.0.1/StructureDefinition-us-core-provenance.html) |
|     •Author Role |  | [US Core Provenance Profile (8.0.1)](https://hl7.org/fhir/us/core/STU8.0.1/StructureDefinition-us-core-provenance.html) |
|     •Nutritional Reason |  |  |
|     •Nutrition Order |  |  |

### Summary List of In-Scope Profiles for Conformance

US Quality Core is derived from QI-Core v6.0.0 and includes inherited copies of all QI-Core profiles, regardless of whether they are applicable to USCDI+ Quality V1. Per the [conformance expectations](general-requirements.md) and the [capability statements](capability-statements.md) in this guide, only US Quality Core profiles that include at least one USCDI+ Quality–flagged element (as defined in [Must Support](must-support.md)) are in scope for conformance and SHALL be supported.

The following profiles include at least one USCDI+ Quality–flagged element and **SHALL** be supported:

*  [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md) 
*  [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md) 
*  [US Quality Core CarePlan](StructureDefinition-us-quality-core-careplan.md) 
*  [US Quality Core CareTeam](StructureDefinition-us-quality-core-careteam.md) 
*  [US Quality Core Condition Encounter Diagnosis](StructureDefinition-us-quality-core-condition-encounter-diagnosis.md) 
*  [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md) 
*  [US Quality Core Coverage](StructureDefinition-us-quality-core-coverage.md) 
*  [US Quality Core Device Not Requested](StructureDefinition-us-quality-core-devicenotrequested.md) 
*  [US Quality Core DeviceRequest](StructureDefinition-us-quality-core-devicerequest.md) 
*  [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md) 
*  [US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md) 
*  [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md) 
*  [US Quality Core FamilyMemberHistory](StructureDefinition-us-quality-core-familymemberhistory.md) 
*  [US Quality Core Goal](StructureDefinition-us-quality-core-goal.md) 
*  [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md) 
*  [US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md) 
*  [US Quality Core Laboratory Result Observation](StructureDefinition-us-quality-core-observation-lab.md) 
*  [US Quality Core Location](StructureDefinition-us-quality-core-location.md) 
*  [US Quality Core Medication](StructureDefinition-us-quality-core-medication.md) 
*  [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md) 
*  [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md) 
*  [US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md) 
*  [US Quality Core MedicationDispense](StructureDefinition-us-quality-core-medicationdispense.md) 
*  [US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md) 
*  [US Quality Core MedicationRequest](StructureDefinition-us-quality-core-medicationrequest.md) 
*  [US Quality Core Observation Cancelled](StructureDefinition-us-quality-core-observationcancelled.md) 
*  [US Quality Core Observation Clinical Result](StructureDefinition-us-quality-core-observation-clinical-result.md) 
*  [US Quality Core Observation Screening Assessment](StructureDefinition-us-quality-core-observation-screening-assessment.md) 
*  [US Quality Core Organization](StructureDefinition-us-quality-core-organization.md) 
*  [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md) 
*  [US Quality Core Practitioner](StructureDefinition-us-quality-core-practitioner.md) 
*  [US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md) 
*  [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md) 
*  [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md) 
*  [US Quality Core RelatedPerson](StructureDefinition-us-quality-core-relatedperson.md) 
*  [US Quality Core Service Not Requested](StructureDefinition-us-quality-core-servicenotrequested.md) 
*  [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md) 
*  [US Quality Core Simple Observation](StructureDefinition-us-quality-core-simple-observation.md) 
*  [US Quality Core Task](StructureDefinition-us-quality-core-task.md) 
*  [US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md) 

### Summary List of Out-of-Scope Profiles for Conformance

Some profiles in this guide are inherited from QI-Core v6.0.0 but do not include any USCDI+ Quality–flagged elements (as defined in [Must Support](must-support.md)). These profiles are out-of-scope for USCDI+ Quality V1 conformance but are included to ease adoption for systems that currently support QI-Core v6.0.0.

The following profiles do not include any USCDI+ Quality–flagged elements and **MAY** be supported:

*  [US Quality Core BodyStructure](StructureDefinition-us-quality-core-bodystructure.md) 
*  [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md) 
*  [US Quality Core ClaimResponse](StructureDefinition-us-quality-core-claimresponse.md) 
*  [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md) 
*  [US Quality Core Communication Not Done](StructureDefinition-us-quality-core-communicationnotdone.md) 
*  [US Quality Core CommunicationRequest](StructureDefinition-us-quality-core-communicationrequest.md) 
*  [US Quality Core Device](StructureDefinition-us-quality-core-device.md) 
*  [US Quality Core DeviceUseStatement](StructureDefinition-us-quality-core-deviceusestatement.md) 
*  [US Quality Core Flag](StructureDefinition-us-quality-core-flag.md) 
*  [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md) 
*  [US Quality Core ImmunizationEvaluation](StructureDefinition-us-quality-core-immunizationevaluation.md) 
*  [US Quality Core ImmunizationRecommendation](StructureDefinition-us-quality-core-immunizationrecommendation.md) 
*  [US Quality Core MedicationStatement](StructureDefinition-us-quality-core-medicationstatement.md) 
*  [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md) 
*  [US Quality Core NutritionOrder](StructureDefinition-us-quality-core-nutritionorder.md) 
*  [US Quality Core QuestionnaireResponse](StructureDefinition-us-quality-core-questionnaireresponse.md) 
*  [US Quality Core Substance](StructureDefinition-us-quality-core-substance.md) 

