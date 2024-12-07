import React, { useState } from 'react';
import '../community/community.css';
import { getCommunityPosts } from '../community/service/community.service';

const Community = () => {
  const [posts, setPosts] = useState(getCommunityPosts());
  const [reply, setReply] = useState('');
  const [repliedPostId, setRepliedPostId] = useState(null);

  const toggleReplyForm = (index) => {
    setRepliedPostId(repliedPostId === index ? null : index);
  };

  const handleReplySubmit = (e, postId) => {
    e.preventDefault();
    if (reply.trim()) {
      alert(`Comentário enviado: "${reply}" no post ${postId}`);
      setReply('');
      setRepliedPostId(null);
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
      <h1>🔔 Central da Comunidade</h1>
      <p>
        Fique por dentro das últimas novidades, melhorias, avisos e agendas do
        mês da plataforma.
      </p>
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
              {/* TODO: <button className="action-button">👍 {post.likes}</button> */}
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
