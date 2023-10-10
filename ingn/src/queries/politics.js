export const getPolitics = `
query Politics {
  ingnContents(where: {category_contains_all: "Politics"}) {
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