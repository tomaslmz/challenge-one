function fixElements() {
  document.querySelector('.messages').style.justifyContent = 'space-between';
  const disableElements = document.querySelectorAll('.disable');

  for(const element of disableElements) {
    element.classList.add('disabled');
  }

  const enableElements = document.querySelectorAll('.enable');

  for(const element of enableElements) {
    element.classList.remove('enable');
  }
}

function validate(value) {
  if(/[A-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value)) {
    throw new Error('Você deve inserir um texto sem letras maiúsculas e caracteres especiais!')
  }
}

function encrypt(value) {
  try {
    fixElements();
    validate(value);

    document.querySelector('.result-text').innerHTML = value
    .replaceAll('a', 'ai')
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

    if(!value) {
      document.querySelector('.result-text').innerHTML = 'Nenhuma mensagem';
    }

    document.querySelector('#input').value = ''
  } catch(err) {
    document.querySelector('.result-text').innerHTML = err.message;
  }
}

function decrypt(value) {
  try {
    fixElements();
    validate(value);

    const decryptedText = value
      .replaceAll('ai', 'a')
      .replaceAll('enter', 'e')
      .replaceAll('imes', 'i')
      .replaceAll('ober', 'o')
      .replaceAll('ufat', 'u');


    document.querySelector('.result-text').innerHTML = decryptedText;

    if(!value) {
      document.querySelector('.result-text').innerHTML = 'Nenhuma mensagem';
    }

    document.querySelector('#input').value = ''

  } catch(err) { 
    document.querySelector('.result-text').innerHTML = err.message
  }
}

function copy(value) {
  navigator.clipboard.writeText(value);
  document.querySelector('.copy').innerHTML = 'Copiado!';
  setTimeout(() => {
    document.querySelector('.copy').innerHTML = 'Copiar';
  }, 1000);
}