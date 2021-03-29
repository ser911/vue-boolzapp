var avatar2 = document.getElementById("av2");
var avatar3 = document.getElementById("av3");
var avatar4 = document.getElementById("av4");
var avatar5 = document.getElementById("av5");




var app = new Vue (
{
el: "#contact-list",
data:{
  contacts:[
    {
      name: "Michele",
      img: "avatar2"
    },
    {
      name: "Fabio",
      img: "avatar3"
    },
    {
      name: "Samuele",
      img:  "avatar4"
    },
    {
      name: "Luigi",
      img: "avatar5"
    }
  ],

}
}
);
