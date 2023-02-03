document.getElementById('getDetail').addEventListener('click', getApi);
function getApi() {
  var userEmail = document.getElementById('email').value;
  console.log(userEmail)
  const url = `http://localhost:3000/details/${userEmail}`;
  console.log(url);
  console.log(userEmail);
  let output = ``;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
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
                      <td>${data['name']}</td>
                      <td>${data['username']}</td>
                      <td>${data["email"]}</td>
                      <td>${data["address"]}</td>
                      <td>${data["phone"]}</td>
                      <td>${data["website"]}</td>
                      <td>${data["company_name"]}</td>
                    </tr>
                  </table>
            </div>
                `;
      document.getElementById('output').innerHTML = output;
    }).catch((err) => console.log(err))
}