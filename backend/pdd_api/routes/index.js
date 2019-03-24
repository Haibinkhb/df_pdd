const express = require('express');
const router = express.Router();
const svgCaptcha = require('svg-captcha');
const sms = require('../util/sms_util');
const md5 = require('blueimp-md5');

//引入mysql
const connection = require('../mysql/mysql')

let user = {};//保存用户信息


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });

});


router.get('/api/goodslist', (req, res, next) => {
  //sql查询语句SELECT * FROM pdd_goodslist
  let sqlStr = "SELECT * FROM pdd_goodslist";
  connection.query(sqlStr,function (error, results, fields) {
    if (error) throw error;
    res.json({successCode:200,results})
    //console.log('The solution is: ', results);
  })
  
  
  
  // let tempArrAll = [];
  // for (let i = 0; i < recomened.length; i++) {
  //   //定义临时数组存放对应字段
  //   let tempArr = [];
  //   tempArr.push(recomened[i].goods_id);
  //   tempArr.push(recomened[i].goods_name);
  //   tempArr.push(recomened[i].short_name);
  //   tempArr.push(recomened[i].image_url);
  //   tempArr.push(recomened[i].thumb_url);
  //   tempArr.push(recomened[i].hd_thumb_url);
  //   tempArr.push(recomened[i].market_price);
  //   tempArr.push(recomened[i].sales_tip);
  //   tempArr.push(recomened[i].link_url);
  //   tempArr.push(recomened[i].normal_price);
  //  
    
  //   tempArr.push(recomened[i].group.price);
  //   tempArrAll.push(tempArr);
  // }
  // //sql语句
  // let SQLStr = "INSERT INTO pdd_goodslist(`goods_id`,`goods_name`,`short_name`,`image_url`,`thumb_url`,`hd_thumb_url`,`market_price`,`sales_tip`,`link_url`,`normal_price`,`price`) VALUES ?" 
  // //批量插入数据
  // connection.query(SQLStr,[tempArrAll], function (error, results, fields) {
  //  if (error) throw error;
  //  console.log('The solution is: ', results[0].solution);
  // })
});


//获取首页轮播图
router.get('/api/homecarousel', function (req, res, next) {
  let homecarousel = require('../public/data/homecasual.json').data;
  //console.log(homecarousel);
  res.json({ successCode: 200, homecarousel })

});

//获取首页nav
router.get('/api/homenav', (req, res, next) => {
  let homenav = require('../public/data/homenav.json').data;
  res.json({successCode:200,homenav})
  //遍历取出iconurl
  //定义临时数据存放对应字段
  // let tempArrAll = [];
  // for (let i = 0; i < homenav.length; i++) {
  //   let tempArr = [];
  //   tempArr.push(homenav[i].iconurl)
  //   tempArr.push(homenav[i].icontitle)
  //   tempArrAll.push(tempArr);
  // }

  //  let SQLStr = "INSERT INTO pdd_homenav(`iconurl`,`icontitle`) VALUES ?" 
  //  connection.query(SQLStr,[tempArrAll],(error, results, fields)=>{
  //   if (error) throw error;
  //   console.log('The solution is: ', results[0].solution);
  //  })
});
//获取推荐页数据
router.get('/api/recommend', (req, res, next) => {
  //查询条件 第几条开始，查几条
  let count = req.query.count || 20;
  let offset = req.query.offset || 0;
  //sql查询语句SELECT * FROM pdd_goodslist
  let sqlStr = "SELECT * FROM pdd_recommend LIMIT "+offset+","+count;
  
  connection.query(sqlStr,function (error, results, fields) {
    if (error) throw error;
    res.json({successCode:200,results})
    //console.log('The solution is: ', results);
  })
});
//获取搜索页数据
router.get('/api/search',(req, res, next)=>{
  let search = require('../public/data/search.json').data;
  res.json({ successCode: 200, search})
})


//获取图形验证码
router.get("/api/getCaptcha",(req,res,next)=>{
  let captcha = svgCaptcha.create({
    size:4,
    noise:3,
    color:true,
  })
  req.session.captcha = captcha.text;
  res.type("svg");
  res.status(200).send(captcha.data);
});

//获取手机短信验证码
router.get("/api/getPhoneCode",(req,res,next)=>{
  let phone = req.query.phone;
  //产生随机验证码
  let code = sms.randomCode(6);
  // sms.sendCode("1856943075",code,(success)=>{
  //   console.log(success);
  // })
  user[phone] = code;
  res.status(200).send(code)
  
});

module.exports = router;
