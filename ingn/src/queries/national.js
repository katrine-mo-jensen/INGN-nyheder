export const getNational = `
query National {
  ingnContents(where: {category_contains_all: "National"}) {
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
