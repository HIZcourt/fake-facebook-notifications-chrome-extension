var modNo = function(f,m,n) {
	$('#requestsCountValue').text(f);
	$('#requestsCountWrapper').show(0);

	$('#mercurymessagesCountValue').text(m);
	$('#mercurymessagesCountWrapper').show(0);

	$('#notificationsCountValue').text(n);
	$('#notificationsCountWrapper').show(0);

	$('title').text('(' + (f + m + n) + ') Facebook');
};

var range = function(bottom, top) {
	return Math.round((Math.random() * (top - bottom)) + bottom);
};

var f, m, n;

f = range(20, 30);
m = range(5, 15);
n = range(60, 80);

$(document).ready(function(){
	modNo(f,m,n);
	setInterval(function(){
		modNo(f,m,n);
	}, 500);
});

