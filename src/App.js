import "./App.css";
import PaymentListPage from "./pages/PaymentListPage";
import BillListPage from "./pages/BillListPage";
import LoginPage from "./pages/LoginPage";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

function App() {
  const location = useLocation();

  return (
    <div className="wrapper">
      <aside className="sidebar">
        <div className="brand">SecurPay</div>
        <ul className="side-menu">
          <li className={`menu-item ${location.pathname === "/payments" ? 'active' : ''}`}>
            <Link to="/payments">Payments</Link>
          </li>
          <li className={`menu-item ${location.pathname === "/bills" ? 'active' : ''}`}>
            <Link to="/bills">Bills</Link>
          </li>
        </ul>
      </aside>
      <main className="content">
        <header className="header">
          {location.pathname === "/payments" && "Payment List"}
          {location.pathname === "/bills" && "Bills List"}
        </header>
        <div>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/bills" exact={true} sensitive={true}>
              <BillListPage />
            </Route>
            <PrivateRoute path="/payments" exact sensitive={true}>
              <PaymentListPage />
            </PrivateRoute>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
