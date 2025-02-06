import React, { useEffect } from 'react';
import { getMembers } from './member.service';
import '../Members/member.css';
import { useNavigate } from 'react-router-dom';

const MemberList = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    if (isAuthenticated !== 'true') {
      alert('Você precisa estar logado para acessar esta página.');
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const members = getMembers();

  return (
    <div className="member-list">
      {members.map((member, index) => (
        <div className="member-card" key={index}>
          <img src={member.image} alt={member.name} className="member-image" />
          <div className="member-role">{member.role}</div>
          <div className="member-name">{member.name}</div>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
