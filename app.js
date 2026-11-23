"use strict";

const byId = (id) => document.getElementById(id);
const search = byId("search");
const rows = byId("rows");
const pageSize = byId("page-size");
const pageSelect = byId("page");
const statusButton = byId("status-button");
const categoryButton = byId("category-button");
const tableWrap = document.querySelector(".table-wrap");
const tableHeaderWrap = document.querySelector(".table-header-wrap");
const parameters = new URLSearchParams(location.search);
const statuses = ["Any status", "Published", "Draft"];
const categories = ["All categories", "Data", "Identity-auth", "Ingress", "Internal", "Networking", "Observability", "Operations", "Security", "Telco"];

const state = {
  query: parameters.get("search") || "",
  status: statuses.find((value) => value.toLowerCase() === parameters.get("status")?.toLowerCase()) || "Any status",
  category: categories.find((value) => value.toLowerCase() === parameters.get("category")?.toLowerCase()) || "All categories",
  page: 1
};
search.value = state.query;
tableWrap.addEventListener("scroll", () => {
  tableHeaderWrap.scrollLeft = tableWrap.scrollLeft;
});

function updateUrl() {
  const params = new URLSearchParams();
  if (state.query.trim()) params.set("search", state.query.trim());
  if (state.status !== "Any status") params.set("status", state.status.toLowerCase());
  if (state.category !== "All categories") params.set("category", state.category.toLowerCase());
  const query = params.toString();
  history.replaceState(null, "", `${location.pathname}${query ? `?${query}` : ""}${location.hash}`);
}

function closeMenus() {
  for (const button of [statusButton, categoryButton]) {
    button.setAttribute("aria-expanded", "false");
    byId(button.getAttribute("aria-controls")).hidden = true;
  }
}

function setupDropdown(button, values, field) {
  const menu = byId(button.getAttribute("aria-controls"));
  for (const value of values) {
    const option = document.createElement("button");
    option.type = "button";
    option.textContent = value;
    option.addEventListener("click", () => {
      state[field] = value;
      state.page = 1;
      closeMenus();
      button.focus();
      render();
    });
    menu.append(option);
  }
  button.addEventListener("click", () => {
    const opening = menu.hidden;
    closeMenus();
    menu.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
  });
}
setupDropdown(statusButton, statuses, "status");
setupDropdown(categoryButton, categories, "category");
document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) closeMenus();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenus();
});

function tag(text, extraClass = "") {
  const element = document.createElement("span");
  element.className = `tag ${extraClass}`.trim();
  element.textContent = text;
  return element;
}

function renderRow(item) {
  const row = document.createElement("tr");
  const name = document.createElement("td");
  const link = document.createElement("a");
  link.textContent = item.name;
  link.href = `https://charmhub.io/interfaces/${encodeURIComponent(item.name)}`;
  name.append(link);
  const status = document.createElement("td");
  status.append(tag(item.status, item.statusStyle));
  const summary = document.createElement("td");
  summary.textContent = item.summary;
  const categoriesCell = document.createElement("td");
  for (const category of item.categories) categoriesCell.append(tag(category));
  row.append(name, status, summary, categoriesCell);
  return row;
}

function render() {
  statusButton.querySelector("span").textContent = state.status;
  categoryButton.querySelector("span").textContent = state.category;
  const query = state.query.trim().toLowerCase();
  const filtered = catalogue.filter((item) => {
    const matchesQuery = !query || [item.name, item.summary, ...item.categories].some((value) => value.toLowerCase().includes(query));
    return matchesQuery && (state.status === "Any status" || item.status === state.status) && (state.category === "All categories" || item.categories.includes(state.category));
  });
  const size = Number(pageSize.value);
  const totalPages = Math.max(1, Math.ceil(filtered.length / size));
  state.page = Math.min(state.page, totalPages);
  const visible = filtered.slice((state.page - 1) * size, state.page * size);
  rows.replaceChildren(...visible.map(renderRow));
  if (!visible.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.className = "empty";
    cell.textContent = "No interfaces available";
    row.append(cell);
    rows.append(row);
  }
  const firstShown = (state.page - 1) * size + 1;
  const range = visible.length ? `${firstShown}-${firstShown + visible.length - 1}` : "0";
  byId("item-range").textContent = `Showing ${range} out of ${filtered.length} items`;
  pageSelect.replaceChildren(...Array.from({ length: totalPages }, (_, index) => {
    const option = document.createElement("option");
    option.value = String(index + 1);
    option.textContent = String(index + 1);
    return option;
  }));
  pageSelect.value = String(state.page);
  byId("page-count").textContent = String(totalPages);
  byId("first").disabled = byId("previous").disabled = state.page === 1;
  byId("next").disabled = byId("last").disabled = state.page === totalPages;
  updateUrl();
}

search.addEventListener("input", () => { state.query = search.value; state.page = 1; render(); });
pageSize.addEventListener("change", () => { state.page = 1; render(); });
pageSelect.addEventListener("change", () => { state.page = Number(pageSelect.value); render(); });
byId("first").addEventListener("click", () => { state.page = 1; render(); });
byId("previous").addEventListener("click", () => { state.page--; render(); });
byId("next").addEventListener("click", () => { state.page++; render(); });
byId("last").addEventListener("click", () => { state.page = Number(byId("page-count").textContent); render(); });
render();
