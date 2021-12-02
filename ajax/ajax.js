!function () {
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");
  const $frag = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState !== 4) {
      return;
    };
    if (xhr.status >= 200 && xhr.status < 300) {
      let parsed = JSON.parse(xhr.responseText);

      parsed.forEach(element => {
        const $li = document.createElement("li");
        $li.textContent = `${element.name} -- ${element.email} -- ${element.phone}`;
        $frag.appendChild($li);
      });
      $xhr.appendChild($frag);
    } else {
      $xhr.textContent = `Error ${xhr.status}: ${xhr.statusText || "Ocurrio un error"}`
    };
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
}();