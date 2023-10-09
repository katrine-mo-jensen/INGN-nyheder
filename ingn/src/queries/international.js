export const getInternational = `
query International {
  ingnContents(where: {category_contains_all: "International"}) {
    title
    date
    author
    image {
      url
    }
    content {
      html
    }
  }
}
`;
