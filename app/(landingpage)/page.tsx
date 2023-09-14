import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import  SocialIcons from "@/components/SocialIcons";

import "./_social-icons.scss";
import "./_navbar.scss";

import Navbar from "@/components/navbar";
const LandingPage = () => {
  return ( 
    <div >
      <Navbar />
      <SocialIcons />
      <LandingHero />
     



    </div>
   );
}
 
export default LandingPage;