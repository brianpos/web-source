# TaskRejected with code example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Task: TaskRejected with code example

Profile: [US Quality Core Task Rejected](StructureDefinition-us-quality-core-taskrejected.md)

**identifier**: `http://www.acme.org/tasks`/19009

**basedOn**: Medication reconciliation requested before alemtuzumab infusion

**status**: Rejected

**statusReason**: Patient noncompliance - general (situation)

**intent**: proposal

**code**: Medication reconciliation (procedure)

**focus**: [MedicationRequest: status = active; intent = order; medication[x] = ->Medication alemtuzumab 10 MG/ML [Lemtrada]; authoredOn = 2015-03-25 19:32:52-0500; reasonCode = Multiple sclerosis (disorder)](MedicationRequest-example.md)

**for**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**executionPeriod**: 2015-03-25 --> 2015-03-25

**reasonCode**: Patient declined medication reconciliation before alemtuzumab infusion



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "negation-with-code-example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-taskrejected"]
  },
  "identifier" : [{
    "system" : "http://www.acme.org/tasks",
    "value" : "19009"
  }],
  "basedOn" : [{
    "display" : "Medication reconciliation requested before alemtuzumab infusion"
  }],
  "status" : "rejected",
  "statusReason" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "275936005",
      "display" : "Patient noncompliance - general (situation)"
    }]
  },
  "intent" : "proposal",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "430193006",
      "display" : "Medication reconciliation (procedure)"
    }]
  },
  "focus" : {
    "reference" : "MedicationRequest/example"
  },
  "for" : {
    "reference" : "Patient/example"
  },
  "executionPeriod" : {
    "start" : "2015-03-25",
    "end" : "2015-03-25"
  },
  "reasonCode" : {
    "text" : "Patient declined medication reconciliation before alemtuzumab infusion"
  }
}

```
