# DiagnosticReportLab example - 2026 US Quality Core Implementation Guide v0.5.0

## Example DiagnosticReport: DiagnosticReportLab example

Profile: [US Quality Core DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-us-quality-core-diagnosticreport-lab.md)

## CBC panel - Blood by Automated count (Laboratory) 

| | |
| :--- | :--- |
| Subject | Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing))) |
| When For | 2005-07-05 |
| Reported | 2005-07-06 11:45:33+1100 |
| Performer | [Organization Health Level Seven International](Organization-example.md) |

**Report Details**

* **Code**: [Hemoglobin [Mass/volume] in Venous blood](Observation-example.md)(Superficial forearm vein)
  * **Value**: 7.2 g/dl (Details: UCUM codeg/dL = 'g/dL')
  * **Flags**: Final,Below low normal
  * **When For**: 2013-04-02 10:30:10+0100 --> 2013-04-05 10:30:10+0100
  * **Reported**: 2013-04-03 15:30:10+0100



## Resource Content

```json
{
  "resourceType" : "DiagnosticReport",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-diagnosticreport-lab"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v2-0074",
      "code" : "LAB",
      "display" : "Laboratory"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "58410-2",
      "display" : "CBC panel - Blood by Automated count"
    }]
  },
  "subject" : {
    "reference" : "Patient/example",
    "display" : "Peter Chalmers"
  },
  "effectiveDateTime" : "2005-07-05",
  "issued" : "2005-07-06T11:45:33+11:00",
  "performer" : [{
    "reference" : "Organization/example"
  }],
  "result" : [{
    "reference" : "Observation/example"
  }]
}

```
