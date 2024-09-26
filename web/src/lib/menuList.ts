import {
   Tag,
   Users,
   Settings,
   Bookmark,
   SquarePen,
   LayoutGrid,
   LucideIcon,
   BookOpen,
} from "lucide-react";

type Submenu = {
   href: string;
   label: string;
   active: boolean;
};

type Menu = {
   href: string;
   label: string;
   active: boolean;
   icon: LucideIcon;
   submenus: Submenu[];
};

type Group = {
   groupLabel: string;
   menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
   return [
      {
         groupLabel: "",
         menus: [
            // {
            //    href: "/dashboard",
            //    label: "Dashboard",
            //    active: pathname.includes("/dashboard"),
            //    icon: LayoutGrid,
            //    submenus: [],
            // },
            {
               href: "/fornecedores/oportunidades-publicas",
               label: "Oportunidades Públicas",
               active: pathname.includes("/oportunidades-publicas"),
               icon: BookOpen,
               submenus: [],
            },
         ],
      },
      {
         groupLabel: "FORNECEDORES",
         menus: [
            {
               href: "/fornecedores/minhas-oportunidades",
               label: "Minhas Oportunidades",
               active: pathname.includes("/minhas-oportunidades"),
               icon: Bookmark,
               submenus: [],
            },
         ],
      },
      {
         groupLabel: "CONTRATANTES",
         menus: [
            {
               href: "/contratantes/minhas-demandas",
               label: "Minhas Demandas",
               active: pathname.includes("/minhas-demandas"),
               icon: SquarePen,
               submenus: [],
            },
         ],
      },
      // {
      //    groupLabel: "EMPRESAS",
      //    menus: [
      //       {
      //          href: "/empresas/empresas-cadastradas",
      //          label: "Empresas Cadastradas",
      //          active: pathname.includes("/empresas-cadastradas"),
      //          icon: SquarePen,
      //          submenus: [],
      //       },
      //    ],
      // },
      {
         groupLabel: "CONFIGURAÇÕES",
         menus: [
            {
               href: "/perfil",
               label: "Meu Perfil",
               active: pathname.includes("/perfil"),
               icon: Users,
               submenus: [],
            },
            // {
            //    href: "/configuracoes",
            //    label: "Configurações",
            //    active: pathname.includes("/configuracoes"),
            //    icon: Settings,
            //    submenus: [],
            // },
         ],
      },
   ];
}
