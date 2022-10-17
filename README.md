1. What is nodemon ?

=>  Nodemon is a popular tool that is used for the development of applications based on node.js. It simply restarts the node application whenever it observes the changes in the file present in the working directory of your project.

<b>Installation</b>

![Screenshot 2022-10-17 104040](https://user-images.githubusercontent.com/95114633/196094215-ae1ceefe-a9e9-433d-a4e2-e47d9a39ef9a.png)


![Screenshot 2022-10-17 105804](https://user-images.githubusercontent.com/95114633/196096278-f310bb6a-139f-4f1d-af53-8990368f89c2.png)

The next step is to start the server using the below command.

<b> $ nodemon server  </b>

![nodemon2](https://user-images.githubusercontent.com/95114633/196096443-140cd2ea-63d4-4408-9f44-2367694b1598.png)

Now, if you change inside the server.js file, the server will automatically restart, and you can get the latest output on the browser.

If you make any changes in the server.js file, it will automatically be reflected and the server will restart and the latest output will be displayed on the browser.

Conversely, nodemon will search for files driven out by your project and will look for a primary package.json file to start the script. Also, you can either opt for launching nodemon directly for your application by writing the start script in the package.json file. The package.json file may have some dependencies as shown below.

![Screenshot 2022-10-17 110121](https://user-images.githubusercontent.com/95114633/196096604-202dbf85-6567-4ee0-accd-0c90e2f096aa.png)

Now, all you need to do is to hit the command as shown below.

<b>$ npm start </b>

