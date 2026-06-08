# DiagnosticReportNote example - 2026 US Quality Core Implementation Guide v0.5.0

## Example DiagnosticReport: DiagnosticReportNote example

Profile: [US Quality Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-us-quality-core-diagnosticreport-note.md)

## Portable XR Chest Views (Radiology) 

| | |
| :--- | :--- |
| Subject | Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing))) |
| When For | 2019-02-03 19:43:30+0000 |

**Report Details**




## Resource Content

```json
{
  "resourceType" : "DiagnosticReport",
  "id" : "note-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-diagnosticreport-note"]
  },
  "status" : "final",
  "category" : [{
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "LP29684-5",
      "display" : "Radiology"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "30746-2",
      "display" : "Portable XR Chest Views"
    }],
    "text" : "Portable XR Chest Views"
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "effectiveDateTime" : "2019-02-03T19:43:30.000Z",
  "result" : [{
    "display" : "No acute cardiopulmonary abnormality"
  }],
  "imagingStudy" : [{
    "display" : "Portable chest radiograph images"
  }],
  "presentedForm" : [{
    "contentType" : "application/xhtml",
    "data" : "PCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTiIgIkRURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZCI+CgkJPGh0bWwgeG1sOmxhbmc9ImVuIiBsYW5nPSJlbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiPgkJCiAgPGhlYWQ+CiAgICA8dGl0bGU+Q2hlc3QgUG9ydGFibGU8L3RpdGxlPgogIDwvaGVhZD4KICA8Ym9keT4KICAgIDxwPlJlc3VsdDwvcD4KICAgIDxici8+Q2hlc3QgUG9ydGFibGUgCiAgICAgIAogICAgICA8cD5JTkRJQ0FUSU9OL0NMSU5JQ0FMIFFVRVNUSU9OOiBGZXZlciAvIFBuZXVtb25pYTwvcD4KICAgICAgCiAgICAgIDxwPkNPTVBBUklTT046IE5vbmUuPC9wPgogICAgICAKICAgICAgPHA+RklORElOR1M6PC9wPgogICAgICAKICAgICAgPHA+TElORVMgQU5EIFRVQkVTOiBOb25lLjwvcD4KICAgICAgCiAgICAgIDxwPkxVTkdTIEFORCBQTEVVUkE6PC9wPgogICAgICA8YnIvPkNsZWFyIGx1bmdzLiBOb3JtYWwgcHVsbW9uYXJ5IHZhc2N1bGFyaXR5LgogICAgICA8YnIvPk5vIHBsZXVyYWwgZWZmdXNpb24uCiAgICAgIDxici8+Tm8gcG5ldW1vdGhvcmF4LgogICAgICAKICAgICAgPHA+SEVBUlQsIE1FRElBU1RJTlVNIEFORCBISUxBOjwvcD4KICAgICAgPGJyLz5IZWFydCBpcyBub3JtYWwgaW4gc2l6ZS4KICAgICAgPGJyLz5Ob3JtYWwgbWVkaWFzdGluYWwgYW5kIGhpbGFyIGNvbnRvdXIuCiAgICAgIAogICAgICA8cD5CT05FUyBBTkQgU09GVCBUSVNTVUVTOjwvcD4KICAgICAgPGJyLz5ObyBhY3V0ZSBhYm5vcm1hbGl0eS4KICAgICAgCiAgICAgIDxwPklNUFJFU1NJT046PC9wPgogICAgICA8YnIvPk5vIGFjdXRlIGFibm9ybWFsaXR5LgogICAgICAKICAgICAgPHA+V1NOOiBPMTlJQy1TQy0wMjExPC9wPgogICAgICAKICAgICAgPHA+RGljdGF0ZWQgQnk6IEN1cmUgTUQsIENocmlzdGluZSBKCiAgICAgICAgRGljdGF0ZWQgRGF0ZS9UaW1lOiAwMi8wMy8xOSA3OjQ0IHBtCiAgICAgICAgUmV2aWV3ZWQgQnk6IEN1cmUgTUQsIENocmlzdGluZSBKCiAgICAgICAgU2lnbmVkIEJ5OiBDdXJlIE1ELCBDaHJpc3RpbmUgSgogICAgICAgIFNpZ25lZCBEYXRlL1RpbWU6IDAyLzAzLzE5IDc6NDQgcG0KICAgICAgICBUcmFuc2NyaWJlZCBCeTogQ1NCCiAgICAgICAgVHJhbnNjcmliZWQgRGF0ZS9UaW1lOiAwMi8wMy8xOSA3OjQzIHBtPC9wPgogICAgICAKICAgICAgCiAgPC9ib2R5Pgo8L2h0bWw+Cg=="
  }]
}

```
