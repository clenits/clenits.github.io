(function () {
  function resolvePageType() {
    const path = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
    if (path === "/compress-image") return "compress-image";
    if (path === "/resize-image") return "resize-image";
    if (path === "/heic-to-jpg") return "heic-to-jpg";
    if (path === "/webp-to-jpg") return "webp-to-jpg";
    if (path === "/instagram-image-size") return "instagram-image-size";
    if (path === "/image") return "image-hub";
    return "home";
  }

  function trackEvent(eventName, payload) {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...payload });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }
  }

  const pageType = resolvePageType();
  trackEvent("view_page", { page_type: pageType });

  document.addEventListener("click", (event) => {
    const intentLink = event.target.closest("a[data-intent]");
    if (intentLink) {
      trackEvent("select_intent", {
        page_type: pageType,
        intent: intentLink.dataset.intent || "unknown",
      });
      return;
    }

    const recommendLink = event.target.closest("a[data-recommend]");
    if (recommendLink) {
      trackEvent("recommend_click", {
        page_type: pageType,
        target_page: recommendLink.dataset.recommend || "unknown",
      });
    }
  });
})();
