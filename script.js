function addUpdate() {
    const updateContent = document.getElementById('updateContent').value;
    if (updateContent.trim() === '') {
        alert('Por favor, digite uma atualização.');
        return;
    }

    const updateDiv = document.createElement('div');
    updateDiv.classList.add('update-item');
    updateDiv.innerHTML = `<p>${updateContent}</p>`;

    const updatesFeed = document.getElementById('updatesFeed');
    updatesFeed.prepend(updateDiv);

    document.getElementById('updateContent').value = '';
}

function addComplaint() {
    const complaintContent = document.getElementById('complaintContent').value;
    if (complaintContent.trim() === '') {
        alert('Por favor, digite uma reclamação.');
        return;
    }

    const complaintDiv = document.createElement('div');
    complaintDiv.classList.add('complaint-item');
    complaintDiv.innerHTML = `<p>${complaintContent}</p>`;

    const updatesFeed = document.getElementById('updatesFeed');
    updatesFeed.prepend(complaintDiv);

    document.getElementById('complaintContent').value = '';
}
