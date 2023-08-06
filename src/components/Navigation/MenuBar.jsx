import { useContext } from "react";
import { homeContext } from "../../context";
export const MenuBar = () => {
  const { home, sethome } = useContext(homeContext);
  const onclickHome = () => {
    sethome(true);
  };

  return (
    <header>
      <div class="header-content">
        <div class="bank-name">
          <h1>Capital Two Bank</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a onClick={onclickHome}>Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
