import React from 'react';
import { google, slack, atlassian, dropbox} from './imports';
import './brand.css';

const Brand = () => (
  <div className="mck4__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
  </div>
);

export default Brand;