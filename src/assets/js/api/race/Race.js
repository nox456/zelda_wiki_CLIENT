import HOST from "../../config.js";
const endpoint = `${HOST}/races`;

export default class Race {
    static async getAll() {
        const res = await fetch(`${endpoint}/`);
        const { data, tableName } = await res.json();

        data.forEach((race) => {
            race["img"] = `${HOST}/images/${race["img"]}`;
        });
        return { data, tableName };
    }
    static async getByName(name) {
        const res = await fetch(`${endpoint}/name/${name}`);
        if (res.status == 404) {
            const { message, query } = await res.json();
            return { message, query };
        } else {
            const { data, tableName } = await res.json();

            data.forEach((race) => {
                race["img"] = `${HOST}/images/${race["img"]}`;
            });
            return { data, tableName };
        }
    }
    static async getByGame(game) {
        const res1 = await fetch(`${endpoint}/game/name/${game}`);
        const { data, tableName } = await res1.json();

        data.forEach((race) => {
            race["img"] = `${HOST}/images/${race["img"]}`;
        });
        return { data, tableName };
    }
    static async getById(id) {
        const res = await fetch(`${endpoint}/${id}`);
        const { data } = await res.json();

        data["img"] = `${HOST}/images/${data["img"]}`;

        return data;
    }
}
