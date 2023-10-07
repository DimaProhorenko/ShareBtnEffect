const shareBtn = document.querySelector('.share-btn');
const btn = shareBtn.querySelector('.btn');

btn.addEventListener('click', () => {
    shareBtn.classList.toggle('open');
});