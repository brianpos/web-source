# CommunicationRequest example - 2026 US Quality Core Implementation Guide v0.5.0

## Example CommunicationRequest: CommunicationRequest example

Profile: [US Quality Core CommunicationRequest](StructureDefinition-us-quality-core-communicationrequest.md)

**identifier**: ABC123

**basedOn**: [Appendectomy professional claim](Claim-example.md)

**replaces**: Prior request for appendectomy claim documentation

**groupIdentifier**: 12345

**status**: Active

**category**: Notification

**priority**: Routine

**medium**: written

**subject**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**encounter**: [Encounter: identifier = http://example.org/encounters#ENC-20130404-appendicitis; status = finished; class = inpatient encounter (v3 Code System ActCode#IMP); type = Initial hospital inpatient or observation care, per day, for the evaluation and management of a patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using total time on the date of the encounter for code selection, 75 minutes must be met or exceeded.; period = 2013-04-04 18:00:00-0400 --> 2013-04-06 11:00:00-0400](Encounter-example.md)

### Payloads

| | |
| :--- | :--- |
| - | **Content[x]** |
| * | Please provide the operative report supporting professional claim 6612346 for appendectomy. |

**occurrence**: 2014-08-16 11:01:10-0800

**authoredOn**: 2014-08-16 11:01:10-0800

**requester**: [Organization Health Level Seven International](Organization-example.md)

**recipient**: [Practitioner Adam Careful ](Practitioner-example.md)

**sender**: [Organization Health Level Seven International](Organization-example.md)



## Resource Content

```json
{
  "resourceType" : "CommunicationRequest",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-communicationrequest"]
  },
  "identifier" : [{
    "value" : "ABC123"
  }],
  "basedOn" : [{
    "reference" : "Claim/example",
    "display" : "Appendectomy professional claim"
  }],
  "replaces" : [{
    "display" : "Prior request for appendectomy claim documentation"
  }],
  "groupIdentifier" : {
    "value" : "12345"
  },
  "status" : "active",
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/communication-category",
      "code" : "notification"
    }]
  }],
  "priority" : "routine",
  "medium" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
      "code" : "WRITTEN",
      "display" : "written"
    }],
    "text" : "written"
  }],
  "subject" : {
    "reference" : "Patient/example"
  },
  "encounter" : {
    "reference" : "Encounter/example"
  },
  "payload" : [{
    "contentString" : "Please provide the operative report supporting professional claim 6612346 for appendectomy."
  }],
  "occurrenceDateTime" : "2014-08-16T11:01:10-08:00",
  "authoredOn" : "2014-08-16T11:01:10-08:00",
  "requester" : {
    "reference" : "Organization/example"
  },
  "recipient" : [{
    "reference" : "Practitioner/example"
  }],
  "sender" : {
    "reference" : "Organization/example"
  }
}

```
