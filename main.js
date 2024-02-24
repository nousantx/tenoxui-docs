var tenoxui = "tenoxui";
console.log(tenoxui);

function makeTenoxui(param) {
    if (typeof param === "string") {
        console.log("New String: ", param);
    } else if (typeof param === "number") {
        console.log("New Num", param);
    }
}

makeTenoxui(3);

const consope = {
    log: param => console.log(param),
    error: param => console.error(param)
};
consope.error(makeTenoxui("tenod"));
