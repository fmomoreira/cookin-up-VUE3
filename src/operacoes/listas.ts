export function itensDeLista1EstaoEmLista2(listaUm: unknown[], listaDois:unknown[]){
        return listaUm.every((itemListaUm) => listaDois.includes(itemListaUm))
}
