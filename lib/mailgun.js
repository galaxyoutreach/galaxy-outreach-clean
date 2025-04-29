import formData from 'form-data';
import Mailgun from 'mailgun.js';
const mg = new Mailgun(formData);
const client = mg.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});
export default client;