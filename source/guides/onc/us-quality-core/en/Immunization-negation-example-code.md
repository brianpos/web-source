# Immunization negation with code example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Immunization: Immunization negation with code example

Profile: [US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md)

**status**: Not Done

**statusReason**: Drug declined by patient

**vaccineCode**: Influenza Vaccine A

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**occurrence**: 2013-01-10

**recorded**: 2013-01-10

**primarySource**: true



## Resource Content

```json
{
  "resourceType" : "Immunization",
  "id" : "negation-example-code",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunizationnotdone"]
  },
  "status" : "not-done",
  "statusReason" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "182895007",
      "display" : "Drug declined by patient"
    }]
  },
  "vaccineCode" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/sid/cvx",
      "code" : "160",
      "display" : "Influenza A monovalent (H5N1), adjuvanted, National stockpile 2013"
    }],
    "text" : "Influenza Vaccine A"
  },
  "patient" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "occurrenceDateTime" : "2013-01-10",
  "recorded" : "2013-01-10",
  "primarySource" : true
}

```
