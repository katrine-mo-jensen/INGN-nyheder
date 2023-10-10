export const getSociety = `
query Society {
  ingnContents(where: {category_contains_all: "Society"}) {
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
  
`