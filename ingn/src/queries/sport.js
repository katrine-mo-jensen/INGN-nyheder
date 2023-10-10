export const getSport = `
query Sport {
  ingnContents(where: {category_contains_all: "Sport"}) {
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