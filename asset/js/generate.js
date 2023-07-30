function replaceFunc(func, args, index, action, data) {
  switch (func) {
    // 고유값
    case "uuid":
      return uuid();
    case "index":
      return index;
    case "username":
      return username();
    case 'password':
      return password(parseInt(args[0]), parseInt(args[1]))
    //특정 데이터타입
    case "int":
      return randomInteger(parseInt(args[0]), parseInt(args[1]));
    case "float":
      return randomFloat(parseFloat(args[0]), parseFloat(args[1]), parseInt(args[2]));
    case "boolean":
      return randomBoolean();
    case "random":
      return randomItem(args);
    case 'lorem':
      return lorem(args)
    case "picture":
      return picture(parseInt(args[0]), parseInt(args[1]));
    case 'color':
      return color()
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
    case 'address':
      return address()
    case 'postal_code':
      return postal_code()
    case 'job':
      return job()
    case 'company':
      return company()
    case "creditCardNumber":
      return creditCardNumber();
    case "gender":
      return gender();
    case 'urls':
      return urls()
    case "money":
      return money(parseInt(args[0]), parseInt(args[1]), args[2]);
    case 'date':
      return date(args[0], args[1], args[2])
    case 'time':
      return time()
    case 'function':
      // action을 바탕으로 Function을 만들고 data를 bind 해서 실행합니다.
      const do_action = new Function(action);
      return do_action.call(data)
    default:
      return null;
  }
}
    

function generateData(template, index) {
  let data = {};

  for (const i in template) {
    data[i] = template[i].replace(/<([^<>]+)>/g, (str, key) => {
      const func = key.split("(")[0];
      let action = "";
      // 함수가 function 일 경우, args를 action으로 받습니다.
      if (func === "function") {
        action = key.match(/{(.*)}/)[1].trim();
      }
      [...args] = key.split("(")[1].replace(")", "").replaceAll(" ", "").replaceAll("'", "").replaceAll('"', "").split(",");

      // 들어오는 인자는 args배열에 저장됩니다.
      // args[0], args[1] 식으로 접근하시면 되고, 기본적으로 전부 String 타입이기 때문에, 데이터타입에 주의해서 다뤄주세요.
      // optional로 인자가 들어오지 않았을때에 대한 처리도 필요합니다.
      try {
          const value = replaceFunc(func, args, index, action, data)
          return value === null ? `Error: Invalid function name - ${str}.` : value;
      }
      catch(e) {
          return e ? func === 'function'? `${e} - <function()>` : `${e} - ${str}.` : `Error: Invalid Input - ${str}.`; 
      }
      
    });
  }
  return data;
}

const input_form = document.querySelector("#json-input");
document.getElementById("generate-button").addEventListener("click", function () {
  // let input = input_form.value;
  let input = `[
      "<iter(1)>",
          {
              "_id": "<uuid()>",
              "index": "<index(12)>",
              "username": "<username()>",
              "password5_20": "<password(5, 20)>",
              "int5_20": "<int(20,a)>",
              "float5.2_20.5": "<float(a, 20.5, 3)>",
              "boolean": "<boolean()>",
              "random": "<random(one, 'two', three)>",
              "lorem": "<lorem(3)>",
              "lorem2": "<lorem('word')>",
              "lorem3": "<lorem('3', 'paragraph')>",
              "color": "<color()>",
              "picture": "<picture(32, 32)>",
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
              "money": "<money(-1000, 1000)>",
              "created_at": "<date('a', '2020-12-31', 'YY/MM/DD')>, <time()>",
              "function": "<function() {
                console.log('uuid', <uuid()>);
                console.log('index', this.index);
                console.log('username', <username()>);
                console.log('password', <password(5, 20)>);
                console.log('int', <int(5,20)>);
                console.log('float', <float(5.2, 20.5)>);
                console.log('bool', <boolean()>);
                console.log('random', <random('one', 'two', 'three')>);
                console.log('lorem', <lorem()>);
                console.log('color', <color()>);
                console.log('name', <name()>);
                console.log('email', <email()>);
                console.log('phone', <phone()>);
                console.log('country', <country()>);
                console.log('city', <city()>);
                console.log('address', <address()>);
                console.log('postal_code', <postal_code()>);
                console.log('job', <job()>);
                console.log('company', <company()>);
                console.log('creditCardNumber', <creditCardNumber()>);
                console.log('gender', <gender()>);
                console.log('urls', <urls()>);
                console.log('money', <money(1000, 20000)>);
                return <date('2020-01-01', '2020-12-31', 'YY/MM/DD')> + <time()> + this.name + this.city + this.gender
              }>",
          }
      ]`;

  // function 에서 줄바꿈처리 되어있는 부분을 직렬화시키고,
  // <> 표기된 함수를 JavaScript 함수로 바꿉니다.
  let modifiedText = input.replace(/<function\(\)([\s\S]+)>/g, (_, fn) => {
    return (
      "<function() " +
      // 줄바꿈 문자 공백문자로 변경.
      fn
        .replace(/\n/g, "")
        // 내부에 <>로 표기된 함수를 일반 함수형태로 변경.
        .replace(/<([^>]+)>/g, (_, context) => {
          // console.log(context);
          const [__, functionName, args] = context.match(/(\w+)\((.*)\)/);
          return `${function_dic[functionName] || functionName}(${args})`;
        }) +
      ">"
      )
  });
  console.log(modifiedText)
  // 마지막 항목의 , 를 제거합니다.
  modifiedText = modifiedText.replace((/,\s*}/g), '\n}');
  console.log(modifiedText)
  // console.log(modifiedText);
  input = JSON.parse(modifiedText);

  let repeatCount = parseInt(input[0].match(/<iter\((\d+)\)>/)[1]);

  let template = input[1];

  // index 함수의 초기값이 지정되었는지 판단하는 상수 : true/false
  const hasInitIndex = !!template["index"].match(/[0-9]/g);
  let initIndex = hasInitIndex ? parseInt(template["index"].match(/[0-9]/g).join("")) : 1;

  let output = [];

  for (let i = 0; i < repeatCount; i++) {
    output.push(generateData(template, initIndex));
    initIndex++;
  }

  document.getElementById("json-output").value = JSON.stringify(output, null, 2);
});