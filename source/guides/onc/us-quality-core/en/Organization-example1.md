# Hospital Organization example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Organization: Hospital Organization example

Profile: [US Quality Core Organization](StructureDefinition-us-quality-core-organization.md)

**identifier**: [United States National Provider Identifier](http://terminology.hl7.org/7.1.0/NamingSystem-npi.html)/1285243618 (use: temp, )

**active**: true

**type**: Healthcare Provider

**name**: HENDRICKS COUNTY HOSPITAL

**telecom**: ph: (+1) 712-456-7777, fax: (+1) 712-456-6622, [staff@countyhospital.org](mailto:staff@countyhospital.org)

**address**: 3300 Washtenaw Avenue, Suite 227 Avon IN 46123 USA 



## Resource Content

```json
{
  "resourceType" : "Organization",
  "id" : "example1",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
  },
  "identifier" : [{
    "use" : "temp",
    "system" : "http://hl7.org/fhir/sid/us-npi",
    "value" : "1285243618"
  }],
  "active" : true,
  "type" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/organization-type",
      "code" : "prov",
      "display" : "Healthcare Provider"
    }]
  }],
  "name" : "HENDRICKS COUNTY HOSPITAL",
  "telecom" : [{
    "system" : "phone",
    "value" : "(+1) 712-456-7777"
  },
  {
    "system" : "fax",
    "value" : "(+1) 712-456-6622"
  },
  {
    "system" : "email",
    "value" : "staff@countyhospital.org"
  }],
  "address" : [{
    "line" : ["3300 Washtenaw Avenue, Suite 227"],
    "city" : "Avon",
    "state" : "IN",
    "postalCode" : "46123",
    "country" : "USA"
  }]
}

```
