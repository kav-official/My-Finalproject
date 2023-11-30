exports.view = ((reg,res) => {
    const ADMIN = reg.app.locals.ADMIN_PATH;
    const strAction = 'ຂໍ້ມູນພະນັກງານ';
    const counEntry = 0;
    res.render('backend/employee-list',{admin:ADMIN,strAction:strAction,counEntry:counEntry})
})