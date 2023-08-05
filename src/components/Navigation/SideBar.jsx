import { useAuth0 } from "@auth0/auth0-react";

export const SideBar = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div>
      <aside>
        <div class="foldable-menu">
          <ul class="left-anchor">
            <li>
              <a href="#">
                <i class="fas fa-coins"></i>Deposit
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-money-bill-wave"></i>Withdrawal
              </a>
            </li>
            <li></li>
            <li>
              <a href="#">
                <i class="fas fa-exchange-alt"></i>Transfer
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-university"></i>Loans
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-cog"></i>Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  logout();
                }}
              >
                <i class="fas fa-sign-out-alt"></i>Logout
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
