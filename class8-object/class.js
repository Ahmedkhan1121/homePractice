//Object
// Pair of key and value is object
var ourObj = {
    name: "Ashar",
    rollNo: 420,
    school: "crescent grammar school",
    address: "DHA Pahse 04",
    subject: ["English", "Urdu", "Math"],
    callStud: function () {
        console.log("Student Name is ".concat(this.name, "."));
    },
};
console.log(ourObj);
ourObj.callStud();
var student = {
    name: 'moiz',
    rollN0: 12,
    startTiming: 7,
    EndTiming: 12,
    isAvalible: function () {
        if (this.startTiming < this.EndTiming) {
            console.log("moiz in the school ");
        }
        if (this.EndTiming > 12 && this.startTiming < 8) {
            console.log("moiz ke chute hugai he");
        }
    }
};
console.log(student);
student.isAvalible();
