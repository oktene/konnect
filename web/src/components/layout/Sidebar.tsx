"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'} bg-orange-500 h-screen text-white fixed`}>
      <div className="p-4 flex justify-between items-center">
        <img src="public/logo.png" alt="" className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-100' : 'opacity-0'}`} />
        <h2 className={`text-2xl font-bold transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
          Konnect
        </h2>
        <Button onClick={toggleSidebar} variant="ghost" className="text-white focus:outline-none">
          {isCollapsed ? '>' : '<'}
        </Button>
      </div>
      <div>
        <section>
          <h3 className={`text-md font-bold`}>
            FORNECEDORES
          </h3>
          <ul className="mt-6">
            <li className="p-2 hover:bg-gray-700">
              <Link href="/dashboard/minhas-oportunidades">Minhas Oportunidades</Link>
            </li>
            <li className="p-2 hover:bg-gray-700">
              <Link href="/dashboard/oportunidades-publicas">Oportunidades Públicas</Link>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <section>
          <h3 className={`text-md font-bold`}>
            COMPRADORES
          </h3>
          <ul className="mt-6">
            <li className="p-2 hover:bg-gray-700">
              <Link href="/dashboard/minhas-demandas">Minhas Demandas</Link>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <section>
          <h3 className={`text-md font-bold`}>
            EMPRESAS
          </h3>
          <ul className="mt-6">
            <li className="p-2 hover:bg-gray-700">
              <Link href="/dashboard/empresas-cadastradas">Empresas Cadastradas</Link>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <ul className="mt-6">
          <li className="p-2 hover:bg-gray-700">
            <Link href="/dashboard/perfil">Profile</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
