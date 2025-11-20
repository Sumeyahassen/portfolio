import axios from 'axios';
const sendEmail = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    const response = await fetch('https://portfolio-backend-green-theta.vercel.app/send-email', {  // Use your backend URL here
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data=await response.json();
    console.log(data);

    if (response.ok) {
      alert('Email sent successfully! ');
    } else {
      alert('Failed to send email.');
    }
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
};
