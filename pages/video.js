import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Video() {
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    setVideoUrl('https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4');
    setThumbnail('https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200');
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <Head>
        <title>Video Player</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Video Player</h1>
      <video
        className="w-full h-full object-cover"
        src={videoUrl}
        poster={thumbnail}
        controls
      />
    </div>
  );
}