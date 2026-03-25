import { useState, createContext, useContext } from "react";
import { type Service, type PackageTier, type Addon } from "./data/services";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface Route { page: string; params?: Record<string, string>; }
export interface CartItem { service: Service; tier: PackageTier; addons: Addon[]; }
interface AppContextType {
  navigate: (page: string, params?: Record<string, string>) => void;
  route: Route;
  cart: CartItem | null;
  setCart: (item: CartItem | null) => void;
}
export const AppContext = createContext<AppContextType>({ navigate: () => {}, route: { page: "home" }, cart: null, setCart: () => {} });
export const useApp = () => useContext(AppContext);

function App() {
  const [route, setRoute] = useState<Route>({ page: "home" });
  const [cart, setCart] = useState<CartItem | null>(null);
  const navigate = (page: string, params?: Record<string, string>) => {
    setRoute({ page, params });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AppContext.Provider value={{ navigate, route, cart, setCart }}>
      <div className="min-h-screen grain relative" style={{ background: '#06080D', color: '#E2E8F0' }}>
        <Header />
        <main>
          {route.page === "home" && <HomePage />}
          {route.page === "services" && <ServicesPage />}
          {route.page === "service-detail" && <ServiceDetailPage />}
          {route.page === "checkout" && <CheckoutPage />}
          {route.page === "thank-you" && <ThankYouPage />}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
export default App;
