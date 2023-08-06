const function_dic = {
  uuid: "uuid",
  index: "index",
  username: "username",
  password: "password",
  int: "randomInteger",
  float: "randomFloat",
  boolean: "randomBoolean",
  random: "randomItem",
  lorem: "lorem",
  picture: "picture",
  color: "color",
  name: "name",
  email: "email",
  phone: "phone",
  country: "country",
  city: "city",
  address: "address",
  postal_code: "postal_code",
  job: "job",
  company: "company",
  creditCardNumber: "creditCardNumber",
  gerder: "gender",
  urls: "urls",
  money: "money",
  date: "date",
  time: "time",
};

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c == "x" ? r : randomItem(["A", "B", "C"]);
    return v.toString(16);
  });
}


function randomInteger(min, max) {
  if (isNaN(min)||isNaN(max)){
    throw new Error(language === 'KO' ? 'min이나 max의 값이 숫자가 아닙니다.':'min and max must be a number')
  }
  const min_num = Math.min(min, max);
  const max_num = Math.max(min, max)
  return Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
}


/** 유저가 입력한 범위 내에서 실수를 생성합니다.
 * @param {float} min 최솟값
 * @param {float} max 최댓값
 * @param {integer} round 반올림 자릿수
 * @return 생성된 실수를 round 자릿수에서 반올림하여 반환합니다.
 */
function randomFloat(min, max, round = 3) {
    if (Number.parseFloat(min) != min) {
      throw new Error(language === 'KO' ? 'float min의 값이 실수가 아닙니다':'float min must be a number')
    }
    if (Number.parseFloat(max) != max) {
      throw new Error(language === 'KO' ? 'float max의 값이 실수가 아닙니다':'float max must be a number')
    }
    if (Number.isInteger(round) != true) {
      throw new Error(language === 'KO' ? 'float round의 값이 정수가 아닙니다':'float round must be a interger')
    }
    const min_num = Math.min(min, max)
    const max_num = Math.max(min, max)
    let num = Math.random() * (max_num - min_num) + min_num;
    return num.toFixed(round);
}


function randomItem(items, ...list) {
  if (list.length > 0 ){
    const itemList = [items, ...list]
    return itemList[Math.floor(Math.random() * items.length)];
  }
  else {
    return items[Math.floor(Math.random() * items.length)];
  }
}


function randomBoolean() {
  return randomItem([true, false]);
}

/** 랜덤한 문자열을 생성합니다.
 * @param {Array|undefined} args 생성할 갯수와, 생성 단위('word', 'paragraph') 
 * @returns args가 없다면 5개의 단어, args가 있다면 입력된 갯수만큼의 단어나 문장을 반환합니다.
 */
function lorem(args) {
  let result = ''
  let number = 5;
  let unit = 'word'
  if (args) {
    if (!isNaN(parseInt(args[0])) && typeof args[1] === 'string') {
      number = parseInt(args[0]);
      unit = args[1];
    } else if (!isNaN(parseInt(args[0]))) {
      number = parseInt(args[0]);
      console.log(2, number,unit);
    } else if (typeof args[1] === 'string') {
      number = parseInt(args[0]);
      unit = args[1];
    } else if (typeof args[0] === 'string' && args[0].length > 0) {
      unit = args[0];
    }
  }
  if (isNaN(number)){
    throw new Error(language === 'KO'? 'number 값이 숫자가 아닙니다.':'number must be a number')
  }
  if (number < 1){
    throw new Error(language === 'KO'? 'number 값이 0보다 작습니다.':'number must be greater than 0')
  }
  if (!['word', 'paragraph'].includes(unit)){
    throw new Error(language === 'KO'? "unit은 'word'나 'paragraph' 중 하나여야 합니다.":"unit must be either 'word' or 'paragraph'.")
  }

  if (unit === 'word') {
    for (let i = 1; i < number + 1; i++) {
      result += ` ${randomItem(lorem_list[language])}`
      if (i > 1 && i%8 === 0) {
        result += '.'
      }
    }
  }
  else if (unit === 'paragraph') {
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < 8; j++) {
        result += ` ${randomItem(lorem_list[language])}`
      }
      result += '.'
    }
  }
  return result.trim()
}


