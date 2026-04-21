import AiSpecs from "./components/sections/ai-specailization/AiSpecs";
import Banner from "./components/sections/banner/banner";
import CaseStudy from "./components/sections/caseStudy/CaseStudy";
import Client from "./components/sections/clients/Client";
import Cta from "./components/sections/cta/Cta";
import Global from "./components/sections/global-presence/Global";
import Industries from "./components/sections/industries/Industries";
import Partner from "./components/sections/partners/Partner";
import Services from "./components/sections/services/Services";
import Stats from "./components/sections/stats/Stats";
import TechStack from "./components/sections/tech-stack/TechStack";
import Testimonials from "./components/sections/testimonials/Testimonials";
import WhyChoose from "./components/sections/whyChooseUs/WhyChoose";




export default function Home() {
  return (
  <>
  <Banner/>
  <Client/>
  <Services/>
  <Partner/>
  <CaseStudy/>
  <Stats/>
  <WhyChoose/>
  <Industries/>
  <AiSpecs/>
  <TechStack/>
  <Testimonials/>
  <Cta/>
  <Global/>
  </>
  );
}
