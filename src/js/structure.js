// "Show structure" toggle: reveals the layout grid and type labels. Remembers the choice per visitor.
(() => {
  const root = document.documentElement;
  const key = "show-structure";
  let on = false;
  try { on = localStorage.getItem(key) === "1"; } catch {}

  const apply = (btn) => {
    root.classList.toggle("show-structure", on);
    if (btn) {
      btn.setAttribute("aria-pressed", String(on));
      btn.textContent = on ? "Hide structure" : "Show structure";
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".grid-toggle");
    apply(btn);
    btn?.addEventListener("click", () => {
      on = !on;
      try { localStorage.setItem(key, on ? "1" : "0"); } catch {}
      apply(btn);
    });
  });
})();
