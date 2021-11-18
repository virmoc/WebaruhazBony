$(function () {
        let aktIndex=0;
        const termekek = [
            {
                "nev": "Csodás tájkép",
                "leiras": "Tükröződő fák egy kis tó partján a Duna mentén.",
                "ar": 20000,
                "kep": "kepek/kep1.jpg"
            },
            {
                "nev": "Tiszai gát",
                "leiras": "Poroszló menti Tisza töltés viharos időben.",
                "ar": 10000,
                "kep": "kepek/kep2.jpg"
            },
            {
                "nev": "Börzsöny",
                "leiras": "Kilátás a fák mögül a szemközti hegyoldalra. Hollókő.",
                "ar": 2300,
                "kep": "kepek/kep3.jpg"
            },
            {
                "nev": "Pléska-szikla felé",
                "leiras": "Úton a Pléska-szikla felé az őszi erdőben.",
                "ar": 22000,
                "kep": "kepek/kep4.jpg"
            },
            {
                "nev": "Viadukt",
                "leiras": "Biatorbágyi viadukt a fák között.",
                "ar": 2300,
                "kep": "kepek/kep5.jpg"
            },
            {
                "nev": "Régi présház",
                "leiras": "Elhagyott présház Biatorbágy fölött.",
                "ar": 3000,
                "kep": "kepek/kep6.jpg"
            },
            {
                "nev": "Nyakas-kő",
                "leiras": "Innnen ugratta Ördög nevű lovát a mélybe Sándor Móricz gróf.",
                "ar": 23000,
               "kep": "kepek/kep7.jpg"
            }
         
        ];
        
        const SzuloElem=$(".termekek");
        let sablonElem=$(".termek");

        termekek.forEach(function(elem, index){
            let ujElem=sablonElem.clone().appendTo(SzuloElem);
            const ujTermek=new TermekVasarlas(ujElem,elem, index);
        });

        

        sablonElem.remove();
        //const kosarSzuloElem=$("#kosar");
        //let ujElem=sablonElem.clone().appendTo(kosarSzuloElem);
        //const ujTermek=new Termek(ujElem,termekek[0]);
    
    const kosar = new Kosar();
    $(window).on("kattintottGombEsemeny", (esemeny)=>{
        console.log(esemeny.detail);
        kosar.setKosar(esemeny.detail);
    });
    
    
});
