import axios from 'axios';
const sendEmail = async (e) => {
  e.preventDefault();
  
  const formData = {
    name: e.target.user_name.value,
    email: e.target.user_email.value,
    message: e.target.message.value,
  };

  try {
    const response = await fetch('http://localhost:5000/send-email', {  // Use your backend URL here
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
};
