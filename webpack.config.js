var path=require("path");
module.exports={
	entry:"./src/js/*.js";
	output:{
		path:path.resolve(__dirname,"dist"),
		filname:"main.js"
	}
}
