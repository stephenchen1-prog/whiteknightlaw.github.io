// Loads the Google tag only when a measurement ID is set in wk-config.js.
(function () {
  var id = window.WKL_GA_ID;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  if (!id) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(s);
  window.gtag("js", new Date());
  window.gtag("config", id);
  // The thank-you page sets this flag, so each form submission counts as one lead.
  if (window.WKL_LEAD_PAGE) {
    window.gtag("event", "generate_lead", { form: window.WKL_LEAD_PAGE });
  }
})();
