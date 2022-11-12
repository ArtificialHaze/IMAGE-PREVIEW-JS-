function imagePreview(input) {
  let error = document.querySelector(".error");
  error.innerHTML = "";
  error.style.display = "none";

  document.querySelector(".preview span").style.display = "none";
  document.querySelector(".preview ").style.backgroundColor = "transparent";
  document.querySelector(".file-info").innerHTML = "";

  if (input.files) {
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      if (reader.readyState == 2) {
        document.querySelector("#image").src = reader.result;
      }
    };

    if (file.size > 1024 * 1024 * 2) {
      error.style.display = "block";
      error.innerHTML = "File must be smaller than 2MB";
      return false;
    }
    let allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];

    if (!allowedImageTypes.includes(file.type)) {
      error.style.display = "block";
      error.innerHTML = "File type must be JPEG,PNG or GIF";
      return false;
    }

    let fileInfo = `
    <ul>
    <li>File name: <span>${file.name}</span></li>
    <li>File size: <span>${file.size}</span></li>
    <li>File type: <span>${file.type}</span></li>
    </ul>
    `;
    document.querySelector(".file-info").innerHTML = fileInfo;
  }
}
