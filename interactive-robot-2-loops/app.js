// Interactive Robot 2 — Loops Practice
// Author: Jacob Lohrengel
// Requirements:
// - Use at least 2 loops (1 for loop, 1 while or do...while)
// - Still use conditionals (if / else if / else)
// - At least one condition that uses && or ||
// - No infinite loops!

// 1) Grab elements
const start = document.getElementById("startRobot");
const log = document.getElementById("log");

// Helpers to write output to the page
function say(html) {
  if (!log) return;
  const p = document.createElement("p");
  p.innerHTML = html;
  log.appendChild(p);
}

function reset() {
  if (log) {
    log.innerHTML = "";
  }
}

// Helper for prompt that returns a lowercase trimmed string
function ask(question) {
  const value = prompt(question);
  return (value || "").trim().toLowerCase();
}

// 2) Main click handler
if (start) {
  start.addEventListener("click", () => {
    reset();
    say("<strong>Interactive Robot</strong> booting...");

    // === Step 1: Greeting with conditionals (review from last week) ===
    const nameRaw = prompt("Hello human. What is your name?");
    const name = (nameRaw || "").trim();

    if (name === "") {
      say("No name detected. Assigning temporary ID: Guest-001.");
    } else {
      say("Greetings, " + name + ".");
    }

    // Check for special names
    if (name.toLowerCase() === "robot" || name.toLowerCase() === "bot") {
      say("😲 Wait... are YOU a robot too? Welcome, fellow machine!");
    } else if (name.length > 15) {
      say("📏 Wow, that's quite a long name! I'll remember it.");
    }

    // === Step 2: FOR loop section - System Boot Sequence ===
    say("<br><strong>🔧 Initiating boot sequence...</strong>");
    const bootTasks = [
      "Calibrating sensors",
      "Warming circuits",
      "Scanning room",
      "Loading personality modules"
    ];
    
    for (let i = 0; i < bootTasks.length; i++) {
      say(`⚙️ ${i + 1}/${bootTasks.length}: ${bootTasks[i]}...`);
    }
    say("✅ <strong>All systems operational!</strong><br>");

    // === Step 3: WHILE loop - Input Validation ===
    let validTask = false;
    let task = "";
    let attempts = 0;
    const maxAttempts = 3;
    
    while (!validTask && attempts < maxAttempts) {
      task = ask("Select a task: music, advice, or trivia");
      attempts++;
      
      if (task === "music" || task === "advice" || task === "trivia") {
        validTask = true;
        say(`✓ Task "${task}" confirmed!`);
      } else {
        if (attempts < maxAttempts) {
          say(`Invalid task. Please try again. (${maxAttempts - attempts} attempts remaining)`);
        } else {
          say(" Maximum attempts reached. Assigning default task: advice");
          task = "advice";
          validTask = true;
        }
      }
    }

    // === Step 4: Conditionals with nested logic ===
    say("<br><strong>Processing task: " + task.toUpperCase() + "</strong>");
    
    if (task === "music") {
      say("🎵 Music mode activated!");
      const genre = ask("What genre? (rock/classical/jazz/pop)");
      
      if (genre === "rock") {
        say("🎸 Playing 'Bohemian Rhapsody' by Queen!");
        // FOR loop to show music playing animation
        for (let i = 1; i <= 5; i++) {
          say("♪".repeat(i));
        }
      } else if (genre === "classical") {
        say("🎻 Playing Beethoven's 5th Symphony!");
        say("🎼 So refined and elegant!");
      } else if (genre === "jazz") {
        say("🎺 Playing 'Take Five' by Dave Brubeck!");
        say("🎹 Smooth jazz vibes!");
      } else if (genre === "pop") {
        say("🎤 Playing today's top hits!");
      } else {
        say("🎼 Genre not recognized. Playing something random!");
      }
      
    } else if (task === "advice") {
      say("💡 Advice mode activated!");
      const topic = ask("Advice about? (life/code/robots/school)");
      
      if (topic === "life") {
        say("🌟 Life advice: Be kind, stay curious, and never stop learning.");
        say("💪 Remember: Every expert was once a beginner.");
      } else if (topic === "code") {
        say("💻 Code advice: Write clean code, comment wisely, test often!");
        // FOR loop to show coding tips
        const tips = ["Use meaningful variable names", "Break problems into smaller parts", "Debug with patience"];
        say("<strong>Quick tips:</strong>");
        for (let i = 0; i < tips.length; i++) {
          say(`${i + 1}. ${tips[i]}`);
        }
      } else if (topic === "robots") {
        say("🤖 Robot advice: Keep your circuits clean and batteries charged!");
      } else if (topic === "school") {
        say("📚 School advice: Stay organized, ask questions, and don't procrastinate!");
      } else {
        say("📖 General advice: Stay positive and embrace challenges!");
      }
      
    } else if (task === "trivia") {
      say("🧠 Trivia mode activated!");
      say("Let me ask you some questions...");
      
      const answer = ask("What year was JavaScript created? (hint: 1990s)");
      
      if (answer === "1995") {
        say("✅ Correct! JavaScript was created in 1995 by Brendan Eich!");
      } else {
        say("❌ Sorry, the answer is 1995.");
      }
      
      // Bonus trivia with a for loop
      const triviaFacts = [
        "JavaScript was created in just 10 days!",
        "It was originally called LiveScript.",
        "JavaScript and Java are completely different languages."
      ];
      say("<br><strong>Bonus Facts:</strong>");
      for (let i = 0; i < triviaFacts.length; i++) {
        say(`💡 ${triviaFacts[i]}`);
      }
    }

    // === Step 5: Countdown with for loop ===
    say("<br><strong>🔄 Preparing to end session...</strong>");
    for (let count = 3; count > 0; count--) {
      say(`Countdown: ${count}...`);
    }

    // Final command with logical operators
    const cmd = ask("Do you want to power down or restart?");
    
    if (cmd === "power down" || cmd === "shutdown") {
      say("🔌 Powering down... Goodbye, " + (name || "human") + "!");
    } else if (cmd === "restart") {
      say("🔄 Restarting system... See you in a moment!");
      say("⚡ Rebooting... 10%... 50%... 100%!");
    } else {
      say("⏸️ Standing by for further instructions.");
    }
    
    say("<br>✨ <strong>Session complete!</strong> Thank you for interacting with me.");

  });
} else {
  console.warn("#startRobot not found — check your index.html");
}
