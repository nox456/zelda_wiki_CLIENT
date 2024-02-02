import HOST from "../../config.js";
const endpoint = HOST + "/characters";

export default class Character {
    static async getAll() {
        const res = await fetch(endpoint);
        if (res.status == 500) {
            const { message } = await res.json();
            return { message, status: res.status }
        } else {
            const { data, tableName } = await res.json();
            data.forEach((character) => {
                character["img"] = `${HOST}/images/${character["img"]}`;
            });
            return { data, tableName, status: res.status };
        }
    }
    static async getByName(text) {
        const res = await fetch(`${endpoint}/name/${text}`);
        if (res.status == 404) {
            const { message, query } = await res.json();
            return { message, query, status: res.status };
        } else if (res.status == 500) {
            const { message } = await res.json()
            return { message, status: res.status }
        } else {
            const { data, tableName } = await res.json();
            data.forEach((character) => {
                character["img"] = `${HOST}/images/${character["img"]}`;
            });
            return { data, tableName, status: res.status };
        }
    }
    static async getByRace(race) {
        const res = await fetch(`${endpoint}/race/name/${race}`);
        if (res.status == 404) {
            const { message, query } = await res.json();
            return { message, query, status: res.status };
        } else if (res.status == 500) {
            const { message } = await res.json()
            return { message, status: res.status }
        } else {
            const characters = await res.json();
            characters.data.forEach((character) => {
                character["img"] = `${HOST}/images/${character["img"]}`;
            });
            return { data: characters.data, tableName: characters.tableName, status: res.status };
        }
    }
    static async getByGame(game) {
        const res = await fetch(`${endpoint}/game/name/${game}`);
        if (res.status == 404) {
            const { message, query } = await res.json();
            return { message, query, status: res.status };
        } if (res.status  == 500) {
            const { message } = await res.json()
            return { message, status: res.status }
        } else {
            const characters = await res.json();
            characters.data.forEach((character) => {
                character["img"] = `${HOST}/images/${character["img"]}`;
            });
            return { data: characters.data, tableName: characters.tableName, status: res.status };
        }
    }
    static async getById(id) {
        const res = await fetch(`${endpoint}/${id}`);
        const { data } = await res.json();

        data["img"] = `${HOST}/images/${data["img"]}`;

        return data;
    }
}
