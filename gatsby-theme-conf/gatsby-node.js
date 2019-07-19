exports.createPages = ({ graphql, actions, reporter }) => {
  reporter.warn("make sure to load data from somewhere!")

  return graphql(
    `{
      contentfulConference {
        id
        name
        description {
          description
        }
        tracks {
          id
          sessions {
            id
            title
            description {
              description
            }
            speakers {
              id
              name
            }
            time
          }
        }
        sponsors {
          id
          name
          url
        }
        why {
          id
          name
          description
          iconClass
        }
        speakers {
          id
          name
          twitter
          bio {
            bio
          }
        }
        faq {
          id
          question
          answer {
            answer
          }
        }
        gallerys {
          image {
            fixed {
              src
            }
          }
        }
      }
    }
        
    `
  ).then(result=>{
    if(result.errors){
      reporter.warn('error'+result.errors)
    }

    actions.createPage({
      path: "/",
      component: require.resolve("./src/templates/page.js"),
      context: result.data.contentfulConference
    })
  })

  // TODO replace this with data from somewhere
  
}
