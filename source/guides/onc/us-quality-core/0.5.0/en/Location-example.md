# Location example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Location: Location example

Profile: [US Quality Core Location](StructureDefinition-us-quality-core-location.md)

**identifier**: B1-S.F2 (use: temp, )

**status**: Active

**name**: South Wing, second floor

**alias**: Mean Joe Greene University Medical Center, South Wing, second floor, BU MC, SW, F2

**description**: Second floor of the Old South Wing, formerly in use by Psychiatry

**mode**: Instance

**type**: Hospital

**telecom**: ph: 2328(Work), fax: 2329(Work), [secondwing@meanjoegreeneuniversitymedicalcenter.com](mailto:secondwing@meanjoegreeneuniversitymedicalcenter.com), [http://sampleorg.com/southwing](http://sampleorg.com/southwing)

**address**: Iron Curtain 75, Building A Pittsburgh PA 15016 US (work)

**physicalType**: Wing

### Positions

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Longitude** | **Latitude** | **Altitude** |
| * | -83.6945691 | 42.25475478 | 0 |

**managingOrganization**: [Organization Health Level Seven International](Organization-example.md)



## Resource Content

```json
{
  "resourceType" : "Location",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location"]
  },
  "identifier" : [{
    "use" : "temp",
    "value" : "B1-S.F2"
  }],
  "status" : "active",
  "name" : "South Wing, second floor",
  "alias" : ["Mean Joe Greene University Medical Center, South Wing, second floor",
  "BU MC, SW, F2"],
  "description" : "Second floor of the Old South Wing, formerly in use by Psychiatry",
  "mode" : "instance",
  "type" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code" : "HOSP",
      "display" : "Hospital"
    }]
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "2328",
    "use" : "work"
  },
  {
    "system" : "fax",
    "value" : "2329",
    "use" : "work"
  },
  {
    "system" : "email",
    "value" : "secondwing@meanjoegreeneuniversitymedicalcenter.com"
  },
  {
    "system" : "url",
    "value" : "http://sampleorg.com/southwing",
    "use" : "work"
  }],
  "address" : {
    "use" : "work",
    "line" : ["Iron Curtain 75, Building A"],
    "city" : "Pittsburgh",
    "state" : "PA",
    "postalCode" : "15016",
    "country" : "US"
  },
  "physicalType" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/location-physical-type",
      "code" : "wi",
      "display" : "Wing"
    }]
  },
  "position" : {
    "longitude" : -83.6945691,
    "latitude" : 42.25475478,
    "altitude" : 0
  },
  "managingOrganization" : {
    "reference" : "Organization/example"
  }
}

```
