# PractitionerRole example - 2026 US Quality Core Implementation Guide v0.5.0

## Example PractitionerRole: PractitionerRole example

Profile: [US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md)

**identifier**: `http://www.acme.org/practitionerroles`/31 (use: temp, )

**active**: true

**period**: 1995 --> (ongoing)

**practitioner**: [Dr Adam Careful](Practitioner-example.md)

**organization**: [Organization Health Level Seven International](Organization-example.md)

**code**: Clinic/Center

**specialty**: Dentist

**location**: [Location South Wing, second floor](Location-example.md)

**telecom**: ph: 801-123-4567



## Resource Content

```json
{
  "resourceType" : "PractitionerRole",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-practitionerrole"]
  },
  "identifier" : [{
    "use" : "temp",
    "system" : "http://www.acme.org/practitionerroles",
    "value" : "31"
  }],
  "active" : true,
  "period" : {
    "start" : "1995"
  },
  "practitioner" : {
    "reference" : "Practitioner/example",
    "display" : "Dr Adam Careful"
  },
  "organization" : {
    "reference" : "Organization/example"
  },
  "code" : [{
    "coding" : [{
      "system" : "http://nucc.org/provider-taxonomy",
      "code" : "261Q00000X",
      "display" : "Clinic/Center"
    }]
  }],
  "specialty" : [{
    "coding" : [{
      "system" : "http://nucc.org/provider-taxonomy",
      "code" : "122300000X",
      "display" : "Dentist"
    }]
  }],
  "location" : [{
    "reference" : "Location/example"
  }],
  "telecom" : [{
    "system" : "phone",
    "value" : "801-123-4567"
  }]
}

```
