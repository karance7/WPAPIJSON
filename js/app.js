// Here you can initialize the app

var myApp = new Framework7();

// If your using custom DOM library, then save it to $$ variable

// var $$ = Dom7;

// Add the view

var mainView = myApp.addView('.view-main', {

    // enable the dynamic navbar for this view:

    dynamicNavbar: true

});

// close login screen after login

Dom7('.login-screen .list-button').on('click', function() {

    var uname = $$('.login-screen input[name="Website"]').val();

    myApp.closeModal('.login-screen');

});

// Get user input and store in uname varible

function getUserinput(){

    var uname = Dom7('.login-screen input[name="Website"]').val();

};

// concat url using userinput

var url = "http://" + uname.getUserinput(); + "/?json=get_recent_posts";

// Get JSON array and store in varible 

function getJSON(url, function(result) {

	$.each(result.posts, function(i, field) {

	    var title = field.title;

	    var content = field.content;

	    // append in #listview id on frontend

	    $("#listview").append('<div class="card ks-card-header-pic"><div style="background-image:url(' + URL + ')" valign="bottom" class="card-header color-white no-border">'+ title + '</div><div class="card-content"><div class="card-content-inner"><p class="color-gray">Posted on ' + date + '</p><p> ' + content + ' </p></div></div><div class="card-footer"><a href="#" class="link">Like</a><a href="#" class="link">Read more</a></div></div>');

	});

});