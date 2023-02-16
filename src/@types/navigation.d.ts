import { RootRoutes } from "../routes/routesparams";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootRoutes { }
    }
}