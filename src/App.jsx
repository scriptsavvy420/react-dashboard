import "./App.css";
import DashboardContainer from "./components/DashboardContainer";
import { AppContextProviderComponent } from "./context/AppContext";

function App() {
  return (
    <AppContextProviderComponent>
      <DashboardContainer />
    </AppContextProviderComponent>
  );
}

export default App;
