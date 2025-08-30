import Image, { ImageProps } from 'next/image';

export type ImageIconProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
};

export const ImageIcon: React.FC<ImageIconProps> = ({ src, alt, width = 24, height = 24, ...props }) => (
  <Image src={src} alt={alt} width={width} height={height} {...props} />
);
