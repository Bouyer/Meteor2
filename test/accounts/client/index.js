Template.user_loggedout.events({
	"click #login": function (e , tmpl) {
		Meteor.loginWithGithub({
			requestPermissions: ['user', 'public_repo']
		},function(err) {
			if(err){
			
			} else {
			
			}
		});
	}
});

Template.user_loggedin.events({
	"click #logout": function (err) {
		Meteor.logout(function (err) {
			if (err) {
			
			} else {
			
			}
		});
	}
});