/** 유저가 입력한 범위 내에서 금액을 출력합니다.
 * @param {Number} min 최소금액
 * @param {Number} max 최대금액
 * @param {String} symbol 화폐의 심볼
 * @returns 맨앞에 symbol을 붙이고, 뒤에 랜덤하게 생성된 금액에 3자리 단위로 ,를 붙여서 반환합니다.
 */
function money(min, max, symbol) {
  if (isNaN(min) || isNaN(max)) {
    throw new Error(language==='KO'? 'min이나 max의 값이 숫자가 아닙니다.':"min and max must be a number");
  }
  if (!symbol) {
    symbol = language === "KO" ? "￦" : "$";
  }
  const minMoney = Math.min(min, max)
  const maxMoney = Math.max(min, max)
  const result = randomInteger(minMoney, maxMoney)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${symbol} ${result}`;
}

/** 설정 언어에 따라 나라 이름을 생성합니다.
 * @returns {string} 나라 이름을 무작위로 반환합니다.
 */
function country() {
  return randomItem(country_list[language]);

}

/** 설정 언어에 따라 도시 이름을 생성합니다.
 * @returns {string} 도시 이름을 무작위로 반환합니다.
 */
function city() {
  return randomItem(city_list[language]);
}

/**
 * 언어 형식에 맞는 랜덤한 이름을 반환합니다.
 * @returns {string}
 */
function name() {
  switch (language) {
    case "KO":
      return randomItem(first_name.KO) + randomItem(last_name.KO);
    case "ENG":
      return `${randomItem(first_name.ENG)} ${randomItem(last_name.ENG)}`;
  }
}


/**
 * 언어 형식에 맞는 랜덤한 전화번호를 반환합니다.
 * @returns {string} KO) 010-0000-0000, ENG) (200) 0000-000
 */
function phone() {
  let firstNumber, middleNumber, lastNumber;
  switch (language) {
    case "KO":
      middleNumber = randomInteger(2000, 9999);
      lastNumber = randomInteger(1, 9999).toString().padStart(4, "0");
      return `010-${middleNumber}-${lastNumber}`;
    case "ENG":
      firstNumber = randomInteger(200, 999);
      middleNumber = randomInteger(0, 999).toString().padStart(3, "0");
      lastNumber = randomInteger(1, 9999).toString().padStart(4, "0");
      return `(${firstNumber}) ${middleNumber}-${lastNumber}`;
  }
}

function email() {
  return `${username()}@${randomItem(lorem_list['ENG'])}.${randomItem(domain_list)}`;
}

/* 무작위로 유저 이름을 생성합니다 */
function username() {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let userIndex = "user-";
  // 7자리 Index 생성
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    userIndex += characters[randomIndex];
  }
  return userIndex;
}

/** 무작위로 비밀번호를 생성합니다
 * @param {Number} min_length 최소길이
 * @param {Number} max_length 최대길이
 * @return 일반문자, 특수문자가 랜덤으로 조합된 비밀번호를 반환합니다.
 */ 
function password(min_length, max_length) {
  if (isNaN(min_length) || isNaN(max_length)) {
	throw new Error(language==='KO'? "min_length나 max_length의 값이 숫자가 아닙니다.":"min_length and max_length must be a number");
  } else if (min_length < 1 || max_length < 1) {
    throw new Error(language==='KO'? "min_length나 max_length의 값이 0보다 작습니다.":"min_length and max_length must be greater than 0");
  } else if (min_length >= max_length) {
	throw new Error(language==='KO'? "max_length의 값이 min_length보다 작습니다.":"max_length must be greater than min_length");
  }

  const nomal_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const special_characters = "!@#$%^&*()_-+=[]{}|\\:;\"'<>,.?/";
  const characters = [nomal_characters, special_characters];
  // password 길이값 랜덤 설정
  const password_length = Math.floor(Math.random() * (max_length - min_length + 1)) + min_length;

  // 생성된 password에 특수문자가 포함되는지 확인하는 함수
  function contains(password) {
    for (const c of password) {
      if (special_characters.includes(c)) {
        return true;
      }
    }
    return false;
  }

  let password = "";
  while (true) {
    // 생성된 password에 특수문자가 포함되지 않으면 빈 값 할당 후 다시 생성
    if (password.length === password_length) {
      if (contains(password)) {
        break;
      } else {
        password = "";
      }
    }

    // 0, 1 랜덤 생성후 0이면 일반문자, 1이면 특수문자 추가
    let index = Math.floor(Math.random() * 2);
    switch (index) {
      case 0:
        password += characters[index][Math.floor(Math.random() * nomal_characters.length)];
        break;
      case 1:
        password += characters[index][Math.floor(Math.random() * special_characters.length)];
        break;
    }
  }
  return password;
}

/**
 * 유저가 입력한 크기로 생성된 이미지 주소를 return 합니다.
 * @param {number} width
 * @param {number} height
 * @return {string} https://via.placeholder.com/${width}x${height}
 */
function picture(width, height) {
  if (!Number.isInteger(width) || width < 1) {
    throw new Error(language==='KO'? "Width 값이 1보다 작거나 정수가 아닙니다.":"Width must be a positive integer greater than or equal to 1.");
  }
  if (!Number.isInteger(height) || height < 1) {
    throw new Error(language==='KO'? "Height 값이 1보다 작거나 정수가 아닙니다.":"Height must be a positive integer greater than or equal to 1.");
  }
  return `https://via.placeholder.com/${width}x${height}`;
}

