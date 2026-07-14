let xp = Number(localStorage.getItem("xp")) || 245;
let level = Number(localStorage.getItem("level")) || 1;

function update() {
  document.getElementById("xp").textContent = xp + " XP";
  document.getElementById("level").textContent = "Lv. " + level;

  localStorage.setItem("xp", xp);
  localStorage.setItem("level", level);
}

function addXP(amount, message) {
  xp += amount;

  if (xp >= level * 120) {
    level++;
    xp = 0;
    alert("🎉 LEVEL UP! You reached Level " + level);
  }

  update();
  alert(message);
}

function completeQuest() {
  addXP(50, "🏆 Quest Complete!");
}

function logWorkout() {
  addXP(35, "🏋️ Workout Logged!");
}

function showExercises() {
  alert(
    "Exercise Library:\n\n" +
    "1. Push-ups - 3 sets\n" +
    "2. Squats - 4 sets\n" +
    "3. Plank - 45 seconds"
  );
}

function generatePlan() {
  alert("🧠 Personalized Plan Ready!\n\nPush Day Focus");
}

update();
