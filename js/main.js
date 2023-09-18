// Создаем массив для сохранения картинок
arrimg = new Array();
arrimg[0] = new Image();
arrimg[1] = new Image();
arrimg[2] = new Image();
arrimg[3] = new Image();
arrimg[4] = new Image();

// Сохраняем значки флагов
arrimg[0].src = '../img/flag-USD.svg';
arrimg[1].src = '../img/flag-EUR.svg';
arrimg[2].src = '../img/flag-RUB.svg';
arrimg[3].src = '../img/flag-KZT.svg';
arrimg[4].src = '../img/flag-CNY.svg';

const imageArray = new Array();

imageArray[0] = {
  image01: new Image(),
  src: '../img/flag-USD.svg',
  imageCaption: 'USD',
};

imageArray[1] = {
  image01: new Image(),
  src: '../img/flag-EUR.svg',
  imageCaption: 'EUR',
};

imageArray[2] = {
  image01: new Image(),
  src: '../img/flag-RUB.svg',
  imageCaption: 'RUB',
};

imageArray[3] = {
  image01: new Image(),
  src: '../img/flag-KZT.svg',
  imageCaption: 'KZT',
};

imageArray[4] = {
  image01: new Image(),
  src: '../img/flag-CNY.svg',
  imageCaption: 'CNY',
};

// === Для основной формы (основной валюты) ===

// При клике на выподающем меню по кнопке USD меняется основая кнопка
// информирующая об атуальной валюте, которая будет использоваться при конвертации
document.querySelector('#main-btn-EUR').onclick = function () {
  // Меняем надпись
  document.querySelector('.desc-main').innerText = 'EUR';
  // Меняем картинку
  document.querySelector('.img-main').src = arrimg[1].src;
};

document.querySelector('#main-btn-USD').onclick = function () {
  // Меняем надпись
  document.querySelector('.desc-main').innerText = 'USD';
  // Меняем картинку
  document.querySelector('.img-main').src = arrimg[0].src;
};

document.querySelector('#main-btn-RUB').onclick = function () {
  // Меняем надпись
  document.querySelector('.desc-main').innerText = 'RUB';
  // Меняем картинку
  document.querySelector('.img-main').src = arrimg[2].src;
};

document.querySelector('#main-btn-CNY').onclick = function () {
  // Меняем надпись
  document.querySelector('.desc-main').innerText = 'CNY';
  // Меняем картинку
  document.querySelector('.img-main').src = arrimg[4].src;
};

document.querySelector('#main-btn-KZT').onclick = function () {
  // Меняем надпись
  document.querySelector('.desc-main').innerText = 'KZT';
  // Меняем картинку
  document.querySelector('.img-main').src = arrimg[3].src;
};

// ==========

// === Для вторичной формы (в какую валюту конвертируем) ===

// При клике на выподающем меню по кнопке RUB меняется основая кнопка
// информирующая об атуальной валюте, которая будет использоваться при конвертации
document.querySelector('#secondary-btn-RUB').onclick = function () {
  // Меняем надпись валюты
  document.querySelector('.desc-secondary').innerText = 'RUB';
  // Меняем картинку валюты
  document.querySelector('.img-secondary').src = arrimg[2].src;
};

document.querySelector('#secondary-btn-EUR').onclick = function () {
  // Меняем надпись валюты
  document.querySelector('.desc-secondary').innerText = 'EUR';
  // Меняем картинку валюты
  document.querySelector('.img-secondary').src = arrimg[1].src;
};

document.querySelector('#secondary-btn-USD').onclick = function () {
  // Меняем надпись валюты
  document.querySelector('.desc-secondary').innerText = 'USD';
  // Меняем картинку валюты
  document.querySelector('.img-secondary').src = arrimg[0].src;
};

document.querySelector('#secondary-btn-CNY').onclick = function () {
  // Меняем надпись валюты
  document.querySelector('.desc-secondary').innerText = 'CNY';
  // Меняем картинку валюты
  document.querySelector('.img-secondary').src = arrimg[4].src;
};

