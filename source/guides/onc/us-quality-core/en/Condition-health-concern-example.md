# Condition Problems Health Concerns example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Condition: Condition Problems Health Concerns example

Profile: [US Quality Core Condition Problems Health Concerns](StructureDefinition-us-quality-core-condition-problems-health-concerns.md)

**Condition Asserted Date**: 2007-12-14

**clinicalStatus**: Resolved

**verificationStatus**: Confirmed

**category**: Health Concern

**severity**: Mild

**code**: Fear of becoming fat

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**onset**: 2007-12-14

**abatement**: 2008-02-01

**recordedDate**: 2007-12-14 07:15:07-0800



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "health-concern-example",
  "meta" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/instance-name",
      "valueString" : "Health Concern Example"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/instance-description",
      "valueMarkdown" : "This example of a US Quality Core Condition Problems and Health Concerns Profile illustrates its use to capture information about a patient's health concern."
    }],
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-condition-problems-health-concerns"]
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/condition-assertedDate",
    "valueDateTime" : "2007-12-14"
  }],
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "code" : "resolved",
      "display" : "Resolved"
    }],
    "text" : "Resolved"
  },
  "verificationStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-ver-status",
      "code" : "confirmed",
      "display" : "Confirmed"
    }],
    "text" : "Confirmed"
  },
  "category" : [{
    "coding" : [{
      "system" : "http://hl7.org/fhir/us/core/CodeSystem/condition-category",
      "code" : "health-concern",
      "display" : "Health Concern"
    }],
    "text" : "Health Concern"
  }],
  "severity" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "255604002",
      "display" : "Mild (qualifier value)"
    }],
    "text" : "Mild"
  },
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "247824007",
      "display" : "Fear of becoming fat"
    }],
    "text" : "Fear of becoming fat"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "onsetDateTime" : "2007-12-14",
  "abatementDateTime" : "2008-02-01",
  "recordedDate" : "2007-12-14T07:15:07-08:00"
}

```
