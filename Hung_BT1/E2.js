//## Return the Objects Keys and Values

function keysAndValues(objs) {
    let keys =[];
    let values = [];
    Object.keys(objs).sort().forEach(key => {
        keys.push(key);
        values.push(objs[key]);
    });
    let c = [keys,values];
    return c;
}


console.log(keysAndValues({ c: "Apple", a: "Microsoft", b: "Google" }));