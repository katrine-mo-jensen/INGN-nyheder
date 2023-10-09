export const getSport = `
query Sport {
  ingnContents(where: {category_contains_all: "Sport"}) {
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