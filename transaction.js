function transfer() {
  var n = document.getElementById('name').value;
  var e = parseInt(document.getElementById("moneyy").value);
  var fro= document.getElementById('from').value;
  var check1= n+'@gmail.com';
  var check2= document.getElementById('exampleDtaList').value;

  if (check1==check2) {
    var f = parseInt(document.getElementById(n).innerText);
    var g = e+f;
    var froo = parseInt(document.getElementById(fro).innerText);

    from= froo-e;
    document.getElementById(fro).innerHTML= from;
    document.getElementById(n).innerHTML= g;
    alert("Your Transaction was Successful! \nTime of Transaction: "+Date());
    var aray = [""];
    var j = document.getElementById('hist').innerText;
    var main = "<i> Successful Transaction Of Rs. </i>" + e + "<i>  |  </i>" + "<i> From: </i>" + fro + "<i>  |  </i>" + " <i> To: </i> " + n + "." +"\n";
  
    var hot= j +'<br> '+ main;
    document.getElementById('hist').innerHTML= hot;
  }
  else {
    alert(" Name And Email-id Doesn't match ");
  }
}
