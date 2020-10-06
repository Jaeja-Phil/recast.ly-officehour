import React from 'react';
import VideoListEntry from './VideoListEntry';

function VideoList(props) {
  return (
    <div>
      <div>비디오 리스트를 담고있는 컴포넌트 입니다</div>
      {props.videos.map((video, idx) => (
        <VideoListEntry key={idx} title={video} />
      ))}
    </div>
  );
}

export default VideoList;
