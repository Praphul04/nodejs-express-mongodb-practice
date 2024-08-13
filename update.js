const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    { name: "1" },
    { $set: { name: "galaxy", price: 1150 } }
  );
  console.log(result);
};
updateData();
