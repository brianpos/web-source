# Immunization example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Immunization: Immunization example

Profile: [US Quality Core Immunization](StructureDefinition-us-quality-core-immunization.md)

**identifier**: [Uniform Resource Identifier (URI)](http://terminology.hl7.org/7.1.0/NamingSystem-uri.html)/urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234

**status**: Completed

**vaccineCode**: Seasonal influenza vaccine

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**occurrence**: 2013-01-01

**recorded**: 2013-01-10

**primarySource**: true

**location**: [Location South Wing, second floor](Location-example.md)

**manufacturer**: [Organization Health Level Seven International](Organization-example.md)

**lotNumber**: AAJN11K

**expirationDate**: 2015-02-15

**site**: left arm

**route**: Injection, intramuscular

**doseQuantity**: 0.5 mL (Details: UCUM codemL = 'mL')

> **performer****function**: Ordering Provider**actor**: [Practitioner Adam Careful ](Practitioner-example.md)

> **performer****function**: Administering Provider**actor**: [Practitioner Adam Careful ](Practitioner-example.md)

**note**: 

> 

Seasonal influenza vaccine administered intramuscularly in the left arm


**reasonCode**: Annual influenza vaccination

### ProtocolApplieds

| | | | | | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| - | **Series** | **Authority** | **TargetDisease** | **DoseNumber[x]** | **SeriesDoses[x]** |
| * | Vaccination Series 1 | [Organization Health Level Seven International](Organization-example.md) | Influenza (disorder) | 1 | 2 |



## Resource Content

```json
{
  "resourceType" : "Immunization",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunization"]
  },
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
  }],
  "status" : "completed",
  "vaccineCode" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/sid/cvx",
      "code" : "140",
      "display" : "Influenza, seasonal, injectable, preservative free"
    }],
    "text" : "Seasonal influenza vaccine"
  },
  "patient" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "occurrenceDateTime" : "2013-01-01",
  "recorded" : "2013-01-10",
  "primarySource" : true,
  "location" : {
    "reference" : "Location/example"
  },
  "manufacturer" : {
    "reference" : "Organization/example"
  },
  "lotNumber" : "AAJN11K",
  "expirationDate" : "2015-02-15",
  "site" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-ActSite",
      "code" : "LA",
      "display" : "left arm"
    }]
  },
  "route" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
      "code" : "IM",
      "display" : "Injection, intramuscular"
    }]
  },
  "doseQuantity" : {
    "value" : 0.5,
    "unit" : "mL",
    "system" : "http://unitsofmeasure.org",
    "code" : "mL"
  },
  "performer" : [{
    "function" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0443",
        "code" : "OP"
      }]
    },
    "actor" : {
      "reference" : "Practitioner/example"
    }
  },
  {
    "function" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0443",
        "code" : "AP"
      }]
    },
    "actor" : {
      "reference" : "Practitioner/example"
    }
  }],
  "note" : [{
    "text" : "Seasonal influenza vaccine administered intramuscularly in the left arm"
  }],
  "reasonCode" : [{
    "text" : "Annual influenza vaccination"
  }],
  "protocolApplied" : [{
    "series" : "Vaccination Series 1",
    "authority" : {
      "reference" : "Organization/example"
    },
    "targetDisease" : [{
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "6142004",
        "display" : "Influenza (disorder)"
      }]
    }],
    "doseNumberPositiveInt" : 1,
    "seriesDosesPositiveInt" : 2
  }]
}

```
