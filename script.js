// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Nav: background on scroll + mobile menu
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");

const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.style.overflow = open ? "hidden" : "";
});
document.querySelectorAll(".nav__menu a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  })
);

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-in"));
}

// Contact form: submit via fetch so visitors stay on the page
const form = document.querySelector(".form");
const status = form.querySelector(".form__status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (form.action.includes("YOUR_FORM_ID")) {
    status.textContent = "Form isn't connected yet. Add your Formspree ID in index.html.";
    return;
  }
  const btn = form.querySelector("button");
  btn.disabled = true;
  status.textContent = "Sending…";
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error();
    form.reset();
    status.textContent = "Thanks! Your message is on its way. I'll be in touch soon.";
  } catch {
    status.textContent = "Something went wrong. Please try again in a moment.";
  } finally {
    btn.disabled = false;
  }
});
