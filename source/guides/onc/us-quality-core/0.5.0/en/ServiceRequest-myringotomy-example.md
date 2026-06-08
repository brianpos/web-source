# ServiceRequest Myringotomy Procedure example - 2026 US Quality Core Implementation Guide v0.5.0

## Example ServiceRequest: ServiceRequest Myringotomy Procedure example

Profile: [US Quality Core ServiceRequest](StructureDefinition-us-quality-core-servicerequest.md)

**status**: On Hold

**intent**: Order

**category**: Surgical Procedure

**priority**: Routine

**code**: Myringotomy and insertion of short-term tympanic ventilation tube (procedure)

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

**occurrence**: 2014-02-13 --> 2014-02-13

**asNeeded**: true

**authoredOn**: 2014-02-14

**performerType**: Pediatric otolaryngology

**reasonCode**: Otitis media



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "myringotomy-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-servicerequest"]
  },
  "status" : "on-hold",
  "intent" : "order",
  "category" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "387713003",
      "display" : "Surgical Procedure"
    }]
  }],
  "priority" : "routine",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "172676009",
      "display" : "Myringotomy and insertion of short-term tympanic ventilation tube (procedure)"
    }]
  },
  "subject" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "occurrencePeriod" : {
    "start" : "2014-02-13",
    "end" : "2014-02-13"
  },
  "asNeededBoolean" : true,
  "authoredOn" : "2014-02-14",
  "performerType" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "417887005",
      "display" : "Pediatric otolaryngology"
    }]
  },
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "65363002",
      "display" : "Otitis media"
    }]
  }]
}

```
