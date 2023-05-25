var contador = 1;
function Buscar(){
    var entrada = document.getElementById('entrada').value.toLowerCase();

    if(entrada.length < 1){
        entrada = contador;
    }
    var url = "https://pokeapi.co/api/v2/pokemon/"+entrada;
    
    fetch(url)
    .then(Response => Response.json())
    .then(data=>{
        var tela  = document.getElementById('tela');
        tela.innerHTML = '<h2>'+ data.name +'</h2>'
        +' <img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif" > '
        +' <img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/'+data.id+'.gif" > '
        +'<p class="paragrafo"> ID:' + data.id +' </p>'
        +'<p class="paragrafo"> Tipo:'+data.types.map(type => type.type.name).join(",")+'</p>'
        +'<p class="paragrafo"> Habilidade: '+data.abilities.map(ability => ability.ability.name)

contador = data.id
document.getElementById('entrada').value=""

    }).catch(error =>{
        var tela = document.getElementById('tela');
        tela.innerHTML = "<p>Pokemon não encontrado!</p>"; 
    })
    
    function prox(){
        contador = contador + 1 ;
        Buscar();
    }
    function ant(){
        contador = contador - 1; 
        Buscar();
    }


}