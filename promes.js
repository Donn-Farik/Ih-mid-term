document.querySelector("#monica-form").addEventListener("submit", addPost);
function addPost(preventForm) {
  preventForm.preventDefault(); // Omite que se envie la info del formulario

  // Nos traemos la informacion que esta dentro del Input Tag para el titulo y el textArea para el body del post
  let fname = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let body = document.getElementById("field").value;

  // Using fetch to push to API
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
      Accept: "text/plain, application/json, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      fname: fname,
      email: email,
      phone: phone,
      body: body,
    }),
  })
    .then((response) => response.json())
    .then((dataDeFormulario) => {
      console.log(dataDeFormulario);
    });
  body.value = "";
}
