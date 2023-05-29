import { CssBaseline } from "@mui/material";
import SideBar from "./scenes/Global/sideBar/SideBar";
import TopBar from "./scenes/Global/topBar/TopBar";
import Dashboard from "./scenes/dashboard/Dashboard";
import CustomerPage from "./scenes/customer-page/CustomerPage";
import LoanRequestPage from "./scenes/loans/LoanRequestPage";
import ActivitySummary from "./scenes/customer-page/ActivitySummary";
import Settings from "./scenes/settings/Settings";

function App() {
  return (
    <CssBaseline>
      <div className="app">
        <SideBar />
        <main className="content">
          <TopBar />
          <Settings />
        </main>
      </div>
    </CssBaseline>
  );
}

export default App;
