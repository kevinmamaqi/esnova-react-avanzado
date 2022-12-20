import { rest } from "msw"

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  rest.get("http://localhost:3001/pisos", (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "Piso 1",
          price: 100000,
          foto: "https://kevinmamaqi.com/static/casas/1.jpg",
          type: "garaje",
          city: "madrid",
          district: "centro",
        },
        {
          id: 2,
          title: "Piso 2",
          price: 838000,
          foto: "https://kevinmamaqi.com/static/casas/2.jpg",
          type: "chalets",
          city: "barcelona",
          district: "centro",
        },
      ]),
    ),
  ),
]
