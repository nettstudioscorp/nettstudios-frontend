import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: 'User',
    email: 'user@gmail.com',
  });

  const handleEdit = () => {
    navigate('/edit-profile', { state: { user } });
  };

  return (
    <div>
      <h1>Meu Perfil</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleEdit} className="btn btn-primary">
        Editar
      </button>
    </div>
  );
};

export default UserProfile;
