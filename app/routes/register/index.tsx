import { Link, Form, redirect, useActionData, useLoaderData } from "remix";
import { useState, useEffect } from "react";
// import type { LoaderFunction } from "remix";
import type { ActionFunction } from "remix";

// Note the "action" export name, this will handle our form POST
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  return redirect(`/register/success/`);
};

export default function Register() {
  let query = useLoaderData();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pronouns: "",
    github: "",
    grade: "",
    school: "",
    virtual: "",
    location: "",
    ref: "",
    workshopRequests: "",
    dietaryRestrictions: "",
    shirtSize: "",
  });

  return (
    <div className="px-6 py-10 mx-auto font-sans text-white container-copy">
      <h1 className="font-bold headline">Register for Hydra Hacks!</h1>
      <p className="subheadline">Yeah!</p>
      <p>
        Interested in helping out with Hydra Hacks?{" "}
        <strong>
          <Link to="mentor">Register as a mentor here &rarr;</Link>
        </strong>
      </p>
      <section>
        <form
          action="https://airtable.hydrahacks.org/api/appAXROp3O0m256Az/Applications"
          method="post"
        >
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
