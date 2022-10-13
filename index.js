async function GetData(URL) {
  const response = await fetch(URL);
  console.log(response);
  return response.text();
}

document.getElementById("demo").onclick = async function () {
  console.log("onclick!");
  const response = await GetData("http://10.131.248.157:8080/test.txt");
  document.write(response);
};

