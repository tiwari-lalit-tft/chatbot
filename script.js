

const openButton = document.getElementById('open-iframe');
const iframeContainer = document.getElementById('iframe-container');
const closeButton = document.getElementById('close-iframe');

openButton.addEventListener('click', function () {
  iframeContainer.style.display = (iframeContainer.style.display === 'block') ? 'none' : 'block';
});

closeButton.addEventListener('click', function () {
  iframeContainer.style.display = 'none';
});
