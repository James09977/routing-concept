import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Opps!!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          {" "}
          <p>Page not found</p>
          <Link to={-1}>Go back</Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
