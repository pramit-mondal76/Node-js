function crown() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('😀')
		}, 3000);
	})
}
async function msg() {
	const msg = await crown();
	console.log("message :" + msg);
	get();

}
msg();
function get() {
	console.log("result after .");
}
//get();

//result after .
//message :😀
