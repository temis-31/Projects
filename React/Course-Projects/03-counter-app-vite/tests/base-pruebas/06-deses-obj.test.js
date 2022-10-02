import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe de retornar un objeto", () => {
    const datos = {
      clave: 123,
      nombre: "Temistocles",
      edad: 31,
    };

    const testUsContext = {
      nombreClave: datos.clave,
      anios: datos.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const user = usContext(datos);

    console.log(user, testUsContext);

    expect(user).toEqual(testUsContext);
  });
});
