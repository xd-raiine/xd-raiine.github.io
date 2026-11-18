// Sortable work ledger. Buttons in the column headings sort the rows; aria-sort tells screen readers the order.
document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector(".ledger");
  if (!table) return;
  const body = table.tBodies[0];
  table.querySelectorAll("thead button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const th = btn.closest("th");
      const key = btn.dataset.sort;
      const dir = th.getAttribute("aria-sort") === "ascending" ? "descending" : "ascending";
      table.querySelectorAll("thead th").forEach((h) => h.removeAttribute("aria-sort"));
      th.setAttribute("aria-sort", dir);
      const rows = [...body.rows].sort((a, b) =>
        a.dataset[key].localeCompare(b.dataset[key], undefined, { numeric: true, sensitivity: "base" }) * (dir === "ascending" ? 1 : -1));
      rows.forEach((r) => body.appendChild(r));
    });
  });
});
