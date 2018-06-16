import dataImages from '../../../constants/constImage'

const {profilex1, profilex2} = dataImages.avatar
const {Default, pandahug} = dataImages.project

export default[
  {
    name : 'type your Section name here',
    description : 'this is just for app use',
    type : 'services',
    placement : '/',
    order : 2,
    option : {
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
    name : 'type your Section name here',
    description : 'this is just for app use',
    type : 'biography',
    placement : '/',
    order : 1,
    option : {
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
    name : 'type your Section name here',
    description : 'this is just for app use',
    type : 'project',
    placement : '/',
    order : 3,
    option : {
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
    name : 'type your Section name here',
    description : 'this is just for app use',
    type : 'lab',
    placement : '/',
    order : 4,
    option : {
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
  }
]