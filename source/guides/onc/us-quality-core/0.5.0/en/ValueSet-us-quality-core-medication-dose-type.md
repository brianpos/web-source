# USQualityCore SNOMED CT Dosage Codes - 2026 US Quality Core Implementation Guide v0.5.0

## ValueSet: USQualityCore SNOMED CT Dosage Codes 

 
This value set includes all the "Dosages" SNOMED CT codes (i.e. codes with an is-a relationship with 277406006: Dosages). 

 **References** 

* [US Quality Core MedicationDispense Declined](StructureDefinition-us-quality-core-medicationdispensedeclined.md)

### Logical Definition (CLD)

 

### Expansion

-------

 [Description of the above table(s)](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#terminology). 



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "us-quality-core-medication-dose-type",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/StructureDefinition/shareablevalueset"]
  },
  "url" : "http://fhir.org/guides/onc/us-quality-core/ValueSet/us-quality-core-medication-dose-type",
  "version" : "0.5.0",
  "name" : "USQualityCoreMedicationDoseType",
  "title" : "USQualityCore SNOMED CT Dosage Codes",
  "status" : "draft",
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
  "description" : "This value set includes all the \"Dosages\" SNOMED CT codes (i.e. codes with an is-a relationship with 277406006: Dosages).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "US",
      "display" : "United States of America"
    }],
    "text" : "USA"
  }],
  "copyright" : "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement",
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "277406006"
      }]
    }]
  }
}

```
