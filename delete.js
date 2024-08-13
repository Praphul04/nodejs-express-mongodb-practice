const dbConnect = require("./mongodb");

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany({name:'m10' })
        console.log(result);
}
deleteData();