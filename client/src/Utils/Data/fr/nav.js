import dataImages from '../../constants/constImage'

const {logo} = dataImages.icon

export default {
  name : 'Nav',
  description : '',
  option : {
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
}