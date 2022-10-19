//promises:one way to deal with asychronous code

const { result } = require("lodash");

let promise = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve("run before")

	}, 2000);
})
promise.then(
	result => {
		console.log(result);

		display();
	}
)
	.catch(error => {
		console.log(error);
	})


// promise.then(
// 	result => {
// 		console.log(result);
// 		display()
// 	}, error => (console.log(error))
// )

function display() {
	console.log("run after");
}


