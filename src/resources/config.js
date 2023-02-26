import {encode} from 'base-64';

const config = {
  siteUrl: 'https://half-price.localsite.io/wp-json/wc/v3/',
  wcCredentials:
    'consumer_key=ck_9a7008b95ed77a91efd3c121824971a397d23243&consumer_secret=cs_816ee9ceae0d2b9817cda7faceecd4bb332afe9c',
  liveLinkCredentials: `Basic ${encode('cactus:nimble')}`,
};

export default config;
