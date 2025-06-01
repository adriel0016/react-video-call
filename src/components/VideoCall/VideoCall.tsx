import React, { useEffect, useRef, useState } from 'react';

const VideoCall: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      console.log(stream.getVideoTracks());
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err: any) {
      console.error('Erro ao acessar câmera/mic:', err);
      setError(err.message || 'Erro desconhecido');
    }
  };

  useEffect(() => {
    startStream();
  }, []);

  useEffect(() => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
    }
  }, [videoRef]);

  return (
    <div>
      <h2>Chamada de Vídeo</h2>
      {/* {error ? (
      ) : ( */}
      <p style={{ color: 'red' }}>Erro: {error}</p>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{
            width: '640px',
            height: '480px',
            border: '1px solid black',
            backgroundColor: 'black',
          }}
        />
      {/* )} */}
    </div>
  );
};

export default VideoCall;