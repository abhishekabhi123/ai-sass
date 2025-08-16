import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

import React from "react";

const Page = () => {
  return (
    <main>
      <h1> Popular companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the brainy explorer"
          topic="Neural network of brain"
          subject="science"
          duration={45}
          color="#ffd234"
        />
        <CompanionCard
          id="456"
          name="Countsy the number wizard"
          topic="Derivatives and integrals"
          subject="maths"
          duration={45}
          color="#e5d0ff"
        />
        <CompanionCard
          id="456"
          name="Verba the vocabulary builder"
          topic="language"
          subject="English Literature"
          duration={30}
          color="#DE7ff1"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
