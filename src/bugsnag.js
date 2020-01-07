import { Client } from 'bugsnag-react-native';

const API_KEY = require('../package.json').bugsnag;

const bugsnag = new Client(API_KEY);

export default bugsnag;
