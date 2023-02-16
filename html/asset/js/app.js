var skills = ['html','css','bootstrape','html5','javascript']
console.log(skills);

var agesarray=[15,12,46,89,75,10,23,45,96,100]

for(var i=0;i<agesarray.length;i++){
  console.log(agesarray[i])
}


//for(var i=0;i<skills.length;i++){

  //console.log("i love " + skills[i]);

//}

var skillsContainer = document.getElementById('skillsContainer');
console.log(skillsContainer);

var result = '';
result += "<ul class='list-group'>";
for (var i=0; i<skills.length; i++) {
  
  result += "<li class='list-group-item'> i love " + skills[i] +"</li>"  ;
  
}
  result += "</ul>";
  console.log(result);
  skillsContainer.innerHTML = result;

