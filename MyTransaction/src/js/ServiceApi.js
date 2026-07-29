
const appService = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
});

export async function getTransactions() {
    const { data } = await appService.get("/transactions");
    return data;
}