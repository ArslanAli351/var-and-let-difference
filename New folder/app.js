function varScoping() {
    var num = 1;
  
    if (true) {
      var num = 2;
      console.log(num); // will print 2
    }
  
    console.log(num); // will print 2
  }
  varScoping()
  
  function letScoping() {
    let num = 3;
  
    if (true) {
      let num= 4;
      console.log(num); // will print 4
    }
  
    console.log(num); // will print 3
  }
  letScoping()