# js
## 데이터 입력 양식
```json
[
    "<iter(n)>",  
    {  
        "key1": "<func1()>",  
        "key2": "<func2()>"  
    }  
]  
```

## 데이터 명세

### 고유값 관련
* uuid : UUID 형식의 고유 식별자를 생성합니다.
    * input -format : <uuid()>
    * input -example : <uuid()>
    * input - param : X
    * output - type : string
    * output - format : xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx(x=16진수, y=[A,B,C])
    * output - example : cdf09a1a-7551-4524-A4df-619805b2bff2
    * comment : X
<br><br>
* index : 데이터의 인덱스 값을 생성합니다. start로 지정한 값 부터 +1 씩 더하면서 생성합니다.
    * input -format : <index(start)>
    * input -example : <index(2)>
    * input - param : 
        * start(optional) : type=integer, 시작값, default = 1
    * output - type : integer
    * output - format : 데이터의 인덱스 번호.
    * output - example : 2, 3, 4, ...
    * comment : optional하게 시작값을 입력받고, 순서대로 출력합니다.(전체 데이터의 인덱스값)
<br><br>
* username : 랜덤한 사용자명(login id)를 반환합니다.
    * input -format : <username()>
    * input -example : <username()>
    * input - param : X
    * output - type : string
    * output - format : user_[7자리 영문+숫자 조합]
    * output - example : user_1n89cn2
    * comment : 
        * "user_" 뒤에 영어소문자와 숫자를 랜덤으로 조합하여 고유값 부여.  
        * 중복값 있는지 확인 필요합니다.
