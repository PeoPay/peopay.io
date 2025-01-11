import { memo } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className,
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  ...props
}: OptimizedImageProps) {
  // Generate WebP source if not already WebP
  const webpSrc = src.endsWith('.webp') ? src : src.replace(/\.(jpg|jpeg|png)$/, '.webp');
  
  return (
    <picture>
      <source
        srcSet={`${webpSrc} 1x, ${webpSrc.replace('.', '@2x.')} 2x`}
        type="image/webp"
      />
      <source
        srcSet={`${src} 1x, ${src.replace('.', '@2x.')} 2x`}
        type={`image/${src.split('.').pop()}`}
      />
      <img
        src={src}
        alt={alt}
        className={cn('max-w-full h-auto', className)}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
});