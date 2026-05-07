const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');
    const viewDropsBtn = document.querySelector('.btn-secondary');

    viewDropsBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });