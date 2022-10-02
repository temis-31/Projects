import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("debe de retornar un héroe", (done) => {

    const id = 1;
    getHeroeByIdAsync(id)
      .then((heroe) => { 

        expect(heroe).toEqual({
          id: 1, 
          name: "Batman",
          owner: "DC",
        });

        done();

      });
  });

  test("debe de obtener un error si el heroe no existe", (done) => {

    const id = 100;
    getHeroeByIdAsync(id)
      .then( hero => {

        expect(hero).toBeFalsy();

        done();
      })
      .catch((err) => {

        expect(err).toBe(`No se pudo encontrar el héroe ${id}`);

        done();
      });

  });

});
