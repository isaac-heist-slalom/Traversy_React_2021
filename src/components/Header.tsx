import { Button } from "./Button";
import { useLocation } from "react-router-dom";

type HeaderProps = {
  title: string;
  showAdd: boolean;
};

const Header = (props: HeaderProps) => {
  const { title, showAdd } = props;
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" &&
        (showAdd ? (
          <Button color="red" text="Close" />
        ) : (
          <Button color="green" text="Add" />
        ))}
    </header>
  );
};

export default Header;
