import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  name: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, name, className, ...props }: CardProps) => {
  const baseClasses =
    'shadow-editShadow shadow-editShadow2 border-border-1 border-gray-border bg-white rounded-[9px]';
  const combinedClasses = `${baseClasses} ${className}`.trim();
  return (
    <div key={name} className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
