import dataImages from '../../../constants/constImage'

const {profilex1, profilex2} = dataImages.avatar
const {Default, pandahug} = dataImages.project

export default [
  {
          name: 'type your Section name here',
          description: 'this is just for app use',
          type: 'services',
          placement: '/',
          order: 2,
          option: {
            title: {
              name: 'Service',
              description: 'description',
              text: `Services`
            },
            image: {
              name: '',
              description: 'description',
              field: [
                {
                  name: 'Sales',
                  icon: 'sales',
                  text: 'Because a website is the key for your business development',
                  order: 2
                }, {
                  name: 'Marketing',
                  icon: 'marketing',
                  text: 'An unique and customized/perfectly adapted content to show your wonderful ideas',
                  order: 1
                }, {
                  name: 'Code',
                  icon: 'code',
                  text: 'Clean code, creativity and learning are my keywords',
                  order: 3
                }
              ]
            }
          }
        }, {
          name: 'type your Section name here',
          description: 'this is just for app use',
          type: 'biography',
          placement: '/',
          order: 1,
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: 'Hello! My name is Andrew'
            },
            subtitle: {
              name: 'Sub-Title',
              description: 'description',
              text: 'I am a Full Stack Web Developer'
            },
            paragraph: {
              name: 'Paragraph',
              description: 'description',
              field: [
                {
                  name: 'Paragraph name',
                  paragraph: `Originally from Guadeloupe in the Carribean. I was working as a Sales
                  Representative and also acting as a Web Consultant for four years.`,
                  order: 1
                }, {
                  name: 'Paragraph name',
                  paragraph: `Now, I design and develop interactive and intuitive digital products for both
                  business and consumer use. I enjoy building creative, modern and custom
                  websites. When I am not coding, you will find me reading, listening to music or
                  playing guitar.`,
                  order: 2
                }, {
                  name: 'Paragraph name',
                  paragraph: ` My lifetime goal is using technology to connect people and help them communicate
                  with each other.`,
                  order: 3
                }
              ]
            },
            image: {
              name: '',
              description: 'description',
              field: [
                {
                  name: 'Image name',
                  path: profilex1,
                  pathx2: profilex2,
                  text: ''
                }
              ]
            },
            background: {
              name: 'Background',
              description: 'description',
              path: ''
            }
          }
        }, {
          name: 'type your Section name here',
          description: 'this is just for app use',
          type: 'project',
          placement: '/',
          order: 3,
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: `What I worked on`
            },
            project: {
              name: '',
              description: 'description',
              field: [
                {
                  name: 'Pandahug.ca',
                  sub: 'ReactJs, PostgreSQL, Bootstrap, Redux, AWS',
                  url: 'https://pandahug.ca',
                  img: pandahug,
                  description: `Prepare. Apply. Succeed.Aspire for Happiness in Education. Find your dream school. Hit the ground running. Lead with excellence.`,
                  order: 1,
                  link: {
                    url: 'https://pandahug.ca',
                    text: 'Visit the website'
                  }
                }
              ]
            }
          }
        }, {
          name: 'type your Section name here',
          description: 'this is just for app use',
          type: 'lab',
          placement: '/',
          order: 4,
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: `My Side Project`
            },
            project: {
              name: '',
              description: 'description',
              field: [
                {
                  name: 'WebSite&Admin Page',
                  sub: 'ReactJs, PostgreSQL, MongoDb, Material UI, Bootstrap, Redux, AWS',
                  img: Default,
                  description: 'Project in progress...',
                  order: 1,
                  link: {
                    url: '',
                    text: 'Visit the website'
                  }
                }
              ]
            }
          }
        }
  ]