//utilities
//Faccio una funzione per generare un oggetto "team member" con i parametri: nome, ruolo, img profilo
function teamMemberGenerator(memberName, memberRule, profilePicture ){

    const teamMember = {

        name: memberName, //string
        rule: memberRule, //string
        picture: profilePicture //string
        
    }

    return teamMember //return oggetto

}


//******************MAIN*************************/
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

//creo un oggetto per ogni membro con i suoi dati
const memberOne = teamMemberGenerator("Wayne Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg")    //object

const memberTwo = teamMemberGenerator("Angela Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg")    //object

const memberThree = teamMemberGenerator("Walter Gordon", "Office Manager", "walter-gordon-office-manager.jpg")  //object

const memberFour = teamMemberGenerator("Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg") //object

const memberFive = teamMemberGenerator("Scott Estrada",	"Developer", "scott-estrada-developer.jpg") //object

const memberSix = teamMemberGenerator("Barbara Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg")    //object

//crea un array con tutti i membri al suo interno

const team = [memberOne, memberTwo, memberThree, memberFour, memberFive, memberSix]; //object array

console.log(team)

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// creo un ciclo for che scorra l'array "team" e per ogni indice dell'array e che faccia il display in console con i suoi dati
for(let i = 0; i < team.length; i++){

    console.log(`Nome: ${team[i].name}, Ruolo: ${team[i].rule}, Foto: ${team[i].picture}`)
// MILESTONE 2:
// Stampare le stesse informazioni su DOM semplicemente come stringhe

    const displayTeam = document.getElementById("team")

    // displayTeam.innerHTML += `<p>Nome: ${team[i].name}, Ruolo: ${team[i].rule}, Foto: ${team[i].picture}</p>`
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
    // displayTeam.innerHTML += `<p>Nome: ${team[i].name}, Ruolo: ${team[i].rule}, Foto: <img src="./img/${team[i].picture}" alt=""></p>`
// BONUS 2:
    //inserisco una card (bootstrap ;O ) usando `...` con i dati di ogni team member

    displayTeam.innerHTML += `<div class="col-4">
                                    <div class="card m-3" style="width: 18rem;">
                                        <img src="./img/${team[i].picture}" class="card-img-top">
                                        <div class="card-body team_card">
                                            <h5 class="card-title fw-bolder">${team[i].name}</h5>
                                            <p class="card-text">${team[i].rule}</p>
                                        </div>
                                    </div>
                                </div>`
}

