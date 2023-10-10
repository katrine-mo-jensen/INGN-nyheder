export const oneArticle = `
query OneArticle($id: ID) {
    ingnContent(where: {id: $id}) {
      author
      content {
        html
      }
      date
      title
      image {
        url
      }
    }
  }
  
`