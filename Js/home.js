document.getElementById('leaveHome').addEventListener('click', () => {
    let type = document.getElementById('year').value;
    if (year != "") {
        if (type == '2023') {
            window.location.replace('season_2023.html');
        } else if (type == '2022') {
            window.location.replace('season_2022.html');
        } else if (type == '2021') {
            window.location.replace('season_2021.html');
        } else if (type == '2020') {
            window.location.replace('season_2020.html');
        } else if (type == '2019') {
            window.location.replace('season_2019.html');
        } else if (type == '2018') {
            window.location.replace('season_2018.html');
        } else if (type == '2017') {
            window.location.replace('season_2017.html');
        } else if (type == '2016') {
            window.location.replace('season_2016.html');
        } else if (type == '2015') {
            window.location.replace('season_2015.html');
        } else if (type == '2014') {
            window.location.replace('season_2014.html');
        } else {
            window.location.replace('season_2013.html');
        }
    } else {
        alert('No year chosen');
    }
});