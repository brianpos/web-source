<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/Observation-example-screening-assessment-10-minute-apgar-heart-rate.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/Observation-example-screening-assessment-10-minute-apgar-heart-rate.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/Observation-example-screening-assessment-10-minute-apgar-heart-rate.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/Observation-example-screening-assessment-10-minute-apgar-heart-rate.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/Observation-example-screening-assessment-10-minute-apgar-heart-rate.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/Observation-example-screening-assessment-10-minute-apgar-heart-rate.html');
else 
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/Observation-example-screening-assessment-10-minute-apgar-heart-rate.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
