
export default class Storage {
    static getAllTransaction() {
        const localTrx = JSON.parse(localStorage.getItem("transaction")) || [];
        return localTrx;
    }
    static savedTrxLocal(listTrx) {
        localStorage.setItem("transaction", JSON.stringify(listTrx));
    }
}