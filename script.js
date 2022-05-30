document.addEventListener("DOMContentLoaded", function () {

    // модальное окно 

    const btnModalClose = document.querySelector('.close-btn');
    const modalWindow = document.querySelector('.modal-container');

    modalWindow.addEventListener('click', e => {
        if (e.target == modalWindow || e.target == btnModalClose) {
            modalWindow.classList.add('closed')
        }
    });

    // скрытие первого блока 

    const btnBlockHide = document.querySelector('.btn-yellow');
    const blockToHide = document.querySelector('.block-1');

    btnBlockHide.addEventListener('click', function () {
        blockToHide.classList.toggle('hidden')
    });

    // меняем блоки 2 и 3 местами 

    const btnBlockReplace = document.querySelector('.btn-green');
    const blockToReplace = document.querySelector('.block-3');

    btnBlockReplace.addEventListener('click', function () {
        blockToReplace.classList.toggle('block-order')
    });


});

