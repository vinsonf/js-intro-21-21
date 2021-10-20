function submitForm(event) {
  event.preventDefault();
  console.log(event);
  console.log(document.forms["myForm"]["username"].value);
  console.log(document.forms["myForm"]["password"].value);

  const user = {
    name: document.forms["myForm"]["username"].value,
    password: document.forms["myForm"]["password"].value,
  };

  fetch(
    "http://localhost:3000/create-user",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    },
    
  ).then((data) => {
    console.log(data);
  });

  return false;
}
