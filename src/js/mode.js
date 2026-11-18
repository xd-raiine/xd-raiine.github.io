// Two views of the same site: "how I think" (sketchbook, light) and "how it turns out" (final, dark).
// One button. Its label names the view you'll switch to. The class is set early by an inline
// script in <head> so returning visitors don't see a flash.
(() => {
  const root = document.documentElement;
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".mode-toggle");
    if (!btn) return;
    const label = btn.querySelector("span");
    const sync = () => {
      label.textContent = root.classList.contains("sketch") ? "see how it turns out" : "see how I think";
    };
    sync();
    btn.hidden = false;
    btn.addEventListener("click", () => {
      const on = !root.classList.contains("sketch");
      root.classList.toggle("sketch", on);
      try { localStorage.setItem("mode", on ? "sketch" : "final"); } catch {}
      sync();
    });
  });
})();
