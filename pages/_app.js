import '../styles/globals.css'
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
const bcrypt = require('bcrypt');

Amplify.configure({
  ...config, ssr: true
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
