# BodyStructure example - 2026 US Quality Core Implementation Guide v0.5.0

## Example BodyStructure: BodyStructure example

Profile: [US Quality Core BodyStructure](StructureDefinition-us-quality-core-bodystructure.md)

**identifier**: 12345

**active**: true

**morphology**: Splenic mass

**location**: Splenic mass

**description**: 7 cm maximum diameter

### Images

| | | |
| :--- | :--- | :--- |
| - | **ContentType** | **Url** |
| * | application/dicom | [http://imaging.acme.com/wado/server?requestType=WADO&amp;wado_details](http://imaging.acme.com/wado/server?requestType=WADO&amp;wado_details) |

**patient**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)



## Resource Content

```json
{
  "resourceType" : "BodyStructure",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-bodystructure"]
  },
  "identifier" : [{
    "value" : "12345"
  }],
  "active" : true,
  "morphology" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "4147007",
      "display" : "Mass (morphologic abnormality)"
    }],
    "text" : "Splenic mass"
  },
  "location" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "78961009",
      "display" : "Splenic structure (body structure)"
    }],
    "text" : "Splenic mass"
  },
  "description" : "7 cm maximum diameter",
  "image" : [{
    "contentType" : "application/dicom",
    "url" : "http://imaging.acme.com/wado/server?requestType=WADO&amp;wado_details"
  }],
  "patient" : {
    "reference" : "Patient/example"
  }
}

```
