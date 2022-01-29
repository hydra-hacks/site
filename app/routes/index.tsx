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
  let data = useLoaderData<IndexData>();

  return (
    <div className="font-sans text-white">
      <main>
        <div id="hero" className="py-16 text-center hero ">
          <h1 className="font-bold ultratitle text-gray-50 text-shadow-3xl">
            Hydra Hacks
          </h1>
          <p className="subheadline">A hackathon for alsdjflakdsf on June 5.</p>
        </div>
        <p>We're stoked that you're here. 🥳</p>
        <p>
          Feel free to take a look around the code to see how Remix does things,
          it might be a bit different than what you’re used to. When you're
          ready to dive deeper, we've got plenty of resources to get you
          up-and-running quickly.
        </p>
        <p>
          Check out all the demos in this starter, and then just delete the{" "}
          <code>app/routes/demos</code> and <code>app/styles/demos</code>{" "}
          folders when you're ready to turn this into your next project.
        </p>
        <div className="max-w-sm card">
          <p className="text-white lead">
            Hydra Hacks is a 24-hour high school hackathon in the Bay Area.
            You'll be able to meet new friends, build awesome projects while
            attending workshops, eating food, playing games, and more!
          </p>
        </div>
        <div className="max-w-sm card">
          <p className="text-white lead">
            At Hydra Hacks, hundreds of students from all over the world will
            come together and build awesome projects all while creating a
            supportive learning community. The event is open to all students
            ages 13+ who self-identify as women (cis and trans) or non-binary
            individuals.
          </p>
        </div>
        <div className="max-w-sm card">
          <p className="text-white lead">
            Hydra Hacks is a 24-hour high school hackathon in the Bay Area.
            You'll be able to meet new friends, build awesome projects while
            attending workshops, eating food, playing games, and more!
          </p>
        </div>
        <div className="max-w-sm card">
          <p className="text-white lead">
            Hydra Hacks is a 24-hour high school hackathon in the Bay Area.
            You'll be able to meet new friends, build awesome projects while
            attending workshops, eating food, playing games, and more!
          </p>
        </div>
      </main>
      {/* <aside>
        <h2>Demos In This App</h2>
        <ul>
          {data.demos.map((demo) => (
            <li key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2>Resources</h2>
        <ul>
          {data.resources.map((resource) => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
      </aside> */}
    </div>
  );
}
