"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"


import { Input } from "./input"
import { Button } from "./button"
import { DataTableViewOptions } from "./data-table-view-options"
import { DataTableFacetedFilter } from "./data-table-faced-filter"
import { types, companies, categories } from "../data/data"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,

}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2 py-4">
        <Input
          placeholder="Filtrar por código RFQ..."
          value={(table.getColumn("codeRFQ")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("codeRFQ")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[300px] lg:w-[450px]"
        />
        {table.getColumn("typeOpportunity") && (
          <DataTableFacetedFilter
            column={table.getColumn("typeOpportunity")}
            title="Tipos"
            options={types}
          />
        )}
        {table.getColumn("company") && (
          <DataTableFacetedFilter
            column={table.getColumn("company")}
            title="Empresas"
            options={companies}
          />
        )}
        {table.getColumn("subCategory") && (
          <DataTableFacetedFilter
            column={table.getColumn("subCategory")}
            title="Categorias"
            options={categories}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Resetar
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}