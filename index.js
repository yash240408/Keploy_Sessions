document.getElementById('getDetail').addEventListener('click', getApi);
// const apiId= 'cebbb42caa4345eaa4e161051232501';
function getApi() {
    // var CityName = document.getElementById('cityName').value;
    var AnimeName = document.getElementById('animeName').value;
console.log(AnimeName)
// const url = `http://api.weatherapi.com/v1/current.json?key=${apiId}&q=${CityName}&aqi=yes`;
const url1=`https://animechan.vercel.app/api/quotes/character?name=${AnimeName}`;
// console.log(url);
console.log(url1);
fetch(url1)
    .then((res) => res.json())
    .then((data) => {
        let output = `
        <div style="flex: auto;">
            <table border="2">
                <tr>
                  <th>Anime Name</th>
                  <th>Character Name</th>
                  <th>Quote</th>
                </tr>
                <tr>
                  <td>${data[0].anime}</td>
                  <td>${data[0].character}</td>
                  <td>${data[0].quote}</td>
                </tr>
              </table>
        </div>
            `;
            
        console.log('printing data', data);
        document.getElementById('output').innerHTML = output;
    }).catch((err) => console.log(err))
}