let year = +prompt("enter your year");

if (year) {
  if (year % 4 == 0) {
    // console.log(" yes leap year");
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        console.log("Leap year");
      } else {
        console.log("not lear year.");
      }
    } else {
      console.log("Lear year.");
    }
  } else {
    console.log("no leap year.");
  }
}
