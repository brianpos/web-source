# US Quality Core Location - 2026 US Quality Core Implementation Guide v0.5.0

## Resource Profile: US Quality Core Location 

 
Profile of Location for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors. 

### USCDI+ Quality Element Support Expectations

Systems are expected to support this profile as part of implementing USCDI+ Quality V1 in FHIR and meeting the conformance requirements of this guide.

The following elements are specifically relevant to USCDI+ Quality V1 data classes and elements. Systems are expected to support these elements as applicable to their role in US Quality Core data exchange. See the [Must Support](must-support.md) section of this guide for more information. These elements are tagged as (USCDI+ Quality) in the formal profile views.

**USCDI+ Quality Elements:**

* name: (USCDI+ Quality) Name by which a facility or location is known.
* type: (USCDI+ Quality) Category of service or resource available in a location.
* address: (USCDI+ Quality) Physical location

Because this profile is derived from US Core, systems are also expected to support Must Support requirements and (USCDI) tagged elements inherited from US Core. The [Formal Views](#profile) section also provides the formal summary, definitions, terminology requirements, and mandatory element requirements.

### Profile Specific Implementation Guidance

Additional informational guidance for authoring CQL using this profile is provided in the [CQL Authoring Usage (Informational)](#cql-authoring-usage-informational) section of this page.

**Usages:**

* Refer to this Profile: [US Quality Core AdverseEvent](StructureDefinition-us-quality-core-adverseevent.md), [US Quality Core Claim](StructureDefinition-us-quality-core-claim.md), [US Quality Core Encounter](StructureDefinition-us-quality-core-encounter.md), [US Quality Core Flag](StructureDefinition-us-quality-core-flag.md)... Show 4 more, [US Quality Core ImagingStudy](StructureDefinition-us-quality-core-imagingstudy.md), [US Quality Core Location](StructureDefinition-us-quality-core-location.md), [US Quality Core NonPatient Observation](StructureDefinition-us-quality-core-nonpatient-observation.md) and [US Quality Core PractitionerRole](StructureDefinition-us-quality-core-practitionerrole.md)
* Examples for this Profile: [South Wing, second floor](Location-example.md)
* CapabilityStatements using this Profile: [US Quality Core Client CapabilityStatement](CapabilityStatement-us-quality-core-client.md) and [US Quality Core Server CapabilityStatement](CapabilityStatement-us-quality-core-server.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/fhir.onc.us-quality-core|current/StructureDefinition/StructureDefinition-us-quality-core-location.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-us-quality-core-location.csv), [Excel](../StructureDefinition-us-quality-core-location.xlsx), [Schematron](../StructureDefinition-us-quality-core-location.sch) 

### Notes:

#### CQL Authoring Usage (Informational)

```
define "Encounter With ICU Location Stay 1 Day or More":
  "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions" QualifyingEncounter
    where exists ( QualifyingEncounter.location Location
      where Global.GetLocation(Location.location).type in "Intensive Care Unit"
        and Global."LengthInDays"(Location.period) >= 1
        and Location.period starts during TJC."CalendarDayOfOrDayAfter"(start of QualifyingEncounter.period)
    )

```



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "us-quality-core-location",
  "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location",
  "version" : "0.5.0",
  "name" : "USQualityCoreLocation",
  "title" : "US Quality Core Location",
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
  "description" : "Profile of Location for decision support/quality metrics. Defines the core set of elements and extensions for quality rule and measure authors.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Location",
  "baseDefinition" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-location|6.1.0",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Location",
      "path" : "Location"
    },
    {
      "id" : "Location.identifier",
      "path" : "Location.identifier",
      "short" : "Unique business identifier for facility or location."
    },
    {
      "id" : "Location.name",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Location.name",
      "short" : "(USCDI+ Quality) Name by which a facility or location is known."
    },
    {
      "id" : "Location.type",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Location.type",
      "short" : "(USCDI+ Quality) Category of service or resource available in a location."
    },
    {
      "id" : "Location.telecom",
      "path" : "Location.telecom",
      "short" : "Contact details of the location"
    },
    {
      "id" : "Location.address",
      "extension" : [{
        "url" : "http://fhir.org/guides/onc/us-quality-core/StructureDefinition/uscdiplusquality",
        "valueBoolean" : true
      }],
      "path" : "Location.address",
      "short" : "(USCDI+ Quality) Physical location"
    },
    {
      "id" : "Location.managingOrganization",
      "path" : "Location.managingOrganization",
      "short" : "Organization responsible for provisioning and upkeep",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-organization"]
      }]
    },
    {
      "id" : "Location.partOf",
      "path" : "Location.partOf",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-location"]
      }],
      "mustSupport" : false
    }]
  }
}

```
