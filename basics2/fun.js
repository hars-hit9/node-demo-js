function show(...num){
    console.log(num);
}

show(2,3,4,5);

function show2({
    name="hp",
    id=21
}){
    console.log(name);
    console.log(id);
}
show2({});

const abc=(num)=>{
    console.log(this)
    return num+2;
}
abc(5);

const ab=function(num){
    console.log(this)
    return num+2;
}
ab(5);