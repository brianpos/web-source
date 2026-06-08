# US Quality Core Terminology - 2026 US Quality Core Implementation Guide v0.5.0

## US Quality Core Terminology

This page lists all the ValueSets, CodeSystems, and ConceptMaps defined as part of the US Quality Core Implementation Guide. For more information on using codes in resources, see the [guidance section](http://hl7.org/fhir/us/core/STU6.1/guidance.html#using-codes-in-us-core-profiles) as well as in the [FHIR specification](http://hl7.org/fhir/terminologies.html).

Further guidance on using Value Set Authority Center (VSAC) Resources with FHIR® Terminology Service can be found [here.](http://hl7.org/fhir/us/core/STU6.1/terminology.html#using-value-set-authority-center-vsac)

### Value Set Resources

These value sets have been defined for this implementation guide.

| | |
| :--- | :--- |
| [USQualityCore SNOMED CT Dosage Codes](ValueSet-us-quality-core-medication-dose-type.md) | This value set includes all the "Dosages" SNOMED CT codes (i.e. codes with an is-a relationship with 277406006: Dosages). |
| [USQualityCore Negation Reason Codes](ValueSet-us-quality-core-negation-reason.md) | This value set defines the set of codes that can be used to indicate the reason an action was not taken |
| [Non-Negative Event Status](ValueSet-us-quality-core-non-negative-event-status.md) | This value set defines the set of codes that indicate a non-negated event status (i.e. codes that are not `not-done`) |
| [Non-Negative Immunization Status](ValueSet-us-quality-core-non-negative-immunization-status.md) | This value set defines the set of codes that indicate a non-negated event status for immunization resources (i.e. codes that are not `not-done`) |
| [Non-Negative MedicationAdministration Status](ValueSet-us-quality-core-non-negative-medication-admin-status.md) | This value set defines the set of codes that indicate a non-negated medication administration status (i.e. codes that are not `not-done`) |
| [Non-Negative MedicationDispense Status](ValueSet-us-quality-core-non-negative-medicationdispense-status.md) | This value set defines the set of codes that indicate a non-negated medication dispense status (i.e. codes that are not `declined`) |
| [Non-Negative Observation Status](ValueSet-us-quality-core-non-negative-observation-status.md) | This value set defines the set of codes that indicate a non-negated observation status (i.e. codes that are not `cancelled`) |
| [Non-Negative Task Status](ValueSet-us-quality-core-non-negative-task-status.md) | This value set defines the set of codes that indicate a non-negated task status (i.e. codes that are not `rejected`) |
| [US Quality Core Observation Body Position](ValueSet-us-quality-core-observation-body-position.md) | SNOMED CT code system values descending from the following:'body position finding' 9851009 |
| [USQualityCore Present On Admission Codes](ValueSet-us-quality-core-present-on-admission.md) | Value Set for USQualityCore Present On Admission. |

### CodeSystem Resources

See the [FHIR terminology section](http://hl7.org/fhir/terminologies-systems.html) for a complete discussion on code systems and a list of codes system names used in FHIR. The following additional names (URIs) have been identified for this implementation guide.

**Code systems published in this IG**

|
|

