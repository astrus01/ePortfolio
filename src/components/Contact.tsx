import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

emailjs.init('6v5K1nKED3i0hpfZP');

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const serviceID = 'service_0vx2oel';
      const templateID = 'template_n2nvbyq';
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send(serviceID, templateID, templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error);
          alert("Message failed to send.");
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            sx={{ position: 'relative', zIndex: 10 }} /* Force the form to the front */
          >
            <div className='form-flex'>
              <TextField
                required
                variant="outlined"
                id="name-input"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={{
                  zIndex: 20,
                  pointerEvents: 'auto',
                  input: { color: 'var(--text-color, #ffffff)' } /* Ensure text is visible */
                }}
              />
              <TextField
                required
                variant="outlined"
                id="email-input"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                sx={{
                  zIndex: 20,
                  pointerEvents: 'auto',
                  input: { color: 'var(--text-color, #ffffff)' }
                }}
              />
            </div>
            <TextField
              required
              variant="outlined"
              id="message-input" /* Ensure this ID is unique too */
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={{
                zIndex: 20,
                pointerEvents: 'auto',
                textarea: { color: 'var(--text-color, #ffffff)' }
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
              sx={{ zIndex: 20, pointerEvents: 'auto' }}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
