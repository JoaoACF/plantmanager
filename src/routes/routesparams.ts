import { PlantProps } from "../libs/storage";

interface RootRoutes {
    UserIdentification: undefined;
    AuthRoutes: undefined;
    PlantSelect: undefined;
    Welcome: undefined;
    Confirmation: { title: string; subtitle: string; buttonTitle: string; icon: string; nextScreen: string; };
    PlantSave: { plant: PlantProps };
    MyPlant: undefined;

}

export { RootRoutes }