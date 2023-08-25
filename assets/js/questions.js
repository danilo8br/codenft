export function questions() {
  const faqs = document.querySelectorAll(".questions-intro-faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  })
};