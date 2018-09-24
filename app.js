var express=require("express");
var app=express();
app.set("view engine", "ejs");
var bodyParser=require("body-parser");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
   res.render("landing"); 
});
app.get("/jobs", function(req, res){
	res.render("jobs");
});
app.post("/jobs", function(req, res){
	res.render("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Server started...');
});