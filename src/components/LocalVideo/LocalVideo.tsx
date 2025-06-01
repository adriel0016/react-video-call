import React from 'react';
import './LocalVideo.scss';

interface LocalVideoProps {}

const LocalVideo: React.FC<LocalVideoProps> = () => (
  <div className="LocalVideo" data-testid="LocalVideo">
    LocalVideo Component
  </div>
);

export default LocalVideo;
