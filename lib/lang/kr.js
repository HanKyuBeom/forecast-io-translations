function join_with_shared_prefix(a, b, joiner) {
  var i = 0;

  while(i !== a.length &&
        i !== b.length &&
        a.charCodeAt(i) === b.charCodeAt(i))
    ++i;

  while(i && a.charCodeAt(i - 1) !== 32)
    --i;

  return a.slice(0, i) + a.slice(i) + joiner + b.slice(i);
}

module.exports = require("../template")({
  "clear" : "맑음",
  "no-precipitation" : "강수량 없음",
  "mixed-precipitation" : "진눈깨비"
  "possible-very-light-precipitation" : "강수 조금 올 수 있음",
  "very-light-precipitation" : "강수 조금",
  "possible-light-precipitation" : "강수 조금 올 수 있음",
  "light-precipitation" : "강수 조금",
  "medium-precipitation": "강수",
  "heavy-precipitation": "집중 호우",
  "possible-very-light-rain" : "이슬비 올 수 있음",
  "very-light-rain" : "이슬비",
  "possible-light-rain" : "이슬비 올 수 있음",
  "light-rain" : "돌풍",
  "medium-rain": "비",
  "heavy-rain": "호우",
  "possible-very-light-sleet": "약한 진눈깨비 올 수 있음",
  "very-light-sleet": "진눈깨비가 조금",
  "possible-light-sleet": "진눈깨비가 올 수 있음",
  "light-sleet": "진눈깨비 조금",
  "medium-sleet": "진눈깨비",
  "heavy-sleet": "강한 진눈깨비",
  "possible-very-light-snow": "눈이 조금 올 수 있음",
  "very-light-snow": "눈 매우 조금",
  "possible-light-snow": "조금 눈 올 수 있음",
  "light-snow": "조금 눈",
  "medium-snow": "눈",
  "heavy-snow": "폭설",
  "possible-thunderstorm": "뇌우 올 수 있음",
  "thunderstorm": "뇌우",
  "light-wind": "바람 조금",
  "medium-wind": "강한 바람",
  "heavy-wind": "맹렬한 바람",
  "low-humidity": "건조함",
  "high-humidity": "습함",
  "fog": "안개",
  "light-clouds": "조금 흐림",
  "medium-clouds": "흐림",
  "heavy-clouds": "흐림",
  "today-morning": "오늘 아침",
  "later-today-morning": "오늘 아침",
  "today-afternoon": "오늘 오후",
  "later-today-afternoon": "오늘 저녁",
  "today-evening": "오늘 초저녁",
  "later-today-evening": "오늘 밤 늦게",
  "today-night": "내일 아침",
  "later-today-night": "오늘 밤",
  "tomorrow-morning": "내일 아침",
  "tomorrow-afternoon": "내일 오후",
  "tomorrow-evening": "내일 저녁",
  "tomorrow-night": "내일 밤",
  "morning": "아침",
  "afternoon": "오후",
  "evening": "저녁",
  "night": "밤",
  "today": "오늘",
  "tomorrow": "내일",
  "sunday": "일요일",
  "monday": "월요일",
  "tuesday": "화요일",
  "wednesday": "수요일",
  "thursday": "목요일",
  "friday": "금요일",
  "saturday": "토요일",
  "next-sunday": "다음 일요일",
  "next-monday": "다음 월요일",
  "next-tuesday": "다음 화요일",
  "next-wednesday": "다음 수요일",
  "next-thursday": "다음 목요일",
  "next-friday": "다음 금요일",
  "next-saturday": "다음 토요일",
  "minutes": "$ 1 분",
  "fahrenheit": "$ 1°F",
  "celsius": "$ 1°C",
  "inches": "$ 1 in",
  "centimeters": "1cm",
  "less-than": "$ 1",
  "and": function(a, b) {
    return join_with_shared_prefix(
      a,
      b,
      a.indexOf(",") !== -1 ? ",및" : "및"
    );
  },
  "through": function(a, b) {
    return join_with_shared_prefix(a, b, " 에서 "
  },
  "with": "$1, $2",
  "range": "$1\u2013$2",
  "parenthetical": "$1 ($2)"
  "for-hour": "시간당$1",
  "starting-in": "$1이 $2에 시작됩니다",
  "stopping-in": "$1이 $2에 끝납니다",
  "starting-then-stopping-later": "$1은 $2에서 시작하고、$3은 나중에 중단"
  "stopping-then-starting-later": "$1이(가) $2에서 멈추고, 다시 $3에서 시작",
  "for-day": "$1하루종일"
  "starting": "$1가 $2로 시작",
"until": function(condition, period) {
    return condition + " 끝 " + strip_prefix(period);
  },
  "until-starting-again": function(condition, a, b) {
    return condition + " 끝 " + strip_prefix(a) + ", 다시 시작" + b;
  },
  "starting-continuing-until": function(condition, a, b) {
    return condition + " 시작 " + a + ", 까지 계속" +
           strip_prefix(b);
  },
  "during": "$1에서$2에 걸쳐",
  "for-week": "$1 주일 내내"
  "over-weekend": "$1 주말 동안",
  "temperatures-peaking": "기온이$1에서 $2까지 상승",
  "temperatures-rising": "기온이$1에서 $2까지 상승",
  "temperatures-valleying": "기온이$1에서 $2까지 떨어짐",
  "temperatures-falling": "기온이$1에서 $2까지 하락",
  "title": "$1",
  /* Add a period if there isn't already one. */
  "sentence": function(str) {
    if(str.charAt(str.length - 1) !== "。")
      str += "。";

    return str;
  }
});
