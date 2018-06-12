import dataImages from '../utils/constImage'

const {
  logo,
  english,
  french,
  sales,
  sales0,
  marketing,
  marketing0,
  code,
  code0
} = dataImages.icon

const {profilex1, profilex2} = dataImages.avatar

const {headerHomex1, headerHomex2, headerSkillsx1, headerSkillsx2} = dataImages.header

const {footerx1, footerx2} = dataImages.background

const {Default, pandahug} = dataImages.project

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

export default {
  sharedContent : {
    name: '',
    description: '',
    option: {
      langIcon: {
        name: 'LangIcon',
        description: '',
        field: [
          {
            name: 'English',
            text: 'English',
            icon: english,
            code: 'En',
            order: 1
          }, {
            name: 'French',
            text: 'Français',
            icon: french,
            code: 'Fr',
            order: 2
          }
        ]
      },
      socialLink: {
        name: 'link',
        description: 'description',
        field: [
          {
            name: 'LinkedIn',
            text: '',
            icon: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/in/andrewsordier/',
            order: 1
          }, 
          {
            name: 'Facebook',
            text: '',
            icon: 'fab fa-facebook-f',
            url: 'https://www.facebook.com/asebusiness/',
            order: 1
          }, 
          {
            name: 'Instagram',
            text: '',
            icon: 'fab fa-instagram',
            url: 'https://www.instagram.com/andrewsordier',
            order: 1
          }, 
          {
            name: 'GitHub',
            text: '',
            icon: 'fab fa-github-alt',
            url: 'https://github.com/Andrew971',
            order: 2
          }, {
            name: 'Skype',
            text: '',
            icon: 'fab fa-skype',
            url: 'skype:littledavis971?call',
            order: 3
          }
        ]
      }
    }
  },
  En : {
    Nav: {
      name: 'Naven',
      description: '',
      option: {
        logo: {
          name: 'Logo',
          text: 'AS',
          description: '',
          icon: 'logo',
          img_src: logo,
          url: '/'
        },
        link: {
          name: 'Link',
          description: '',
          field: [
            {
              name: 'Home link',
              text: 'Portfolio',
              url: '/',
              order: 1
            }, {
              name: 'Skills Link',
              text: 'Skills',
              url: '/skills',
              order: 2
            }
          ]
        }
      }
    },
    Header: {
      name: 'header',
      description: '',
      field: [
        {
          name: 'type your name here',
          description: 'this is just for app use',
          placement: '/',
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: `If at first you don’t succeed;
              call it version 1.0`
            },
            button: {
              name: 'Button',
              description: 'description',
              field: [
                {
                  name: 'Contact',
                  text: 'Need a website',
                  url: 'Button url',
                  order: 1
                }, {
                  name: 'Hire',
                  text: 'Looking to hire?',
                  url: 'Button url',
                  order: 2
                }
              ]
            },
            background: {
              name: 'Background',
              description: 'description',
              path: headerHomex1,
              pathx2: headerHomex2
            }
          }
        }, {
          name: 'type your name here',
          description: 'this is just for app use',
          placement: '/skills',
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: `If at first you don’t succeed;
              call it version 1.0`
            },
            button: {
              name: 'Button',
              description: 'description',
              field: [
                {
                  name: 'Contact',
                  text: 'Need a website',
                  url: 'Button url',
                  order: 1
                }, {
                  name: 'Hire',
                  text: 'Looking to hire?',
                  url: 'Button url',
                  order: 2
                }
              ]
            },
            background: {
              name: 'Background',
              description: 'description',
              path: headerSkillsx1,
              pathx2: headerSkillsx2
            }
          }
        }
      ]
    },
    Section: {
      name: 'Section',
      description: 'section',
      field: [
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
                  path: sales0,
                  pathx2: sales,
                  text: 'Because a website is the key for your business development',
                  order: 2
                }, {
                  name: 'Marketing',
                  icon: 'marketing',
                  path_1: marketing0,
                  path_2: marketing,
                  text: 'An unique and customized/perfectly adapted content to show your wonderful ideas',
                  order: 1
                }, {
                  name: 'Code',
                  icon: 'code',
                  path_1: code0,
                  path_2: code,
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
        }, {
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
    },
    Footer: {
      name: 'header',
      description: '',
      field: [
        {
          name: 'type your name here',
          description: 'this is just for app use',
          placement: '/',
          option: {
            logo: {
              name: 'Logo',
              text: 'AS',
              description: '',
              icon: 'logo',
              img_src: logo,
              url: '/'
            },
            title: {
              name: 'Title',
              description: 'description',
              text: `If at first you don’t succeed;
              call it version 1.0`
            },
            subtitle: {
              name: 'Sub-Title',
              description: 'description',
              text: 'Try and change Theme'
            },
            button: {
              name: 'Button',
              description: 'description',
              field: [
                {
                  name: 'Contact',
                  text: 'Need a website',
                  url: 'Button url',
                  order: 1
                }, {
                  name: 'Hire',
                  text: 'Looking to hire?',
                  url: 'Button url',
                  order: 2
                }
              ]
            },
            background: {
              name: 'Background',
              description: 'description',
              path: footerx1,
              pathx2: footerx2
            },
          }
        }, {
          name: 'type your name here',
          description: 'this is just for app use',
          placement: '/skills',
          option: {
            logo: {
              name: 'Logo',
              text: 'AS',
              description: '',
              icon: 'logo',
              img_src: logo,
              url: '/'
            },
            title: {
              name: 'Title',
              description: 'description',
              text: `If at first you don’t succeed;
              call it version 1.0`
            },
            subtitle: {
              name: 'Sub-Title',
              description: 'description',
              text: 'Try and change Theme'
            },
            button: {
              name: 'Button',
              description: 'description',
              field: [
                {
                  name: 'Contact',
                  text: 'Need a website',
                  url: 'Button url',
                  order: 1
                }, {
                  name: 'Hire',
                  text: 'Looking to hire?',
                  url: 'Button url',
                  order: 2
                }
              ]
            },
            background: {
              name: 'Background',
              description: 'description',
              path: footerx1,
              pathx2: footerx2
            },
            link: {
              name: 'link',
              description: 'description',
              field: [
                {
                  name: 'LinkedIn',
                  text: '',
                  icon: 'fab fa-linkedin-in',
                  url: 'https://www.linkedin.com/in/andrewsordier/',
                  order: 1
                }, {
                  name: 'GitHub',
                  text: '',
                  icon: 'fab fa-github-alt',
                  url: 'https://github.com/Andrew971',
                  order: 2
                }, {
                  name: 'Skype',
                  text: '',
                  icon: 'fab fa-skype',
                  url: 'skype:littledavis971?call',
                  order: 3
                }
              ]
            }
          }
        }
      ]
    }
  },
  Fr : {
    Nav: {
      name: 'Nav',
      description: '',
      option: {
        logo: {
          name: 'Logo',
          text: 'AS',
          description: '',
          icon: 'logo',
          img_src: logo,
          url: '/'
        },
        link: {
          name: 'Link',
          description: '',
          field: [
            {
              name: 'Home link',
              text: 'Portfolio',
              url: '/',
              order: 1
            }, {
              name: 'Skills Link',
              text: 'Compétences',
              url: '/skills',
              order: 2
            }
          ]
        }
      }
    },
    Header: {
      name: 'header',
      description: '',
      field: [
        {
          name: 'type your name here',
          description: 'this is just for app use',
          placement: '/',
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: `Il y a toujours de la place pour l'amélioration.`
            },
            button: {
              name: 'Button',
              description: 'description',
              field: [
                {
                  name: 'Contact',
                  text: `Besoin d'un site?`,
                  url: 'Button url',
                  order: 1
                }, {
                  name: 'Hire',
                  text: `Vous voulez embaucher?`,
                  url: 'Button url',
                  order: 2
                }
              ]
            },
            background: {
              name: 'Background',
              description: 'description',
              path: headerHomex1,
              pathx2: headerHomex2
            }
          }
        }, {
          name: 'type your name here',
          description: 'this is just for app use',
          placement: '/skills',
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: `Il y a toujours de la place pour l'amélioration.`
            },
            button: {
              name: 'Button',
              description: 'description',
              field: [
                {
                  name: 'Contact',
                  text: 'Need a website',
                  url: 'Button url',
                  order: 1
                }, {
                  name: 'Hire',
                  text: 'Looking to hire?',
                  url: 'Button url',
                  order: 2
                }
              ]
            },
            background: {
              name: 'Background',
              description: 'description',
              path: headerSkillsx1,
              pathx2: headerSkillsx2
            }
          }
        }
      ]
    },
    Section: {
      name: 'Section',
      description: 'section',
      field: [
        {
          name: 'type your Section name here',
          description: 'this is just for app use',
          type: 'services',
          placement: '/',
          order: 2,
          option: {
            title: {
              name: 'Services',
              description: 'description',
              text: `Services`
            },
            image: {
              name: '',
              description: 'description',
              field: [
                {
                  name: 'Commerce',
                  icon: 'sales',
                  text: `Un bon site internet est la clé pour le developpement de votre Business.`,
                  order: 1
                }, {
                  name: 'Marketing',
                  icon: 'marketing',
                  text: `Un contenu unique et personalisé, parfaitement adapté pour partager vos idées.`,
                  order: 2
                }, {
                  name: 'Code',
                  icon: 'code',
                  text: `Code quality, créativité et apprentissage sont mes mots-clés.`,
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
              text: `Salut! Je m'appelle Andrew`
            },
            subtitle: {
              name: 'Sub-Title',
              description: 'description',
              text: 'Je suis un Full Stack Web Developpeur'
            },
            paragraph: {
              name: 'Paragraph',
              description: 'description',
              field: [
                {
                  name: 'Paragraph name',
                  paragraph: `e suis originaire de la Guadeloupe, dans les Antilles françaises. J'ai travaillé comme commercial et Consultant en web marketing pendant quatre ans.`,
                  order: 1
                }, {
                  name: 'Paragraph name',
                  paragraph: `Aujourdh'hui, je design et developpe des produits interactifs et intuitifs pour professionnels et particuliers. J'aime concevoir des sites internet créatifs,modernes and personalisés. Lorsque je ne code pas, je lis, j'ecoute de la music ou bien je joue de la guitar.`,
                  order: 2
                }, {
                  name: 'Paragraph name',
                  paragraph: `Faire usage des technologies pour permetre à tout le monde d'être connecté est l'objectif que je me suis fixé.`,
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
              text: `Ce sur quoi j'ai travaillé`
            },
            project: {
              name: '',
              description: 'description',
              field: [
                {
                  name: 'Pandahug.ca',
                  sub: 'ReactJs, PostgreSQL, Bootstrap, Redux, AWS',
                  img: pandahug,
                  description: `reparer. S'inscrir. Réussir. Aspir au bonheur dans l'education.Trouve l'université de tes rêves. Cours vers l'excellence.`,
                  order: 1,
                  link: {
                    url: 'https://pandahug.ca',
                    text: 'Visiter le site'
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
              text: `Mes Autres Projects
              `
            },
            project: {
              name: '',
              description: 'description',
              field: [
                {
                  name: 'WebSite&Admin Page',
                  sub: 'ReactJs, PostgreSQL, MongoDb, Material UI, Bootstrap, Redux, AWS',
                  img: Default,
                  description: 'Project en cours...',
                  order: 1,
                  link: {
                    url: '',
                    text: 'Visiter le site'
                  }
                }
              ]
            }
          }
        }, {
          name: 'type your Section name here',
          description: 'this is just for app use',
          type: 'focus',
          placement: '/skills',
          order: 1,
          option: {
            title: {
              name: 'Title',
              description: 'description',
              text: `Mes Centres d'Interets`
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
              text: `Mes Autres competences`
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
    },
    Footer: {
      name: 'header',
      description: '',
      field: [
        {
          name: 'type your name here',
          description: 'this is just for app use',
          placement: '/',
          option: {
            logo: {
              name: 'Logo',
              text: 'AS',
              description: '',
              img_src: logo,
              url: '/'
            },
            title: {
              name: 'Title',
              description: 'description',
              text: `Il y a toujours de la place pour l'amélioration.`
            },
            subtitle: {
              name: 'Sub-Title',
              description: 'description',
              text: 'Essaye et change de Theme'
            },
            button: {
              name: 'Button',
              description: 'description',
              field: [
                {
                  name: 'Contact',
                  text: `Besoin d'un site?`,
                  url: 'Button url',
                  order: 1
                }, {
                  name: 'Hire',
                  text: `Vous voulez embaucher?`,
                  url: 'Button url',
                  order: 2
                }
              ]
            },
            background: {
              name: 'Background',
              description: 'description',
              path: footerx1,
              pathx2: footerx1
            },
            link: {
              name: 'link',
              description: 'description',
              field: [
                {
                  name: 'LinkedIn',
                  text: '',
                  icon: 'fab fa-linkedin-in',
                  url: 'https://www.linkedin.com/in/andrewsordier/',
                  order: 1
                }, {
                  name: 'GitHub',
                  text: '',
                  icon: 'fab fa-github-alt',
                  url: 'https://github.com/Andrew971',
                  order: 2
                }, {
                  name: 'Skype',
                  text: '',
                  icon: 'fab fa-skype',
                  url: 'skype:littledavis971?call',
                  order: 3
                }
              ]
            }
          }
        }, {
          name: 'type your name here',
          description: 'this is just for app use',
          placement: '/skills',
          option: {
            logo: {
              name: 'Logo',
              text: 'AS',
              description: '',
              img_src: logo,
              url: '/'
            },
            title: {
              name: 'Title',
              description: 'description',
              text: `Il y a toujours de la place pour l'amélioration.`
            },
            subtitle: {
              name: 'Sub-Title',
              description: 'description',
              text: 'Essaye et change de Theme'
            },
            button: {
              name: 'Button',
              description: 'description',
              field: [
                {
                  name: 'Contact',
                  text: `Besoin d'un site?`,
                  url: 'Button url',
                  order: 1
                }, {
                  name: 'Hire',
                  text: `Vous voulez embaucher?`,
                  url: 'Button url',
                  order: 2
                }
              ]
            },
            background: {
              name: 'Background',
              description: 'description',
              path: footerx1,
              pathx2: footerx1
            }
          }
        }
      ]
    }
  },
  websitePage : [
    {
      name: 'page 1',
      path: ''
    }, {
      name: 'page 2',
      path: ''
    }
  ],
  contentType : [
    {
      name: 'Header',
      description: 'Header',
      field: [
        {
          name: 'type your name here',
          description: 'this is just for app use',
          placement: '',
          option: []
        }
      ]
    }, {
      name: 'Section',
      description: 'section',
      field: [
        {
          name: 'type your Section name here',
          description: 'this is just for app use',
          placement: '',
          option: []
        }
      ]
    }
  ],
  contentOption : [
    {
      name: 'Button',
      description: 'description',
      field: [
        {
          name: 'Button Name',
          text: 'Button text',
          url: 'Button url',
          order: 1
        }
      ]
    }, {
      name: 'Background',
      description: 'description',
      field: [
        {
          name: 'Background Name',
          text: 'Background Text',
          color: 'test',
          order: 1
        }
      ]
    }, {
      name: 'Image',
      description: 'description',
      field: [
        {
          name: 'Image name',
          url: 'Image url',
          path: 'Image path',
          order: 1
        }
      ]
    }, {
      name: 'Title',
      description: 'description',
      field: [
        {
          name: 'Title name',
          text: 'Title text',
          order: 1
        }
      ]
    }, {
      name: 'Sub-Title',
      description: 'description',
      field: [
        {
          name: 'Sub-Title name',
          text: 'Sub-Title text',
          order: 1
        }
      ]
    }, {
      name: 'Paragraph',
      description: 'description',
      field: [
        {
          name: 'Paragraph name',
          paragraph: 'Paragraph p',
          order: 1
        }
      ]
    }
  ]
}