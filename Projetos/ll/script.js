const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

// Adiciona texto do 'text-input' em um paragrafo
inputText.addEventListener('input', () => {
  memeText.innerText = inputText.value;
});

// Adiciona imagem do'meme-insert' em uma <img>
function loadImage() {
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
}
memeInsert.addEventListener('change', loadImage);