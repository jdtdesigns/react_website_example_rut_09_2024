import axios from 'axios';
import { useState } from 'react';

const accessKey = '45ea0a30-6748-4a2f-b94b-e69469fa4e0b';
const url = 'https://api.web3forms.com/submit';
const initialState = {
  access_key: accessKey,
  subject: 'New Submission from Portfolio Contact Form',
  full_name: '',
  email: '',
  message: ''
};


function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post(url, formData);

    setAlertMessage('Your message has been received!');

    setTimeout(() => {
      setAlertMessage('');
    }, 4500);

    setFormData({...initialState});
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit} id="contact">
      <h3 className="text-center">Contact Me</h3>

      {alertMessage && <p className="message text-center">{alertMessage}</p>}

      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value="New Submission from Portfolio Contact Form" />

      <input onChange={handleInputChange} value={formData.full_name} name="full_name" type="text" placeholder="Enter your full name" required />
      <input onChange={handleInputChange} value={formData.email} name="email" type="email" placeholder="Enter your email address" required />
      <textarea onChange={handleInputChange} value={formData.message} name="message" placeholder="Tell me something" required></textarea>
      <button>Send</button>
    </form>
  )
}

export default ContactForm;

// const info = {
//   name: 'JD',
//   age: 44
// };

// const userData = {
//   ...info,
//   address: '555 coding st',
//   age: 45
// }