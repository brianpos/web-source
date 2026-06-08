# ImmunizationRecommendation example - 2026 US Quality Core Implementation Guide v0.5.0

## Example ImmunizationRecommendation: ImmunizationRecommendation example

Profile: [US Quality Core ImmunizationRecommendation](StructureDefinition-us-quality-core-immunizationrecommendation.md)

**identifier**: [Uniform Resource Identifier (URI)](http://terminology.hl7.org/7.1.0/NamingSystem-uri.html)/urn:oid:1.3.6.1.4.1.21367.2005.3.7.1235

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**date**: 2015-02-09 11:04:15-0500

> **recommendation****vaccineCode**: Influenza, seasonal, injectable, preservative free**forecastStatus**: Dose due
> **dateCriterion****code**: Earliest date to give**value**: 2015-12-01 00:00:00-0500

> **dateCriterion****code**: Date vaccine due**value**: 2015-12-01 00:00:00-0500

> **dateCriterion****code**: Date when overdue for immunization**value**: 2016-12-28 00:00:00-0500
**description**: Second dose in seasonal influenza vaccination series**series**: Vaccination Series 1**doseNumber**: 2**supportingImmunization**: [Immunization: identifier = OID:1.3.6.1.4.1.21367.2005.3.7.1234; status = completed; vaccineCode = Influenza, seasonal, injectable, preservative free; occurrence[x] = 2013-01-01; recorded = 2013-01-10; primarySource = true; lotNumber = AAJN11K; expirationDate = 2015-02-15; site = left arm; route = Injection, intramuscular; doseQuantity = 0.5 mL; note = Seasonal influenza vaccine administered intramuscularly in the left arm; reasonCode = ](Immunization-example.md)**supportingPatientInformation**: [Observation Hemoglobin [Mass/volume] in Venous blood](Observation-example.md)



## Resource Content

```json
{
  "resourceType" : "ImmunizationRecommendation",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunizationrecommendation"]
  },
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1235"
  }],
  "patient" : {
    "reference" : "Patient/example"
  },
  "date" : "2015-02-09T11:04:15.817-05:00",
  "recommendation" : [{
    "vaccineCode" : [{
      "coding" : [{
        "system" : "http://hl7.org/fhir/sid/cvx",
        "code" : "140",
        "display" : "Influenza, seasonal, injectable, preservative free"
      }]
    }],
    "forecastStatus" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status",
        "code" : "due",
        "display" : "Due"
      }],
      "text" : "Dose due"
    },
    "dateCriterion" : [{
      "code" : {
        "coding" : [{
          "system" : "http://loinc.org",
          "code" : "30981-5",
          "display" : "Earliest date to give"
        }]
      },
      "value" : "2015-12-01T00:00:00-05:00"
    },
    {
      "code" : {
        "coding" : [{
          "system" : "http://loinc.org",
          "code" : "30980-7",
          "display" : "Date vaccine due"
        }]
      },
      "value" : "2015-12-01T00:00:00-05:00"
    },
    {
      "code" : {
        "coding" : [{
          "system" : "http://loinc.org",
          "code" : "59778-1",
          "display" : "Date when overdue for immunization"
        }]
      },
      "value" : "2016-12-28T00:00:00-05:00"
    }],
    "description" : "Second dose in seasonal influenza vaccination series",
    "series" : "Vaccination Series 1",
    "doseNumberPositiveInt" : 2,
    "supportingImmunization" : [{
      "reference" : "Immunization/example"
    }],
    "supportingPatientInformation" : [{
      "reference" : "Observation/example"
    }]
  }]
}

```
