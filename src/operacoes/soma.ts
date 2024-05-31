export const wait = (a: number, b: number) => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const result = a + b;
        if (result > 10) {
          resolve(`Calculado com sucesso: ${result}`);
        } else {
          reject(new Error("Não é permitido resultados menores que 10"));
        }
      }, 5000); 
    });
  };