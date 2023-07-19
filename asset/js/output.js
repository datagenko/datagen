let language = "ko";
const ko_first_name = ["이", "김", "한", "차", "남"];
const ko_last_name = [
    "가람",
    "가온",
    "그린",
    "겨루",
    "나래",
    "늘봄",
    "다슬",
    "라라",
    "루리",
    "마루",
    "바다",
    "새길",
    "새나",
];
const en_first_name = ["John", "Mark"];
const en_last_name = ["Smith", "Ruffalo"];
const lorem_list = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
    "Dolorum",
    "cum",
    "perspiciatis",
    "ab",
    "dignissimos",
    "vitae",
    "libero",
    "ratione",
    "Reiciendis",
    "voluptates",
    "quod",
    "totam",
    "delectus",
    "fuga",
    "voluptatem",
    "cupiditate",
    "rem",
    "similique",
    "nemo",
    "aliquid",
    "voluptas",
    "tempora",
];
const domain_list = ["com", "co.kr", "net", "org"];

const ko_country_list = ["한국", "미국", "일본"];
const en_country_list = ["Korea", "USA", "Japan"];
const ko_city_list = ["서울", "워싱턴", "도쿄"];
const en_city_list = ["Seoul", "Washington", "Tokyo"];
const ko_street_list = ["골목", "서울", "교동"];
const en_street_list = ["loyal", "korean", "load"];

const ko_job_list = ["선생님", "학생", "의사", "기술자"];
const en_job_list = ["teacher", "student", "doctor", "engineer"];
const ko_company_list = ["구글", "삼성", "애플"];
const en_company_list = ["google", "samsung", "apple"];

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
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max, round = 3) {
    if (max > min) {
        let num = Math.random() * (max - min) + min;
        return num.toFixed(round);
    } else {
        let num = Math.random() * (min - max) + max;
        return num.toFixed(round);
    }
}

function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function randomBoolean() {
    return randomItem([true, false]);
}

function money(min, max, symbol) {
    if (!symbol) {
        symbol = language === "ko" ? "￦" : "$";
    }
    const result = randomInteger(min, max)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${symbol} ${result}`;
}

function country() {
    switch (language) {
        case "ko":
            return randomItem(ko_country_list);
        case "en":
            return randomItem(en_country_list);
    }
}

function city() {
    switch (language) {
        case "ko":
            return randomItem(ko_city_list);
        case "en":
            return randomItem(en_city_list);
    }
}

console.log(country(), city())

function name() {
    switch (language) {
        case "ko":
            return randomItem(ko_first_name) + randomItem(ko_last_name);
        case "en":
            return `${randomItem(en_first_name)} ${randomItem(en_last_name)}`;
    }
}

function phone() {
    let firstNumber, middleNumber, lastNumber;
    switch (language) {
        case "ko":
            middleNumber = randomInteger(2000, 9999);
            lastNumber = randomInteger(1, 9999).toString().padStart(4, "0");

            return `010-${middleNumber}-${lastNumber}`;
        case "en":
            firstNumber = randomInteger(200, 999);
            middleNumber = randomInteger(0, 999).toString().padStart(3, "0");
            lastNumber = randomInteger(1, 9999).toString().padStart(4, "0");

            return `(${firstNumber}) ${middleNumber}-${lastNumber}`;
    }
}

function email() {
    switch (language) {
        case "ko":
            return `${randomItem(lorem_list)}@${randomItem(lorem_list)}.${randomItem(
                domain_list
            )}`;

        case "en":
            return `${randomItem(lorem_list)}@${randomItem(lorem_list)}.${randomItem(
                domain_list
            )}`;
    }
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

/* 무작위로 비밀번호를 생성합니다 */
function password(min_length, max_length) {
    // 유효하지 않은 인자가 들어왔을 때 에러처리
    if (min_length < 1 || min_length >= max_length) {
        return "error";
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
        throw new Error(
            "Width must be a positive integer greater than or equal to 1."
        );
    }
    if (!Number.isInteger(height) || height < 1) {
        throw new Error(
            "Height must be a positive integer greater than or equal to 1."
        );
    }
    return `https://via.placeholder.com/${width}x${height}`;
}

// 직업 랜덤 생성
function job() {
    switch (language) {
        case "ko":
            return randomItem(ko_job_list);
        case "en":
            return randomItem(en_job_list);
    }
}

// 회사 랜덤 생성
function company() {
    switch (language) {
        case "ko":
            return randomItem(ko_company_list);
        case "en":
            return randomItem(en_company_list);
    }
}

function gender() {
    switch (language) {
        case "ko":
            return randomItem(["남성", "여성"]);
        case "en":
            return randomItem(["Male", "Female"]);
    }
}

function creditCardNumber() {
    return "xxxx-xxxx-xxxx-xxxx".replace(/[x]/g, function () {
        return Math.floor(Math.random() * 10).toString();
    });
}

function color() {
    const hexDigits = "0123456789abcdef";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
    }
    return hexColor;
}

