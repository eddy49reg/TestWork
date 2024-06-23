import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StoreProvider } from "./components/tech/StoreProvider";
import { store } from "./store/store";
import { Layout } from "./components/layout/Layout";
import SellsPage from "./pages/SellsPage";

function App() {
    return (
        <StoreProvider store={store}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<SellsPage />} />
                    </Routes>
                </Layout>
            </Router>
        </StoreProvider>
    );
}

export default App;
