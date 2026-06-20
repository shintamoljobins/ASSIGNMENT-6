let english = Number(prompt("Enter marks for English: "));
let malayalam = Number(prompt("Enter marks for Malayalam:"));
let computer =  Number(prompt("Enter marks for Computer:"));
let mathematics=Number(prompt("Enter marks for Mathematics:"));
let biology= Number(prompt("Enter marks for Biology:"));
//total marks
let totalMarks = english + malayalam + computer + mathematics + biology;
//average marks
let averageMarks = totalMarks/5;

let grade
if (averageMarks >= 90){
    grade = "A+";
}else if (averageMarks >=80 && averageMarks <=89){
    grade = "A";
}else if (averageMarks >=70 && averageMarks <=79){
    grade = "B";
}else if (averageMarks >=60 && averageMarks <=69){
    grade = "C";
}else if (averageMarks >=50 && averageMarks <=59){
    grade = "D";
}else{
    grade = "F";
}
 
//display
alert("GRADE REPORT \n " +
"Total Marks: " + totalMarks + "\n"+
"Average Marks: " + averageMarks.toFixed(2) + "\n" +
"Assigned Grade: " + grade );

