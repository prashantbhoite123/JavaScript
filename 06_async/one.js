const prashantUrl = "https://avatars.githubusercontent.com/u/162778411?v=4";

// console.log(prashantUrl);

try {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", prashantUrl);
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      // console.log(typeof data);
    }
  };
  xhr.send();
} catch (error) {
  console.log(err);
}
