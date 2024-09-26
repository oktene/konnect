"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { LanguagesIcon, LayoutGrid, Link, LogOut, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/routing";

export function LanguageToggle() {
    const pathname = usePathname();
    const router = useRouter();

  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="relative h-8 w-8 rounded-full"
                size="icon"
              >
                <LanguagesIcon className="w-[1.2rem] h-[1.2rem] duration-500 dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Idioma</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem className="hover:cursor-pointer" onClick={() => router.push(pathname, {locale: 'br'})}>Português</DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" onClick={() => router.push(pathname, {locale: 'en'})}>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
