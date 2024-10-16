import { useCompanies } from "@/hooks/useCompanies";

interface Type {
   label: string;
   value: string;
}

export const useFilters = () => {
   const { data: companiesData, isLoading, isError } = useCompanies();
   let companies: Type[] = [{ value: "", label: "" }];

   const categories = [
      { value: "Válvulas", label: "Válvulas" },
      { value: "Tubos", label: "Tubos" },
      { value: "Bombas", label: "Bombas" },
      { value: "Brocas", label: "Brocas" },
      { value: "Caldeiraria", label: "Caldeiraria" },
      { value: "Engenharia", label: "Engenharia" },
      { value: "Inspeção", label: "Inspeção" },
   ];

   const types = [
      { value: "SERVICO", label: "Serviço" },
      { value: "MATERIAL", label: "Material" },
   ];

   if (companiesData) {
      companies = companiesData.map((company: any) => ({
         label: company.name,
         value: company.name,
      }));
   }

   return {
      categories,
      types,
      companies,
   };
};

export const expired = [
   {
      value: true,
      label: "Sim",
   },
   {
      value: false,
      label: "Não",
   },
];
