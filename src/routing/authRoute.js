import { createRoute } from "@tanstack/react-router";
import Login from "../components/Login";
import { rootRoute } from "./routeTree";

export const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/auth",
    component: Login,
})