document.querySelector('#secondary-btn-KZT').onclick = function () {
  // Меняем надпись валюты
  document.querySelector('.desc-secondary').innerText = 'KZT';
  // Меняем картинку валюты
  document.querySelector('.img-secondary').src = arrimg[3].src;
};

// ==========

// Функциональность по смене валют местами
document.querySelector('.change__btn').onclick = function () {
  // Сохраняем то, что на данный момент в первой форме
  //   const valueFirstInput = document.querySelector('#main-input').value;
  const nameMainCurrency = document.querySelector('.desc-main').textContent;
  const flagMainCurrency = document.querySelector('.img-main').src;

  // Сохраняем то, что на данный момент во второй форме
  //   const valueSecondInput = document.querySelector('#secondary-input').value;
  const nameSecondaryСurrency = document.querySelector('.desc-secondary').textContent;
  const flagSecondaryCurrency = document.querySelector('.img-secondary').src;

  // Меняем местами названия валют
  document.querySelector('.desc-main').innerText = nameSecondaryСurrency;
  document.querySelector('.desc-secondary').innerText = nameMainCurrency;

  // Меняем местами флаги валют
  document.querySelector('.img-main').src = flagSecondaryCurrency;
  document.querySelector('.img-secondary').src = flagMainCurrency;
};

let observer = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords);
  mutationRecords.forEach((el) => {
    const newVal = el.addedNodes[0].textContent;
    const oldVal = el.removedNodes[0].textContent;

    const formwhichСhange = el.addedNodes[0].parentElement.id;

    anotherFunction(newVal, oldVal, formwhichСhange);
    // observer.disconnect();
  });
});

function anotherFunction(newVal, oldVal, formwhichСhange) {
  const nameMainCurrency = document.querySelector('.desc-main').textContent;
  const flagMainCurrency = document.querySelector('.img-main').src;

  const nameSecondaryСurrency = document.querySelector('.desc-secondary').textContent;
  const flagSecondaryСurrency = document.querySelector('.img-secondary').src;

  console.log(flagSecondaryСurrency);
  console.log(flagMainCurrency);

  console.log('nameMainCurrency', nameMainCurrency);
  console.log('nameSecondaryСurrency', nameSecondaryСurrency);

  const anotherNewVal = newVal;
  const anotherOldVal = oldVal;

  console.log('New:', anotherNewVal, 'Old:', anotherOldVal);

  if (nameMainCurrency === nameSecondaryСurrency && formwhichСhange === 'descMain') {
    console.log('hi 1');
    // Меняем название валюты
    document.querySelector('.desc-secondary').innerText = anotherOldVal;

    // К названию прикрепляется его флаг.
    imageArray.forEach((el) => {
      if (el.imageCaption === anotherOldVal) {
        document.querySelector('.img-secondary').src = el.src;
      }
    });
  }

  if (nameMainCurrency === nameSecondaryСurrency && formwhichСhange === 'descSecondary') {
    console.log('hi 2');
    // Меняем название валюты
    document.querySelector('.desc-main').innerText = anotherOldVal;

    // К названию прикрепляется его флаг.
    imageArray.forEach((el) => {
      if (el.imageCaption === anotherOldVal) {
        document.querySelector('.img-main').src = el.src;
      }
    });
  }
}

observer.observe(descMain, {
  childList: true, // наблюдать за непосредственными детьми
});

observer.observe(descSecondary, {
  childList: true, // наблюдать за непосредственными детьми
});

observer.observe(imgSecondary, {
  childList: true, // наблюдать за непосредственными детьми
});

// === Слушаем отправку формы ===

// Берем и сохраняем значение из основной формы (основной валюты)
const mainFrom = document.querySelector('#main-input');

// При клике на кнопку 'Convert' выполняется функция конвертации валюты
const input = (document.querySelector('#inputRate').onclick = performСurrencyСonversions);

// ==========

// === Делаем запрос на сервер и выполняем конвертацию валюты ===

// Уникальный ключ для доступа к API
const apiKey = '93fd87fc0617b5c3b482943d2058bace';

// Адрес запроса
const url = `http://data.fixer.io/api/latest?access_key=${apiKey}`;

