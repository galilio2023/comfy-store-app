import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const { status, data } = useRouteError();

  if (status === 404) {
    return (
      <main className="grid place-items-center min-h-screen">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">{status}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn't find the page you are looking for.
          </p>
          <div className="mt-10 ">
            <Link to="/" className="btn btn-secondary">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid place-items-center min-h-screen">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
};

export default Error;
