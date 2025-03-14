const express = require("express");
const cors=require("cors");
const application = express();

application.use(express.json());
application.use(cors());

application.get("/ping", (request, response) => {
  return response.json({
    message: "pong"
  });
});
const PORT =process.env.PORT || 3001;
application.listen(PORT,()=>{
  console.log(`server started at port ${PORT}...`);
})