# Non-Negative Event Status - 2026 US Quality Core Implementation Guide v0.5.0

## ValueSet: Non-Negative Event Status 

 
This value set defines the set of codes that indicate a non-negated event status (i.e. codes that are not `not-done`) 

 **References** 

* [US Quality Core Communication](StructureDefinition-us-quality-core-communication.md)
* [US Quality Core Procedure](StructureDefinition-us-quality-core-procedure.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "us-quality-core-non-negative-event-status",
  "url" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-non-negative-event-status",
  "version" : "0.5.0",
  "name" : "NonNegativeEventStatus",
  "title" : "Non-Negative Event Status",
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
  "description" : "This value set defines the set of codes that indicate a non-negated event status (i.e. codes that are not `not-done`)",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "purpose" : "This value set was defined to support the set of event statuses in FHIR that do not explicitly indicate a negative status (i.e. all the codes from the http://hl7.org/fhir/event-status code system that are not `not-done`).",
  "compose" : {
    "include" : [{
      "system" : "http://hl7.org/fhir/event-status",
      "concept" : [{
        "code" : "preparation",
        "display" : "Preparation"
      },
      {
        "code" : "in-progress",
        "display" : "In Progress"
      },
      {
        "code" : "on-hold",
        "display" : "On Hold"
      },
      {
        "code" : "stopped",
        "display" : "Stopped"
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
        "code" : "unknown",
        "display" : "Unknown"
      }]
    }]
  }
}

```
