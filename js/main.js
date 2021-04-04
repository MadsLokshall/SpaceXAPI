window.onload = init;

function init(){
    getAllPastLauches();
}
function getAllPastLauches(){
    let url = "https://api.spacexdata.com/v4/launches/past";
    let request = new XMLHttpRequest()
    request.open("GET", url);
    request.onreadystatechange = function () {
        // In local files, status is 0 upon success in Mozilla Firefox
        if(request.readyState === XMLHttpRequest.DONE) {
          var status = request.status;
          if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
            parseLaunches(request.responseText);
            console.log(request.responseText)

          } else {
            // Oh no! There has been an error with the request!
            alert("Something wrong happened!")
          }
        }
      };
    request.send();
}

function parseLaunches(responseText){
    let launchesList = JSON.parse(responseText);
    let i = 0;
    for (const launch of launchesList) {
        createLaunchContainer(launch);
    }
    alert(i);
}

function createLaunchContainer(launch){
    let container = document.getElementById("LaunchContainer");
    let elem = document.createElement("DIV");
    elem.className = "column";

    let img = document.createElement("IMG");
    img.src = launch.links.patch.small;
    let date = document.createElement("SPAN");
    date.textContent = launch.date_utc;
    let youtube = document.createElement("span");
    youtube.textContent = launch.links.webcast;
console.log (launch.links.webcast)
    elem.appendChild(img);
    elem.appendChild(date);
    elem.appendChild(youtube)
    
    container.appendChild(elem);



  

}