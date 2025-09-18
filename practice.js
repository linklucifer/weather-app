console.log("hello jee this is Aditya Singh Rajput");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
    // let latitude = 15.3333;
    // let longitude = 74.0833;

    // it might be possible that it can throw error in some circumstances. To handle that situtaio we will put this block of code in try and catch
    try {
        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        console.log("Weather data: -> ", data);

        renderWeatherInfo(data);
    }

    catch (err) {
        console.log("something went wrong");
    }

    // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
}

async function getCustomWeatherDetails() {
    try {
        let latitude = 15.6333;
        let longitude = 18.3333;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data = await result.json();

        console.log(data);
    }

    catch (err) {
        console.log("Error Found", err);
    }
}

// till now we are working or make single page web application but now we will make multi page web application
function switchTab(clickedTab){
    apiErrorContainer.classList.remove('active');

    if(clickedTab !== currentTab){
        currentTab.classList.remove('current-tab');
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains('active')){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }

        else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }

        console.log("Current Tab: " + currentTab)
    }
}

// how to get the postion of a user while using the weather app and want to see their weather on home page of the application
function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geolocation support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
}