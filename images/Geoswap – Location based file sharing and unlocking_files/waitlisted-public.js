document.addEventListener("DOMContentLoaded", function(event) {
  options = {domain: wlParams.domain}
  if (wlParams.form && wlParams.form.length > 0) {
    options.form = wlParams.form;
  }
  window.waitlisted.start(options);
});
