import { ButtonProps } from './Button';
// 이건 일반 버튼들 섀도우 없는 거!
const Btn = ({ name, ...props }: ButtonProps) => {
  return (
    <>
      <button name={name} {...props}>
        {name}
      </button>
    </>
  );
};

export default Btn;
