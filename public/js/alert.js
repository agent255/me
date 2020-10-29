const alerted = localStorage.getItem("alerted");
if (alerted == "yes") {
  console.log("Already Alerted");
} else {
  Swal.fire(
    "Warning!",
    "This site is in beta, so you may see some funky incomplete styling",
    "warning"
  );
}