function generateData(template, index) {
    let data = {};

    for (const i in template) {
        data[i] = template[i].replace(/<([^<>]+)>/g, (str, key) => {
            const func = key.split("(")[0];
            let action = "";
            if (func === "function") {
                action = key.match(/{(.*)}/)[1].trim();
            }
            [...args] = key
                .split("(")[1]
                .replace(")", "")
                .replaceAll(" ", "")
                .replaceAll("'", "")
                .replaceAll('"', "")
                .split(",");

            // 들어오는 인자는 args배열에 저장됩니다.
            // args[0], args[1] 식으로 접근하시면 되고, 기본적으로 전부 String 타입이기 때문에, 데이터타입에 주의해서 다뤄주세요.
            // optional로 인자가 들어오지 않았을때에 대한 처리도 필요합니다.
            switch (func) {
                // 고유값
                case "uuid":
                    return uuid();
                case "index":
                    return index;
                case "username":
                    return username();
                //case 'password':
                //    return password(min, max)
                //특정 데이터타입
                case "int":
                    return randomInteger(parseInt(args[0]), parseInt(args[1]));
                case "float":
                    return randomFloat(parseFloat(args[0]), parseFloat(args[1]), args[2]);
                case "boolean":
                    return randomBoolean();
                case "random":
                    return randomItem(args);
                //case 'lorem':
                //    // loream은 들어오는 인자가 전부 optional 이기 때문에 처리방법이 복잡할 것 같습니다.
                //    return lorem(number, unit)
                case "picture":
                    return picture(width, height);
                //case 'color':
                //    return color()
                // 개인정보관련
                case "name":
                    return name();
                case "email":
                    return email();
                case "phone":
                    return phone();
                case "country":
                    return country();
                case "city":
                    return city();
                //case 'address':
                //    return address()
                //case 'postal_code':
                //    return postal_code()
                //case 'job':
                //    return job()
                //case 'company':
                //    return company()
                case "creditCardNumber":
                    return creditCardNumber();
                case "gender":
                    return gender();
                //case 'urls':
                //    return urls()
                case "money":
                    return money(parseInt(args[0]), parseInt(args[1]), args[2]);
                //case 'date':
                //    return date(start, end, format)
                //case 'time':
                //    return time()
                //case 'function':
                //    const do_action = new Function(action);
                //    return do_action.call(data)
                default:
                    return str;
            }
        });
    }
    return data;
}

const input_form = document.querySelector("#json-input");
document
    .getElementById("generate-button")
    .addEventListener("click", function () {
        // let input = input_form.value;
        let input = `[
      "<iter(1)>",
          {
              "_id": "<uuid()>",
              "index": "<index(12)>",
              "username": "<username()>",
              "password5_20": "<password(5, 20)>",
              "int5_20": "<int(5,20)>",
              "float5.2_20.5": "<float(5.2, 20.5)>",
              "boolean": "<boolean()>",
              "random": "<random(one, 'two', three)>",
              "lorem": "<lorem()>",
              "color": "<color()>",
              "name": "<name()>",
              "email": "<email()>",
              "phone": "<phone()>",
              "country": "<country()>",
              "city": "<city()>",
              "address": "<address()>",
              "postal_code": "<postal_code()>",
              "job": "<job()>",
              "company": "<company()>",
              "creditCardNumber": "<creditCardNumber()>",
              "gender": "<gender()>",
              "urls": "<urls()>",
              "money": "<money(1000000, 1000000000)>",
              "created_at": "<date('2020-01-01', '2020-12-31', 'YY/MM/DD')>, <time()>"
          }
      ]`;
        const modifiedText = input.replace(/<function\(\)([\s\S]+)>/g, (_, fn) => {
            return (
                "<function() " +
                // 줄바꿈 문자 공백문자로 변경.
                fn
                    .replace(/\n/g, "")
                    // 내부에 <>로 표기된 함수를 일반 함수형태로 변경.
                    .replace(/<([^>]+)>/g, (_, context) => {
                        console.log(context);
                        const [__, functionName, args] = context.match(/(\w+)\((.*)\)/);
                        return `${function_dic[functionName] || functionName}(${args})`;
                    }) +
                ">"
            );
        });
        console.log(modifiedText);
        input = JSON.parse(modifiedText);

        let repeatCount = parseInt(input[0].match(/<iter\((\d+)\)>/)[1]);

        let template = input[1];

        // index 함수의 초기값이 지정되었는지 판단하는 상수 : true/false
        const hasInitIndex = !!template["index"].match(/[0-9]/g);
        let initIndex = hasInitIndex
            ? parseInt(template["index"].match(/[0-9]/g).join(""))
            : 1;

        let output = [];

        for (let i = 0; i < repeatCount; i++) {
            output.push(generateData(template, initIndex));
            initIndex++;
        }

        document.getElementById("json-output").value = JSON.stringify(
            output,
            null,
            2
        );
    });

