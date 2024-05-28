import type ICategoria from "@/interfaces/ICategoria";
import type IResposta from "@/interfaces/IReceita";

export async function obterCategorias() {
  await new Promise(resolve => setTimeout(resolve, 4000));
  const resposta = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json"
  );
  const categorias: ICategoria[] = await resposta.json();
  return categorias;
}

export async function obterReceitas() {
  const responsta = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
  );
  const receitas: IResposta[] = await responsta.json();
  return receitas;
}
