export const getAll = `
query All {
  ingnContents(where: {category_contains_all: "All"}) {
    id
    title
    date
    author
    image {
      url
    }
    descriptionOfImage
  }
}

  `;
