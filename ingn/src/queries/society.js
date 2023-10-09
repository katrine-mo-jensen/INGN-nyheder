export const getSociety = `
query Society {
  ingnContents(where: {category_contains_all: "Society"}) {
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
  
`