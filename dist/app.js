"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    someBusinessLogic() {
    }
}
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
if (s1 === s2) {
    console.log("Той самий об`єкт");
}
else {
    console.log("Щось не так, отримали різні об`єкти");
}
//# sourceMappingURL=app.js.map