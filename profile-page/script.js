console.log("page loaded...");
var Name = document.querySelector(".card-body h1")
var todd = document.querySelector(".todd")
var phil = document.querySelector(".phil")
var requests = 2
var ConnectionRequests = document.querySelector(".badge")
var YourConnections = document.querySelector(".badge2")

function change(){
    Name.innerHTML = "Jim Berglin"
}

function hide(element){
    element.remove();
    requests --
    ConnectionRequests.innerHTML = requests
}
function accept(element){
    hide(element);
    YourConnections ++
    document.querySelector(".badge2").innerText ++
}