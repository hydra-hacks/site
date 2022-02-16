import { Link } from "remix";

export default function Register() {
  return (
    <div className="px-6 py-10 mx-auto font-sans text-white container-copy">
      <h1 className="font-bold headline">Register for Hydra Hacks!</h1>
      <p className="subheadline">Yeah!</p>
      <p>
        <strong>
          <Link to="mentor">Looking to mentor? Go here instead.</Link>
        </strong>
      </p>
      <section>
        <form action="/api/register" method="POST">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-bold"
              >
                First Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Jane"
                name="firstName"
                required
              />
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-bold"
              >
                Last Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Doe"
                name="lastName"
                required
              />
              <label htmlFor="email" className="block mb-2 text-sm font-bold">
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="ella@hydrahacks.org"
                name="email"
                required
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
