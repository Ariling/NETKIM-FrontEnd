export type ButtonProps = {
  name: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ name, className, ...props }: ButtonProps) {
  const baseClasses =
    'shadow-button text-peach-text border-2 border-peach bg-white active:shadow-none hover:shadow-button_hover';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <>
      <button name={name} className={combinedClasses} {...props}>
        {name}
      </button>
    </>
  );
}
