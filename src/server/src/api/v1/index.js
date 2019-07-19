const adminRouter =require('./admin/admin.routes')
const aboutRouter = require ( './about_us/about.routes')
const privacyRouter = require ('./privacy/privacy.routes');
const termsRouter = require('./ terms/terms.routes');
const cookiesRouter = require('./cookies/cookies.routes');
const queryRouter = require('./query_management/querry.routes');
const contactRouter= require('./contact_us/contact.routes');
const staffRouter = require('./staff/staff.routes');
const categoryRouter = require('./master_setting/master.routes');
const loginRouter= require('./login/login.routes');
x= (app)=>{
    console.log("initiallizing routes")
    app.use('',adminRouter)  
    app.use('',aboutRouter)  
    app.use('',privacyRouter)  
    app.use('',termsRouter)  
    app.use('',cookiesRouter)  
    app.use('',queryRouter)
    app.use('',contactRouter)
    app.use('',staffRouter)
    app.use('',categoryRouter)
    app.use('',loginRouter)


}
module.exports =x;