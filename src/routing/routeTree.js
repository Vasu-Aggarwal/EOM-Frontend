import { createRootRoute } from "@tanstack/react-router";
import RootLayout from "../RootLayout";
import { authRoute } from "./authRoute";
import { dashboardRoute } from "./dashboardRoute";

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree =rootRoute.addChildren([ 
    authRoute,
    dashboardRoute
 ])