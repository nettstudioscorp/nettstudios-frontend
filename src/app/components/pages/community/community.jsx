import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../community/community.css';
import { getCommunityPosts } from '../community/service/community.service';
import { sendEmail } from '../community/service/emailjs';

const Community = () => {
  const [posts, setPosts] = useState(getCommunityPosts());
  const [reply, setReply] = useState('');
  const [repliedPostId, setRepliedPostId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      alert('Você precisa estar logado para acessar esta página.');
      navigate('/login');
    }
  }, [navigate]);

  const toggleReplyForm = (index) => {
    setRepliedPostId(repliedPostId === index ? null : index);
  };

  const handleReplySubmit = (e, postId) => {
    e.preventDefault();
    if (reply.trim()) {
      sendEmail(postId, reply)
        .then(() => {
          alert('Comentário enviado com sucesso!');
          setReply('');
          setRepliedPostId(null);
        })
        .catch((error) => {
          console.error('Erro ao enviar o e-mail:', error);
          alert('Falha ao enviar o comentário. Tente novamente.');
        });
    }
  };

  const toggleContent = (index) => {
    const updatedPosts = posts.map((post, i) =>
      i === index ? { ...post, expanded: !post.expanded } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="community-container">
      <h1>📢 Central de Novidades e Atualizações</h1>
      <p>
        Descubra as últimas melhorias, eventos, avisos e novidades da nossa
        plataforma. Fique sempre por dentro!
      </p>

      <Link to="/updates" className="updates-button">
        <button className="update-button">Ver Atualizações</button>
      </Link>

      <br />
      <br />
      <div className="posts-list">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <div className="post-header">
              {/* TODO: <div className="post-author-logo">
                <span>{post.authorLogo}</span>
              </div> */}

              {/* TODO: <div className="post-author-details">
                <h2 className="post-author-name">{post.author}</h2>
                <p className="post-time">{post.time}</p>
              </div> */}
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
