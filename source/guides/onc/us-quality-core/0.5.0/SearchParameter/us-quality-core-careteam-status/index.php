<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-careteam-status.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-careteam-status.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-careteam-status.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-careteam-status.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-careteam-status.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-careteam-status.html');
else 
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-careteam-status.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
