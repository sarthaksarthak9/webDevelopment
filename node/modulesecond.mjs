// see the functionality of ES6 / ESM

export function simple(){
    console.log("simple is complex");
}

export function simple1(){
    console.log("simple1 is complex");
}

export function simple2(){
    console.log("simple2 is complex");
}

export default function simple3(){   //it will by default call simple3 if we don't provode {} while impoeting
    console.log("simple is complex");
}