/*class Kosar extends Termek{
    constructor(elem, adat, index){
        super(elem, adat);
        this.adat.index = index;
        this.kosarba=this.elem.children("button");

        this.elem.on("click", ()=>{
            console.log(this);
            this.KattintasTrigger();
        });
        
    }
    
    KattintasTrigger(){
        let esemeny = new CustomEvent("kattintottGombEsemeny",{detail:this.adat});
        window.dispatchEvent(esemeny);
    }
    
}*/
class Kosar {
  constructor() {
    this.kosarTomb = [];
    this.kosarElem = $("#kosaram");
    this.osszar = $("#osszar");
    this.fizet = $(".fizet");
    let tomb = JSON.parse(localStorage.getItem("enKosaram"));
    if(tomb !== null){
      tomb.forEach(elem => {
        this.setKosar(elem);
      });
    }

    //this.torol =

    $("#kosaram").on("click", ".torles", (esemeny)=>{
      let dataId = $(esemeny.target).attr("dataId");
      console.log(dataId);
      this.kosarTomb.splice(dataId, 1);
      localStorage.setItem("enKosaram",JSON.stringify(this.kosarTomb));
      this.megjelenit();
    })
  }

  setKosar(elem) {
    this.kosarTomb.push(elem);
    localStorage.setItem("enKosaram",JSON.stringify(this.kosarTomb));
    this.megjelenit();
  }
  megjelenit() {
    $("#kosaram").empty();

    $("#kosaram").append("<table>");

    let txt = "<tr>";

    for (let i = 0; i < this.kosarTomb.length; i++) {
      txt += "<td>" + this.kosarTomb[i]["nev"] + "</td>";
      txt += "<td>" + this.kosarTomb[i]["ar"] + "</td>";

      txt += "<td><button dataId='" + i + "' class='torles'>x</button></td>";
      txt += "</tr>";
    }

    $("#kosaram table").append(txt);
    
  }
}
