//  Grade Scale (from the image)

//  Symbol	Mark Range
//   A	     90–100
//   B	     80–89
//   C	     70–79
//   D	     60–69
//   F	     0–59



var mark = prompt("Enter your mark to receive your grade");
if (mark >= 90) {
    alert("Congratulations! You obtained an A!");
}
else if (mark >= 80) {
    alert("Well done! You obtained a B!");
}
else if (mark >= 70) {
    alert("Not bad! You obtained a C");
}
else if (mark >= 60) {
    alert("Hmm... You obtained a D. Better luck next time");
}
else if (mark >= 0 && mark <= 59) {
    alert("Oh no! You can do better than obtaining an F");
}
else {
    alert("You've entered an invalid mark");
}