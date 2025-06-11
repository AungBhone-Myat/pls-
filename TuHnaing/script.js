document.getElementById('openButton').addEventListener('click', function() {
    const openEnvelope = document.querySelector('.envelope-open');
    const closeEnvelope = document.querySelector('.envelope-close');

    if (openEnvelope.style.display === 'none') {
        openEnvelope.style.display = 'block';
        closeEnvelope.style.display = 'none';
    } else {
        openEnvelope.style.display = 'none';
        closeEnvelope.style.display = 'block';
    }
});