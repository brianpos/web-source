# Organization example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Organization: Organization example

Profile: [US Quality Core Organization](StructureDefinition-us-quality-core-organization.md)

**identifier**: [United States National Provider Identifier](http://terminology.hl7.org/5.5.0/NamingSystem-npi.html)/8635143786 (use: temp, )

**active**: true

**type**: Organizational team

**name**: Health Level Seven International

**telecom**: ph: (+1) 734-677-7777, fax: (+1) 734-677-6622, [hq@HL7.org](mailto:hq@HL7.org)

**address**: 3300 Washtenaw Avenue, Suite 227 Ann Arbor MI 48104 USA 



## Resource Content

```json
{
  "resourceType" : "Organization",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
  },
  "identifier" : [{
    "use" : "temp",
    "system" : "http://hl7.org/fhir/sid/us-npi",
    "value" : "8635143786"
  }],
  "active" : true,
  "type" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/organization-type",
      "code" : "team",
      "display" : "Organizational team"
    }]
  }],
  "name" : "Health Level Seven International",
  "telecom" : [{
    "system" : "phone",
    "value" : "(+1) 734-677-7777"
  },
  {
    "system" : "fax",
    "value" : "(+1) 734-677-6622"
  },
  {
    "system" : "email",
    "value" : "hq@HL7.org"
  }],
  "address" : [{
    "line" : ["3300 Washtenaw Avenue, Suite 227"],
    "city" : "Ann Arbor",
    "state" : "MI",
    "postalCode" : "48104",
    "country" : "USA"
  }]
}

```
