import emailjs from 'emailjs-com';


export const useEmail = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const [name, email, message] = e.target;
        let obj = {
          from_name: name.value,
          from_email: email.value,
          to_name: 'Arsen Kazaryan',
          message:message.value
        };
        const serviceId = 'service_a6emvrh';
        const templateId = 'template_w3wiepe';
        const publicKey = 'ZQHu0J1m9QVzXwAtR';
      
        emailjs.send(serviceId, templateId, obj, publicKey)
          .then((res) => {
            console.log('Email sent successfully!', res);
            e.target.reset(); 
          })
          .catch((err) => {
            console.error('Error sending email:', err);
          });
      };

      return {handleSubmit}
}
