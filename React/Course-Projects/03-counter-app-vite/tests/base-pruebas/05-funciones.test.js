import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  // test("getUser debe de retornar un objeto", () => {
  //   const testUser = {
  //     uid: "ABC123",
  //     username: "El_Papi1502",
  //   };
  //
  //   const user = getUser();
  //
  //   expect(user).toEqual(testUser);
  // });

  test("getUsusarioActivo debe de retornar un objeto ", () => {
    const name = "Temistocles";

    const testUsuarioActivo = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(user).toEqual(testUsuarioActivo);
  });
});
