#! /usr/bin/env node
import inquirer from "inquirer";
let userInput = await inquirer.prompt({
    type: "number",
    name: "seconds",
    message: "Enter countdown duration in seconds!",
});
let { seconds } = userInput;
if (seconds != 0) {
    console.log(`Starting countdown for ${seconds} seconds.....`);
    startCountdownFun(seconds);
}
else {
    console.log(`Please enter a number greater than 0`);
}
function startCountdownFun(seconds) {
    const currentTime = Date.now(); // Print time in millisecond from 1 jan
    1979;
    let userenteredTime = seconds * 1000; // Convert into milliseconds
    // Set interval
    const timer = setInterval(() => {
        const remainingTime = userenteredTime - (Date.now() - currentTime);
        if (remainingTime >= 0) {
            process.stdout.write(`Time remaining ${Math.floor(remainingTime / 1000)}
            seconds`);
        }
        else {
            clearInterval(timer);
            console.log(`\nTime Up!`);
            console.log(`Thank you for using our Countdown Timer App!`);
        }
    }, 1000);
}
