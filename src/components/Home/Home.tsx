import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  const startCall = () => {
    const uuid = uuidv4();
    navigate(`/call/${uuid}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo à IA Video Call</h1>
      <p className="text-center mb-8 max-w-md">
        Clique no botão abaixo para iniciar a chamada com nossa assistente virtual.
      </p>
      <button
        onClick={startCall}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Iniciar Atendimento
      </button>
    </div>
  );
}

export default Home;
