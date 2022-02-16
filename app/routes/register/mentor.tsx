import { Link } from "remix";

export default function RegisterMentor() {
  return (
    <div className="px-6 py-10 mx-auto font-sans text-white container-copy">
      <h1 className="font-bold headline">We need your help!</h1>
      <p className="subheadline">Register as a mentor or volunteer!</p>
      <p>
        <strong>
          <Link to="/register">
            Looking for hacker registration? Go here instead.
          </Link>
        </strong>
      </p>
    </div>
  );
}
