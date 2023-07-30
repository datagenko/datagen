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
      return randomFloat(parseFloat(args[0]), parseFloat(args[1]), parseFloat(args[2]));
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
  language = languageSelect.innerText;

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