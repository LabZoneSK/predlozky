import './main.css';

const prepositions = ['k', 'K', 's', 'S', 'v', 'V', 'z', 'Z', 'o', 'O', 'u', 'U', 'na', 'za', 'do', 'a', 'i']

const normalizeText = text => {
  let normalized = text
  prepositions.map(preposition => {
    const re = new RegExp(` [${preposition}] `, 'gm')
    normalized = normalized.replace(re, ` ${preposition}&nbsp;`)
  })

  return normalized
}

const copyOutput = () => {
  var copyText = document.getElementById('outputText')

  copyText.select()
  copyText.setSelectionRange(0, 99999) /*For mobile devices*/
  document.execCommand('copy')

  alert('Text bol skopírovaný do schránky');
}

document
  .getElementById('normalizeText')
  .addEventListener('click', function (event) {
    console.log('Normalize text started.')

    const text = document.getElementById('inputText').value
    const output = document.getElementById('outputText')
    output.value = normalizeText(text)
  })

document
  .getElementById('copyText')
  .addEventListener('click', function (event) {
    copyOutput();
  })
