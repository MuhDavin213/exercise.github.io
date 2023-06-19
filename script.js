function kirimdata() {
    var name = document.getElementById("text-input").value;
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
    var phoneNumber = document.getElementById("number-input").value;
    var date = document.getElementById("date-input").value;
    var faculty = document.querySelector("input[name=radio-input]:checked").value;
    var majors = "";
    var checkboxes = document.querySelectorAll("input[name=checkbox-input]:checked");
    checkboxes.forEach(function(checkbox) {
      majors += checkbox.value + ", ";
    });
    var address = document.getElementById("textarea-input").value;
    var batch = document.getElementById("select-input").value;
  
    alert(
      "Nama         : " + name +
      "\nEmail        : " + email +
      "\nPassword     : " + password +
      "\nNomor Telepon: " + phoneNumber +
      "\nTanggal      : " + date +
      "\nFakultas     : " + faculty +
      "\nJurusan      : " + majors +
      "\nAlamat       : " + address +
      "\nAngkatan     : " + batch
    );
  }
  