let url = 'https://randomuser.me/api/?results=5'

fetch(url)
.then(response => response.json())
.then (res => {
  console.log(res)
  let data =res.results
  AddressBook(data)
  
})

let AddressBook = (user) => {
  console.log(user)
  user.forEach(user => {
  let div = document.createElement('div')
  let img = document.createElement('img')
  let name = document.createElement('div')
  let info = document.createElement('span')
  let dob = document.createElement('p')
  let email = document.createElement('p')
  let gender = document.createElement('p')
  let address = document.createElement('p')
    let btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    btn.addEventListener("click", function () {
      console.log(user);;
      info.classList.toggle('visible')
    });
    document.body.appendChild(btn);
  name.innerHTML = user.name.first + ' ' + user.name.last
  dob.innerHTML = 'Age: ' + user.dob.age
  email.innerHTML = 'Email: ' + user.email
  gender.innerHTML = 'Gender: ' + user.gender
  address.innerHTML = 'Address: ' + user.location.street.number + ' ' + user.location.street.name + '<br>' + user.location.city + ',' + user.location.state +' ' + user.location.postcode 
  img.src = user.picture.medium
  info.appendChild(gender)
  info.appendChild(address)
  info.appendChild(email)
  info.appendChild(dob)
  div.appendChild(img)
  div.appendChild(name)
  div.appendChild(info) 
  div.appendChild(btn)
  document.getElementById('container').appendChild(div)
  
});
  
}

let button = (data) => {
  console.log(data);
  // data.forEach(person => {
    
  // })

}