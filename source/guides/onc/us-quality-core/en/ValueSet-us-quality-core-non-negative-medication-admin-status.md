# Non-Negative MedicationAdministration Status - 2026 US Quality Core Implementation Guide v0.5.0

## ValueSet: Non-Negative MedicationAdministration Status 

 
This value set defines the set of codes that indicate a non-negated medication administration status (i.e. codes that are not `not-done`) 

 **References** 

* [US Quality Core MedicationAdministration](StructureDefinition-us-quality-core-medicationadministration.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "us-quality-core-non-negative-medication-admin-status",
  "url" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-non-negative-medication-admin-status",
  "version" : "0.5.0",
  "name" : "NonNegativeMedicationAdministrationStatus",
  "title" : "Non-Negative MedicationAdministration Status",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-06-05",
  "publisher" : "Office of the National Coordinator for Health Information Technology (ONC)",
  "contact" : [{
    "name" : "Office of the National Coordinator for Health Information Technology (ONC)",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.healthit.gov/feedback"
    }]
  }],
  "description" : "This value set defines the set of codes that indicate a non-negated medication administration status (i.e. codes that are not `not-done`)",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "purpose" : "This value set was defined to support the set of medication administration statuses in FHIR that do not explicitly indicate a negative status (i.e. all the codes from the http://terminology.hl7.org/CodeSystem/medication-admin-status code system that are not `not-done`).",
  "compose" : {
    "include" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/medication-admin-status",
      "concept" : [{
        "code" : "in-progress",
        "display" : "In Progress"
      },
      {
        "code" : "on-hold",
        "display" : "On Hold"
      },
      {
        "code" : "completed",
        "display" : "Completed"
      },
      {
        "code" : "entered-in-error",
        "display" : "Entered in Error"
      },
      {
        "code" : "stopped",
        "display" : "Stopped"
      },
      {
        "code" : "unknown",
        "display" : "Unknown"
      }]
    }]
  }
}

```
