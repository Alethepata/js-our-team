console.log('ciao');

const content = document.getElementById('content');

const team = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',	
        image: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',	
        image: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',	
        image: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',	
        image: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',	
        image: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',	
        image: 'barbara-ramos-graphic-designer.jpg',
    }

]

for( let member of team ){
     content.innerHTML += 
     ` <div class="card size rounded-0 border-0">
          <img  src="img/${member.image}">
          <div class="card-body">
          <h4 class="color">${member.name}</h4>  
          <span class= "color">${member.role}</span> 
          </div>
      </div>`;


}
