import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import Home from "@/pages/home";
import PetBTIIntro from "@/pages/pet-bti-intro";
import FeedCalculator from "@/pages/feed-calculator";
import PetTranslator from "@/pages/pet-translator";
import PetInfo from "@/pages/pet-info";
import DogQuiz from "@/pages/dog-quiz";
import CatQuiz from "@/pages/cat-quiz";
import PetResult from "@/pages/pet-result";
import OwnerInfo from "@/pages/owner-info";
import OwnerQuiz from "@/pages/owner-quiz";
import OwnerResult from "@/pages/owner-result";
import Loading from "@/pages/loading";
import FinalResult from "@/pages/final-result";
import DailyFortune from "@/pages/daily-fortune";
import AgeCalculatorPage from "@/pages/age-calculator-page";
import NotFound from "@/pages/not-found";

import CompatibilityDetail from "@/pages/compatibility-detail";
import { FamilySiteLink } from "@/components/family-site-link";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pet-bti" component={PetBTIIntro} />
      <Route path="/pet-info" component={PetInfo} />
      <Route path="/dog-quiz" component={DogQuiz} />
      <Route path="/cat-quiz" component={CatQuiz} />
      <Route path="/pet-result" component={PetResult} />
      <Route path="/owner-info" component={OwnerInfo} />
      <Route path="/owner-quiz" component={OwnerQuiz} />
      <Route path="/owner-result" component={OwnerResult} />
      <Route path="/loading" component={Loading} />
      <Route path="/final-result" component={FinalResult} />
      <Route path="/compatibility-detail" component={CompatibilityDetail} />
      <Route path="/daily-fortune" component={DailyFortune} />
      <Route path="/age-calculator" component={AgeCalculatorPage} />
      <Route path="/feed-calculator" component={FeedCalculator} />
      <Route path="/pet-translator" component={PetTranslator} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <ThemeProvider defaultTheme="light" storageKey="pet-bti-theme">
          <TooltipProvider>
            <Toaster />
            <Router />
            <FamilySiteLink />
          </TooltipProvider>
        </ThemeProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;
