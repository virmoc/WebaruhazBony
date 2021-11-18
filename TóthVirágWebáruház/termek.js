class Termek{
    constructor(elem, adat){
        //this.node = node;
        this.elem=elem;

        this.nev=this.elem.children(".termeknev");

        this.leiras=this.elem.children(".leiras");
        this.ar=this.elem.children(".ar");
        this.szerkesztes=this.elem.children(".szerkesztes");
        this.adat=adat;
        
       
    }
    setAdatok(ertekek){
        this.nev.html(ertekek.nev);
        this.kep.attr("src",ertekek.kep);
        this.leiras.html(ertekek.leiras);
        this.ar.html(ertekek.ar);
        this.szerkesztes.html(ertekek.szerkesztes);
    }
    
        
    
    
    
}

class TermekAdmin extends Termek{
    constructor(elem, adat){
        super(elem, adat);
        this.termekTorles = this.elem.children(".szerkesztes").children(".torles");
        this.termekModosit = this.elem.children(".szerkesztes").children(".modosit");
        
        this.kep=this.elem.children(".kep").children("img");
        this.setAdatok(this.adat);
        this.termekTorles.on("click", ()=>{//kattintás esemény kezelő
            //ÍSconsole.log(this);
            this.KattintasTorol();
        });
        this.termekModosit.on("click", ()=>{//kattintás esemény kezelő
            //console.log(this);
            this.KattintasModosit();
        });
    }
    KattintasTorol(){
        //let esemeny = new CustomEvent("torlesEsemeny",{detail:this.adat});
        console.log("törölve lett");
        //window.dispatchEvent(esemeny);
    }
    KattintasModosit(){
        //let esemeny = new CustomEvent("modositEsemeny",{detail:this.adat});
        console.log("módosítva lett");
        //window.dispatchEvent(esemeny);
    }
}

class TermekVasarlas extends Termek{
    constructor(elem, adat){
        super(elem, adat);
        this.termekKosarba = this.elem.children(".kosarba");
        this.kep=this.elem.children(".kep");
        this.setAdatok(this.adat);
        this.elem.on("click", ()=>{//kattintás esemény kezelő
            console.log(this);
            this.KattintasTrigger();
        });
    }

    KattintasTrigger(){
        let esemeny = new CustomEvent("kattintottGombEsemeny",{detail:this.adat});
        console.log(esemeny);
        window.dispatchEvent(esemeny);
    }
}