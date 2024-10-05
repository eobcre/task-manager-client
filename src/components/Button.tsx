interface ButtonProps {
  buttonName: string;
  buttonStyle: string;
  buttonClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonName, buttonStyle, buttonClick }) => {
  return (
    <button className={`cursor-pointer ${buttonStyle}`} onClick={buttonClick}>
      {buttonName}
    </button>
  );
};

export default Button;
