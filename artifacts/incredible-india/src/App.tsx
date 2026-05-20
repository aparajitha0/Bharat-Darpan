import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import StatePage from "@/pages/StatePage";
import TamilNaduPage from "@/pages/TamilNaduPage";
import GoaPage from "@/pages/GoaPage";
import PunjabPage from "@/pages/PunjabPage";
import TripuraPage from "@/pages/TripuraPage";
import MeghalayaPage from "@/pages/MeghalayaPage";
import KeralaPage from "@/pages/KeralaPage";
import LadakhPage from "@/pages/LadakhPage";
import BiharPage from "@/pages/BiharPage";
import TelanganaPage from "@/pages/TelanganaPage";
import MadhyaPradeshPage from "@/pages/MadhyaPradeshPage";
import DadraandNagarHaveliandDamanandDiuPage from "@/pages/DadraandNagarHaveliandDamanandDiuPage";
import ChhattisgarhPage from "@/pages/ChhattisgarhPage";
import ChandigarhPage from "@/pages/ChandigarhPage";
import PuducherryPage from "@/pages/PuducherryPage";
import AboutPage from "@/pages/AboutPage";


const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/state/tamil-nadu" component={TamilNaduPage} />
      <Route path="/state/goa" component={GoaPage} />
      <Route path="/state/punjab" component={PunjabPage} />
      <Route path="/state/tripura" component={TripuraPage} />
      <Route path="/state/meghalaya" component={MeghalayaPage} />
      <Route path="/state/kerala" component={KeralaPage} />
      <Route path="/state/ladakh" component={LadakhPage} />
      <Route path="/state/bihar" component={BiharPage} />
      <Route path="/state/telangana" component={TelanganaPage} />
      <Route path="/state/madhya-pradesh" component={MadhyaPradeshPage} />
      <Route path="/state/daman-diu" component={DadraandNagarHaveliandDamanandDiuPage} />
      <Route path="/state/chhattisgarh" component={ChhattisgarhPage} />
      <Route path="/state/chandigarh" component={ChandigarhPage} />
      <Route path="/state/puducherry" component={PuducherryPage} />
      <Route path="/state/:stateId" component={StatePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
