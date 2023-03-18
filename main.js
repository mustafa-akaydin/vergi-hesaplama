function yillar() {
  let tarih = new Date();
  let yil = tarih.getFullYear();
  for (let i = yil; i >= 1950; i--) {
    let secenek = document.createElement("option");
    document.getElementById("aracYili").options.add(secenek);
    secenek.value = i;
    secenek.text = i;
  }
}

function vergiHesapla() {
  let aracTipi, motorGucu, aracYili;
  let odenecekVergi;
  let i;

  //araç tipi şeçimi
  for (i = 0; i < document.getElementById("aracTipi").length; i++) {
    if (document.getElementById("aracTipi").options[i].selected) {
      aracTipi = document.getElementById("aracTipi").options[i].value;
    }
    console.log(aracTipi);
  }
  //Motor Gücü şeçimi
  for (i = 0; i < document.getElementsByName("motorGucu").length; i++) {
    if (document.getElementsByName("motorGucu")[i].checked) {
      motorGucu = document.getElementsByName("motorGucu")[i].value;
    }
    console.log(motorGucu);
  }
  //araç yılını şeçimi

  for (i = 0; i < document.getElementById("aracYili").length; i++) {
    if (document.getElementById("aracYili").options[i].selected) {
      aracYili = document.getElementById("aracYili").options[i].value;
    }
    console.log(aracYili);
  }

  //aractipine göre vergi
  if (aracTipi == "motorsiklet") {
    odenecekVergi = 100;
  } else if (aracTipi == "otomobil") {
    odenecekVergi = 200;
  } else {
    alert("Araç tipini şeçmediniz!");
  }
  

  //araç  gücüne göre vergi ekleme
  if (motorGucu == "1000cc-1600cc") {
    odenecekVergi += 50;
  } else if (motorGucu == "1601cc-2000cc") {
    odenecekVergi += 100;
  } else if (motorGucu == "2001cc") {
    odenecekVergi += 150;
  }
  else{
    alert("Motor Hacmini şeçmediniz!");
  }
  //araç  yılına  göre vergi silme

  if (aracYili <= 2005) {
    odenecekVergi -= 50;
  } else if (aracYili <= 2010) {
    odenecekVergi -= 25;
  } else {
    alert("Araç tipini şeçmediniz!");
  }
  document.getElementById("sonuc").innerHTML =
    "Ödemeniz gereken vergi : " + odenecekVergi;
}
