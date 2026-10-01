const plans = [
  {
    name: "1 Month",
    price: "£17",
    description: "Perfect for trying the service",
  },
  {
    name: "3 Months",
    price: "£24",
    description: "Great for regular viewers",
  },
  {
    name: "6 Months",
    price: "£30",
    description: "More value for longer use",
  },
  {
    name: "1 Year",
    price: "£60",
    description: "Our long-term option",
    popular: true,
  },
];

const features = [
  {
    icon: "📺",
    title: "Watch on your TV",
    text: "Designed for compatible Fire TV, Android TV and Smart TV devices.",
  },
  {
    icon: "⚡",
    title: "Simple setup",
    text: "Get clear instructions so you can get started without the headache.",
  },
  {
    icon: "📱",
    title: "Multiple devices",
    text: "Use compatible devices supported by your selected service.",
  },
  {
    icon: "💬",
    title: "Friendly support",
    text: "Have a question? Contact us and we'll help you through the setup.",
  },
];

const faqs = [
  {
    q: "How do I get started?",
    a: "Choose the package that suits you and contact us through WhatsApp. We'll explain the next steps.",
  },
  {
    q: "Which devices can I use?",
    a: "The service is intended for compatible Fire TV, Android TV and Smart TV devices.",
  },
  {
    q: "How long does setup take?",
    a: "Setup time depends on your device and the service you're using. We'll provide the relevant instructions.",
  },
  {
    q: "Do you provide support?",
    a: "Yes. If you have trouble during setup, contact us and we'll guide you through the process.",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.54 0 .22 5.32.22 11.86c0 2.09.55 4.13 1.59 5.93L.11 24l6.35-1.67a11.83 11.83 0 0 0 5.62 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.43-8.42ZM12.09 21.77h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.27c0-5.46 4.45-9.9 9.91-9.9 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.91-9.91 9.91Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function App() {
  const whatsappLink = `https://wa.me/${+447349012689}`;

  return (
    <div className="min-h-screen overflow-hidden bg-[#070714] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute bottom-[-300px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070714]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-lg shadow-lg shadow-purple-500/20">
              ▶
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                Fire Stick 4K Max{" "}
                <span className="text-purple-400">Entertainment</span>
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>

            <a href="#plans" className="transition hover:text-white">
              Plans
            </a>

            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-black transition hover:bg-slate-200"
            >
              <WhatsAppIcon />
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative px-6 pb-4 pt-16 sm:pt-24">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Your entertainment, your way
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your screen.
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Your entertainment.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              A simple way to get started with your compatible streaming setup.
              Choose a plan, get in touch, and we'll guide you through the next
              steps.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#plans"
                className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 font-bold shadow-xl shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/30"
              >
                View Plans →
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl  bg-white/5 px-8 py-4 font-bold backdrop-blur transition hover:bg-white/10 border border-purple-500/50"
              >
                <WhatsAppIcon />
                Talk to Us
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-600">
              Compatible devices and availability may vary.
            </p>
          </div>
        </section>

        <section id="features" className="px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-400">
                Why Fire Stick 4K Max Entertainment?
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Simple from start to finish.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                No complicated process. Pick your plan, contact us and we'll
                help you understand the setup.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl  p-7 border border-purple-500/50 shadow-lg shadow-purple-500/20  transition-all duration-300 
           hover:-translate-y-1 
           hover:shadow-2xl 
           hover:shadow-purple-500/20 
           hover:border-purple-400/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                    {feature.icon}
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="plans"
          className="border-y border-white/10 bg-white/[0.02] px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-400">
                Plans
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Pick what works for you.
              </h2>

              <p className="mt-4 text-slate-400">
                Flexible options for short-term and long-term use.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-7
  border border-purple-500/50
  shadow-[0_0_35px_8px_rgba(168,85,247,0.15)]
  transition-all duration-300

  hover:-translate-y-1
  hover:shadow-[0_0_45px_10px_rgba(168,85,247,0.25)]
  hover:border-purple-400/50
  hover:bg-white/[0.06]" ${
    plan.popular
      ? "border-purple-400/50 bg-gradient-to-b from-purple-500/15 to-white/[0.03] shadow-2xl shadow-purple-500/10"
      : "border-white/10 bg-white/[0.03]"
  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 text-xs font-bold">
                      MOST POPULAR
                    </div>
                  )}

                  <p className="text-sm font-semibold text-slate-400">
                    {plan.name}
                  </p>

                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                  </div>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                    {plan.description}
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-7 block rounded-xl px-5 py-3 text-center font-bold transition border border-purple-500/50 ${
                      plan.popular
                        ? "bg-white text-black hover:bg-slate-200"
                        : "bg-white/10 hover:bg-white/15"
                    }`}
                  >
                    Choose Plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400">
                Getting Started
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Three simple steps.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3 ">
              {[
                [
                  "01",
                  "Choose a plan",
                  "Pick the option that suits your needs.",
                ],
                [
                  "02",
                  "Contact us",
                  "Send us a message through WhatsApp.",
                  true,
                ],
                [
                  "03",
                  "Get started",
                  "We'll provide the relevant setup information.",
                ],
              ].map(([number, title, text, whatsapp]) => (
                <div
                  key={number}
                  className="rounded-2xl  p-8 border border-purple-500/50 shadow-lg shadow-purple-500/20
           transition-all duration-300 
           hover:-translate-y-1 
           hover:shadow-2xl 
           hover:shadow-purple-500/20 
           hover:border-purple-400/30"
                >
                  <span className="text-sm font-black text-purple-400">
                    {number}
                  </span>

                  <h3 className="mt-5 flex items-center gap-2 text-xl font-bold">
                    {whatsapp && <WhatsAppIcon />}
                    {title}
                  </h3>

                  <p className="mt-3 leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white/[0.02] px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400">
                FAQ
              </p>

              <h2 className="mt-3 text-3xl font-bold">Got questions?</h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl  p-6 border border-purple-500/50 "
                >
                  <summary className="cursor-pointer list-none font-semibold">
                    <div className="flex items-center justify-between gap-4">
                      {faq.q}

                      <span className="text-xl text-slate-500 transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-purple-500/50 shadow-lg shadow-purple-500/20 bg-gradient-to-br from-purple-600/20 via-white/[0.03] to-blue-600/10 px-6 py-20 text-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[100px] border border-purple-500/50 shadow-lg shadow-purple-500/20" />

            <h2 className="text-4xl font-black sm:text-5xl">
              Ready to get started?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Choose your plan and send us a message. We'll help you with the
              next steps.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-black transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              <WhatsAppIcon />
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-bold">
              Fire Stick 4K Max{" "}
              <span className="text-purple-400">Entertainment</span>
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Entertainment made simple.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#features" className="hover:text-white">
              Features
            </a>

            <a href="#plans" className="hover:text-white">
              Plans
            </a>

            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>

          <p className="text-sm text-slate-600">
            © 2026 Fire Stick 4K Max Entertainment
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
