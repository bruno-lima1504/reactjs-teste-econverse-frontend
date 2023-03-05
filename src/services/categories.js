import { TbDevices, TbBuildingStore, TbGlassFull, TbTool, TbBike, TbHanger } from 'react-icons/tb'
import { BiDonateHeart } from "react-icons/bi";

export const categories = [
    {
    id: 1,
    categorie: 'Tecnologia',
    icon: <TbDevices />
    },
    {
        id: 2,
        categorie: 'Supermercado',
        icon: <TbBuildingStore />
    },
    {
        id: 3,
        categorie: 'Bebida',
        icon: <TbGlassFull />
    },
    {
        id: 4,
        categorie: 'Ferramentas',
        icon: <TbTool />
    },
    {
        id: 5,
        categorie: 'Saúde',
        icon: <BiDonateHeart />
    },
    {
        id: 6,
        categorie: 'Esportes e Fitnes',
        icon: <TbBike />
    },
    {
        id: 7,
        categorie: 'Moda',
        icon: <TbHanger />
    },
]