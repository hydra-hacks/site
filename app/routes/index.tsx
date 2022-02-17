import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs",
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs",
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d",
      },
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions",
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading",
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries",
      },
    ],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Hydra Hacks",
    description:
      "Hydra Hacks is a 48-hour in-person hackathon for gender marginalized students!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  // let data = useLoaderData<IndexData>();

  return (
    <div className="font-sans text-white">
      <main>
        <div id="hero" className="py-16 text-center hero ">
          <h1 className="font-bold leading-snug ultratitle text-gray-50 text-shadow-3xl">
            Hydra Hacks
          </h1>
          <p className="max-w-3xl mx-auto subheadline">
            The West Coast's largest hackathon for marginalized genders. Hybrid.
            June 2022.
          </p>

          <div className="grid items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur opacity-75 transition duration-1000 group-hover:opacity-100"></div>
              {/* <Link to="/register"> */}
              <button className="relative flex items-center px-6 py-4 text-xl leading-none bg-blue-500 rounded-lg cursor-not-allowed">
                <span className="text-white hover:no-underline">
                  Register (soon)
                </span>
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <section className="px-6 text-xl md:px-12">
          <div className="container mb-14">
            <h2 className="font-bold headline" id="about">
              Something for everyone...
            </h2>
            <p className="leading-relaxed">
              Hydra Hacks is a 24-hour high school hackathon in the Bay Area.
              Whether you're just writing your first line of code or you're an
              expert hacker, Hydra Hacks is for you. You'll have the opportunity
              to meet new friends, build awesome projects while attending
              workshops, eating food, playing games, and more! Hydra Hacks is a{" "}
              <strong>gender-focused</strong> event &amp; open to all high
              school students of marginalized genders!
            </p>
          </div>

          <div className="container mb-14">
            <h2 className="font-bold headline" id="faq">
              FAQ
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">Who can participate?</h3>
                  <p className="text-lg">
                    We adhere to strict guidelines for staying safe and healthy.
                    All participants must be masked &amp; vaccinated in order to
                    attend in-person.
                  </p>
                </div>
              </div>
              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">
                    Will I be able to participate online?
                  </h3>
                  <p className="text-lg">
                    Currently, Hydra Hacks is planned to be <em>hybrid</em>{" "}
                    (both in-person and online). Although, the main focus will
                    be at the physical event.
                  </p>
                </div>
              </div>
              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">What about COVID-19?</h3>
                  <p className="text-lg">
                    We adhere to strict guidelines for staying safe and healthy.
                    All participants must be masked &amp; vaccinated in order to
                    attend in-person.
                  </p>
                </div>
              </div>
              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">
                    What if I don't have any experience?
                  </h3>
                  <p className="text-lg">
                    We adhere to strict guidelines for staying safe and healthy.
                    All participants must be masked &amp; vaccinated in order to
                    attend in-person.
                  </p>
                </div>
              </div>

              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">How much does it cost?</h3>
                  <p className="text-lg">
                    Hydra Hacks is free to attend thanks to our generous
                    sponsors. Food will be provided.
                  </p>
                </div>
              </div>

              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">What is a hackathon?</h3>
                  <p className="text-lg">
                    We adhere to strict guidelines for staying safe and healthy.
                    All participants must be masked &amp; vaccinated in order to
                    attend in-person.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-14">
            <h2 className="pb-3 font-bold headline">Supported by</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <img src="/sponsors/hcb-outline.png" alt="Hack Club Bank" />
            </div>
            <p className="mt-2 leading-relaxed caption">
              Interested in partnering with us? We'd love to chat! Contact us at{" "}
              <a href="mailto:hello@hydrahacks.org" className="underline">
                hello@hydrahacks.org
              </a>{" "}
              &rarr;
            </p>
          </div>
          <div className="container mb-14">
            <h2 className="font-bold headline">Team</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <p>Memojis wahoo</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
