const guideData = [
  {
    keyname: 'uuid',
    description: 'UUID 형식의 고유 식별자를 생성합니다.',
    usage: '<uuid()>',
    returns: 'String',
  },
  {
    keyname: 'index',
    description:
      '데이터의 인덱스 값을 생성합니다. start로 지정한 값 부터 +1 씩 생성합니다.',
    usage: '<index(integer)>',
    arguments: [
      { param: 'integer', type: 'Integer', detail: '정수, default = 1' },
    ],
    returns: 'Integer',
  },
  {
    keyname: 'username',
    description: '랜덤한 사용자 이름을 반환합니다.',
    usage: '<username()>',
    returns: 'String',
  },
  {
    keyname: 'password',
    description: '랜덤한 비밀번호를 반환합니다.',
    usage: '<password(min_length, max_length)>',
    arguments: [
      { param: 'min_length', type: 'Integer', detail: '최소 글자 수' },
      { param: 'max_length', type: 'Integer', detail: '최대 글자 수' },
    ],
    returns: 'String',
  },
  {
    keyname: 'int',
    description: '최소값(min)과 최대값(max) 사이의 값을 반환합니다.',
    usage: '<int(min, max)>',
    arguments: [
      { param: 'min', type: 'Integer', detail: '최솟값' },
      { param: 'max', type: 'Integer', detail: '최댓값' },
    ],
    returns: 'Integer',
  },
  {
    keyname: 'float',
    description: '최소값과 최대값사이의 float 값을 자릿수에 맞춰서 반환합니다.',
    usage: '<float(min, max, round)>',
    arguments: [
      { param: 'min', type: 'Float', detail: '최솟값' },
      { param: 'max', type: 'Float', detail: '최댓값' },
      { param: 'round', type: 'Float', detail: '반올림 자릿수' },
    ],
    returns: 'Float',
  },
  {
    keyname: 'boolean',
    description: 'true 혹은 false를 반환합니다.',
    usage: '<boolean()>',
    returns: 'Boolean',
  },
  {
    keyname: 'random',
    description: 'input의 item 항목에 들어있는 값들 중 하나를 반환합니다.',
    usage: '<random("item1","item2","item3", ...)>',
    arguments: [{ param: 'item', type: 'String', detail: '' }],
    returns: 'String',
  },
  {
    keyname: 'lorem',
    description: '랜덤한 문장을 반환합니다.',
    usage: '<lorem(number, unit)>',
    arguments: [
      { param: 'number', type: 'Integer', detail: '1이상, default = 5' },
      {
        param: 'unit',
        type: 'String',
        detail: ' "word", "paragraph" 중 하나, default = "word"',
      },
    ],
    returns: 'String',
  },
  {
    keyname: 'picture',
    description: '입력받은 픽셀크기의 이미지가 담긴 링크를 반환합니다.',
    usage: '<picture(width, height)>',
    arguments: [
      { param: 'width', type: 'Integer', detail: '가로 픽셀값, 1이상' },
      { param: 'height', type: 'Integer', detail: '세로 픽셀값, 1이상' },
    ],
    returns: 'String',
  },
  {
    keyname: 'color',
    description: '랜덤한 RGB코드를 반환합니다. (16진수 6자리 컬러값)',
    usage: '<color()>',
    returns: 'String',
  },
  {
    keyname: 'name',
    description:
      '이름을 생성합니다. 내부적으로 가지고 있는 데이터 배열에서 임의로 선택, 조합하여 이름을 생성합니다.',
    usage: '<name()>',
    returns: 'String',
  },
  {
    keyname: 'email',
    description: 'email 주소를 반환합니다.',
    usage: '<email()>',
    returns: 'String',
  },
  {
    keyname: 'phone',
    description: '언어에 맞춰서 핸드폰 번호를 반환합니다.',
    usage: '<phone()>',
    returns: 'String',
  },
  {
    keyname: 'country',
    description: '언어에 맞춰서 국가명 중 하나를 반환합니다.',
    usage: '<country()>',
    returns: 'String',
  },
  {
    keyname: 'city',
    description: '언어에 맞춰서 도시명 중 하나를 반환합니다.',
    usage: '<city()>',
    returns: 'String',
  },
  {
    keyname: 'address',
    description: '랜덤한 주소를 반환합니다.',
    usage: '<address()>',
    returns: 'String',
  },
  {
    keyname: 'postal_code',
    description: '랜덤한 우편번호를를 반환합니다.',
    usage: '<postal_code()>',
    returns: 'String',
  },
  {
    keyname: 'job',
    description: '언어에 따라서 랜덤한 직업을 반환합니다.',
    usage: '<job()>',
    returns: 'String',
  },
  {
    keyname: 'company',
    description: '언어에 따라서 랜덤한 회사명을 반환합니다.',
    usage: '<company()>',
    returns: 'String',
  },
  {
    keyname: 'creditCardNumber',
    description: '랜덤한 신용카드 번호를 반환합니다.',
    usage: '<creditCardNumber()>',
    returns: 'String',
  },
  {
    keyname: 'gender',
    description: '랜덤한 성별을 반환합니다.',
    usage: '<gender()>',
    returns: 'String',
  },
  {
    keyname: 'urls',
    description: '랜덤한 URL 문자열을 생성합니다.',
    usage: '<urls()>',
    returns: 'String',
  },
  {
    keyname: 'money',
    description: '통화기호와 랜덤한 금액을 3자리 단위로 ,를 찍어서 반환합니다.',
    usage: '<money([min], [maximum], [symbol])>',
    arguments: [
      {
        param: 'min',
        type: 'Integer',
        detail: '최솟값',
      },
      {
        param: 'max',
        type: 'Integer',
        detail: '최댓값',
      },
      {
        param: 'symbol(optional)',
        type: 'String',
        detail: '통화기호, default = ₩,$',
      },
    ],
    returns: 'String',
  },
  {
    keyname: 'date',
    description: '랜덤한 날짜를 반환합니다.',
    usage: '<date([date_start], [date_end], [date_format])>',
    arguments: [
      {
        param: 'date_start',
        type: 'String',
        detail: '"YYYY-MM-DD" 양식의 시작 일자',
      },
      {
        param: 'date_end',
        type: 'String',
        detail: '"YYYY-MM-DD" 양식의 종료 일자',
      },
      {
        param: 'date_format(optional)',
        type: 'String',
        detail:
          'YYYY, MM, DD를 이용해서 포맷 생성, default = US: MM-DD-YYYY, KR: YYYY-MM-DD',
      },
    ],
    returns: 'String',
  },

  {
    keyname: 'time',
    description: '랜덤한 시간을 반환합니다.',
    usage: '<time()>',
    returns: 'String',
  },
  {
    keyname: 'iter',
    description:
      'json value로 repeat 사용한 object와 repeat 다음에 오는 <>에 대해 반복합니다.',
    usage: '<iter([number])>',
    arguments: [
      {
        param: 'number',
        type: 'Integer',
        detail: '1 이상의 수, default = 5',
      },
    ],
    returns: 'Object',
  },
  {
    keyname: 'function',
    description:
      '새로운 변수를 정의하거나, this 문법을 통해서 상위의 값을 가져와서 조작한 데이터를 반환합니다.',
    usage: '<function({functionString})>',
    returns: 'String',
  },
];

export default guideData;
