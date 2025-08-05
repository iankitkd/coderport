import Image, { ImageProps } from 'next/image';

export type ImageIconProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
};

export const ImageIcon: React.FC<ImageIconProps> = ({ src, alt, width = 26, height = 26, ...props }) => (
  <Image src={src} alt={alt} width={width} height={height} {...props} />
);
