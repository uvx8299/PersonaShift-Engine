
let characters = {};

fetch('characters.json')
  .then(response => response.json())
  .then(data => {
    characters = data;
    const select = document.getElementById("characterSelect");
    Object.keys(characters).forEach(key => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      select.appendChild(option);
    });
  });

function generatePrompt() {
  const selected = document.getElementById("characterSelect").value;
  const character = characters[selected];
  if (!character) return;

  const prompt = `You are now roleplaying as "${selected}", a simulated persona.

` +
    `Your personality traits:
${JSON.stringify(character.traits, null, 2)}

` +
    `Your memory:
${JSON.stringify(character.memory, null, 2)}

` +
    `Your tone tendency:
${character.tone}

` +
    `Respond naturally in this persona's voice. Use emotional and contextual cues.`

  document.getElementById("promptOutput").textContent = prompt;
}
