// Word options for each part
const parts = {
  who: ["A brave astronaut", "A silly pirate", "A tiny robot", "A clever cat"],
  where: ["on the moon", "in a haunted house", "under the sea", "in a big city"],
  action: ["found", "lost", "built", "danced with"],
  object: ["a magic key", "a talking sandwich", "a golden map", "a funny hat"],
  ending: ["and saved the day!", "and made new friends.", "and learned to fly!", "and laughed forever."]
};

// Store the selected indexes
const current = { who: 0, where: 0, action: 0, object: 0, ending: 0 };

// Helper to update visible text
function updatePartText(part) {
  document.getElementById(part + "Text").textContent = parts[part][current[part]];
}

// Initialize all text on load
Object.keys(parts).forEach(updatePartText);

// Cycle through choices
function cycle(part) {
  const list = parts[part];
  current[part] = (current[part] + 1) % list.length;
  updatePartText(part);
}

// Build and show the story
function tellStory() {
  const story = `${parts.who[current.who]} ${parts.where[current.where]} ${parts.action[current.action]} ${parts.object[current.object]} ${parts.ending[current.ending]}`;
  document.getElementById("storyBox").textContent = story;
}

// Pick random story
function randomStory() {
  for (let part in parts) {
    current[part] = Math.floor(Math.random() * parts[part].length);
    updatePartText(part);
  }
  tellStory();
}

// Reset everything
function resetStory() {
  for (let part in parts) {
    current[part] = 0;
    updatePartText(part);
  }
  document.getElementById("storyBox").textContent = "Your story will appear here.";
}

// Attach button actions
document.getElementById("whoBtn").onclick = () => cycle("who");
document.getElementById("whereBtn").onclick = () => cycle("where");
document.getElementById("actionBtn").onclick = () => cycle("action");
document.getElementById("objectBtn").onclick = () => cycle("object");
document.getElementById("endingBtn").onclick = () => cycle("ending");
document.getElementById("tellBtn").onclick = tellStory;
document.getElementById("randomBtn").onclick = randomStory;
document.getElementById("resetBtn").onclick = resetStory;
