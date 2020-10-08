const sendRequestWithUserData = async (userInfo) => {
  let username = userInfo.inputUsername;
  let password = userInfo.inputPassword;
  console.log("username", username, "password", password);

  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const resultUsernameCheck = format.test(username);
  if (resultUsernameCheck) {
    alert("Username cannot contain special characters");
    return;
  }

  const result = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const { error, token } = await result.json();
  if (error) {
    alert(error);
    return;
  }
  // localStorage.setItem("token", token);
  // if (localStorage.getItem("token")) {
  //    document.location = "http://localhost:3000/chat";
  // }
};

export { sendRequestWithUserData };
