import Default from '../../Assets/img/default.png';
import sales from '../../Assets/img/sales.svg';
import marketing from '../../Assets/img/marketing.svg';
import code from '../../Assets/img/code.svg';
import pandahug from '../../Assets/img/pandahug.png';

export default {
  services: [
    {
      name: 'Sales',
      url: '',
      img: sales,
      description: 'Because a website is a matter for your business development',
      key: 0
    }, {
      name: 'Marketing',
      url: '',
      img: marketing,
      description: 'I value good content that gonna show the best of your idea',
      key: 1
    }, {
      name: 'Code',
      url: '',
      img: code,
      description: 'Clean code, creativity and learning are my key words',
      key: 2
    }
  ],
  product: [
    {
      name: 'Pandaguh',
      sub: 'ReactJs, PostgreSQL, Bootstrap, Redux, AWS',
      url: 'https://pandahug.ca',
      img: pandahug,
      description: 'test-description',
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
