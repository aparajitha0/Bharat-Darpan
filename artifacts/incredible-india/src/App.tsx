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
import KarnatakaPage from "@/pages/KarnatakaPage";
import ArunachalPradeshPage from "@/pages/ArunachalPradeshPage";
import AboutPage from "@/pages/AboutPage";
import JammuKashmirPage from "./pages/JammuKashmirPage";
import JharkhandPage from "./pages/JharkhandPage";
import ManipurPage from "./pages/ManipurPage";
import GujaratPage from "@/pages/GujaratPage";
import MizoramPage from "./pages/MizoramPage";
import NagalandPage from "./pages/NagalandPage";
import SikkimPage from "./pages/SikkimPage";
import WestBengalPage from "./pages/WestBengalPage";
import LakshadweepPage from "./pages/LakshadweepPage";
import UttarPradeshPage from "./pages/UttarPradeshPage";
import AndamanNicobarPage from "./pages/AndamanNicobarPage";
import HimachalPradeshPage from "./pages/HimachalPradesh";
import DelhiPage from "./pages/DelhiPage";
import HaryanaPage from "./pages/HaryanaPage";
import OdishaPage from "./pages/OdishaPage";

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
      <Route
        path="/state/daman-diu"
        component={DadraandNagarHaveliandDamanandDiuPage}
      />
      <Route path="/state/chhattisgarh" component={ChhattisgarhPage} />
      <Route path="/state/chandigarh" component={ChandigarhPage} />
      <Route path="/state/puducherry" component={PuducherryPage} />
      <Route path="/state/karnataka" component={KarnatakaPage} />
      <Route path="/state/arunachal-pradesh" component={ArunachalPradeshPage} />
      <Route path="/state/jammu-kashmir" component={JammuKashmirPage} />
      <Route path="/state/jharkhand" component={JharkhandPage} />
      <Route path="/state/manipur" component={ManipurPage} />
      <Route path="/state/gujarat" component={GujaratPage} />
      <Route path="/state/mizoram" component={MizoramPage} />
      <Route path="/state/nagaland" component={NagalandPage} />
      <Route path="/state/sikkim" component={SikkimPage} />
      <Route path="/state/west-bengal" component={WestBengalPage} />
      <Route path="/state/lakshadweep" component={LakshadweepPage} />
      <Route path="/state/uttar-pradesh" component={UttarPradeshPage} />
      <Route path="/state/andaman-nicobar" component={AndamanNicobarPage} />
      <Route path="/state/himachal-pradesh" component={HimachalPradeshPage} />
      <Route path="/state/delhi" component={DelhiPage} />
      <Route path="/state/haryana" component={HaryanaPage} />
      <Route path="/state/odisha" component={OdishaPage} />
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
