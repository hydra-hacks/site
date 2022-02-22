import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  team: Array<{ name: string; image: string }>;
  sponsors: Array<{ name: string; image: string; url: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    team: [
      {
        name: "Cow",
        image: "/team/cow-avatar.png",
      },
      {
        name: "Random Person",
        image: "/team/random-person.png",
      },
      {
        name: "Wahoo",
        image: "/team/wahoo.png",
      },
      {
        name: "Cow",
        image: "/team/cow-avatar.png",
      },
      {
        name: "Hugo",
        image: "/team/hugo.png",
      },
    ],
    sponsors: [
      {
        name: "Hack Club Bank",
        image: "/sponsors/hcb-outline.png",
        url: "https://hackclub.com/bank",
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
  let data = useLoaderData<IndexData>();

  return (
    <div className="font-sans text-white">
      <main>
        <div id="hero" className="py-16 text-center hero ">
          <h1 className="font-bold leading-snug ultratitle text-gray-50 text-shadow-3xl text shadow-indigo-500/50">
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
                  <h3 className="font-bold lead">
                    Will I be able to participate online?
                  </h3>
                  <p className="text-lg">
                    Currently, Hydra Hacks is planned to be <em>hybrid</em>{" "}
                    (both in-person and online) with a focus on the in-person
                    component.
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
                  <h3 className="font-bold lead">How much does it cost?</h3>
                  <p className="text-lg">
                    Hydra Hacks is free to attend thanks to our generous
                    sponsors. Food will be provided for in-person participants.
                  </p>
                </div>
              </div>

              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">
                    What if I don't have any experience?
                  </h3>
                  <p className="text-lg">
                    Don't worry! There will be workshops, mentors, and
                    opportunities to learn new things and get help on your
                    projects!
                  </p>
                </div>
              </div>

              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">
                    What happens if I don't have a team?
                  </h3>
                  <p className="text-lg">
                    No worries! On the first day, we'll have team formation
                    activities and make sure no hacker is left out.
                  </p>
                </div>
              </div>

              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">What is a hackathon?</h3>
                  <p className="text-lg">
                    A hackathon is an event where teams collaborate on a
                    project, or "hack", within a weekend. There will be
                    workshops and mentors to help you learn new things and get
                    help on your projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-14">
            <h2 className="pb-3 font-bold headline">Supported by</h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {data.sponsors.map((sponsor) => (
                <li key={sponsor.name}>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={sponsor.image} alt={sponsor.name} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-2 leading-relaxed caption">
              Interested in partnering with us? We'd love to chat! Contact us at{" "}
              <a href="mailto:hello@hydrahacks.org" className="underline">
                hello@hydrahacks.org
              </a>{" "}
              &rarr;
            </p>
          </div>
          <div className="container mt-24 mb-14">
            <h2 className="font-bold text-center lead">
              Made with &hearts; by the Hydra Hacks Team.
            </h2>
            <ul className="flex justify-center">
              {data.team.map((t) => (
                <li key={t.name} className="list-none -mr-14">
                  <img src={t.image} alt={t.name} className="w-40" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
