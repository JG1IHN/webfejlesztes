document.getElementById("szamol").addEventListener("click", katt);
document.getElementById("plusz").addEventListener("click", plusz);
document.getElementById("minusz").addEventListener("click", minusz);

function plusz()
{
    const letszam=Number(document.getElementById("ember").value);
    if(letszam+1 == 11)
    {
        alert("A maximális létszám 10 fő!");
    }
    else{
        document.getElementById("ember").value++;
    }
}

function minusz()
{
    let letszam=document.getElementById("ember").value;
    if(letszam-1==0)
    {
        alert("Nem lehet 0 vagy annál kevesebb fő!");
    }
    else{
        document.getElementById("ember").value--;
    }
}

function katt() {
    let ossz=0;
    let osszegek="A végössszeg így tevődik össze:<br><br>";

    let indexek=[1,2,3,4,5,6];
    let repuloarak=[230000,848000,610000,180000,456000,556000]; //Európa, Dél-Amerika, Észak-Amerika, Ázsia, Afrika, Ausztrália
    let hegyarak=[10000000,12000000,8000000,9000000]; //Everest, k2, Kangchenjunga, Lhotse
    let hegyek=["Mount Everest", "K2", "Kangchenjunga", "Lhotse"];
   
    
    //Hegycsúcs választás
    if (document.getElementById("hegy").selectedIndex==0){
        alert("Nem választott hegycsúcsot!");
    }
    indexek
    for(i in indexek)
    {
        
        let egyeni=false
        let alap=false
        if (document.getElementById("hegy").selectedIndex==indexek[i]){
            ossz+=hegyarak[i];
            osszegek+=`A ${(hegyek[i])} hegy alapdíja: ${(hegyarak[i]).toLocaleString('hu-HU')}FT<br>`;
    
        }
    }
        if(document.getElementById("alaptabor").checked)//alaptabor
        {
            ossz=ossz/10;
            osszegek+=`Az alaptáborig tartó expedíció az alapdíj tizedébe fog kerülni: ${(ossz).toLocaleString('hu-HU')}FT<br>`;
        }
        if (document.getElementById("nem").checked){
            ossz=ossz*2;
            osszegek+=`Az egyéni mászás miatt a kiválasztott célig az eddigi díj kétszerese: ${(ossz).toLocaleString('hu-HU')}FT<br>`;
        }
    
    //felszerelés
    if (document.getElementById("felsz").checked){
        ossz+=100000;
        osszegek+=`A felszerelés 100 000FT<br>`;

    } 
    //Kontinens választás
    if (document.getElementById("kontinens").selectedIndex==0){
        alert("Nem választott kiinduló kontinenst");
        
    }
    for(i in indexek)
    {
        if (document.getElementById("kontinens").selectedIndex==indexek[i]){
            ossz+=repuloarak[i];
            osszegek+=`A repülőút: ${(repuloarak[i]).toLocaleString('hu-HU')}FT<br>`;
            
        }
    }
    //letszam
    let letszam=document.getElementById("ember").value;
        ossz=ossz*letszam; 
        osszegek+=`A létszám: ${letszam}<br>`;
            
    //Kiir
    document.getElementById("osszegek").innerHTML=osszegek
    document.getElementById("vege").innerHTML=`Végösszeg: ${ossz.toLocaleString('hu-HU')} FT(forint) ≈ ${(ossz / 390).toFixed(0)} $(dollár)`
}
