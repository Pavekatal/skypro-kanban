import { SWhiteButton } from "./SWhiteButton.styled";

const WhiteButton = ({ id, children, variant, onClick }) => {
  return (
    <SWhiteButton
      id={id}
      type="button"
      $popUserSet={variant === "popUserSet"}
      $popExitNo={variant === "popExitNo"}
      $btnBor={variant === "btnBor"}
      $hover03={true}
      onClick={onClick}
    >
      {children}
    </SWhiteButton>
  );
};

export default WhiteButton;
