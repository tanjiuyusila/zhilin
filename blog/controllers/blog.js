var Blog_model = require('../models/blog_model.js');

exports.index = function (req,res,next) {
    // res.render("index.ejs",{
    //     "title":"yaozhilin",
    //     "sess":req.session,
    // })
    Blog_model.sel_all(function (err,data) {
        // console.log(data);
        res.render("index.ejs",{
            "title":"yaozhilin",
            "sess":req.session,
            "posts":data,
        })
    });
};