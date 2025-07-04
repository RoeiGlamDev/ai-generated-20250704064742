import Link from 'next/link';
import Image from 'next/image';

export default function VideoCard({ title, thumbnail, videoUrl }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={200}
        objectFit="cover"
        className="rounded-lg"
      />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <Link href={`/video`}>
        <a className="text-blue-600 hover:text-blue-800">Watch Now</a>
      </Link>
    </div>
  );
}