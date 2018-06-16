import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './Shared';
import Providers from './Utils/Providers';
import {Route} from 'react-router-dom';

ReactDOM.render(<Providers><Route path="/" component={App} />
</Providers>, document.getElementById('root'));

registerServiceWorker();
