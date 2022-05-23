document.addEventListener("DOMContentLoaded", function () {

    // модальное окно 

    (function () {
        let modalWrapper = document.createElement('div')
        modalWrapper.classList.add('modalWrapper')

        let modalWindow = document.createElement('div')
        modalWindow.classList.add('modalWindow')

        let modalText = document.createElement('p')
        modalText.classList.add('modalText')
        modalText.innerHTML = 'Привет, мир'

        let btnCross = document.createElement('span');
        btnCross.classList.add('btnCross')

        document.body.append(modalWrapper)
        modalWrapper.append(modalWindow)
        modalWindow.append(modalText)
        modalWindow.append(btnCross)

        modalWrapper.addEventListener('click', e => {
            const target = e.target
            if (!target.closest('.modalWindow') || target.closest('.btnCross')) {
                document.body.removeChild(modalWrapper)
            }
        })

        modalWrapper.onmouseover = (e) => {
            if (e.target === e.currentTarget) {
                modalWrapper.classList.add('hover');
                btnCross.classList.add('hover');
            }
        };

        modalWrapper.onmouseout = (e) => {
            if (e.target === e.currentTarget) {
                modalWrapper.classList.remove('hover');
                btnCross.classList.remove('hover')
            }
        };

    })();

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

