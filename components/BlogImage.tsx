import React from 'react';

const defaultImages = {
  'Actualités': '/images/blog/defaults/news.jpg',
  'Événements': '/images/blog/defaults/events.jpg',
  'Projets': '/images/blog/defaults/projects.jpg',
  'Témoignages': '/images/blog/defaults/testimonials.jpg',
  'Impact': '/images/blog/defaults/impact.jpg',
  'default': '/images/blog/defaults/default.jpg'
};

const defaultAvatars = {
  'default': '/images/blog/defaults/avatar.jpg'
};

interface BlogImageProps {
  src?: string;
  alt: string;
  category?: string;
  className?: string;
  type?: 'post' | 'avatar';
}

export default function BlogImage({ src, alt, category = 'default', className = '', type = 'post' }: BlogImageProps) {
  const getDefaultImage = () => {
    if (type === 'avatar') return defaultAvatars.default;
    return defaultImages[category as keyof typeof defaultImages] || defaultImages.default;
  };

  return (
    <img
      src={src || getDefaultImage()}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = getDefaultImage();
      }}
    />
  );
}
