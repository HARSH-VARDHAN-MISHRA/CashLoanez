
function showBankingDetails() {
    document.getElementById('personalDetails').classList.add('hidden');
    document.getElementById('bankingDetails').classList.remove('hidden');
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showPersonalDetails() {
    document.getElementById('personalDetails').classList.remove('hidden');
    document.getElementById('bankingDetails').classList.add('hidden');
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.getElementById('mainForm').addEventListener('submit', function() {
    document.getElementById('loader').classList.remove('hidden');
});