<br><br>
* password : 랜덤한 비밀번호를 반환합니다.
    * input -format : <password(min,max)>
    * input -example : <password(5,20)>
    * input - param : 
        * min : type=integer, 최소글자수
        * max : type=integer, 최대글자수
    * output - type : string
    * output - format : xxxxxxxx
    * output - example : p@ssw0rd
    * comment : 
        * 영어 대소문자, 숫자와 특수기호(~!@#$ %^&*_-+=`|\(){}[]:;"'<>,.?/ 등)을 랜덤하게 합쳐서 생성합니다.  
        * 특수문자 1개 이상 포함합니다.

### 특정 데이터 타입
* int : 최소값과 최대값 사이의 정수를 반환합니다
    * input -format : <int(min, max)>
    * input -example : <int(0,100)>
    * input - param : 
        * min : type=integer, 최솟값
        * max : type=intiger, 최댓값
    * output - type : intiger
    * output - format : min ~ max 사이의 랜덤 정수 1개 반환
    * output - example : 51
    * comment : 
        * 최솟값이 최댓값보다 클 경우에 대한 처리가 필요해보입니다.
        * input 타입이 integer가 아닌 경우 예외 처리 필요.
<br><br>
* float : 최소값과 최대값사이의 실수를 자릿수에 맞춰서 반환합니다.
    * input -format : <float(min, max, round)>
    * input -example : <float(1.5, 20.1, 3)>
    * input - param : 
        * min : type=float, 최소값
        * max : type=float, 최대값
        * round : type=integer, 반올림 자릿수
    * output - type : float
    * output - format : 지정된 자릿수의 실수
    * output - example : 12.32
    * comment : 
        * 최소값이 최대값보다 클 경우에 대한 처리가 필요해보입니다.
        * input data도 float로 처리가가능하게 지정.
<br><br>
* boolean : true 혹은 false를 반환합니다.
    * input -format : <boolean()>
    * input -example : <boolean()>
    * input - param : X
    * output - type : boolean
    * output - format : true, false
    * output - example : true
    * comment : 
<br><br>
* random : 입력된 값들 중에서 랜덤한 값을 반환합니다.
    * input -format : <random("item1", "item2", "item3", ...)>
    * input -example : <random("one", "two", "three")>
    * input - param : 
        * item : type=string, 랜덤하게 반환할 값
    * output - type : string
    * output - format : item 중 랜덤으로 1개 반환
    * output - example : two
    * comment : 
        * random에 들어가는 item 항목은 string으로 받고 string으로 출력  
        * input 타입이 string이 아닌 경우 예외 처리 필요.
<br><br>
* lorem : 랜덤한 문장을 반환합니다.
    * input -format : <lorem(number, unit)>
    * input -example : <lorem(3, "word")>
    * input - param : 
        * number(optional) : type = integer, 1 이상, default = 5
        * unit(optional) : type = string, "word", "paragraph" 중 하나, default = "word"
    * output - type : string
    * output - format : 임의의 문자열
    * output - example : lorem ipsum hello
    * comment : 
        * 입력으로 길이, 단위 를 입력받습니다. 실제 emmet 문법의 lorem을 사용하듯이 합니다.
        * "paragraph"는 word 8개로 한다 식으로 규칙을 정해두면 될 것 같습니다.  
        * 이 함수는 email이나 url 등에서도 사용합니다.  
        * 데이터셋 생성 예정
<br><br>
* picture : 입력받은 픽셀크기의 이미지(placeholder)가 담긴 링크를 반환합니다.
    * input -format : <picture(width, height)>
    * input -example : <picture(100, 100)>
    * input - param : 
        * "width : type = integer, 가로픽셀값, 1이상
        * height : type = integer, 세로픽셀값, 1이상"
    * output - type : string
    * output - format : “https://via.placeholder.com/" + width + "x" + height
    * output - example : “https://via.placeholder.com/100x100"
    * comment : 
<br><br>
* color : 랜덤한 16진수 RGB 코드를 반환합니다.
    * input -format : <color()>
    * input -example : <color()>
    * input - param : X
    * output - type : string
    * output - format : 랜덤한 6자리 16진수 RGB 코드 
                        #(랜덤한 16진수 6자리) [0123456789abcdef]
    * output - example : #569cd6
    * comment : 0'부터 'f'까지의 문자를 랜덤하게 선택하여 6자리 문자열을 생성하고, 그 앞에 '#'를 붙여 RGB 코드를 완성합니다.

### 개인정보 관련
* name : 이름을 생성합니다.
    * input -format : <name()>
    * input -example : <name()>
    * input - param : X
    * output - type : string
    * output - format : 한국이름 | 영어이름
    * output - example : 이지은 | john smith
    * comment : 
        * 내부적으로 가지고 있는 데이터 배열에서 임의로 선택, 조합하여 이름을 생성합니다.  
        * 데이터셋 생성 예정.
<br><br>
* email : 이메일 주소를 반환합니다.
    * input -format : <email()>
    * input -example : <email()>
    * input - param : X
    * output - type : string
    * output - format : xxx@xxx.xxx
    * output - example : dlraud@gmail.com
    * comment : 
        * random한 아이디(lorem 이용)@ [gmail, naver 등이 담긴 리스트의 랜덤값].[com, co.kr, net 등이 담긴 리스트의 랜덤값] 의 메커니즘을 이용합니다.  
        * 데이터셋 생성 예정.
<br><br>
* phone : 휴대전화 번호를 반환합니다.
    * input -format : <phone()>
    * input -example : <phone()>
    * input - param : X
    * output - type : string
        * xxxx의 범위 : 0000-9999
        * yyy의 범위 : 200~999(지역번호)
        * zzz의 범위 : 000~999
    * output - format : 010-xxxx-xxxx, (yyy) zzz-xxxx | +82 10-xxxx-xxxx, +1 (yyy)-zzz-xxxx
    * output - example : 010-2323-2323, (555) 555-1234 | +82 10-2323-2323, +1 (264) 251-4598
    * comment : 설정된 언어에 따라서 서로 다른 양식의 휴대전화 번호를 반환합니다.
<br><br>
* country : 랜덤한 국가를 반환합니다.
    * input -format : <country()>
    * input -example : <country()>
    * input - param : X
    * output - type : string
    * output - format : 언어에 따른 국가 명
    * output - example : "대한민국" / "미국"  | "Republic of Korea", "United States"
    * comment : 설정된 언어에 따라서 국가명을 반환합니다.  
                데이터셋 생성 예정
<br><br>
* city : 랜덤한 도시를 반환합니다.
    * input -format : <city()>
    * input -example : <city()>
    * input - param : X
    * output - type : string
    * output - format : 언어에 따른 도시 명
    * output - example : "서울" | "Seoul"
    * comment : 
        * 설정된 언어에 따라서 도시명을 반환합니다.  
        * 국가에 종속되지 않고 데이터셋에서 랜덤한 도시를 가져옵니다.  
        * 데이터셋 생성 예정
<br><br>
* address : 랜덤한 주소를 반환합니다.
    * input -format : <address()>
    * input -example : <address()>
    * input - param : X
    * output - type : string
    * output - format : XX로 XX-X | XX street XX-X
    * output - example : 골목로 20-3 | loyal street 22-3
    * comment : 
        * 길이름과 숫자를 랜덤으로 조합해서 주소를 출력해줍니다.  
        * 영어일 때에는 길 대신 street 으로 주소를 조합해서 출력해줍니다. 
        * 데이터셋 생성 예정
<br><br>
* postal_code : 랜덤한 우편번호를 반환합니다.
    * input -format : <postal_code()>
    * input -example : <postal_code()>
    * input - param : X
    * output - type : string
    * output - format : 랜덤한 5자리 숫자
    * output - example : 40504
    * comment : 한국 미국은 둘다 5자리로 똑같아서 추가적인 처리는 필요없을 것 같습니다.
<br><br>
* job : 언어에 따라서 랜덤한 직업을 반환합니다.
    * input -format : <job()>
    * input -example : <job()>
    * input - param : X
    * output - type : string
    * output - format : 한글직업명 | 영어직업명
    * output - example : 선생님 | teacher
    * comment : 데이터셋 셍성예정
<br><br>
* company : 언어에 따라서 랜덤한 회사명을 반환합니다.
    * input -format : <company()>
    * input -example : <company()>
    * input - param : X
    * output - type : string
    * output - format : 한글회사명 | 영어회사명
    * output - example : 구글 | Google
    * comment : 데이터셋 셍성예정
<br><br>
* creditCardNumber : 랜덤한 신용카드 번호를 반환합니다.
    * input -format : <creditCardNumber()>
    * input -example : <creditCardNumber()>
    * input - param : X
    * output - type : string
    * output - format : xxxx-xxxx-xxxx-xxxx
    * output - example : 4111-1111-1111-1111
    * comment : output 형식의 x 자리에 랜덤한 숫자 들어감
<br><br>
* gender : 랜덤한 성별을 반환합니다.
    * input -format : <gender()>
    * input -example : <gender()>
    * input - param : X
    * output - type : string
    * output - format : "남성", "여성" | "Male", "Female"
    * output - example : "여성" | "Male"
    * comment : 설정된 언어에 따라 성별을 반환합니다.
<br><br>
* urls : 랜덤한 URL 문자열을 생성합니다.
    * input -format : <url()>
    * input -example : <url()>
    * input - param : X
    * output - type : string
    * output - format : 
        * 랜덤한 URL 문자열을 생성합니다.  
        * https://(랜덤한문자열).(랜덤한도메인)
    * output - example : https://www.example.com/
    * comment : 
        * 예시 텍스트(lorem)와 도메인 확장자(com, org, co.kr, net..)를 조합하여 랜덤한 도메인을 생성하면 될 것같습니다. 
        * URL이 유효한 형식을 갖춰야합니다. ( https://(랜덤한문자열).(랜덤한도메인) )
<br><br>
* money : 통화기호와 랜덤한 금액을 3자리 단위로 ,를 찍어서 반환합니다.
    * input -format : <money(min, max, symbol)>
    * input -example : <money(0, 1000000, '￦')>
    * input - param :
        * min: type= integer, 최소값
        * max: type= integer, 최대값
        * symbol(optional): type=string, 통화기호, default=(￦, $)
    * output - type : string
    * output - format : ￦ xx,xxx | $ x,xxx
    * output - example : ￦ 12,500 | $ 2,323
    * comment : 
        * 통화기호의 기본값은 언어에 따라서 원과 달러로 지정합니다.  
        * 금액은 생성된 숫자에 3자리 단위로 ,를 찍어서 표시합니다.

### 시간 관련
* date : 랜덤한 날짜를 반환합니다.
    * input -format : <date(start_date, end_date, date_format)>
    * input -example : 
        * <date('2000-01-01', '2020-12-31', 'DD/MM/YYYY')>
        * <date('2000-01-01', '2020-12-31', 'YYMMDD')>
        * <date('2000-01-01', '2020-12-31', 'YYYY%MM%DD')>
        * <date('2000-01-01', '2020-12-31')>
    * input - param : 
        * start_date : type=string, "YYYY-MM-DD" 양식의 시작 일자
        * end_date : type=string, "YYYY-MM-DD" 양식의 종료 일자
        * format(optional) : type=string, YYYY, MM, DD 를 이용해서 포맷 생성. default : (US : "MM-DD-YYYY", KR : "YYYY-MM-DD")
    * output - type : string
    * output - format : 지정된 format의 날짜
    * output - example :
        * "22/05/2019"
        * "950412"
        * "2020%03%01"
        * "2020-12-04"
    * comment : 종료일과 시작일이 잘못되었을 경우에 대한 처리가 필요해보입니다.
<br><br>
* time : 랜덤한 시간을 반환합니다.
    * input -format : <time()>
    * input -example : <time()>
    * input - param : X
    * output - type : string
    * output - format : HH:MM:SS
    * output - example : 22:47:23
    * comment : 

### 특수 기능

* iter :  json value로 repeat 사용한 object와 repeat다음에 오는 <> 에 대해 반복합니다.
          (<iter(n)>, 다음의 object{} 혹은 <key함수()> n 개)
    * input -format : <iter(number)>
    * input -example :
        ```json
            <iter(3)>
            {
                "id" : "<index()>",
                "name" : "<firstname()>" "<lastname()>"
            }
        ```
    * input - param :
        * number : type = integer, 1 이상의 수, default = 5
    * output - type : object
    * output - format : 
        ```json
            { 
                "key" : "value"
            },
            { 
                "key" : "value" 
            },
            ... number 개
        ```
            
    * output - example : 
        ```json
            {
                "id": 1,
                "name": "Marsha Roth"
            },
            {
                "id": 2,
                "name": "Moore Daniel"
            },
            {
                "id": 3,
                "name": "Lopez Brooks"
            }
        ```
    * comment : 
        * 현재 코드에서는 JSON parsing 해서 처음에 있는 repeat만 체크하고있는데,  
        * 중간에 위치한 object{}나, <key함수()> 부분을 반복하는 식으로도 구현이 가능하다면 좋을 것 같습니다.
<br><br>
* function : 새로운 변수를 정의하거나, this 문법을 통해서 상위의 값을 가져와서 조작한 데이터를 반환합니다.
    * input -format : 
        ```jsx
            <function() { functionString }>
        ```
    * input -example :
        ```jsx
            <function() {
                const text = ['one', 'two', 'three'];
                return randomItem(text) + ', ' + this.name;}>
        ```
    * input - param : 
        * JavaScript 문법,
        * this : 앞에서 생성된 데이터의 값을 지정
    * output - type : string
    * output - format : return에 사용자가 지정한 형태
    * output - example : two, John smith
    * comment : this 문법으로 json으로 생성한 데이터를 재가공 할 수 있어야 합니다.
                function 내에서 정의된 계산식과, 변수를 사용할 수 있어야 합니다.
                아래와 같은 식으로 작동이 되는것은 확인했지만,  
                1. 현재 알고리즘에서는 생성도중의 데이터는 사용할 수 없으므로, 생성하면서 데이터를 저장하는 알고리즘의 변경이 필요한 문제.
                2. <> 문법을 사용할 수 없고, 사용자가 내부의 함수명을 알아야 처리가 가능한 문제  
                3. parsing할 경우에 function 내부의 줄바꿈때문에 에러가 발생해서 줄바꿈문자를 공백문자로 바꿔줘야하는 문제(사용자가 ;를 빠뜨리지 않았다면 공백문자로 처리가 되어도 정상적으로 실행됩니다.)  
                가 있습니다.
        ```jsx
        // generateData 함수 내부입니다.
        // 키워드가 function일 경우 { } 안에 있는 데이터를 action에 할당합니다.
        let action = ""
        if (func == "function"){
            action = key.match(/{(.*)}/)[1].trim();
        }

        // 중략

        case 'function':
            // 앞서 가져온 데이터인 action을 new Function을 이용해서 함수로 만듭니다.
            // this 문법을 사용하기 위해서 저장된 데이터(여기서는 그냥 적당히 만들어서 테스트했습니다)를 call 로 묶어주고 실행합니다.
            const do_action = new Function(action);
            result = do_action.call(data)
        ```

