---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 5
description: A formal listing of all the things I have done so far!  
---

{% assign cv_url = '/assets/pdf/cv.pdf' | relative_url %}

<!-- Desktop and tablet: embedded viewer -->
<div class="d-none d-md-block">
  <p class="text-right mb-2">
    <a class="btn btn-sm z-depth-0" role="button" href="{{ cv_url }}" download="Rajdeep_Chakraborty_CV.pdf">
      <i class="fa-solid fa-download"></i> Download PDF
    </a>
  </p>
  <iframe
    src="{{ cv_url }}#view=FitH"
    title="Rajdeep Chakraborty — CV"
    style="width: 100%; height: 85vh; border: 1px solid var(--global-divider-color); border-radius: 4px;"
  ></iframe>
</div>

<!-- Phones: buttons only, since phone browsers can't embed PDFs well -->
<div class="d-md-none">
  <div class="card p-4 text-center">
    <p><i class="fa-solid fa-file-pdf fa-2x"></i></p>
    <p>My CV is a PDF. Open it in your phone's viewer, or save a copy.</p>
    <p>
      <a class="btn btn-sm z-depth-0" role="button" href="{{ cv_url }}" target="_blank" rel="noopener">
        <i class="fa-solid fa-eye"></i> View PDF
      </a>
      <a class="btn btn-sm z-depth-0" role="button" href="{{ cv_url }}" download="Rajdeep_Chakraborty_CV.pdf">
        <i class="fa-solid fa-download"></i> Download PDF
      </a>
    </p>
  </div>
</div>
