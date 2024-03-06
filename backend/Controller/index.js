const asyncHandler = require("express-async-handler");
// const paramsValidator = require("./ParamsValidator");
// const errorList = require("../Public/errorList");
// const { DBQueries } = require("../DB/DBQueries");
const Fileupload = asyncHandler(async (req, res) => {
  return new Promise(async function (resolve) {
    res.send("Succuss");
    resolve();

  })
})

module.exports={Fileupload}