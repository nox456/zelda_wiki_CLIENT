import HOST from "../../config.js";

const endpoint = HOST + "consoles";

export default class Console {
    static async getAll() {
        const res1 = await fetch(`${endpoint}/`);
        const { data, tableName } = await res1.json();
        data.forEach((console) => {
            console["img"] = `${HOST}images/${console["img"]}`;
        });
        return { data, tableName };
    }
    static async getByName(name) {
        const res = await fetch(`${endpoint}/name/${name}`);
        const { data, tableName } = await res.json();
        data.forEach((console) => {
            console["img"] = `${HOST}images/${console["img"]}`;
        });
        return { data, tableName };
    }
}
