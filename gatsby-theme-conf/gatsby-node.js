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
          name
          room
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
          logo{
            fixed(width:100,height:100) {
            src
            }
          }
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
            fixed(width:400,height:400) {
              src
            }
          }
        }
        slides {
          id
          title
          mainTitle
          action
          backgroundImage {
            fluid(maxWidth: 1200, maxHeight: 600) {
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
