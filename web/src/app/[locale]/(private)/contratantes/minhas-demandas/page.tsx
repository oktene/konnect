"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";

const MinhasDemandas = () => {
    return (
        <ContentLayout title="Konnect">
           {/* <Breadcrumb>
              <BreadcrumbList>
                 <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                       <Link href="/">Home</Link>
                    </BreadcrumbLink>
                 </BreadcrumbItem>
                 <BreadcrumbSeparator />
                 <BreadcrumbItem>
                    <BreadcrumbPage>Oportunidades Públicas</BreadcrumbPage>
                 </BreadcrumbItem>
              </BreadcrumbList>
           </Breadcrumb> */}
           <main>
              <div className="mt-2">
                    <p className="text-zinc-900 text-lg">Minhas Demandas</p>
              </div>
              <div>
                    {/* <DataTable columns={null} data={data} /> */}
              </div>
           </main>
        </ContentLayout>
     );
};

export default MinhasDemandas;