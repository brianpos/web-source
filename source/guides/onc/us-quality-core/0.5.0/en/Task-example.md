# Task example - 2026 US Quality Core Implementation Guide v0.5.0

## Example Task: Task example

Profile: [US Quality Core Task](StructureDefinition-us-quality-core-task.md)

**identifier**: `http://www.acme.org/tasks`/19009

**basedOn**: Medication reconciliation requested before alemtuzumab infusion

**status**: Requested

**statusReason**: Awaiting confirmation of the patient's active medication list

**intent**: proposal

**priority**: Routine

**code**: Medication Reconciliation

**focus**: [MedicationRequest: status = active; intent = order; medication[x] = ->Medication alemtuzumab 10 MG/ML [Lemtrada]; authoredOn = 2015-03-25 19:32:52-0500; reasonCode = Multiple sclerosis (disorder)](MedicationRequest-example.md)

**for**: [Jim Chalmers Male, DoB: 1974-12-25 ( Social Security number (use: usual, period: 2001-05-06 --> (ongoing)))](Patient-example.md)

**executionPeriod**: 2015-03-25 --> 2015-03-25

**reasonCode**: Medication reconciliation before alemtuzumab infusion



## Resource Content

```json
{
  "resourceType" : "Task",
  "id" : "example",
  "meta" : {
    "profile" : ["http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-task"]
  },
  "identifier" : [{
    "system" : "http://www.acme.org/tasks",
    "value" : "19009"
  }],
  "basedOn" : [{
    "display" : "Medication reconciliation requested before alemtuzumab infusion"
  }],
  "status" : "requested",
  "statusReason" : {
    "text" : "Awaiting confirmation of the patient's active medication list"
  },
  "intent" : "proposal",
  "priority" : "routine",
  "code" : {
    "text" : "Medication Reconciliation"
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
    "text" : "Medication reconciliation before alemtuzumab infusion"
  }
}

```
