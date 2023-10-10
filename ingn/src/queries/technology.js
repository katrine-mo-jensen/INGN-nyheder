export const getTechnology = `
query Technology {
  ingnContents(where: {category_contains_all: "Technology"}) {
    id
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