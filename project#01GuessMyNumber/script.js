document.querySelector('.message').textContent = 'triendeptrai';
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value = 39;
document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value)
})