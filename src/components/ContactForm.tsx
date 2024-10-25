function ContactForm() {
  const accessKey = '45ea0a30-6748-4a2f-b94b-e69469fa4e0b';

  return (
    <form id="contact" action="https://api.web3forms.com/submit" method="POST">
      <h3 className="text-center">Contact Me</h3>

      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value="New Submission from Portfolio Contact Form" />

      <input name="full_name" type="text" placeholder="Enter your full name" required />
      <input name="email" type="email" placeholder="Enter your email address" required />
      <textarea name="message" placeholder="Tell me something" required></textarea>
      <button>Send</button>
    </form>
  )
}

export default ContactForm;

