import React from 'react';
import './AIAvatar.scss';

interface AIAvatarProps {}

const AIAvatar: React.FC<AIAvatarProps> = () => {
  return (
    <div className="AIAvatar flex flex-col items-center justify-center h-full bg-gray-100 p-4" data-testid="AIAvatar">
      <img src="https://via.placeholder.com/300x300.png?text=IA+Avatar" alt="IA Avatar" className="rounded-full mb-4" />
      <p className="text-lg">Olá! Sou sua assistente IA.</p>
    </div>
  );
}

export default AIAvatar;
