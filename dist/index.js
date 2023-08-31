export var someGlobalState;
console.log("this is effect");
export default class {
    init(arg) {
        console.log("initializing plugin01");
        someGlobalState = arg;
    }
    install() {
        console.log("installing plugin01:", someGlobalState);
    }
    uninstall() {
        console.log("uninstalling plugin01:", someGlobalState);
    }
}
