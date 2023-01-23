export function setItems(query, items) {
  localStorage.setItem("query", JSON.stringify({ query, items }));
}

export function getItems() {
  return JSON.parse(localStorage.getItem("query"))?.items;
}

export function getQuery() {
  return JSON.parse(localStorage.getItem("query"))?.query;
}

export function setCurrentPage(curr) {
  localStorage.setItem("currentPage", curr);
}

export function getCurrentPage() {
  return Number(localStorage.getItem("currentPage"));
}

export function addComment(project, comment) {
  const query = JSON.parse(localStorage.getItem("query"));

  const newItems = query.items.items.map((item) =>
    item.id === project.id ? { ...item, comment } : item
  );

  localStorage.setItem(
    "query",
    JSON.stringify({
      query: query.query,
      items: { ...query.items, items: newItems },
    })
  );
}

const localStorageService = {
  setItems,
  getItems,
  getQuery,
  setCurrentPage,
  getCurrentPage,
  addComment,
};

export default localStorageService;
