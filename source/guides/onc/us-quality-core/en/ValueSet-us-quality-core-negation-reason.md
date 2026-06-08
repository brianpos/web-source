# USQualityCore Negation Reason Codes - 2026 US Quality Core Implementation Guide v0.5.0

## ValueSet: USQualityCore Negation Reason Codes 

 
This value set defines the set of codes that can be used to indicate the reason an action was not taken 

 **References** 

* [US Quality Core Communication Not Done](StructureDefinition-us-quality-core-communicationnotdone.md)
* [US Quality Core Do Not Perform Reason](StructureDefinition-us-quality-core-doNotPerformReason.md)
* [US Quality Core Immunization Not Done](StructureDefinition-us-quality-core-immunizationnotdone.md)
* [US Quality Core MedicationAdministration Not Done](StructureDefinition-us-quality-core-medicationadministrationnotdone.md)
* [US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md)
* [US Quality Core Medication Not Requested](StructureDefinition-us-quality-core-medicationnotrequested.md)
* [US Quality Core Not Done Reason](StructureDefinition-us-quality-core-notDoneReason.md)
* [US Quality Core Procedure Not Done](StructureDefinition-us-quality-core-procedurenotdone.md)
* [US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "us-quality-core-negation-reason",
  "url" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-negation-reason",
  "version" : "0.5.0",
  "name" : "NegationReasonCodes",
  "title" : "USQualityCore Negation Reason Codes",
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
  "description" : "This value set defines the set of codes that can be used to indicate the reason an action was not taken",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "purpose" : "This value set was defined to support identifying any of the possible negation reason codes as part of USQualityCore profiles. The value set is composed of the codes from [Medical Reason Not Done SCT](http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.56), [Patient Reason Not Done SCT](http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.58), and [System Reason](http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.526.3.1009) as defined and available in the Value Set Authority Center.",
  "compose" : {
    "include" : [{
      "valueSet" : ["http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.56"]
    },
    {
      "valueSet" : ["http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.58"]
    },
    {
      "valueSet" : ["http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.526.3.1009"]
    }]
  }
}

```
