import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import  heroes  from "../../src/data/heroes";

describe("Pruebas 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar un undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getheoresbyowner debe de retornar un arreglo con los héroes de dc", () => {
    const owner = "DC";
    const hero = getHeroesByOwner(owner);

    // const heroes = [];
    //
    // for (let i = 0; i < hero.length; i++) {
    //   const { name } = hero[i];
    //
    //   heroes.push(name);
    // }

    expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    expect(hero.length).toBe(3);
  });
});
