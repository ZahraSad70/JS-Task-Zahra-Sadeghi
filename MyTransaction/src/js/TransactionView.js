import Storage from './Sotrage.js'
import { getTransactions } from "./ServiceApi.js"

const loadTrxBtn = document.getElementById("load-trx");
const listTrx = document.getElementById("list-trx");
const emptyTrx = document.querySelector(".empty-trx");
const colomnPrice = document.getElementById("sortPrice");
const colomnDate = document.getElementById("sortDate");
const searchInput = document.getElementById("search-trx");
const priceIcon = document.querySelector(".iconPrice");
const dateIcon = document.querySelector(".iconDate");
let isAscDesc = true;


class Transaction {
    constructor() {
        loadTrxBtn.addEventListener("click", (e) => this.loadTransaction(e));
        colomnDate.addEventListener("click", () => this.sortTransaction("date"));
        colomnPrice.addEventListener("click", () => this.sortTransaction("price"));
        searchInput.addEventListener("input", (e) => this.searchTransaction(e));
        const AllTransaction = [];

    }
    setOfLocal() {
        this.AllTransaction = Storage.getAllTransaction();
        this.createListTrx(this.AllTransaction);
    }

    async loadTransaction(e) {
        e.preventDefault();
        try {
            const data = await getTransactions();
            if (!data) throw new Error("connection error");
            this.AllTransaction = data;
            this.createListTrx(data);
            Storage.savedTrxLocal(data);
        } catch (error) {
            console.log(err.message);
        }
    }
    createListTrx(data) {
        let result = "";
        if (!data) return;
        data.forEach(item => {
            const classDeposit = item.type.includes("برداشت") ? "red" : "green";
            result += `  
            <tr>
            <td >
                ${item.id}
            </td>
            <td class="${classDeposit}">
                ${item.type}
            </td>
            <td>
                ${item.price.toLocaleString()}
            </td>

            <td>
                ${item.refId}
            </td>

            <td>
                ${new Date(item.date).toLocaleDateString("fa-IR")}
            </td>
            </tr>
`;
        });
        emptyTrx.classList.add("hidden");
        listTrx.innerHTML = result;

    }

    sortTransaction(optionSort, data) {
        console.log(optionSort);
        console.log(isAscDesc);
        const localData = Storage.getAllTransaction();
        switch (optionSort) {
            case "date":
                if (isAscDesc) {
                    const sortData = localData.sort((a, b) => {
                        return new Date(a.date) > new Date(b.date) ? -1 : 1;
                    });
                    this.createListTrx(sortData);
                } else {
                    const sortData = localData.sort((a, b) => {
                        return new Date(a.date) > new Date(b.date) ? 1 : -1;
                    });
                    this.createListTrx(sortData);
                }
                dateIcon.classList.toggle("rotate");
                isAscDesc = !isAscDesc;
                break;
            case "price":
                if (isAscDesc) {
                    const sortData = localData.sort((a, b) => {
                        return new Date(a.price) > new Date(b.price) ? -1 : 1;
                    });

                    this.createListTrx(sortData);
                } else {
                    const sortData = localData.sort((a, b) => {
                        return new Date(a.price) > new Date(b.price) ? 1 : -1;
                    });
                    this.createListTrx(sortData);
                }
                priceIcon.classList.toggle("rotate");
                isAscDesc = !isAscDesc;
                break;
        }

    }

    searchTransaction(e) {
        const value = e.target.value.trim().toLowerCase();
        const filterTransaction = this.AllTransaction.filter((p) => p.refId.toString().includes(value));
        this.createListTrx(filterTransaction);
    }
}

export default new Transaction();