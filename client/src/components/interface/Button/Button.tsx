import { FC } from "react";
import { btns } from "./button.styles"

interface propsButton {
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
  value?: string;
  margin?: string;
  availability?: boolean;
}

const Button: FC<propsButton> = ({
  availability,
  children,
  height,
  onClick,
  radius,
  width,
  value,
  margin,
}) => {
  return (
    <button
      disabled={availability}
      onClick={onClick}
      style={{
        borderRadius: radius,
        height,
        width,
        margin
      }}
      css={!availability ? btns : btns[":disabled"]}
    >
      {children}
      {value}
    </button>
  );
}

export default Button;