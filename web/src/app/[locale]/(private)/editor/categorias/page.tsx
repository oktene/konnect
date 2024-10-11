import withPermission from "@/hoc/withPermission";

function Categorias() {
  return (
    <div>Conteúdo somente para editores</div>
  );
}

export default Categorias

// export default withPermission(Categorias, "EDITOR");