// TODO: add code here
window.addEventListener("load",function(){ 
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(data){
            //console.log(data);

        const numAstronaut = document.getElementById("numAstronaut");

        data.sort(function (a,b){
            return a.hoursInSpace - b.hoursInSpace 
        });
     
        for(i=0;i<data.length;i++){
            let astronaut = data[i];
            let activeClass = "";
            if(astronaut.active === true){
              activeClass = "active";
            } else {
              activeClass ="inactive";
            }

            container.innerHTML += `
            <div class="astronaut">
                <h2>${astronaut.firstName}${astronaut.lastName}</h2>
                <ul>
                    <li>${astronaut.hoursInSpace}</li>
                    <li class ="${activeClass}">${astronaut.active}</li>
                    <li>${astronaut.skills}</li>
                </ul>
                    <img class="avatar" src="${astronaut.picture}">
            </div>          
            `  
        }

        numAstronaut.innerHTML = `we have ${data.length} astronauts`;

        


        
        })
    })
})