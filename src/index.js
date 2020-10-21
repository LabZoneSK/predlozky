import './main.css';

const prepositions = ['k', 's', 'z', 'v', 'na', 'za', 'do', 'a', 'i']

const normalizeText = text => {
  let normalized = text
  prepositions.map(preposition => {
    const re = new RegExp(` [${preposition}] `, 'gm')
    normalized = normalized.replace(re, ` ${preposition}&nbsp;`)
  })

  return normalized
}

const copyOutput = () => {
  /* Get the text field */
  var copyText = document.getElementById('outputText')

  /* Select the text field */
  copyText.select()
  copyText.setSelectionRange(0, 99999) /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand('copy')

  /* Alert the copied text */
  alert('Copied the text: ' + copyText.value)
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
