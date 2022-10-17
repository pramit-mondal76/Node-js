const bar = () => console.log("bar");
const baz = () => console.log("baz");
const foo = () => {
	console.log("foo");
	// bar();
	setTimeout(bar, 1000);
	baz();
}
foo();
