import dataImages from '../../../constants/constImage'


const {
  react,
  redux,
  socket,
  graphql,
  html,
  css,
  mongodb,
  postgresql,
  sass,
  node,
  javascript,
  bootstrap,
  materialui,
  styledComponents,
  aws,
  heroku,
  git,
  github
} = dataImages.skills

export default [
  {
          name: 'type your Section name here',
          description: 'this is just for app use',
          type: 'focus',
          placement: '/skills',
          order: 1,
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: `What I Focus on`
            },
            image: {
              name: '',
              description: 'description',
              field: [
                {
                  name: 'React',
                  path_1: react,
                  path_2: '',
                  text: '',
                  order: 1
                }, {
                  name: 'Redux',
                  path_1: redux,
                  path_2: '',
                  text: '',
                  order: 2
                }, {
                  name: 'Socket.io',
                  path_1: socket,
                  path_2: '',
                  text: '',
                  order: 3
                }, {
                  name: 'GraphQL',
                  path_1: graphql,
                  path_2: '',
                  text: '',
                  order: 4
                }
              ]
            }
          }
        }, {
          name: 'type your Section name here',
          description: 'this is just for app use',
          type: 'knowledge',
          placement: '/skills',
          order: 1,
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: `What I Know`
            },
            image: {
              name: '',
              description: 'description',
              field: [
                {
                  name: 'HTML',
                  path_1: html,
                  path_2: '',
                  text: '',
                  order: 1
                }, {
                  name: 'CSS',
                  path_1: css,
                  path_2: '',
                  text: '',
                  order: 2
                }, {
                  name: 'Javascript',
                  path_1: javascript,
                  path_2: '',
                  text: '',
                  order: 3
                }, {
                  name: 'Sass',
                  path_1: sass,
                  path_2: '',
                  text: '',
                  order: 4
                }, {
                  name: 'Bootstrap',
                  path_1: bootstrap,
                  path_2: '',
                  text: '',
                  order: 5
                }, {
                  name: 'Material UI',
                  path_1: materialui,
                  path_2: '',
                  text: '',
                  order: 6
                }, {
                  name: 'Styled-Components',
                  path_1: styledComponents,
                  path_2: '',
                  text: '',
                  order: 7
                }, {
                  name: 'PostgreSQL',
                  path_1: postgresql,
                  path_2: '',
                  text: '',
                  order: 8
                }, {
                  name: 'MongoDb',
                  path_1: mongodb,
                  path_2: '',
                  text: '',
                  order: 9
                }, {
                  name: 'Node.Js',
                  path_1: node,
                  path_2: '',
                  text: '',
                  order: 10
                }, {
                  name: 'AWS',
                  path_1: aws,
                  path_2: '',
                  text: '',
                  order: 11
                }, {
                  name: 'Heroku',
                  path_1: heroku,
                  path_2: '',
                  text: '',
                  order: 12
                }, {
                  name: 'Git',
                  path_1: git,
                  path_2: '',
                  text: '',
                  order: 13
                }, {
                  name: 'GitHub',
                  path_1: github,
                  path_2: '',
                  text: '',
                  order: 14
                }
              ]
            }
          }
        }
  ]