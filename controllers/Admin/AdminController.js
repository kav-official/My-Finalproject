exports.view = ((reg,res) => {
    const ADMIN_PATH = reg.app.locals.ADMIN_PATH;
    
    res.render('backend/index',{admin:ADMIN_PATH});
})
