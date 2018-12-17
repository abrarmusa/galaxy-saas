const Authentication = require('./controllers/authentication');
const AdminAuthentication = require('./controllers/adminAuthentication');
const passportService = require('./services/passport');
const adminPassportService = require('./services/adminPassport');
const passport = require('passport');


const requireAuth = passport.authenticate('user-jwt',{session: false});
const requireSignIn = passport.authenticate('user-local', {session: false});
const requireAdminAuth = passport.authenticate('admin-jwt', {session: false});
const requireAdminSignIn = passport.authenticate('admin-local', {session: false});



module.exports = function(app) {
	
	// ADMINISTRATOR FUNCTIONS

    app.post('/admin/signin', requireAdminSignIn, AdminAuthentication.signin);

    app.post('/admin/signup', AdminAuthentication.signup);

    app.post('/admin/changepassword', requireAdminAuth, AdminAuthentication.changePassword);

    app.post('/admin/editinfo', requireAdminAuth, AdminAuthentication.editInfo);

	// USER FUNCTIONS

    app.post('/signin', requireSignIn, Authentication.signin);

    app.post('/signup', Authentication.signup);

    app.post('/changepassword', requireAuth, Authentication.changePassword);

    app.post('/editinfo', requireAuth, Authentication.editInfo);
}