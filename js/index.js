const principles = {
  Fundamentals: [
    "Don't criticize, codemn, or complain.",
    "Give honest and sincere apprection.",
    "Arouse in the other person an eager want."
  ],
  "Winning Friends": [
    "Become genuinely interested in other people.",
    "Smile.",
    "Remember that a person's name is to that person the sweetest and most important thing in any language.",
    "Be a good listener. Encourage others to talk about themselves.",
    "Talk in terms of the other person's interests.",
    "Make the other person feel important - and do it sincerely."
  ],
  "Influencing People": [
    "The only way to get the best of an argument is to avoid it.",
    "Show respect for the other person's opinions. Never say, \"You're wrong.\"",
    "If you are wrong, admit it quickly and emphatically",
    "Begin in a friendly way.",
    "Get the oether person say \"yes, yes\" immediately.",
    "Let the other person do a great deal of the talking.",
    "Let the other person feel that the idea is his or hers.",
    "Try honestly to see things from the other person's point of view.",
    "Be sympathetic with the other person's ideas and desires.",
    "Appeal to the nobler motives.",
    "Dramatize your ideas.",
    "Throw down a challenge."
  ],
  "Be A Leader": [
    "Begin with praise and honest appreciation.",
    "Call attention to people's mistakes indirectly",
    "Talk about your own mistakes before criticizing the other person.",
    "Ask questions instead of giving direct orders.",
    "Let the other person save face.",
    "Praise the slightest improvement and praise every improvement. Be \"hearty in your approbation and lavish in your praise\".",
    "Give the other person a fine reputation to live up to.",
    "Use encouragement. Make the fault seem easy to correct.",
    "Make the other person happy about doing the thing you suggest."
  ]
}

const elements = [];

for (let i in principles) {
  elements.push('<div class="card">')
  elements.push(`<h2>${i}</h2>`);
  elements.push('<ul>')
  
  for (let j of principles[i]) {
    elements.push(`<li>${j}</li>`);
  }
  
  elements.push('</ul>')
  elements.push('</div>')
}

const html = elements.join("");

const body = document.querySelector('#principles');
console.dir(body)
body.innerHTML = html;