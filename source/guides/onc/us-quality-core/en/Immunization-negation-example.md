# Immunization negation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Immunization: Immunization negation example

Profile: [US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md)

**status**: Not Done

**statusReason**: Drug declined by patient

**vaccineCode**: Not Done Value Set: Influenza vaccine (Not done value set: [Influenza Immunization Administered](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.526.3.1254/expansion))

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**occurrence**: 2013-01-10

**recorded**: 2013-01-10

**primarySource**: true



## Resource Content

```json
{
  "resourceType" : "Immunization",
  "id" : "negation-example",
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
    "extension" : [{
      "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-notDoneValueSet",
      "valueCanonical" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.526.3.1254"
    }],
    "text" : "Not Done Value Set: Influenza vaccine"
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
