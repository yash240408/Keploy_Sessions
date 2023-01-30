document.getElementById('getDetail').addEventListener('click', getApi);
function getApi() {
  var userEmail = document.getElementById('email').value;
  console.log(userEmail)
  const url1 = `http://localhost:3000/getdata?email=${userEmail}`;
  console.log(url1);
  console.log(userEmail);
  let output = ``;
  fetch(url1)
    .then((res) => res.json())
    .then((data) => {
      for (const i in data) {
        if (Object.hasOwnProperty.call(data, i)) {
          const element = data[i]["email"];
          if (userEmail.toLowerCase().trim() == element.toLowerCase()) {
            output = `
            <div style="flex: auto;">
                <table border="2">
                    <tr>
                      <th>Full Name</th>
                      <th>UserName</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Phone No</th>
                      <th>Website</th>
                      <th>Company's Name</th>
                    </tr>
                    <tr>
                      <td>${data[i]['name']}</td>
                      <td>${data[i]['username']}</td>
                      <td>${data[i]["email"]}</td>
                      <td>${data[i]["address"]['street'] + ', ' + data[i]["address"][['suite']] + "\n" + data[i]["address"]['city'] + ', ' + data[i]["address"][['zipcode']]}</td>
                      <td>${data[i]["phone"]}</td>
                      <td>${data[i]["website"]}</td>
                      <td>${data[i]["company"]["name"]}</td>
                    </tr>
                  </table>
            </div>
                `;
          }
        }
      }
      document.getElementById('output').innerHTML = output;
    }).catch((err) => console.log(err))
}