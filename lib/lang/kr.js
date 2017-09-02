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
  "clear" : "맑음"
  "no-precipitation" : "강수량 없음"
  "mixed-precipitation" : "소나기"
  "possible-very-light-precipitation" : "가능-매우 가벼운 강수량"
  "very-light-precipitation" : ""
  "possible-light-precipitation" : ""
  "light-precipitation" : ""
  "medium-precipitation": 
  "heavy-precipitation": 
  "possible-very-light-rain" : ""
  "very-light-rain" : ""
  "possible-light-rain" : ""
  "light-rain" : ""
  "medium-rain": 
  "heavy-rain": 
  "possible-very-light-sleet": 
  "very-light-sleet": 
  "possible-light-sleet": 
  "light-sleet": 
  "medium-sleet": 
  "heavy-sleet": 
  "possible-very-light-snow": 
  "very-light-snow": 
  "possible-light-snow": 
  "light-snow": 
  "medium-snow": 
  "heavy-snow": 
  "possible-thunderstorm": 
  "thunderstorm": 
  "light-wind": 
  "medium-wind": 
  "heavy-wind": "
  "low-humidity": 
  "high-humidity": 
  "fog": 
  "light-clouds": 
  "medium-clouds": 
  "heavy-clouds": "
  "today-morning": "
  "later-today-morning": "
  "today-afternoon": "
  "later-today-afternoon": "今日の夕方",
  "today-evening": 
  "later-today-evening": "
  "today-night": "
  "later-today-night": "
  "tomorrow-morning": "
  "tomorrow-afternoon": "
  "tomorrow-evening": "
  "tomorrow-night": "明日の夜
  "morning": "朝
  "afternoon": "
  "evening": "
  "night": "
  "today": "
  "tomorrow": "明日
  "sunday": "日曜日
  "monday": "月曜日
  "tuesday": "火曜日
  "wednesday": "水曜日",
  "thursday": "木曜日",
  "friday": "金曜日",
  "saturday": "土曜日",
  "next-sunday": "次の日曜日",
  "next-monday": "次の月曜日",
  "next-tuesday": "次の火曜日",
  "next-wednesday": "次の水曜日
  "next-thursday": "次の木曜日"
  "next-friday": "次の金曜日
  "next-saturday": "次の土曜日
  "minutes": "$1分
  "fahrenheit": "$1\u00B0F
  "celsius": "$1\u00B0C",
  "inches": "$1インチ",
  "centimeters": "$1センチメートル",
  "less-than": "$1未満",
  "and": function(a, b) {
    return join_with_shared_prefix(
      a,
      b,
      a.indexOf(",") !== -1 ? ",及び" : "及び
    );
  },
  "through": function(a, b) {
    return join_with_shared_prefix(a, b, " から "
  },
  "with": "$1及び$2"
  "range": "$1\u2013$2"
  "parenthetical": "$1 ($2)"
  "for-hour": "一時間$1",
  "starting-in": "$1が$2に始まります",
  "stopping-in": "$1が$2に終わります",
  "starting-then-stopping-later": "$1が$2に始まり、$3後終わります"
  "stopping-then-starting-later": "$1が$2に終わり、また$3後始まります"
  "for-day": "一日中$1"
  "starting": "$1は$2が始まります",
  "until": function(condition, period) {
    return  condition + period + " まで" ;
  },
  "until-starting-again": function(condition, a, b) {
    return condition + a + "まで" + b +  ", また始まる 
  },
  "starting-continuing-until": function(condition, a, b) {
    return condition + a + " 始まって" + b + ", まで続く " ;
  },
  "during": "$1から$2にかけて",
  "for-week": "一週間中$1"
  "over-weekend": "土、日曜日に$1",
  "temperatures-peaking": "最高気温$1 $2",
  "temperatures-rising": "気温は$1 $2に上がります",
  "temperatures-valleying": "最低気温$1 $2"
  "temperatures-falling": "気温は$1 $2に下がります"
  "title": "$1",
  /* Add a period if there isn't already one. */
  "sentence": function(str) {
    if(str.charAt(str.length - 1) !== "。")
      str += "。";

    return str;
  }
});
