

var clientParams = {
    allowUrlParams: true,
    fullScreen: false,
    guiMode: 'chat',
    backgroundColor: '#6737ff',
    textInputEnabled: false,
    searchMethods: {text: false, voice: false},
    domain: '.flowstorm.ai',
    mode: 'voice',
    elementId: "bot1",
    collapsable: false,
    interactionMode: "GUIDE",
    sound: false,
    title: "Tebokan 120 mg, po...",
    search: true,
    controlIcons: {mic: false, mute: false, restart: false, magnifier: false},
    userMessageTextColor: '#297dc7',
    botMessageBackgroundColor: '#297dc7',
    userMessageBackgroundColor: '#ffffff',
    placementMode: "fill"
};



const bot1 = new initFSClientBot({
    ...clientParams,
    botKey: "6537fea9a255e42135781033",
});

const bot2 = new initFSClientBot({
    ...clientParams,
    elementId: "bot2",
    title: "286 mg/g dentální pasta",
    botKey: "6537fee9bcfa4117213fa88d"
});

const bot3 = new initFSClientBot({
    ...clientParams,
    elementId: "bot3",
    title: "Čaj z listu senny...",
    botKey: "6537fc7ca255e4213577d655"
});

const bot4 = new initFSClientBot({
    ...clientParams,
    elementId: "bot4",
    title: "Yttrium (90Y) colloid suspen...",
    botKey: "6537fe67bcfa4117213f9353"
});

const bot5 = new initFSClientBot({
    ...clientParams,
    elementId: "bot5",
    title: "PANZYNORM forte-N",
    botKey: "6537ff13bcfa4117213fae05"
});

const bot6 = new initFSClientBot({
    ...clientParams,
    elementId: "bot6",
    title: "Enhertu 100 mg prášek...",
    botKey: "6537ff36bcfa4117213fb267"
});

function returnbArray(){
    const bot1C = document.getElementById("botC1")
    const bot2C = document.getElementById("botC2")
    const bot3C = document.getElementById("botC3")
    const bot4C = document.getElementById("botC4")
    const bot5C = document.getElementById("botC5")
    const bot6C = document.getElementById("botC6")
    return [bot1C, bot2C, bot3C, bot4C, bot5C, bot6C];
} 

const bot1C = document.getElementById("bot1")
const bot2C = document.getElementById("bot2")
const bot3C = document.getElementById("bot3")
const bot4C = document.getElementById("bot4")
const bot5C = document.getElementById("bot5")
const bot6C = document.getElementById("bot6")

const cArray = [bot1C, bot2C, bot3C, bot4C, bot5C, bot6C]
const bArray = [bot1, bot2, bot3, bot4, bot5, bot6]

function intro(){
    document.getElementById("searchBarBarBar").classList.remove("hidden");
    for (let index = 0; index < bArray.length; index++) {
        const bot = bArray[index];
        if (returnbArray()[index].checked){
            console.log(index);
            console.log(bot)
            console.log(bot.parentNode)
            cArray[index].parentElement.classList.remove("hidden");
            bot.botUI.startButtonCallback();
            bot.botUI.chatRestartCallback();
        }else{
            cArray[index].parentElement.classList.add("hidden");
        }
    }
}

function askQuestion(){
    const query = document.getElementById("searcher").value;
    for (let index = 0; index < bArray.length; index++) {
        const bot = bArray[index];
        if (returnbArray()[index].checked){
            bot.botUI.setUserText(query);
            bot.bot.handleOnTextInput(query, false, false);
            bot.botUI.toggleLoading(true);
        }
    }
}


