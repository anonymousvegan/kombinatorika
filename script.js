let vrsta, ponavljanje, rezultat, n, k;
function izracunaj(){
vrsta = document.querySelector("#vrsta").value
ponavljanje = document.querySelector("#ponavljanje").value
k=parseInt(document.querySelector("#k").value)
n=parseInt(document.querySelector("#n").value)
if(ponavljanje==="sa"){sa();}else{bez()}
document.querySelector("#rezultat").innerHTML=rezultat;
}
function sa(){
    switch (vrsta) {
        case "kombinacija":
            rezultat=fakt(n+k-1) / (fakt(k)*fakt(n-1))
            break;
        case "permutacija":
            rezultat=fakt(n)/fakt(k)
            break
        case "varijacija":
            rezultat = Math.pow(n,k);
    }
}
function bez(){
    switch (vrsta) {
        case "kombinacija":
            rezultat=varijacija(n, k) / fakt(k);
            break;
        case "permutacija":
            rezultat= fakt(n);
            break
        case "varijacija":
            rezultat = varijacija(n,k);
            break
    }
}
function fakt(broj){
    if(broj==0) return 1
    return (broj * fakt(broj - 1));
}
function varijacija(n, k){
    rezultat=n;
    for(i=n-1; i>=n-k+1; i--){
        rezultat*=i;
    }
    return rezultat;
}