import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { LinksFunction } from "remix";

import globalStylesUrl from "~/styles/global.css";
// import darkStylesUrl from "~/styles/dark.css";
import styles from "./styles/app.css";

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    // {
    //   rel: "stylesheet",
    //   href: darkStylesUrl,
    //   media: "(prefers-color-scheme: dark)",
    // },
    { rel: "stylesheet", href: styles },
  ];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>Something went wrong.</p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app">
      <header className="px-6 text-white bg-indigo-900 shadow-md bg-opacity-95 remix-app__header backdrop-blur-md">
        <div className="container remix-app__header-content">
          <Link
            to="/"
            title="Hydra Hacks"
            className="remix-app__header-home-link"
          >
            <Logo />
          </Link>
          <nav aria-label="Main navigation" className="remix-app__header-nav">
            <ul>
              <li>
                <Link to="/#" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  // to="/register"
                  to="/"
                  className="px-4 py-2 bg-blue-500 cursor-not-allowed rounded-2xl hover:text-gray-300"
                >
                  Register (soon)
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="remix-app__main bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700">
        <div className="container remix-app__main-content">{children}</div>
      </div>
      <footer className="text-white bg-indigo-800 remix-app__footer backdrop-blur-md">
        <div className="container max-w-md remix-app__footer-content">
          <p>&copy; {new Date().getFullYear()} Hydra Hacks.</p>
          <p className="pt-2 text-sm text-center">
            Fiscally sponsored by The Hack Foundation.
            <br />
            Nonprofit EIN: 81-2908499.
          </p>
        </div>

        <a
          href="https://vercel.com/?utm_source=hydra-hacks&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/sponsors/vercel-black.png"
            alt="Powered by Vercel"
            className="w-48 py-4 mx-auto"
          />
        </a>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="275"
      height="247"
      viewBox="0 0 275 247"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <g clip-path="url(#clip0_2_58)">
        <path
          d="M137.84 190.47C67.54 190.47 38.94 226.21 30.69 246.47H244.48C239.12 226.21 205.75 190.47 137.84 190.47Z"
          fill="white"
        />
        <path
          d="M261 113.84C250.7 103.84 218.11 97.56 203.89 104.56C224.83 95.35 238.68 75.71 239 54.41C239.39 29.03 219.89 7.40998 197.48 1.22998C190.472 -0.651644 183.05 -0.288853 176.259 2.26731C169.467 4.82346 163.648 9.44436 159.62 15.48C152.94 25.4 143.7 41.08 137.83 59.16C131.96 41.08 122.72 25.4 116.05 15.48C112.019 9.43458 106.191 4.80725 99.3896 2.25058C92.588 -0.306085 85.1553 -0.663071 78.14 1.22998C55.73 7.40998 36.23 29.03 36.61 54.41C36.94 75.71 50.78 95.35 71.72 104.56C62.16 100.56 28.16 100.56 14.62 113.84C-1.93 130.06 -4.52 156.84 7.52 174.78C16.4 188.03 33 196.16 47.65 194.84C52.2424 194.386 56.7058 193.059 60.8 190.93C69.38 186.79 107.73 168.29 138.53 168.36C168.08 168.44 199.7 182.36 212.21 188.6C216.16 190.6 223.21 194.35 228.02 194.84C242.86 196.34 259.46 187.93 268.14 174.78C280.11 156.56 275.11 127.56 261 113.84Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_58">
          <rect width="274.86" height="246.47" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
