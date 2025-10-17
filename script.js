// Word options for each part
const parts = {
  who: ["A brave astronaut", "A silly pirate", "A tiny robot", "A clever cat"],
  where: ["on the moon", "in a haunted house", "under the sea", "in a big city"],
  action: ["found", "lost", "built", "danced with"],
  object: ["a magic key", "a talking sandwich", "a golden map", "a funny hat"],
  ending: ["and saved the day!", "and made new friends.", "and learned to fly!", "and laughed forever."]
};
// Store the selected indexes
let current = { who: 0, where: 0, action: 0, object: 0, ending: 0 };
let current = { who: 0, where: 0, action: 0, object: 0, ending: 0 };

// Cycle through choices
function cycle(part) {
  const list = parts[part];
  current[part] = (current[part] + 1) % list.length;
  document.getElementById(part + "Text").textContent = list[current[part]];
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
    document.getElementById(part + "Text").textContent = parts[part][current[part]];
  }
  tellStory();
}

// Reset everything
function resetStory() {
  for (let part in parts) {
    current[part] = 0;
    document.getElementById(part + "Text").textContent = "";
  }
  document.getElementById("storyBox").textContent = "Your story will appear here.";
}

// Attach button actions
whoBtn.onclick = () => cycle("who");
whereBtn.onclick = () => cycle("where");
actionBtn.onclick = () => cycle("action");
objectBtn.onclick = () => cycle("object");
endingBtn.onclick = () => cycle("ending");
tellBtn.onclick = tellStory;
randomBtn.onclick = randomStory;
resetBtn.onclick = resetStory;