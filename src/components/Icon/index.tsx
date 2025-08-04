import { IconName, Icons } from "./Icons";

interface IconProps {
  name: IconName;
  className?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}

const Icon: React.FC<IconProps> = ({ name, className = '', width = 24, height = 24, ...props }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return null;
  
  return <IconComponent className={className} width={width} height={height} {...props} />;
};

export default Icon;
