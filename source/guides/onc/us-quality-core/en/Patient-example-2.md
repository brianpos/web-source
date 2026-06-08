# 65+ Female patient example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Patient: 65+ Female patient example

Profile: [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md)

Sarah Hugankiss (official) Female, DoB: 1946-09-25 ( Social Security number (use: usual, period: 1995-05-06 --> (ongoing)))

-------

| | | | |
| :--- | :--- | :--- | :--- |
| Active: | true | Deceased: | false |
| Contact Detail | * ph: (202) 212 1212(Mobile)
* 1600 Pennslyvania Ave(home)
 | | |
| Next-of-Kin: | * Bénédicte du Marché (Female)
* 534 Erewhon St PleasantVille VT 3999 (home)
* [+33 (237) 998327](tel:+33(237)998327)
* Valid Period:2012 --> (ongoing)
 | | |
| Links: | * Managing Organization: [Organization Health Level Seven International](Organization-example.md)
 | | |



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "example-2",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
  },
  "identifier" : [{
    "use" : "usual",
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code" : "SS"
      }]
    },
    "system" : "http://hl7.org/fhir/sid/us-ssn",
    "value" : "999123457",
    "period" : {
      "start" : "1995-05-06"
    },
    "assigner" : {
      "display" : "Acme Healthcare"
    }
  }],
  "active" : true,
  "name" : [{
    "use" : "official",
    "family" : "Hugankiss",
    "given" : ["Sarah"]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "(202) 212 1212",
    "use" : "mobile",
    "rank" : 1
  }],
  "gender" : "female",
  "birthDate" : "1946-09-25",
  "_birthDate" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
      "valueDateTime" : "1946-09-25T14:35:45-05:00"
    }]
  },
  "deceasedBoolean" : false,
  "address" : [{
    "use" : "home",
    "type" : "both",
    "text" : "1600 Pennslyvania Ave",
    "line" : ["1600 Pennslyvania Ave"],
    "city" : "Washington DC",
    "state" : "DC",
    "postalCode" : "20500",
    "period" : {
      "start" : "1946-12-25"
    }
  }],
  "contact" : [{
    "relationship" : [{
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0131",
        "code" : "N"
      }]
    }],
    "name" : {
      "family" : "du Marché",
      "_family" : {
        "extension" : [{
          "url" : "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
          "valueString" : "VV"
        }]
      },
      "given" : ["Bénédicte"]
    },
    "telecom" : [{
      "system" : "phone",
      "value" : "+33 (237) 998327"
    }],
    "address" : {
      "use" : "home",
      "type" : "both",
      "line" : ["534 Erewhon St"],
      "city" : "PleasantVille",
      "district" : "Rainbow",
      "state" : "VT",
      "postalCode" : "3999",
      "period" : {
        "start" : "1974-12-25"
      }
    },
    "gender" : "female",
    "period" : {
      "start" : "2012"
    }
  }],
  "managingOrganization" : {
    "reference" : "Organization/example"
  }
}

```
