import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../community/community.css';
import { fetchCommunityPosts } from '../community/service/community.service';
import { sendEmail } from '../community/service/emailjs';

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [reply, setReply] = useState('');
  const [repliedPostId, setRepliedPostId] = useState(null);
  const [commentType, setCommentType] = useState('');
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, [navigate]);

  const fetchPosts = async () => {
    try {
      const data = await fetchCommunityPosts();
      setPosts(data);
    } catch (error) {
      console.error('Erro ao buscar posts da comunidade:', error);
    }
  };

  const toggleReplyForm = (index) => {
    setRepliedPostId(repliedPostId === index ? null : index);
  };

  const handleReplySubmit = (e, postId) => {
    e.preventDefault();

    if (!commentType) {
      toast.error(
        'Por favor, selecione um tipo de comentário antes de enviar.'
      );
      return;
    }

    if (!reply.trim()) {
      toast.error('Por favor, preencha o campo de comentário.');
      return;
    }

    sendEmail(postId, reply, commentType, username, userEmail)
      .then(() => {
        toast.success('Comentário enviado com sucesso!');
        setReply('');
        setUsername('');
        setUserEmail('');
        setCommentType('');
        setRepliedPostId(null);
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
        toast.error('Falha ao enviar o comentário. Tente novamente.');
      });
  };

  const handleCommentTypeChange = (type) => {
    setCommentType(type);
    let message = '';

    switch (type) {
      case 'bug':
        message = '(Reportar Bug): ';
        break;
      case 'suggestion':
        message = '(Sugestão de Melhoria): ';
        break;
      case 'gameRequest':
        message = '(Pedido de Jogo): ';
        break;
      default:
        break;
    }

    setReply(message);
  };

  const toggleContent = (index) => {
    const updatedPosts = posts.map((post, i) =>
      i === index ? { ...post, expanded: !post.expanded } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="community-container">
      <ToastContainer />
      <Link
        to="https://discord.gg/wVGJYq9Fz2"
        className="updates-button"
        target="blank"
      >
        <button className="update-button">Discord</button>
      </Link>

      <Link
        to="https://www.youtube.com/@NettStudiosOficial/community"
        className="updates-button"
        target="blank"
      >
        <button className="update-button">YouTube</button>
      </Link>

      <h1>📢 Central de Novidades e Atualizações</h1>
      <p>
        Descubra as últimas melhorias, eventos, avisos e novidades da nossa
        plataforma. Fique sempre por dentro! Se você encontrou algum erro/bug
        deixe um comentário abaixo. Sinta-se avontade para dar sugestões sobre
        como melhorar o site, alteração/remoção de algum recurso, ou adicionar
        algo novo, você é quem manda! :3
      </p>

      <p>
        Dê uma descrição detalhada do erro para que ele seja corrigido o mais
        rápido possível. Para fazer pedidos de games deixe um comentário abaixo.
      </p>

      <div className="comment-type-selection">
        <label>
          <input
            type="radio"
            value="bug"
            checked={commentType === 'bug'}
            onChange={() => handleCommentTypeChange('bug')}
          />
          <span>Reportar Bug</span>
        </label>
        <label>
          <input
            type="radio"
            value="suggestion"
            checked={commentType === 'suggestion'}
            onChange={() => handleCommentTypeChange('suggestion')}
          />
          <span>Sugestão de Melhoria</span>
        </label>
        <label>
          <input
            type="radio"
            value="gameRequest"
            checked={commentType === 'gameRequest'}
            onChange={() => handleCommentTypeChange('gameRequest')}
          />
          <span>Pedido de Jogo</span>
        </label>
      </div>

      <form onSubmit={(e) => handleReplySubmit(e, null)}>
        {/* TODO:<input
          type="text"
          placeholder="Seu Nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Seu E-mail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        /> */}
        <textarea
          className="reply-input"
          placeholder="Escreva seu comentário..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          required
        />
        <button className="reply-submit-button" type="submit">
          Enviar
        </button>
      </form>

      <br />
      <br />

      <div className="posts-list">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <div className="post-header">
              <div className="post-author-logo">
                <span>{post.authorLogo}</span>
              </div>
              <div className="post-author-details">
                <h2 className="post-author-name">{post.author}</h2>
                <p className="post-time">{post.time}</p>
              </div>
            </div>

            <div className="post-content">
              <p>
                {post.expanded
                  ? post.content
                  : post.content.length > 150
                    ? `${post.content.slice(0, 150)}...`
                    : post.content}
              </p>
              {post.content.length > 150 && (
                <button
                  className="toggle-content-button"
                  onClick={() => toggleContent(index)}
                >
                  {post.expanded ? 'Ver Menos' : 'Ver Mais'}
                </button>
              )}
            </div>

            <div className="post-actions">
              <button
                className="action-button"
                onClick={() => toggleReplyForm(index)}
              >
                💬 Comentar
              </button>
            </div>
            {repliedPostId === index && (
              <form
                className="reply-form"
                onSubmit={(e) => handleReplySubmit(e, index)}
              >
                <textarea
                  className="reply-input"
                  placeholder="Escreva sua resposta..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />

                <button className="reply-submit-button" type="submit">
                  Enviar
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
