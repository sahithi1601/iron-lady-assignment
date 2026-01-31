const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

let selectedProgram = "";

// Initial message
addMessage("Hi 👋 Welcome to Iron Lady! Are you a Student, Working Professional, or Aspiring Entrepreneur?", "bot");
addOptions(["Student", "Working Professional", "Aspiring Entrepreneur"]);

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, "user");
    userInput.value = "";

    botReply(message.toLowerCase());
}

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = `message ${sender}`;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addOptions(options) {
    const div = document.createElement("div");
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => {
            addMessage(option, "user");
            botReply(option.toLowerCase());
        };
        div.appendChild(btn);
    });
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showProgramOptions() {
    addOptions(["Benefits", "Duration", "Fees", "How to Enroll", "Support"]);
}

function botReply(message) {

    if (message === "student") {
        addMessage(
            "Great! As a student, Iron Lady helps you with career guidance, skill development, and mentorship. What would you like to know?",
            "bot"
        );
        addOptions(["Programs", "Eligibility", "Support"]);
    }

    else if (message === "programs") {
        addMessage(
            "Iron Lady offers the following programs. Please select one to view full details:",
            "bot"
        );
        addOptions([
            "Career Guidance Program",
            "Leadership & Skill Development Program",
            "Women Entrepreneurship Program"
        ]);
    }

    else if (message.includes("career guidance")) {
        selectedProgram = "career";
        addMessage("📘 Career Guidance Program selected. What would you like to know?", "bot");
        showProgramOptions();
    }

    else if (message.includes("leadership")) {
        selectedProgram = "leadership";
        addMessage("📗 Leadership & Skill Development Program selected. What would you like to know?", "bot");
        showProgramOptions();
    }

    else if (message.includes("entrepreneur")) {
        selectedProgram = "entrepreneur";
        addMessage("📕 Women Entrepreneurship Program selected. What would you like to know?", "bot");
        showProgramOptions();
    }

    else if (message === "benefits") {
        if (selectedProgram === "career") {
            addMessage("✅ Benefits:\n• Career clarity\n• Confidence building\n• One-on-one mentorship\n• Structured guidance", "bot");
        } 
        else if (selectedProgram === "leadership") {
            addMessage("✅ Benefits:\n• Leadership mindset\n• Communication skills\n• Professional growth", "bot");
        } 
        else if (selectedProgram === "entrepreneur") {
            addMessage("✅ Benefits:\n• Business mentorship\n• Startup guidance\n• Confidence building", "bot");
        }
        showProgramOptions();
    }

    else if (message === "duration") {
        if (selectedProgram === "career") {
            addMessage("⏳ Duration: 6–8 weeks with flexible schedules.", "bot");
        } 
        else if (selectedProgram === "leadership") {
            addMessage("⏳ Duration: 8–10 weeks with hands-on sessions.", "bot");
        } 
        else if (selectedProgram === "entrepreneur") {
            addMessage("⏳ Duration: 10–12 weeks with mentor support.", "bot");
        }
        showProgramOptions();
    }

    else if (message === "fees") {
        addMessage("💰 Fees: Fees vary based on the program. Exact details are shared during enrollment.", "bot");
        showProgramOptions();
    }

    else if (message.includes("enroll")) {
        addMessage("📝 How to Enroll: Visit the Iron Lady website, select a program, and complete the registration process.", "bot");
        showProgramOptions();
    }

    else if (message === "support") {
        addMessage("🤝 Support: Continuous mentor support, live sessions, and access to Iron Lady community.", "bot");
        showProgramOptions();
    }

    else {
        addMessage("Please select an option to continue 😊", "bot");
    }
}
