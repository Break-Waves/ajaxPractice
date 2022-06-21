const express = require("express")
const app = express();
const path = require("path");

//查询学生信息接口
app.get("/user", (req, res) => {
  // console.log(req.query);
  const {
    userId
  } = req.query;
  //如果查询失败
  if (userId !== "001") {
    return res.send({
      code: 10001,
      msg: "查询失败",
      data: null
    })
  }


  //查询成功 响应
  res.send({
    code: 10000,
    msg: "查询成功",
    data: {
      name: "断浪",
      age: 18,
      sex: "男"
    }
  })

})

app.get("/userInfo/:userId", (req, res) => {
  // console.log(req.params);
  const {
    userId
  } = req.params;


  //如果查询失败
  if (userId !== "001") {
    return res.send({
      code: 10001,
      msg: "查询失败",
      data: null
    })
  }


  //查询成功 响应
  res.send({
    code: 10000,
    msg: "查询成功",
    data: {
      name: "断浪",
      age: 18,
      sex: "男"
    }
  })
})



//静态资源部署接口
app.get("/1", (req, res) => {
  const filePath = path.resolve(__dirname, "./01.get请求.html");
  res.sendFile(filePath);
})

app.get("/2", (req, res) => {
  const filePath = path.resolve(__dirname, "./03.get请求query传参.html");
  res.sendFile(filePath);
})

app.get("/3", (req, res) => {
  const filePath = path.resolve(__dirname, "./04.get请求path传参.html");
  res.sendFile(filePath);
})




app.listen(3000, () => {
  console.log("服务器请求成功 请访问 http://127.0.0.1:3000");
})