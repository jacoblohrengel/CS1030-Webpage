const name = prompt(`What is your name?`);
const os = prompt(`What is your primary operating system?`);
let folders = Number(prompt(`How many folders do you have in your main work directory?`));

if (isNaN(folders)) {
    alert(`Looks like that wasn't a number—using 0 instead.`);
    folders = 0;
}

document.getElementById("output").innerHTML = `Hello ${name}! You use ${os} as your primary operating system and have ${folders} folders in your main work directory.`;
    