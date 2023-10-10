export const getNational = `
query National {
  ingnContents(where: {category_contains_all: "National"}) {
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
