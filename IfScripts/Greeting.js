"use strict"


let currentHour = 10 //23:59-->00:00

if (currentHour < 10) {
    console.log("Good Morning")
}else if (currentHour >=10 && currentHour < 17) {
    console.log("Good day")
}else if (currentHour >=17) {
    console.log("Good evening")
}
