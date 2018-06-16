import dataImages from '../../constants/constImage'

const {headerHomex1, headerHomex2, headerSkillsx1, headerSkillsx2} = dataImages.header

export default {
  name : 'header',
  description : '',
  field : [
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
}