<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-questionnaireresponse-questionnaire.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-questionnaireresponse-questionnaire.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-questionnaireresponse-questionnaire.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-questionnaireresponse-questionnaire.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-questionnaireresponse-questionnaire.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-questionnaireresponse-questionnaire.html');
else 
  Redirect('http://fhir.org/guides/onc/us-quality-core/0.5.0/SearchParameter-us-quality-core-questionnaireresponse-questionnaire.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
