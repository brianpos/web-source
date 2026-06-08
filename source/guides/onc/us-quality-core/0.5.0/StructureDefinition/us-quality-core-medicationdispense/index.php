<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispense.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispense.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispense.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispense.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispense.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispense.html');
else 
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispense.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
