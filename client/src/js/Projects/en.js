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
      description: 'Because a website is the key for your business development',
      key: 0
    }, {
      name: 'Marketing',
      url: '',
      img1: marketing0,
      img2: marketing,
      description: 'An unique and customized/perfectly adapted content to show your wonderful ideas',
      key: 1
    }, {
      name: 'Code',
      url: '',
      img1: code0,
      img2: code,
      description: 'Clean code, creativity and learning are my keywords',
      key: 2
    }
  ],
  product: [
    {
      name: 'Pandahug.ca',
      sub: 'ReactJs, PostgreSQL, Bootstrap, Redux, AWS',
      url: 'https://pandahug.ca',
      img: pandahug,
      description: 'Prepare. Apply. Succeed.Aspire for Happiness in Education. Find your dream school. Hit the ground running. Lead with excellence.',
      key: 0
    },
  ],
  lab: [
    {
      name: 'WebSite&Admin Page',
      sub: 'ReactJs, PostgreSQL, MongoDb, Material UI, Bootstrap, Redux, AWS',
      url: '',
      img: Default,
      description: 'Project in progress...',
      key: 0
    },
  ],

}
