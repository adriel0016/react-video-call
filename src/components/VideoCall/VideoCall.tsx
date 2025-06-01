import { useParams } from 'react-router-dom';
import LocalVideo from '../LocalVideo/LocalVideo';
import AiStreamingAvatar from '../AiStreamingAvatar/AiStreamingAvatar';

interface VideoCallProps {}

const VideoCall: React.FC<VideoCallProps> = () => {
  const { uuid } = useParams();

  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-gray-800 text-white text-center">
        Chamada - Sessão: {uuid}
      </header>

      <div className="flex flex-1">
        <div className="flex-1 flex justify-center items-center bg-black">
          <LocalVideo />
        </div>

        <div className="flex-1 flex justify-center items-center bg-gray-200">
          <AiStreamingAvatar />
        </div>
      </div>
    </div>
  );
}

export default VideoCall;
