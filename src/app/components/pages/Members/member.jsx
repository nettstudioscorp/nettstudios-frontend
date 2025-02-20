import React from 'react';
import { getMembers } from './member.service';
import '../Members/member.css';

const MemberList = () => {
  const members = getMembers();

  return (
    <div>
      <h1>Nossa Equipe</h1>
      <div className="member-list">
        {members.map((member, index) => (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div className="member-card">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
              <div className="member-role">{member.role}</div>
              <div className="member-name">{member.name}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MemberList;
