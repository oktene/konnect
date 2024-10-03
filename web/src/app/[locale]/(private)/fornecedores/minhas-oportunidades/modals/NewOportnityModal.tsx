"use client";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export const TemporaryOpportunitySchema = z.object({
  executionPeriod: z.date().optional(),
  deadlineSubmission: z.date().optional(),
  typeOpportunity: z.enum(["Serviço", "Material"]),
  subCategory: z.string(),
  description: z.string(),
  RFQCode: z.string(),
});

export type TenporaryOpportunity = z.infer<typeof TemporaryOpportunitySchema>;

export function NewOportunityModal({
  handleAddOpportunity,
}: {
  handleAddOpportunity: (newOpportunity: TenporaryOpportunity) => void;
}) {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<TenporaryOpportunity>({
    resolver: zodResolver(TemporaryOpportunitySchema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      handleAddOpportunity(data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Nova Oportunidade</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova Oportunidade</DialogTitle>
          <DialogDescription>
            Preencha as informações da nova oportunidade.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, value } }) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Título
                  </Label>
                  <Input
                    id="name"
                    className="col-span-3"
                    onChange={onChange}
                    value={value}
                  />
                </div>
              )}
            />
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="executionPeriod" className="text-right">
                Período de Execução
              </Label>
              <Controller
                control={control}
                name="executionPeriod"
                render={({ field: { onChange, value } }) => (
                  <DatePicker className="col-span-3" />
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="deadlineSubmission" className="text-right">
                Limite de Submissão
              </Label>
              <Controller
                control={control}
                name="deadlineSubmission"
                render={({ field: { onChange, value } }) => (
                  <DatePicker className="col-span-3" />
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="typeOpportunity" className="text-right">
                Tipo
              </Label>
              <Controller
                control={control}
                name="typeOpportunity"
                render={({ field: { onChange, value } }) => (
                  <Select onValueChange={onChange} value={value}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Serviço">Serviço</SelectItem>
                        <SelectItem value="Material">Material</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subCategory" className="text-right">
                Categoria
              </Label>
              <Controller
                control={control}
                name="subCategory"
                render={({ field: { onChange, value } }) => (
                  <Select onValueChange={onChange} value={value}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="subCat499">subCat499</SelectItem>
                        <SelectItem value="subCat500">subCat500</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancelar
              </Button>
              <Button type="submit">
                Salvar
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
