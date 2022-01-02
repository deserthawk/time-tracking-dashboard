const DATA = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "SelfCare",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];

let reportItem = document.getElementsByClassName("report-menu-item");

let workHour = document.getElementById("workHour");
let workPrvHour = document.getElementById("workPrvHour");
let playHour = document.getElementById("playHour");
let playPrvHour = document.getElementById("playPrvHour");
let studyHour = document.getElementById("studyHour");
let studyPrvHour = document.getElementById("studyPrvHour");
let exerciseHour = document.getElementById("exerciseHour");
let exercisePrvHour = document.getElementById("exercisePrvHour");
let socialHour = document.getElementById("socialHour");
let socialPrvHour = document.getElementById("socialPrvHour");
let selfcareHour = document.getElementById("selfcareHour");
let selfcarePrvHour = document.getElementById("selfcarePrvHour");

for (let i = 0; i < reportItem.length; i++) {
    reportItem[i].addEventListener("click", function () {
        resetReportMenuItem();
        this.className = "report-menu-item active";
        setWidgets(this.id);
    });
}

function resetReportMenuItem() {
    for (let i = 0; i < reportItem.length; i++) {
        reportItem[i].className = "report-menu-item";
    }
}

function setWidgets(timeInterval) {
    let interval = "";

    switch (timeInterval) {
        case "daily":
            interval = "day";
            break;
        case "weekly":
            interval = "week";
            break;
        case "monthly":
            interval = "month";
            break;
    }
    setInnerText(timeInterval, interval);
}

function setInnerText(timeInterval, interval) {
    workHour.innerText = `${DATA.find(item => item.title.toLowerCase() === "work").timeframes[timeInterval].current}hrs`;
    workPrvHour.innerText = `Last ${interval} - ${DATA.find(item => item.title.toLowerCase() === "work").timeframes[timeInterval].previous}hrs`;

    playHour.innerText = `${DATA.find(item => item.title.toLowerCase() === "play").timeframes[timeInterval].current}hrs`;
    playPrvHour.innerText = `Last ${interval} - ${DATA.find(item => item.title.toLowerCase() === "play").timeframes[timeInterval].previous}hrs`;

    studyHour.innerText = `${DATA.find(item => item.title.toLowerCase() === "study").timeframes[timeInterval].current}hrs`;
    studyPrvHour.innerText = `Last ${interval} - ${DATA.find(item => item.title.toLowerCase() === "study").timeframes[timeInterval].previous}hrs`;

    exerciseHour.innerText = `${DATA.find(item => item.title.toLowerCase() === "exercise").timeframes[timeInterval].current}hrs`;
    exercisePrvHour.innerText = `Last ${interval} - ${DATA.find(item => item.title.toLowerCase() === "exercise").timeframes[timeInterval].previous}hrs`;

    socialHour.innerText = `${DATA.find(item => item.title.toLowerCase() === "social").timeframes[timeInterval].current}hrs`;
    socialPrvHour.innerText = `Last ${interval} - ${DATA.find(item => item.title.toLowerCase() === "social").timeframes[timeInterval].previous}hrs`;

    selfcareHour.innerText = `${DATA.find(item => item.title.toLowerCase() === "selfcare").timeframes[timeInterval].current}hrs`;
    selfcarePrvHour.innerText = `Last ${interval} - ${DATA.find(item => item.title.toLowerCase() === "selfcare").timeframes[timeInterval].previous}hrs`;
}