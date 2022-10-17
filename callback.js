//Callbacks
function getmessage(msg, callback) {
	setTimeout(() => {
		console.log(msg);
		callback();
	}, 1000);
}
function display() {
	console.log("display message.");
}
//getmessage("set message", display);
getmessage("set message", () => console.log("get msg"))
//() => console.log("get msg") is callback funtion because this function passes as argument to the function
