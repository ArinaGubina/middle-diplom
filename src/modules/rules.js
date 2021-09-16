const rules = () => {
    // ввод цифр
    // const regexNum = /[^0-9]/; 
    // const calcInp = document.querySelectorAll('.calc-block>input');
    // calcInp.forEach(item => {
    //     item.oninput = () => {
    //         item.value = item.value.replace(regexNum, '');
    //     };
    // });

    // ввод кириллицы
    const regex = /[^А-Яа-яЁёA-Za-z\s-]/g; // регулярка только русские, латинские буквы, пробел и дефис
   
    const yourName = document.querySelectorAll('[name="fio"]');
    yourName.forEach(item => {
        item.oninput = () => {
            item.value = item.value.replace(regex, '');
        };
        item.onchange = () => {
            item.value = item.value.replace(/ +/g, ' ').trim();
            item.value = item.value.replace(/- /g, '-');
            item.value = item.value.replace(/ -/g, '-');
            item.value = item.value.replace(/-+/g, '-');
            const str = item.value;
            let newStr = '';
            for (let i = 0; i < str.length; i++) {
                if (i === 0 || i === (str.length - 1)) {
                    if (str[i] === '-') {
                        continue;
                    } else if (i === 0) {
                        newStr = str[i].toLocaleUpperCase();
                        continue;
                    }
                }
                if (str[i - 1] === ' ' || str[i - 1] === '-') {
                    newStr += str[i].toLocaleUpperCase();
                } else {
                    newStr += str[i].toLocaleLowerCase();
                }
            }
            item.value = newStr;
        };
    });

    // ввод номера телефона
    // регулярка только цифры, круглые скобки, дефис и +
    // eslint-disable-next-line no-useless-escape
    const regexNumPhone = /[^0-9\(\)-\+\)\()]/g;
    const phone = document.querySelectorAll('[name="phone"]');
    phone.forEach(item => {
        item.oninput = () => {
            item.value = item.value.replace(regexNumPhone, '');
        };
    });
};

export default rules;
