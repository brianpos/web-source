# Patient example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Patient: Patient example

Profile: [US Quality Core Patient](StructureDefinition-us-quality-core-patient.md)

Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))

-------

| | | | |
| :--- | :--- | :--- | :--- |
| Active: | true | Deceased: | false |
| Contact Detail | * ph: (03) 5555 6473(Work)
* ph: (03) 3410 5613(Mobile)
* ph: (03) 5555 8834(Old)
* 534 Erewhon St PeasantVille, Utah 84414(home)
 | | |
| Language: | English | | |
| Next-of-Kin: | * Bénédicte du Marché (Female)
* 534 Erewhon St PleasantVille VT 3999 (home)
* [+33 (237) 998327](tel:+33(237)998327)
* Valid Period:2012 --> (ongoing)
 | | |
| Links: | * Managing Organization: [Organization Health Level Seven International](Organization-example.md)
 | | |
| US Core Ethnicity Extension: | * ombCategory: [CDC Race and Ethnicity: 2186-5](http://terminology.hl7.org/6.5.0/CodeSystem-CDCREC.html#CDCREC-2186-5) (Not Hispanic or Latino)
* text: Not Hispanic or Latino
 | | |
| US Core Race Extension: | * ombCategory: [CDC Race and Ethnicity: 2106-3](http://terminology.hl7.org/6.5.0/CodeSystem-CDCREC.html#CDCREC-2106-3) (White)
* text: White
 | | |
| US Core Tribal Affiliation Extension: | * tribalAffiliation: Reno-Sparks Indian Colony, Nevada
* isEnrolled: false
 | | |



## Resource Content

```json
{
  "resourceType" : "Patient",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-patient"]
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
    "extension" : [{
      "url" : "ombCategory",
      "valueCoding" : {
        "system" : "urn:oid:2.16.840.1.113883.6.238",
        "code" : "2106-3",
        "display" : "White"
      }
    },
    {
      "url" : "text",
      "valueString" : "White"
    }]
  },
  {
    "url" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
    "extension" : [{
      "url" : "ombCategory",
      "valueCoding" : {
        "system" : "urn:oid:2.16.840.1.113883.6.238",
        "code" : "2186-5",
        "display" : "Not Hispanic or Latino"
      }
    },
    {
      "url" : "text",
      "valueString" : "Not Hispanic or Latino"
    }]
  },
  {
    "url" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-tribal-affiliation",
    "extension" : [{
      "url" : "tribalAffiliation",
      "valueCodeableConcept" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/v3-TribalEntityUS",
          "code" : "239",
          "display" : "Reno-Sparks Indian Colony, Nevada"
        }],
        "text" : "Reno-Sparks Indian Colony, Nevada"
      }
    },
    {
      "url" : "isEnrolled",
      "valueBoolean" : false
    }]
  }],
  "identifier" : [{
    "use" : "usual",
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code" : "SS"
      }]
    },
    "system" : "http://hl7.org/fhir/sid/us-ssn",
    "value" : "999123456",
    "period" : {
      "start" : "2001-05-06"
    },
    "assigner" : {
      "display" : "Acme Healthcare"
    }
  }],
  "active" : true,
  "name" : [{
    "use" : "official",
    "family" : "Chalmers",
    "given" : ["Peter", "James"],
    "suffix" : ["Jr."]
  },
  {
    "use" : "usual",
    "family" : "Chalmers",
    "given" : ["Jim"]
  },
  {
    "use" : "maiden",
    "family" : "Windsor",
    "given" : ["Peter", "James"],
    "period" : {
      "end" : "2002"
    }
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "(03) 5555 6473",
    "use" : "work",
    "rank" : 1
  },
  {
    "system" : "phone",
    "value" : "(03) 3410 5613",
    "use" : "mobile",
    "rank" : 2
  },
  {
    "system" : "phone",
    "value" : "(03) 5555 8834",
    "use" : "old",
    "period" : {
      "end" : "2014"
    }
  }],
  "gender" : "male",
  "birthDate" : "1974-12-25",
  "_birthDate" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
      "valueDateTime" : "1974-12-25T14:35:45-05:00"
    }]
  },
  "deceasedBoolean" : false,
  "address" : [{
    "use" : "home",
    "type" : "both",
    "text" : "534 Erewhon St PeasantVille, Utah 84414",
    "line" : ["534 Erewhon St"],
    "city" : "PleasantVille",
    "district" : "Rainbow",
    "state" : "UT",
    "postalCode" : "84414",
    "period" : {
      "start" : "1974-12-25"
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
  "communication" : [{
    "language" : {
      "coding" : [{
        "system" : "urn:ietf:bcp:47",
        "code" : "en",
        "display" : "English"
      }],
      "text" : "English"
    }
  }],
  "managingOrganization" : {
    "reference" : "Organization/example"
  }
}

```
