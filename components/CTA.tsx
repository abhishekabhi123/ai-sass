import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and personalize learning companion
      </h2>
      <p>
        Pick a name, voice, subject, personality - and start learning through
        voice conversations that feel natural and fun!
      </p>
      <Image src="/images/cta.svg" alt="cta-icon" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">Build a new companion</Link>
      </button>
    </section>
  );
};

export default CTA;
