var movies=[];
function finishing(){
    var movie1=document.getElementById("movie_1").value;
    movies.push(movie1);
    document.getElementById("displaying").innerHTML=movies.toString();
    document.getElementById("show").style.display="inline-block";
}
function showing(){
var i=movies.join("<br>");
    document.getElementById("d2").innerHTML=i.toString();


}
function look(){
var s=document.getElementById("name_search").value ;
var c=0;
for(var j=0;j<movies.length;j++){
    if(s==movies[j]){
        c=c+1;
    }

}
document.getElementById("display").innerHTML="name found "+c+"times";
}