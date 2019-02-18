let difficulty = {
    length: 2,
    num: 20
}
let quest, questDOM = document.querySelector("#quest");
init();
function init() {
    document.querySelector('#ans-input').value="";
    document.querySelector('#ans-input').focus();
    quest = createQuest();
    console.log(quest)

    showQuest();

    document.querySelector("#answer").textContent = quest.ans;
}
function createQuest() {
    let nums = [], ans = 0;

    for (let i = 0; i < difficulty.length; i++) {
        nums[i] = Math.round((Math.random() * difficulty.num) - (difficulty.num / 2));
        ans += nums[i];
    }
    return {
        nums,
        ans
    }
}
function showQuest() {
    questDOM.textContent = "";

    for (let i = 0; i < difficulty.length; i++) {
        if (i > 0 && quest.nums[i] >= 0) {
            questDOM.textContent += ("+" + quest.nums[i]);
            continue;
        }
        questDOM.textContent += quest.nums[i];
    }
}

function submitAnswer(ansInput) {
    let boxSelector;
    if (ansInput == quest.ans) {
        boxSelector = "#correct";
    }
    else {
        boxSelector = "#wrong";
    }
    document.querySelector(boxSelector).classList.remove('d-none');
    setTimeout(
        function () {
            document.querySelector(boxSelector).classList.add('d-none');
            init();
    }, 2000);

}

