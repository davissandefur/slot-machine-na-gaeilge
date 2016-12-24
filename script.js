var verbs = ['abair', 'beir', 'clois', 'déan', 'faigh', 'feic', 'ith', 'tabhair',
  'tar', 'téigh', 'bí', 'is'
];
var nouns1 = ['mé', 'tú', 'sé', 'sí', 'muid', 'sibh', 'siad'];
var nouns2 = ['fear', 'bean', 'dochtúir', 'mac léinn', 'dalta', 'buachaill', 'cailín'];



function spin() {
  var randverb = getRandomInt(verbs.length - 1);
  var randnoun1 = getRandomInt(nouns1.length - 1);
  var randnoun2 = getRandomInt(nouns2.length - 1);

  document.getElementById('verb').textContent = verbs[randverb];
  document.getElementById('noun1').textContent = nouns1[randnoun1];
  document.getElementById('noun2').textContent = nouns2[randnoun2];
}

function getRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
}