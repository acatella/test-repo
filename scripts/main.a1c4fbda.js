"use strict";console.log("'Allo 'Allo!"),$(document).ready(function(){var a=["hero-blue","hero-pink"],b=$("div.hero");b.on("click",function(){var c=a[Math.floor(Math.random()*a.length)];console.log(c),b.attr("class","hero "+c)})});