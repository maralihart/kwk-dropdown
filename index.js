var werewolf = $("#werewolf-select");
var button = $("#submit");
var output = $("#wolf-output");

button.on("click", showWerewolf)

function showWerewolf() {
    event.preventDefault();
    output.text(werewolf.val())
    console.log(werewolf.val())
}