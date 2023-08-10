// const input_form = document.querySelector("#json-input");
document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    // let input = input_form.value;
    // let input = `[
    //     "<iter(2)>",
    //         {
    //             "_id": "<uuid()>",
    //             "index": "<index(12)>",
    //             "username": "<username()>",
    //             "password5_20": "<password(5, 20)>",
    //             "int5_20": "<int(5,20)>",
    //             "float5.2_20.5": "<float(5.2, 20.5)>",
    //             "boolean": "<boolean()>",
    //             "random": "<random(one, 'two', three)>",
    //             "lorem": "<lorem()>",
    //             "color": "<color()>",
    //             "name": "<name()>",
    //             "email": "<email()>",
    //             "phone": "<phone()>",
    //             "country": "<country()>",
    //             "city": "<city()>",
    //             "address": "<address()>",
    //             "postal_code": "<postal_code()>",
    //             "job": "<job()>",
    //             "company": "<company()>",
    //             "creditCardNumber": "<creditCardNumber()>",
    //             "gender": "<gender()>",
    //             "urls": "<urls()>",
    //             "money": "<money(233323, 1000)>",
    //             "created_at": "<date('2020-01-01', '2020-12-31', 'YY/MM/DD')>, <time()>"
    //         }
    //     ]`;

    let indentValue = document.querySelector(".select-indent .selected-value").textContent;
    // function 에서 줄바꿈처리 되어있는 부분을 직렬화시키고,
    // <> 표기된 함수를 JavaScript 함수로 바꿉니다.
    let input = defaultTemplate.value;
    let modifiedText = input.replace(/<function\(\)([\s\S]+)>/g, (_, fn) => {
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
    modifiedText = modifiedText.replace(/,\s*}/g, "}");
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
      parseInt(indentValue)
    );

    // generate-button을 누를 때만 json-output을 초기화
    if (modifiedText !== null) {
      document.getElementById("json-output").value = "";
    }

    // JSON 데이터 생성 후 modifiedText 업데이트
    modifiedText = JSON.stringify(
      output,
      null,
      parseInt(indentValue)
    );
    document.getElementById("json-output").value = modifiedText;
    output_codemirror.setValue(modifiedText);
  });

// Reset 버튼 클릭시 이벤트
document.getElementById("reset-button").addEventListener("click", function () {
  const jsonInputText = document.querySelector("#json-input");
  jsonInputText.value = `[
    "<iter(5)>",
    {
        "_id": "<uuid()>",
        "index": "<index()>",
        "name": "<name()>",
        "email": "<email()>",
        "phone": "<phone()>",
        "country": "<country()>",
        "address": "<address()>",
        "job": "<job()>",
    }
  ]`;
  // modifiedText 변수 초기화
  modifiedText = null;
  document.getElementById("json-output").value = "";

  // 버튼 초기 상태로 되돌리기
  const selectButton = document.querySelector(".select-input button");
  selectButton.querySelector(".selected-value").textContent =
    "key값을 선택하세요";
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
