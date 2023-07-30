const languageSelect = document.querySelector('.language-select .selected-value')
let language = 'KO'

const ko_first_name = ["이", "김", "한", "차", "남"];
const ko_last_name = ["가람", "가온", "그린", "겨루", "나래", "늘봄", "다슬", "라라", "루리", "마루", "바다", "새길", "새나"];
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
  "test",
];
const domain_list = ["com", "co.kr", "net", "org", "io", "biz"];

const ko_country_list = ["한국", "미국", "일본"];
const en_country_list = ["Korea", "USA", "Japan"];
const ko_city_list = ["서울", "워싱턴", "도쿄"];
const en_city_list = ["Seoul", "Washington", "Tokyo"];
const street_list = {
  'ko' : ["동일로", "홍익로", "남부순환로", "양재천로", "망우로", "인왕산로", "논현로", "방학로", "강남대로", "양평로", "청계천로", "석촌호수로", "강서로", "잠실로", "사당로", "광나루로", "공덕로", "신촌로", "선릉로", "학동로", "영등포로", "양재로", "마포대로", "한강대로", "여의대방로", "삼성로", "노량진로", "종로", "성북로", "천호대로", "성산로", "서소문로", "양산로", "잠원로", "관악로", "대림로", "뚝섬로", "강변북로", "성수이로", "행운동", "한남대로", "용산로", "여의하류로", "사직로", "보문로", "성동로", "독산로", "용두동", "봉은사로", "역삼로"],
  'en' : ["Main Street", "Maple Avenue", "Oakwood Drive", "Pine Street", "Elmwood Lane", "Cedar Road", "Willow Court", "Birch Street", "River View Drive", "Lakeview Terrace", "Forest Avenue", "Meadow Lane", "Sunset Boulevard", "Spring Street", "Autumn Way", "Winterberry Lane", "Holly Drive", "Laurel Avenue", "Juniper Place", "Rosewood Circle", "Magnolia Lane", "Cypress Avenue", "Garden Lane", "Orchard Street", "Mountain View Road", "Valley Drive", "Brookside Court", "Ridge Avenue", "Hillcrest Drive", "Lakeside Terrace", "Sunflower Lane", "Daisy Street", "Tulip Lane", "Lily Court", "Violet Road", "Jasmine Lane", "Iris Street", "Azalea Avenue", "Heather Court", "Petunia Lane", "Oakwood Court", "Cedar Lane", "Willow Street", "Birch Avenue", "Pine Court", "River Road", "Lakeview Avenue", "Forest Lane", "Meadow Street", "Sunset Drive"],
}

const ko_job_list = ["선생님", "학생", "의사", "기술자"];
const en_job_list = ["teacher", "student", "doctor", "engineer"];
const ko_company_list = ["구글", "삼성", "애플"];
const en_company_list = ["google", "samsung", "apple"];