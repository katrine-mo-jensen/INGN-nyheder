export const getAll = `
query All {
  ingnContents(where: {category_contains_all: "All"}) {
    title
    date
    author
    image {
      url
    }
  }
}

  `;
