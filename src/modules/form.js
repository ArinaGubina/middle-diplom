const form = () => {
    // валидация полей перед отправкой на сервер
    const validate = formInputs => {
        let validation = true;
        formInputs.forEach(input => {
            if (input.value.length < 2) {
                input.style.border = '2px solid red';
                console.log('Ошибка длины: ' + input.value.length);
                validation = false;
            } else if (input.closest('[name=phone]')) {
                const str = input.value;
                let numbers = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] !== '+' && str[i] !== '-' && str[i] !== '(' && str[i] !== ')') {
                        numbers++;
                    }
                }
                if (numbers !== 11) {
                    input.style.border = '2px solid red';
                    console.log('Ошибка: цифр ' + numbers); 
                    validation = false;
                } else {
                    input.style.border = '1px solid #dfdfdf';
                }
            } else {
                input.style.border = '1px solid #dfdfdf';
            }
        });
        return validation;
    };
    const errorMessage = 'Ошибка отправки формы',
        //loadMessage = 'Загрузка...',
        successMessage = 'Отлично! Ответ получен!!!',
        errorField = 'Поле заполнено неверно';

    const forms = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1rem; color: red;';

    const loadingImg = document.createElement('img');
    let loadingInterval;

    const loading = elem => {
        loadingImg.style.cssText = `display: block; position: fixed; 
        top: calc(50% - 80px); left: calc(50% - 80px); width: 160px;`;
        loadingImg.setAttribute('src', './images/loading.png');

        elem.appendChild(loadingImg);
        let deg;
        const loadingAnimate = () => {
            loadingInterval = requestAnimationFrame(loadingAnimate);
            deg -= 5;
            loadingImg.style.transform = `rotate(${deg}deg)`;
        };

        deg = 360;
        loadingImg.style.transform = `rotate(${deg}deg)`;
        loadingInterval = requestAnimationFrame(loadingAnimate);
    };

    // отправка на сервер
    const postData = body => fetch('./server.php', {
        method: 'POST',
        mode: 'same-origin',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'aplication/json',
        },
        redirect: 'follow',
        referrer: 'client',
        body: JSON.stringify(body)
    });

    forms.forEach(item => {
        const formInputs = item.querySelectorAll('input');
        item.addEventListener('submit', event => {
            event.preventDefault();
            const btn = item.querySelector('button');
            btn.parentNode.insertBefore(statusMessage, btn);
            statusMessage.textContent = "";
            if (validate(formInputs)) {
                loading(item);
                const formData = new FormData(item),
                    body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });
                if (document.querySelector('body').getAttribute('class') === 'balkony' && document.getElementById('calc-total').value > 0) {
                    body['calc-total'] = document.getElementById('calc-total').value;
                }                
                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        cancelAnimationFrame(loadingInterval);
                        loadingImg.remove();
                        statusMessage.textContent = successMessage;
                        setTimeout(() => {
                            statusMessage.remove();
                            const overlay = document.querySelector('.overlay'),
                                modal = btn.closest('.header-modal'),
                                services = btn.closest('.services-modal');
                            if (services) {
                                services.style.display = 'none';
                            }
                            if (modal) {
                                modal.style.display = 'none';
                            }
                            overlay.style.display = 'none';
                        }, 2500);
                        formInputs.forEach(input => {
                            if (! input.type === 'hidden') {
                                input.value = '';
                            }
                        });
                        btn.textContent = "Успешно отправлено"
                        btn.disabled = true; 
                    })
                    .catch(error => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
            } else {
                statusMessage.textContent = errorField;
            }
        });
    });
};

export default form;
