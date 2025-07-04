import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <Head>
        <title>GoldTube</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">GoldTube</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <VideoCard
          title="Video 1"
          thumbnail="https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          videoUrl="https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4"
        />
        <VideoCard
          title="Video 2"
          thumbnail="https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          videoUrl="https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4"
        />
        <VideoCard
          title="Video 3"
          thumbnail="https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          videoUrl="https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4"
        />
      </div>
    </div>
  );
}