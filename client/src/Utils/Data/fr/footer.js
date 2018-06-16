import dataImages from '../../constants/constImage'

const {logo} = dataImages.icon
const {footerx1, footerx2} = dataImages.background

export default {
  name : 'Footer',
  description : '',
  option : {
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
      pathx2: footerx2
    }
  }

}