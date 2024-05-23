import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "../components/footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2" data-gfe-screenshot-exclude="true">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link to="/testimonialCard" className="[&.active]:font-bold">
          Testimonial Card
        </Link>
      </div>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
      <Footer />
    </>
  ),
});
