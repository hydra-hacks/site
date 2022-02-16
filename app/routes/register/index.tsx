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
    </div>
  );
}
