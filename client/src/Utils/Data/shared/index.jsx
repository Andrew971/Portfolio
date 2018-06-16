import dataImages from '../../constants/constImage'

const {
  english,
  french,
} = dataImages.icon

export default {
  langIcon : {
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
  socialLink : {
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
        name: 'Facebook',
        text: '',
        icon: 'fab fa-facebook-f',
        url: 'https://www.facebook.com/asebusiness/',
        order: 1
      }, {
        name: 'Instagram',
        text: '',
        icon: 'fab fa-instagram',
        url: 'https://www.instagram.com/andrewsordier',
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