describe("Pruebas en <DemoComponent />", () => {
  test("Está prueba no debe de fallar", () => {
    // 1. inicializaciónew
    const message1 = "Hello World";

    // 2. estimulo
    const message2 = message1.trim();

    // 3. Observar el comportamiento.. esperado
    expect(message1).toBe(message2);
  });
});
