'use client';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/6969975/pexels-photo-6969975.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/15647623/pexels-photo-15647623/free-photo-of-a-woman-with-afro-hair-sitting-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/15647643/pexels-photo-15647643/free-photo-of-a-woman-with-an-afro-sitting-on-a-bench-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/15647610/pexels-photo-15647610/free-photo-of-a-woman-in-a-yellow-top-and-brown-shorts-standing-on-a-ledge.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative mt-8">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className=" flex justify-between gap-4 mt-4 cursor-pointer">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative mt-8 "
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