// 직업 랜덤 생성
function job() {
  return randomItem(job_list[language]);
}

// 회사 랜덤 생성
function company() {
  return randomItem(company_list[language]);
}

function gender() {
  switch (language) {
    case "KO":
      return randomItem(["남성", "여성"]);
    case "ENG":
      return randomItem(["Male", "Female"]);
  }
}

function creditCardNumber() {
  return "xxxx-xxxx-xxxx-xxxx".replace(/[x]/g, function () {
    return Math.floor(Math.random() * 10).toString();
  });
}

/** 언어에 따른 주소를 생성합니다.
 * @returns ○○○로 xx-x | ○○○ street xx-x (○:String, x:Number)
 */
function address(){
  if (language === 'KO') {
    return `${randomItem(street_list[language])} ${randomInteger(1, 99)}-${randomInteger(1,9)}`
  }
  return `${randomInteger(1, 9999)} ${randomItem(street_list[language])}`
}

/** 우편번호를 생성합니다.
 * @returns 10000에서 99999 사이의 랜덤한 숫자를 반환합니다.
 */
function postal_code() {
  return randomInteger(10000, 99999)
}


function color() {
  const hexDigits = "0123456789abcdef";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
  }
  return hexColor;
}

function getRandomDomain() {
  const domainExtensions = [".com", ".org", ".net", ".co.kr", ".io", ".xyz"]; 
  return domainExtensions[Math.floor(Math.random() * domainExtensions.length)];
}

function urls() {
  const protocol = "https://";
  const randomString = randomItem(lorem_list['ENG'])
  const domainExtension = getRandomDomain();
  const randomURL = protocol + randomString + domainExtension;
  return randomURL;
}


function date(date_start, date_end, date_format = "YYYY-MM-DD") {
  // 입력받은 값을 Date object로 파싱
  const startDate = new Date(date_start);
  const endDate = new Date(date_end);

  if (isNaN(startDate) || isNaN(endDate)){
    throw new Error(language==='KO'? "start date나 end date의 양식이 'YYYY-MM-DD'가 아닙니다.":"start date and end date must be 'YYYY-MM-DD' format")
  }

  // 입력받은 date_start, date_end 사이 시간 계산
  const timeRange = endDate.getTime() - startDate.getTime();

  // 시간 간격 사이의 랜덤한 시간 생성
  const randomTime = Math.random() * timeRange;

  // 랜덤한 시간 간격으로 랜덤 날짜 생성
  const randomDate = new Date(startDate.getTime() + randomTime);

  // date_format 함수
  function formatDate(date, format) {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    // 입력받은 날짜 형식에 실제 날짜 대입
    let formattedDate = format.replace("YYYY", year).replace("YY", year.slice(-2)).replace("MM", month).replace("DD", day);

    return formattedDate;
  }

  return formatDate(randomDate, date_format);
}


function time() {
  // 24시간 형식으로 출력
  const randomHour = randomInteger(0, 23);
  const randomMinute = randomInteger(0, 59);
  const randomSecond = randomInteger(0, 59);

  const formattedHour = randomHour.toString().padStart(2, "0");
  const formattedMinute = randomMinute.toString().padStart(2, "0");
  const formattedSecond = randomSecond.toString().padStart(2, "0");

  return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}
