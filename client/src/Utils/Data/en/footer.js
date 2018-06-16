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

    }
  }

}