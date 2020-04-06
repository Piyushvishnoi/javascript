var myobj = {
  gift: "Success",
  cure: "Sorting out",
  mostimp: "family",
};
function checkobject(checkproperty) {
  if (myobj.hasOwnProperty(checkproperty)) {
    return myobj[checkproperty];
  } else return "not found";
}
console.log(checkobject("gift"));
