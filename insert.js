const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "nord 5",
      brand: "vivo",
      price: "2000",
      category: "mobiles",
    },
    {
        name: "1",
        brand: "micromax",
        price: "260",
        category: "mobiles",
      },
      {
        name: "if 5",
        brand: "redmi",
        price: "2001",
        category: "mobiles",
      },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
