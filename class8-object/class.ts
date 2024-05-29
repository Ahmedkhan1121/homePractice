//Object
// Pair of key and value is object

let ourObj = {
    name:"Ashar",
    rollNo:420,
    school:"crescent grammar school",
    address:"DHA Pahse 04",
    subject:["English","Urdu","Math"],
    callStud:function(){
        console.log(`Student Name is ${this.name}.`);
    },
};
console.log(ourObj);
ourObj.callStud();

let student={
    name: 'moiz',
    rollN0: 12,
    startTiming:  ,
    EndTiming:12, 
    isAvalible:function(){
        //let hour=new Date().getHours
        if(this.startTiming<this.EndTiming){
            console.log(`moiz in the school `);
        } if (this.EndTiming>12&& this.startTiming<){
            console.log(`moiz ke chute hugai he`);
        }
        //if(hour>12 === this.EndTiming<8)
    }
}
console.log(student);
student.isAvalible()