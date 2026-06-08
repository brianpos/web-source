# AllergyIntolerance example - 2026 US Quality Core Implementation Guide v0.5.0

## Example AllergyIntolerance: AllergyIntolerance example

Profile: [US Quality Core AllergyIntolerance](StructureDefinition-us-quality-core-allergyintolerance.md)

**identifier**: `http://acme.com/ids/patients/risks`/49476534

**clinicalStatus**: Active

**verificationStatus**: Confirmed

**type**: Allergy

**category**: Food

**criticality**: High Risk

**code**: Cashew nuts

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**onset**: 2004

**recordedDate**: 2014-10-09 14:58:00+1100

**recorder**: [Practitioner Adam Careful ](Practitioner-example.md)

**asserter**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**lastOccurrence**: 2012-06-02 01:45:31+0000

**note**: 

> 

The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract.


> **reaction****substance**: cashew nut allergenic extract Injectable Product**manifestation**: Anaphylactic reaction**description**: Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered**onset**: 2012-06-12**severity**: Severe**exposureRoute**: Subcutaneous route

> **reaction****manifestation**: Urticaria**onset**: 2004**severity**: Moderate**note**: 
> 

The patient reports that the onset of urticaria was within 15 minutes of eating cashews.





## Resource Content

```json
{
  "resourceType" : "AllergyIntolerance",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-allergyintolerance"]
  },
  "identifier" : [{
    "system" : "http://acme.com/ids/patients/risks",
    "value" : "49476534"
  }],
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
      "code" : "active"
    }]
  },
  "verificationStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
      "code" : "confirmed"
    }]
  },
  "type" : "allergy",
  "category" : ["food"],
  "criticality" : "high",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "227493005",
      "display" : "Cashew nuts"
    }]
  },
  "patient" : {
    "reference" : "Patient/example"
  },
  "onsetDateTime" : "2004",
  "recordedDate" : "2014-10-09T14:58:00+11:00",
  "recorder" : {
    "reference" : "Practitioner/example"
  },
  "asserter" : {
    "reference" : "Patient/example"
  },
  "lastOccurrence" : "2012-06-02T01:45:31+00:00",
  "note" : [{
    "text" : "The criticality is high becasue of the observed anaphylactic reaction when challenged     with cashew extract."
  }],
  "reaction" : [{
    "substance" : {
      "coding" : [{
        "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code" : "1160593",
        "display" : "cashew nut allergenic extract Injectable Product"
      }]
    },
    "manifestation" : [{
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "39579001",
        "display" : "Anaphylactic reaction"
      }]
    }],
    "description" : "Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered",
    "onset" : "2012-06-12",
    "severity" : "severe",
    "exposureRoute" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "34206005",
        "display" : "Subcutaneous route"
      }]
    }
  },
  {
    "manifestation" : [{
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "64305001",
        "display" : "Urticaria"
      }]
    }],
    "onset" : "2004",
    "severity" : "moderate",
    "note" : [{
      "text" : "The patient reports that the onset of urticaria was within 15 minutes of eating cashews."
    }]
  }]
}

```
