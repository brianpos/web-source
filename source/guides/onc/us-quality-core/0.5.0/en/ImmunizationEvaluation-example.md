# ImmunizationEvaluaion example - 2026 US Quality Core Implementation Guide v0.5.0

## Example ImmunizationEvaluation: ImmunizationEvaluaion example

Profile: [US Quality Core ImmunizationEvaluation](StructureDefinition-us-quality-core-immunizationevaluation.md)

**identifier**: [Uniform Resource Identifier (URI)](http://terminology.hl7.org/5.5.0/NamingSystem-uri.html)/urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234

**status**: Completed

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**date**: 2013-01-10

**authority**: [Organization Health Level Seven International](Organization-example.md)

**targetDisease**: Influenza (disorder)

**immunizationEvent**: [Immunization: identifier = OID:1.3.6.1.4.1.21367.2005.3.7.1234; status = completed; vaccineCode = Influenza, seasonal, injectable, preservative free; occurrence[x] = 2013-01-01; recorded = 2013-01-10; primarySource = true; lotNumber = AAJN11K; expirationDate = 2015-02-15; site = left arm; route = Injection, intramuscular; doseQuantity = 0.5 mL; note = Seasonal influenza vaccine administered intramuscularly in the left arm; reasonCode = ](Immunization-example.md)

**doseStatus**: Valid

**series**: Vaccination Series 1

**doseNumber**: 1

**seriesDoses**: 2



## Resource Content

```json
{
  "resourceType" : "ImmunizationEvaluation",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-immunizationevaluation"]
  },
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
  }],
  "status" : "completed",
  "patient" : {
    "reference" : "Patient/example"
  },
  "date" : "2013-01-10",
  "authority" : {
    "reference" : "Organization/example"
  },
  "targetDisease" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "6142004",
      "display" : "Influenza (disorder)"
    }]
  },
  "immunizationEvent" : {
    "reference" : "Immunization/example"
  },
  "doseStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status",
      "code" : "valid",
      "display" : "Valid"
    }]
  },
  "series" : "Vaccination Series 1",
  "doseNumberPositiveInt" : 1,
  "seriesDosesPositiveInt" : 2
}

```
