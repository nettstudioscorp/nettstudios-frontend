import emailjs from 'emailjs-com';

export const sendEmail = (postId, reply) => {
  const emailData = {
    to_name: 'Equipe NettStudios',
    from_name: 'Usuário do NettStudios',
    message: `Comentário no post ${postId + 1}: "${reply}"`,
  };

  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    emailData,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};
