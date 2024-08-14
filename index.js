const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const saveInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "m30",
    brand: "realme",
    price: 2000,
    category: "mobiles",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = await ProductsModel.updateOne({
    name: "m30"},
    {$set: {name: "redmi 9", price: 1150 }
 } );
  console.log(data);
};

const deleteInDb = async () => {
    const ProductsModel = mongoose.model("products", ProductSchema);
    let data = await ProductsModel.deleteOne({name:"m20"});
    console.log(data);
}


const findInDB = async () => {
    const ProductsModel = mongoose.model("products", ProductSchema);
    let data = await ProductsModel.find();
    console.log(data);
}
findInDB();
