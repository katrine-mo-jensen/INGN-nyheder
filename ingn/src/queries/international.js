export const getInternational = `
query International {
  ingnContents(where: {category_contains_all: "International"}) {
    id
    title
    date
    author
    image {
      url
    }
    descriptionOfImage
    content {
      html
    }
  }
}
`;
