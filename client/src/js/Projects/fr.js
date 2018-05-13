import Default from '../../Assets/img/default.png';
import sales from '../../Assets/img/sales.svg';
import sales0 from '../../Assets/img/salesO.svg';
import marketing from '../../Assets/img/marketing.svg';
import marketing0 from '../../Assets/img/marketingO.svg';
import code from '../../Assets/img/code.svg';
import code0 from '../../Assets/img/codeO.svg';
import pandahug from '../../Assets/img/pandahug.png';

export default {
  services: [
    {
      name: 'Sales',
      url: '',
      img1: sales0,
      img2: sales,
      description: `Parce qu'un site internet est la clés pour le developpement de votre Business.`,
      key: 0
    }, {
      name: 'Marketing',
      url: '',
      img1: marketing0,
      img2: marketing,
      description: `Un contenu unique et personalisé, parfaitement adapté pour partager vos idées.`,
      key: 1
    }, {
      name: 'Code',
      url: '',
      img1: code0,
      img2: code,
      description: 'Code quality, créativité et apprentissage sont mes mots-clés.',
      key: 2
    }
  ],
  product: [
    {
      name: 'Pandaguh',
      sub: 'ReactJs, PostgreSQL, Bootstrap, Redux, AWS',
      url: 'https://pandahug.ca',
      img: pandahug,
      description: `Preparer. S'inscrir. Réussir. Aspir au bonheur dans l'education.Trouve l'université de tes rêves. Cours vers l'excellence.`,
      key: 0
    },
  ],
  lab: [
    {
      name: 'WebSite&Admin Page',
      sub: 'ReactJs, PostgreSQL, MongoDb, Material UI, Bootstrap, Redux, AWS',
      url: '',
      img: Default,
      description: 'Project en cours...',
      key: 0
    },
  ],

}
