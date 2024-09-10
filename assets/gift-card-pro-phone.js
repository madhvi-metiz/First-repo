(() => {
  const countryCode = "+1"; // ADD YOUR COUNTRY CODE HERE
  if (!window.location.href.includes("a/gc/gift-card")) return;
  document.addEventListener('gcp-page-loaded', () => {
    const currentPage = window.GCPSDK.page.get();
    if (!currentPage || currentPage.step !== "gift_card") return;
    const phoneInput = document.querySelector("#gcpMobileSelectInput");
    if (!phoneInput) return;
    
    phoneInput.addEventListener('click', (e) => {
      if (e.target.value === "" || e.target.value === "+") {
        phoneInput.value = countryCode;
      }
    });
    
  });
})();