// Interactive Robot — Conditionals Practice
// Author: Jacob Lohrengel
// Requirements:
// - Use 8+ total if/else if statements
// - Include at least 1 nested if
// - Include at least one && or ||

// 1) Grab elements
const start = document.getElementById("startRobot");
const log = document.getElementById("log");

const bubble = document.getElementById("bubble");

function stripTags(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}
// Helpers to write output to the page
function say(html) {
  // existing log behavior
  const p = document.createElement("p");
  p.innerHTML = html;
  log.appendChild(p);

  // make the robot "say" the latest message
  if (bubble) {
    bubble.textContent = stripTags(html); // keep bubble text clean
    bubble.classList.remove("pop");
    // Force reflow so the animation can re-run each time
    void bubble.offsetWidth;
    bubble.classList.add("pop");
  }
}

function reset() {
  if (log) log.innerHTML = "";
}
function ask(q) {
  const v = prompt(q);
  return (v ?? "").trim().toLowerCase();
}

// 2) TODO: fill in your if statements here
if (start) {
  start.addEventListener("click", () => {
    reset();
    say("<strong>Interactive Robot</strong> booting...");
    
    // Step 1: Greeting (use if/else to handle empty name vs non-empty)
    const nameRaw = prompt("Hello human. What is your name?");
    const name = (nameRaw ?? "").trim();
    // add an if statement to say no name detected if there is an empty string and assign a temp name
    if (name === "") {
      say("⚠️ No name detected. I'll call you <strong>Friend</strong>.");
    } else {
      // else call the function say and print Greetings... 
      // example: say("Greetings, " + name + ".");
      say("🤖 Greetings, <strong>" + name + "</strong>!");
    }
    
    // Step 2: Mood branch (happy/sad/curious/bored + fallback)
    const mood = ask("How are you feeling? (happy/sad/curious/bored)");
    // Write if statements to respond to the input of feeling
    if (mood === "happy") {
      say("😊 Wonderful! Your positive energy makes my circuits warm.");
    } else if (mood === "sad") {
      say("😔 I'm sorry to hear that. Remember, every storm runs out of rain.");
    } else if (mood === "curious") {
      say("🤔 Excellent! A curious mind is a growing mind.");
    } else if (mood === "bored") {
      say("😴 Boredom detected! Let me entertain you with tasks.");
    } else {
      say("🤷 I don't recognize that emotion, but I appreciate your honesty.");
    }
    
    // Step 3: Task selection -> nested choices
    const task = ask("Select a task: music, advice, or trivia");
    // write nested if statements so that once they select a task 
    // the robot then asks more questions based on the task
    if (task === "music") {
      say("🎵 Music mode activated!");
      const genre = ask("What genre? (rock/classical/jazz)");
      
      if (genre === "rock") {
        say("🎸 Playing 'Bohemian Rhapsody' by Queen! Rock on!");
      } else if (genre === "classical") {
        say("🎻 Playing Beethoven's 5th Symphony. So refined!");
      } else if (genre === "jazz") {
        say("🎺 Playing 'Take Five' by Dave Brubeck. Smooth!");
      } else {
        say("🎼 I'll play something random for you.");
      }
    } else if (task === "advice") {
      say("💡 Advice mode activated!");
      const topic = ask("Advice about? (life/code/robots)");
      
      if (topic === "life") {
        say("🌟 Life advice: Be kind, stay curious, and never stop learning.");
      } else if (topic === "code") {
        say("💻 Code advice: Write clean code, comment wisely, test often!");
      } else if (topic === "robots") {
        say("🤖 Robot advice: Keep your circuits clean and your batteries charged!");
      } else {
        say("📚 General advice: Stay positive and embrace challenges!");
      }
    } else if (task === "trivia") {
      say("🧠 Trivia mode activated!");
      const answer = ask("What year was JavaScript created? (hint: 1990s)");
      
      if (answer === "1995") {
        say("✅ Correct! JavaScript was created in 1995 by Brendan Eich!");
      } else {
        say("❌ Sorry, the answer is 1995. JavaScript was created by Brendan Eich.");
      }
    } else {
      say("❓ I don't recognize that task. Please try again next time.");
    }
    
    // Step 4: Logical operators example (&& and ||)
    const cmd = ask("Do you want to power down or restart?");
    // write an if statement here that responds differently based on their cmd and mood
    if (cmd === "power down" || cmd === "shutdown") {
      say("🔌 Powering down... Goodbye, human!");
    } else if (cmd === "restart" && mood === "happy") {
      say("🔄 Restarting with extra enthusiasm because you're happy! Wheee!");
    } else if (cmd === "restart") {
      say("🔄 Restarting system... See you in a moment!");
    } else {
      say("⏸️ Standing by for further instructions.");
    }
    
    say("✨ <strong>Session complete!</strong> Thank you for interacting with me.");
  });
} else {
  console.warn("#startRobot not found — check your index.html");
}
