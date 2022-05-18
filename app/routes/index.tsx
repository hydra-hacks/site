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
        name: "Mmmmmmmmm",
        image: "/team/wahoo.png",
      },
      {
        name: "Cow",
        image: "/team/cow-avatar.png",
      },
      {
        name: "Hugo Hu",
        image: "/team/hugo.png",
      },
      {
        name: "Grace Cai",
        image: "/team/grace.png",
      },
      {
        name: "Rebecca Wang",
        image: "/team/rebecca.png",
      },
      {
        name: "Tahya Mumtahi",
        image: "/team/tahya.png",
      },
      {
        name: "Joy Zou",
        image: "/team/joy.png",
      },
      {
        name: "Amanda Zhang",
        image: "/team/amanda.png",
      },
      {
        name: "Samiksha",
        image: "/team/samiksha.png",
      },
    ],
    sponsors: [
      {
        name: "Nuro",
        image: "/sponsors/nuro.png",
        url: "https://nuro.ai",
      },
      {
        name: "AssemblyAI",
        image: "/sponsors/assemblyai.png",
        url: "https://assemblyai.com",
      },
      {
        name: "Balsamiq",
        image: "/sponsors/balsamiq.png",
        url: "https://balsamiq.com",
      },
      {
        name: "Product Hunt",
        image: "/sponsors/product_hunt.png",
        url: "https://producthunt.com",
      },
      {
      name: "Sticker Giant",
      image: "/sponsors/stickergiant.png",
      url: "https://stickergiant.com",
      },
      {
        name: "Taskade",
        image: "/sponsors/taskade.png",
        url: "https://taskade.com/",
      },
      {
        name: "Interview Cake",
        image: "/sponsors/interviewcake.png",
        url: "https://interviewcake.com/",
      },
      {
        name: "Streamyard",
        image: "/sponsors/streamyard.png",
        url: "https://streamyard.com",
      }
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
            The West Coast's largest hackathon for marginalized genders on June 10-12, 2022.
          </p>

          <div className="grid items-start justify-center">
            <div className="relative group">
            <div className="flex justify-center mx-auto mt-3 space-x-6">

            {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur opacity-75 transition duration-1000 group-hover:opacity-100"></div> */}
              {/* <Link to="/register"> */}
              <button className="relative flex items-center px-6 py-4 text-xl leading-none bg-blue-500 rounded-lg">
                <a href="https://airtable.com/shrY7K07FgEIbV1rO" target="_blank">
                  <span className="text-white hover:no-underline">
                  Register
                  </span>
                </a>
              </button> 

              <button className="relative flex items-center px-6 py-4 text-xl leading-none bg-blue-500 rounded-lg">
                <a href="https://airtable.com/shrNtOfsyyfloxQ7q" target="_blank">
                  <span className="text-white hover:no-underline">
                  Mentors
                  </span>
                </a>
              </button> 
            </div> 
            </div>
          </div>
        </div>
        <section className="px-6 text-xl md:px-12">
          <div className="container mb-14">
            <h2 className="font-bold headline" id="about">
              About Hydra Hacks
            </h2>
            <p className="leading-relaxed">
              Hydra Hacks is a 48-hour online hackathon from the Bay Area.
              Whether you're writing your first line of code or you're an
              expert hacker, Hydra Hacks is for you. You'll have the opportunity
              to meet new friends, develop awesome projects, and attend
              workshops! Hydra Hacks is a{" "}
              <strong>gender-focused</strong> event open to high
              school and college students of marginalized genders!
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
                    What is a virtual hackathon?
                  </h3>
                  <p className="text-lg">
                    A hackathon is an fun tech event where teams collaborate on a
                    project, or "hack", within a weekend. There will be
                    workshops and mentors to help you learn new things and get
                    help on your projects.
                  </p>
                </div>
              </div>

              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">Who is eligible to participate?</h3>
                  <p className="text-lg">
                  Hydra Hacks is for people of marginalized genders.
                  Cis men are welcome to mentor, volunteer, or judge. 
                  The minimum age to participate is 13 years by June 10, 2022. 
                  There are no location restrictions!
                  </p>
                </div>
              </div>

              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">How much does it cost?</h3>
                  <p className="text-lg">
                  Thanks to our generous donors and sponsors, Hydra Hacks is free to attend. 
                  Each participant will receive swag and virtual gifts brought to you by our amazing sponsors.
                  </p>
                </div>
              </div>

              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">
                    What if I don't have any experience?
                  </h3>
                  <p className="text-lg">
                    Our hackathon is beginner friendly! There will be workshops, mentors, and
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
                  While you do have the option to hack alone, we highly encourage participants to form teams. 
                  On the first day, we'll have team formation activities and make sure no hacker is left out.
                  </p>
                </div>
              </div>

              <div className="card--interactive">
                <div className="text-white">
                  <h3 className="font-bold lead">Do I have to stay online the entire time?</h3>
                  <p className="text-lg">
                    No! You can work on your project anytime during the submission period.
                    Feel free to take breaks, win some prizes at our workshops, and relax. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-14">
            <h2 className="pb-8 font-bold text-center headline">
              Supported by
            </h2>
            <ul className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 place-items-center lg:mx-20">
              {data.sponsors.map((sponsor) => (
                <li key={sponsor.name}>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-8"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="pt-8 mt-2 leading-relaxed text-center caption">
              Interested in being a sponsor for Hydra Hacks? We'd love to chat!
              Contact us at{" "}
              <a href="mailto:hello@hydrahacks.org" className="underline">
                hello@hydrahacks.org
              </a>
              &nbsp;&rarr;
              <br />
              <span className="text-sm">
                We also accept tax-deductible contributions through our{" "}
                <a
                  href="https://bank.hackclub.com/donations/start/hydra-hacks"
                  target="_blank"
                  className="underline"
                  rel="noopener noreferrer"
                >
                  donation page.
                </a>
              </span>
            </p>
          </div>
          {/* <div className="container mt-24 mb-14">
            <h2 className="font-bold text-center lead">
              Made with &hearts; by the Hydra Hacks Team.
            </h2>
            <ul className="flex justify-center overflow-auto">
              {data.team.map((t) => (
                <li key={t.name} title={t.name} className="list-none -mr-14">
                  <img src={t.image} alt={t.name} className="w-40" />
                </li>
              ))}
            </ul>
          </div> */}
        </section>
      </main>
    </div>
  );
}
