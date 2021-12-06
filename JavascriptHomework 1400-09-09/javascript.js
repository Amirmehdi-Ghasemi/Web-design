//JavaScript Can Change HTML Content
//JavaScript Can Change HTML Styles (CSS)
function ChangeText() {
    document.getElementById("text").innerText = "Paragraph text and color is changed by javascript";
    document.getElementById("text").style.color = "#ff0000";
}

//JavaScript Can Change HTML Attribute Values
var x = 1;
function NextPicture() {
    if (x!=3)
    x +=1;
    document.getElementById("picture").src='picture' + x + '.jpg';
}
function PreviousPicture() {
    if (x!=1)
    x -=1;
    document.getElementById("picture").src='picture' + x + '.jpg';
}

//JavaScript Can Hide HTML Elements
//JavaScript Can Show HTML Elements
var isHidden = 0;
function PictureDisplay(){
if (isHidden!=0){
    document.getElementById("picture").style.display = "inline";
    document.getElementById("DisplayButton").innerText = "Hide the picture";
    isHidden = 0;
}
else{
    document.getElementById("picture").style.display = "none";
    document.getElementById("DisplayButton").innerText = "Show the picture";
    isHidden = 1;
}
}