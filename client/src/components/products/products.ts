import { Category } from "../../types/CategoryType";

export const clothingCategories:Category[] = [
    {
      id: 1,
      name: "Men's Clothing",
      subCategories: [
        { id: 101, name: "T-Shirts" },
        { id: 102, name: "Shirts" },
        { id: 103, name: "Jeans" },
        { id: 104, name: "Jackets" },
        { id: 105, name: "Sweaters" },
      ],
    },
    {
      id: 2,
      name: "Women's Clothing",
      subCategories: [
        { id: 201, name: "Dresses" },
        { id: 202, name: "Tops" },
        { id: 203, name: "Skirts" },
        { id: 204, name: "Jeans" },
        { id: 205, name: "Blazers" },
      ],
    },
    {
      id: 3,
      name: "Kids' Clothing",
      subCategories: [
        { id: 301, name: "T-Shirts" },
        { id: 302, name: "Shorts" },
        { id: 303, name: "Dresses" },
        { id: 304, name: "Hoodies" },
        { id: 305, name: "Pajamas" },
      ],
    },
    {
      id: 4,
      name: "Sportswear",
      subCategories: [
        { id: 401, name: "Tracksuits" },
        { id: 402, name: "Gym Wear" },
        { id: 403, name: "Swimwear" },
        { id: 404, name: "Sports Shorts" },
        { id: 405, name: "Sports Jackets" },
      ],
    },
    {
      id: 5,
      name: "Ethnic Wear",
      subCategories: [
        { id: 501, name: "Kurtas" },
        { id: 502, name: "Sarees" },
        { id: 503, name: "Lehengas" },
        { id: 504, name: "Sherwanis" },
        { id: 505, name: "Dupattas" },
      ],
    },
  ];
  