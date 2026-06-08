# Practitioner example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Practitioner: Practitioner example

Profile: [US Quality Core Practitioner](StructureDefinition-us-quality-core-practitioner.md)

**identifier**: [United States Employer Identification Number](http://terminology.hl7.org/5.5.0/NamingSystem-USEIN.html)/Practitioner-23 (use: temp, ), [United States National Provider Identifier](http://terminology.hl7.org/5.5.0/NamingSystem-npi.html)/1234567893 (use: official, )

**active**: true

**name**: Adam Careful 

**telecom**: ph: 555-555-1234(Work)

**address**: 534 Erewhon St PleasantVille UT 84414 US (home)

### Qualifications

| | | | | |
| :--- | :--- | :--- | :--- | :--- |
| - | **Identifier** | **Code** | **Period** | **Issuer** |
| * | `http://example.org/UniversityIdentifier`/12345 | Bachelor of Science | 1995 --> (ongoing) | Example University |



## Resource Content

```json
{
  "resourceType" : "Practitioner",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitioner"]
  },
  "identifier" : [{
    "use" : "temp",
    "system" : "urn:oid:2.16.840.1.113883.4.4",
    "value" : "Practitioner-23"
  },
  {
    "use" : "official",
    "system" : "http://hl7.org/fhir/sid/us-npi",
    "value" : "1234567893"
  }],
  "active" : true,
  "name" : [{
    "family" : "Careful",
    "given" : ["Adam"],
    "prefix" : ["Dr"]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "555-555-1234",
    "use" : "work"
  }],
  "address" : [{
    "use" : "home",
    "line" : ["534 Erewhon St"],
    "city" : "PleasantVille",
    "state" : "UT",
    "postalCode" : "84414",
    "country" : "US"
  }],
  "qualification" : [{
    "identifier" : [{
      "system" : "http://example.org/UniversityIdentifier",
      "value" : "12345"
    }],
    "code" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0360",
        "version" : "2.7",
        "code" : "BS",
        "display" : "Bachelor of Science"
      }],
      "text" : "Bachelor of Science"
    },
    "period" : {
      "start" : "1995"
    },
    "issuer" : {
      "display" : "Example University"
    }
  }]
}

```
