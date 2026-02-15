import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/FadeIn";
import FloatingHearts from "../components/FloatingHearts";
import AnimatedDivider from "../components/AnimatedDivider";
import LetterReveal from "../components/LetterReveal";

type EndingState = "none" | "yes" | "hug" | "hug-yes";

const Index = () => {
  const [ending, setEnding] = useState<EndingState>("none");
  const [showDelayedButton, setShowDelayedButton] = useState(false);

  const handleYes = () => {
    setEnding("yes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHug = () => {
    setEnding("hug");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setShowDelayedButton(true), 3000);
  };

  const handleHugYes = () => {
    setEnding("hug-yes");
  };

  if (ending === "yes" || ending === "hug-yes") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="min-h-screen flex items-center justify-center bg-wine px-6 relative overflow-hidden"
      >
        <FloatingHearts count={10} />
        <div className="max-w-lg text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl text-wine-foreground mb-12"
          >
            I knew it.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-2 text-wine-foreground/80 text-lg md:text-xl font-light leading-relaxed"
          >
            <p>Come here, <span className="text-love-soft italic">Vanessa</span>.</p>
            <p>You're officially mine now.</p>
            <p className="pt-4">
              And I promise to take this seriously —
              <br />
              but still keep it fun.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6, type: "spring" }}
            className="mt-12"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-love/60 mx-auto">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-10 text-wine-foreground/30 text-xs tracking-[0.3em] uppercase"
          >
            Harvlin & Vanessa — Effective immediately. WLEKKKKKK HAHAHAHAHAHAH
          </motion.p>
        </div>
      </motion.div>
    );
  }

  if (ending === "hug") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center bg-background px-6"
      >
        <div className="max-w-lg text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-foreground text-xl md:text-2xl font-light leading-relaxed"
          >
            Okay.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed mt-6"
          >
            But just so you know…
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-foreground text-lg md:text-xl font-light leading-relaxed mt-8"
          >
            after the hug,
            <br />
            I'm asking again.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="text-muted-foreground text-base font-light mt-10"
          >
            And I'm still hoping the answer is yes, <span className="text-love italic">Vanessa</span>.
          </motion.p>
          <AnimatePresence>
            {showDelayedButton && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-14"
              >
                <button
                  onClick={handleHugYes}
                  className="px-8 py-3 text-sm tracking-wide bg-primary text-primary-foreground rounded-sm hover:opacity-80 transition-opacity duration-300"
                >
                  Okay fine. Yes.
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-background relative">
      <FloatingHearts count={5} />

      {/* Section 1 – Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground text-center leading-tight">
            Okay. So I've been thinking.
          </h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="mt-8 text-muted-foreground text-lg md:text-xl font-light text-center">
            And I don't think this is just a phase anymore.
          </p>
        </FadeIn>
        <FadeIn delay={0.8}>
          <p className="mt-16 text-muted-foreground/60 text-xs tracking-[0.3em] uppercase">
            Scroll slowly. BACA YANG BENER. GAUSA CEPET-CEPET.
          </p>
        </FadeIn>
      </section>

      {/* Section – Names Introduction */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 py-24 relative z-10">
        <div className="max-w-md text-center">
          <FadeIn>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-loose">
              This is a story about
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-serif text-3xl md:text-5xl text-foreground mt-6">
              <LetterReveal text="ME" delay={0.5} />
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <p className="text-muted-foreground text-base md:text-lg font-light my-4">&</p>
          </FadeIn>
          <FadeIn delay={0.9}>
            <p className="font-serif text-3xl md:text-5xl text-love/80 mt-2">
              <LetterReveal text="YOU" delay={1.1} />
            </p>
          </FadeIn>
          <FadeIn delay={1.5}>
            <AnimatedDivider />
            <p className="text-muted-foreground/70 text-sm font-light mt-2">
              and how one of them fell, quietly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2 – Weeks */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 relative z-10">
        <div className="max-w-md text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-12">
              It's been weeks.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-foreground/70 text-base md:text-lg font-light leading-loose">
              <p>We didn't rush anything.</p>
              <p>We just kept choosing to talk.</p>
              <p>To stay.</p>
              <p>To understand each other a little more each day, yet you rarely talk about yourself, SO TALK TO ME NIGGA</p>
              <p className="pt-6 text-foreground/90">
                And somewhere along the way,
                <br />
                this started to matter to me.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.5}>
            <AnimatedDivider />
          </FadeIn>
        </div>
      </section>

      {/* Section – Small Confession */}
      <section className="min-h-[50vh] flex items-center justify-center px-6 py-16 relative z-10">
        <div className="max-w-sm text-center">
          <FadeIn>
            <p className="text-muted-foreground/60 text-xs tracking-[0.25em] uppercase mb-8">
              A small confession
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed italic">
              "I started looking forward to tomorrow
              <br />
              just because I knew I'd talk to you again."
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="text-muted-foreground/50 text-sm font-light mt-8">
              — Harvlin in his mind, probably at 2 AM, trying to sound cool but actually just being a soft idiot, well ofc I ga text u beneran karena maluu
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 3 – Playful */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 relative z-10">
        <div className="max-w-md text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-12">
              You're kinda dangerous, <span className="text-love/70"></span>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-5 text-foreground/70 text-base md:text-lg font-light leading-loose">
              <p>You make normal days feel lighter.</p>
              <p>You make me smile at my phone without realizing.</p>
              <p className="pt-2">
                And somehow,
                <br />
                what started as "just talking" and "salah dm"
                <br />
                turned into something I actually care about.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.5}>
            <AnimatedDivider />
          </FadeIn>
        </div>
      </section>

      {/* Section – Things I Notice */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 relative z-10">
        <div className="max-w-md text-center">
          <FadeIn>
            <p className="text-muted-foreground/60 text-xs tracking-[0.25em] uppercase mb-10">
              Things I notice about you
            </p>
          </FadeIn>
          {[
            "Every time I talk too much and you still stay.",
            "Every photo you send that somehow makes my day better.",
            "Every little funny message that catches me off guard.",
            "Your stubbornness (sometimes, in a cute way), which I secretly find adorable.",
            "The way you make even small moments feel like something worth remembering.",
          ].map((line, i) => (
            <FadeIn key={i} delay={0.15 * (i + 1)}>
              <p className="text-foreground/75 text-base md:text-lg font-light leading-loose mb-5">
                {line}
              </p>
            </FadeIn>
          ))}
          <FadeIn delay={0.9}>
            <p className="text-love/60 text-sm font-light mt-8 italic">
              Yeah. I pay attention.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 4 – Deep */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-primary relative z-10">
        <div className="max-w-md text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-12">
              And I don't want this to stay undefined.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-5 text-primary-foreground/70 text-base md:text-lg font-light leading-loose">
              <p>I like what we have.</p>
              <p>
                But I don't want to keep pretending
                <br />
                it's casual
              </p>
              <p>when it doesn't feel casual anymore.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-primary-foreground/40 text-sm font-light mt-16">
              Not with you babyyy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Breathing space */}
      <div className="h-32 md:h-48 bg-background relative z-10" />

      {/* Section – Before the Question */}
      <section className="min-h-[40vh] flex items-center justify-center px-6 py-16 relative z-10">
        <FadeIn>
          <p className="font-serif text-2xl md:text-4xl text-foreground/80 text-center leading-relaxed">
            So, Vanessa…
          </p>
        </FadeIn>
      </section>

      {/* Section 5 – The Question */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 relative z-10">
        <div className="max-w-lg text-center">
          <FadeIn>
            <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed mb-16">
              So here's my very official,
              <br />
              very serious,
              <br />
              slightly dramatic question.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              Will you be my girlfriend?
            </h2>
          </FadeIn>
          <FadeIn delay={0.7}>
            <p className="mt-10 text-muted-foreground text-sm md:text-base font-light">
              No pressure.
              <br />
              But also… a little pressure.
            </p>
          </FadeIn>
          <FadeIn delay={1}>
            <p className="mt-4 text-love/50 text-xs font-light italic">
              — From Harvlin, with all the courage he could gather, sorry i ga disanaaa
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 6 – Buttons */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 py-24 relative z-10">
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={handleYes}
              className="group relative px-10 py-4 text-sm tracking-wide bg-primary text-primary-foreground rounded-sm hover:opacity-80 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Yes. Obviously.</span>
              <motion.span
                className="absolute inset-0 bg-love/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <button
              onClick={handleHug}
              className="px-10 py-4 text-sm tracking-wide border border-primary/30 text-foreground rounded-sm hover:bg-love-soft/20 hover:border-love/30 transition-colors duration-300"
            >
              I need a hug first.
            </button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Index;
