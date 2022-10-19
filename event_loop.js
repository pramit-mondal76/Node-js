//events loops


const bar = () => console.log("bar");
const baz = () => console.log("baz");
const foo = () => {
	console.log("foo");
	// bar();
	setTimeout(bar, 1000);
	baz();
}
foo();


// Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
// The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
// The event loop allows us to use callbacks and promises.
// The event loop executes the tasks starting from the oldest first.
