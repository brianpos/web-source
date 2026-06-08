<?xml version="1.0" encoding="UTF-8"?>
<sch:schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <sch:ns prefix="f" uri="http://hl7.org/fhir"/>
  <sch:ns prefix="h" uri="http://www.w3.org/1999/xhtml"/>
  <!-- 
    This file contains just the constraints for the profile DeviceRequest
    It includes the base constraints for the resource as well.
    Because of the way that schematrons and containment work, 
    you may need to use this schematron fragment to build a, 
    single schematron that validates contained resources (if you have any) 
  -->
  <sch:pattern>
    <sch:title>f:DeviceRequest</sch:title>
    <sch:rule context="f:DeviceRequest">
      <sch:assert test="count(f:extension[@url = 'http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason']) &gt;= 1">extension with URL = 'http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason']) &lt;= 1">extension with URL = 'http://fhir.org/guides/onc/us-quality-core/StructureDefinition/us-quality-core-doNotPerformReason': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:authoredOn) &gt;= 1">authoredOn: minimum cardinality of 'authoredOn' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
  <sch:pattern>
    <sch:title>f:DeviceRequest/f:modifierExtension</sch:title>
    <sch:rule context="f:DeviceRequest/f:modifierExtension">
      <sch:assert test="count(f:id) &lt;= 1">id: maximum cardinality of 'id' is 1</sch:assert>
      <sch:assert test="count(f:url) &gt;= 1">url: minimum cardinality of 'url' is 1</sch:assert>
      <sch:assert test="count(f:url) &lt;= 1">url: maximum cardinality of 'url' is 1</sch:assert>
      <sch:assert test="count(f:value[x]) &gt;= 1">value[x]: minimum cardinality of 'value[x]' is 1</sch:assert>
      <sch:assert test="count(f:value[x]) &lt;= 1">value[x]: maximum cardinality of 'value[x]' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
</sch:schema>
