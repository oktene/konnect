import { Book, BookCopy, Bookmark, BookOpen, CircleUser, LucideIcon, SquarePen, Users } from "lucide-react";

export type Role = "CONTRATANTE" | "FORNECEDOR" | "AMBOS";
export type PermissionLevel = "ADMIN" | "USER" | "EDITOR";

export function isValidRole(role: string): role is Role {
   return ["CONTRATANTE", "FORNECEDOR", "AMBOS"].includes(role);
}

export function isValidPermissionLevel(permissionLevel: string): permissionLevel is PermissionLevel {
   return ["ADMIN", "USER", "EDITOR"].includes(permissionLevel);
 }

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
   allowedRoles: Role[];
   allowedPermissions: PermissionLevel[];
};

type Group = {
   groupLabel: string;
   menus: Menu[];
};

export function getMenuList(pathname: string, role: Role, permissionLevel: PermissionLevel): Group[] {
   return [
      {
         groupLabel: "",
         allowedRoles: ["CONTRATANTE", "FORNECEDOR", "AMBOS"] as Role[],
         allowedPermissions: ["ADMIN", "USER", "EDITOR"] as PermissionLevel[],
         menus: [
            {
               href: "/oportunidades-publicas",
               label: "Oportunidades Públicas",
               active: pathname.includes("/oportunidades-publicas"),
               icon: BookOpen,
               submenus: [],
               allowedRoles: ["CONTRATANTE", "FORNECEDOR", "AMBOS"] as Role[],
               allowedPermissions: ["ADMIN", "USER", "EDITOR"] as PermissionLevel[],
            },
         ],
      },
      {
         groupLabel: "CONTRATANTES",
         allowedRoles: ["CONTRATANTE"] as Role[],
         allowedPermissions: ["ADMIN", "USER"] as PermissionLevel[],
         menus: [
            {
               href: "/contratantes/minhas-oportunidades",
               label: "Minhas Oportunidades",
               active: pathname.includes("/minhas-oportunidades"),
               icon: Bookmark,
               submenus: [],
               allowedRoles: ["CONTRATANTE", "AMBOS"] as Role[],
               allowedPermissions: ["ADMIN", "USER"] as PermissionLevel[],
            },
         ],
      },
      {
         groupLabel: "FORNECEDORES",
         allowedRoles: ["FORNECEDOR"] as Role[],
         allowedPermissions: ["ADMIN", "USER"] as PermissionLevel[],
         menus: [
            {
               href: "/fornecedores/oportunidades-visualizadas",
               label: "Oportunidades Visualizadas",
               active: pathname.includes("/oportunidades-visualizadas"),
               icon: SquarePen,
               submenus: [],
               allowedRoles: ["FORNECEDOR", "AMBOS"] as Role[],
               allowedPermissions: ["ADMIN", "USER"] as PermissionLevel[],
            },
         ],
      },
      {
         groupLabel: "GERAL",
         allowedRoles: ["CONTRATANTE", "FORNECEDOR", "AMBOS"] as Role[],
         allowedPermissions: ["EDITOR"] as PermissionLevel[],
         menus: [
            {
               href: "/categorias",
               label: "Categorias",
               active: pathname.includes("/categorias"),
               icon: Book,
               submenus: [],
               allowedRoles: ["CONTRATANTE", "FORNECEDOR", "AMBOS"] as Role[],
               allowedPermissions: ["EDITOR"] as PermissionLevel[],
            },
            {
               href: "/subcategorias",
               label: "Subcategorias",
               active: pathname.includes("/subcategorias"),
               icon: BookCopy,
               submenus: [],
               allowedRoles: ["CONTRATANTE", "FORNECEDOR", "AMBOS"] as Role[],
               allowedPermissions: ["EDITOR"] as PermissionLevel[],
            },
            {
               href: "/usuarios",
               label: "Usuários",
               active: pathname.includes("/usuarios"),
               icon: Users,
               submenus: [],
               allowedRoles: ["CONTRATANTE", "FORNECEDOR", "AMBOS"] as Role[],
               allowedPermissions: ["EDITOR"] as PermissionLevel[],
            },
         ],
      },
      {
         groupLabel: "CONFIGURAÇÕES",
         allowedRoles: ["CONTRATANTE", "FORNECEDOR", "AMBOS"] as Role[],
         allowedPermissions: ["ADMIN", "USER", "EDITOR"] as PermissionLevel[],
         menus: [
            {
               href: "/perfil",
               label: "Meu Perfil",
               active: pathname.includes("/perfil"),
               icon: CircleUser,
               submenus: [],
               allowedRoles: ["CONTRATANTE", "FORNECEDOR", "AMBOS"] as Role[],
               allowedPermissions: ["ADMIN", "USER", "EDITOR"] as PermissionLevel[],
            },
         ],
      },
   ]
      .map((group) => ({
         ...group,
         menus: group.menus.filter((menu) => menu.allowedRoles.includes(role) && menu.allowedPermissions.includes(permissionLevel)),
      }))
      .filter((group) => group.menus.length > 0);
}