// Функция срабатывающая при клике на кнопку 'Convert'
function performСurrencyСonversions() {
  // Выполняем запрос на сервер
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // Берем значение из основного инпута, обрезаем пробелы
      const valueBasicRate = mainFrom.value.trim();

      // Сохраняем текущее название основной валюты
      const textContentMain = document.querySelector('.desc-main').textContent;

      // Сохраняем текущее название вторичной валюты, чтобы вывести его значение
      const textContentSecondary = document.querySelector('.desc-secondary').textContent;

      // Сохраняем курс обмена для существующих валют
      // (1) Для добавления второй основной валюты USD: 1 EUR = ... USD
      const courseReceivedUSD = data.rates.USD;

      const courseReceivedRUB = data.rates.RUB;
      const courseReceivedKZT = data.rates.KZT;
      const courseReceivedCNY = data.rates.CNY;

      // (2) Для добавления второй основной валюты USD: 1 EUR = ... USD
      // Процесс конвертации через промежуточную валюту
      // Курс обмена между 1 USD и 1 EUR
      const exchangeRateBetweenUSDAndEUR = 1 / courseReceivedUSD;

      // Если основная валюта EUR, то выполняется данный участок кода
      if (textContentMain === 'EUR') {
        let resultingMultipliedRateRUB = '';
        let resultingMultipliedRateKZT = '';
        let resultingMultipliedRateCNY = '';

        // Умножаем полученный курс на введенное значение в основной форме
        if (textContentSecondary === 'RUB') {
          resultingMultipliedRateRUB = courseReceivedRUB * valueBasicRate;
        } else if (textContentSecondary === 'KZT') {
          resultingMultipliedRateKZT = courseReceivedKZT * valueBasicRate;
        } else if (textContentSecondary === 'CNY') {
          resultingMultipliedRateCNY = courseReceivedCNY * valueBasicRate;
        }

        // Выводим окончательный результат конвертации валюты
        if (textContentSecondary === 'RUB') {
          document.querySelector('#secondary-input').value = resultingMultipliedRateRUB.toFixed(1);
        } else if (textContentSecondary === 'KZT') {
          document.querySelector('#secondary-input').value = resultingMultipliedRateKZT.toFixed(1);
        } else if (textContentSecondary === 'CNY') {
          document.querySelector('#secondary-input').value = resultingMultipliedRateCNY.toFixed(1);
        }

        // Если основная валюта USD, то выполняется данный участок кода
      } else if (textContentMain === 'USD') {
        let exchangeRateBetweenUSDAndRUB = '';
        let exchangeRateBetweenUSDAndKZT = '';
        let exchangeRateBetweenUSDAndCNY = '';

        // Умножаем полученный курс на введенное значение в основной форме
        if (textContentSecondary === 'RUB') {
          // Курс обмена между 1 USD и 1 RUB
          exchangeRateBetweenUSDAndRUB =
            exchangeRateBetweenUSDAndEUR * courseReceivedRUB * valueBasicRate;
        } else if (textContentSecondary === 'KZT') {
          // Курс обмена между 1 USD и 1 KZT
          exchangeRateBetweenUSDAndKZT =
            exchangeRateBetweenUSDAndEUR * courseReceivedKZT * valueBasicRate;
        } else if (textContentSecondary === 'CNY') {
          // Курс обмена между 1 USD и 1 CNY
          exchangeRateBetweenUSDAndCNY =
            exchangeRateBetweenUSDAndEUR * courseReceivedCNY * valueBasicRate;
        }

        // Выводим окончательный результат конвертации валюты
        if (textContentSecondary === 'RUB') {
          document.querySelector('#secondary-input').value =
            exchangeRateBetweenUSDAndRUB.toFixed(1);
        } else if (textContentSecondary === 'KZT') {
          document.querySelector('#secondary-input').value =
            exchangeRateBetweenUSDAndKZT.toFixed(1);
        } else if (textContentSecondary === 'CNY') {
          document.querySelector('#secondary-input').value =
            exchangeRateBetweenUSDAndCNY.toFixed(1);
        }
      }
    });
}
// ==========

// Основной вывод работы: ВАЖНО. ОЧЕНЬ ВАЖНО декомпозировать задачу!
// Декомпозиция = программирование