// csv 다운로드 버튼 클릭시 이벤트
document
    .getElementById("downloadcsv-button")
    .addEventListener("click", function () {
        // json-output textarea의 값을 가져온다.
        let json = document.getElementById("json-output").value;
        // json을 객체로 변환한다.
        let data = JSON.parse(json);
        // csv 파일의 첫번째 줄에 들어갈 키를 추출한다.
        let keys = Object.keys(data[0]);
        // csv 파일의 첫번째 줄을 만든다.
        let csv = keys.join(",") + "\n";
        // csv 파일의 두번째 줄부터 데이터를 넣는다.
        data.forEach(function (row) {
            // csv 파일의 한 줄을 만든다.
            let line = keys
                .map(function (key) {
                    return row[key];
                })
                .join(",");
            // csv 파일에 한 줄을 추가한다.
            csv += line + "\n";
        });
        // csv 파일을 다운로드한다.
        download("data.csv", csv);
    });

// json 다운로드 버튼 클릭시 이벤트
document
    .getElementById("downloadjson-button")
    .addEventListener("click", function () {
        // json-output textarea의 값을 가져온다.
        let json = document.getElementById("json-output").value;
        // json 파일을 다운로드한다.
        download("data.json", json);
    });

// html 다운로드 버튼 클릭시 이벤트
document
    .getElementById("downloadhtml-button")
    .addEventListener("click", function () {
        // json-output textarea의 값을 가져온다.
        let json = document.getElementById("json-output").value;
        // json을 객체로 변환한다.
        let data = JSON.parse(json);
        // html 파일을 만든다.
        let html = "<table>\n";
        // html 파일의 첫번째 줄에 들어갈 키를 추출한다.
        let keys = Object.keys(data[0]);
        // html 파일의 첫번째 줄을 만든다.
        html += "\t<tr>\n";
        // html 파일의 첫번째 줄에 키를 넣는다.
        keys.forEach(function (key) {
            html += "\t\t<th>" + key + "</th>\n";
        });
        // html 파일의 첫번째 줄을 닫는다.
        html += "\t</tr>\n";
        // html 파일의 두번째 줄부터 데이터를 넣는다.
        data.forEach(function (row) {
            // html 파일의 한 줄을 만든다.
            html += "\t<tr>\n";
            // html 파일의 한 줄에 데이터를 넣는다.
            keys.forEach(function (key) {
                html += "\t\t<td>" + row[key] + "</td>\n";
            });
            // html 파일의 한 줄을 닫는다.
            html += "\t</tr>\n";
        });
        // html 파일을 닫는다.
        html += "</table>";
        // html 파일을 다운로드한다.
        download("data.html", html);
    });

// xml 다운로드 버튼 클릭시 이벤트
document
    .getElementById("downloadxml-button")
    .addEventListener("click", function () {
        // json-output textarea의 값을 가져온다.
        let json = document.getElementById("json-output").value;
        // json을 객체로 변환한다.
        let data = JSON.parse(json);
        // xml 파일을 만든다.
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        // xml 파일의 첫번째 줄에 들어갈 키를 추출한다.
        let keys = Object.keys(data[0]);
        // xml 파일의 첫번째 줄을 만든다.
        xml += "<rows>\n";
        // xml 파일의 두번째 줄부터 데이터를 넣는다.
        data.forEach(function (row) {
            // xml 파일의 한 줄을 만든다.
            xml += "\t<row>\n";
            // xml 파일의 한 줄에 데이터를 넣는다.
            keys.forEach(function (key) {
                xml += "\t\t<" + key + ">" + row[key] + "</" + key + ">\n";
            });
            // xml 파일의 한 줄을 닫는다.
            xml += "\t</row>\n";
        });
        // xml 파일을 닫는다.
        xml += "</rows>";
        // xml 파일을 다운로드한다.
        download("data.xml", xml);
    });

// sql query 다운로드 버튼 클릭시 이벤트
document
    .getElementById("downloadsql-button")
    .addEventListener("click", function () {
        // json-output textarea의 값을 가져온다.
        let json = document.getElementById("json-output").value;
        // json을 객체로 변환한다.
        let data = JSON.parse(json);
        // sql query 파일을 만든다.
        let sql = "INSERT INTO table_name (";
        // sql query 파일의 첫번째 줄에 들어갈 키를 추출한다.
        let keys = Object.keys(data[0]);
        // sql query 파일의 첫번째 줄을 만든다.
        sql += keys.join(", ") + ") VALUES\n";
        // sql query 파일의 두번째 줄부터 데이터를 넣는다.
        data.forEach(function (row, index) {
            // sql query 파일의 한 줄을 만든다.
            sql += "\t(";
            // sql query 파일의 한 줄에 데이터를 넣는다.
            keys.forEach(function (key) {
                sql += "'" + row[key] + "', ";
            });
            // sql query 파일의 한 줄을 닫는다.
            sql = sql.slice(0, -2) + ")";
            // sql query 파일의 한 줄을 닫는다.
            sql += index === data.length - 1 ? ";" : ",";
            // sql query 파일의 한 줄을 닫는다.
            sql += "\n";
        });
        // sql query 파일을 다운로드한다.
        download("data.sql", sql);
    });

function download(filename, text) {
    // a 태그를 만든다.
    let element = document.createElement("a");
    // href 속성을 추가한다.
    element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    // download 속성을 추가한다.
    element.setAttribute("download", filename);
    // a 태그를 클릭한다.
    element.click();
}
