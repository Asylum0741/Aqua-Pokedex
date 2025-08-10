import { Pokemon } from "./fetchpokedata";

interface FilterOptions {
  type?: string;
  searchText?: string;
}

interface sortOptions {
  key?: "id" | "name";
  order?: "asc" | "desc";
}

export function sortandFilter(
  data: Pokemon[],
  filterOptions: FilterOptions,
  sortOptions: sortOptions
): Pokemon[] {
  let result = [...data];

  if (filterOptions.type && filterOptions.type !== "all") {
    result = result.filter(
      (p) =>
        Array.isArray(p.types) &&
        p.types.some((t) => {
          if (typeof t === "string") {
            return t.toLowerCase() === filterOptions.type!.toLowerCase();
          }

          if (
            typeof t === "object" &&
            t !== null &&
            "type" in t &&
            typeof (t as { type?: { name?: string } }).type?.name === "string"
          ) {
            return (
              (t as { type: { name: string } }).type.name.toLowerCase() ===
              filterOptions.type!.toLowerCase()
            );
          }
          return false;
        })
    );
  }

  if (filterOptions.searchText) {
    const searchLower = filterOptions.searchText.toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(searchLower));
  }

  if (sortOptions.key) {
    result.sort((a, b) => {
      if (sortOptions.key === "id") {
        return sortOptions.order === "asc" ? a.id - b.id : b.id - a.id;
      } else if (sortOptions.key === "name") {
        return sortOptions.order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      return 0;
    });
  }
  return result;
}
