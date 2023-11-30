const {ADMIN_PATH} = process.env
exports.view = ((req,res) => {
    res.render('frontend/home',{admin:ADMIN_PATH})
})
