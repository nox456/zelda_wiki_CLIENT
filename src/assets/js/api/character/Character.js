import HOST from "../../config.js";
const endpoint = HOST + "/characters";

export default class Character {
    static async getAll() {
        const res = await fetch(endpoint);
        const { data, tableName } = await res.json();
        data.forEach((character) => {
            character["img"] = `${HOST}/images/${character["img"]}` 
        });
        return { data, tableName };
    }
    static async getByName(text) {
        const res = await fetch(`${endpoint}/name/${text}`);
        const { data, tableName } = await res.json();
        data.forEach((character) => {
            character["img"] = `${HOST}/images/${character["img"]}` 
        });
        return { data, tableName };
    }
    static async getByRace(race) {
        const res1 = await fetch(`${HOST}/races/name/${race}`);
        const data1 = await res1.json();
        const races = data1.data;
        const res2 = await fetch(`${endpoint}/race/${races[0].id}`);
        const characters = await res2.json();
        characters.data.forEach((character) => {
            character["img"] = `${HOST}/images/${character["img"]}` 
        });
        return { data: characters.data, tableName: characters.tableName };
    }
    static async getByGame(game) {
        const res1 = await fetch(`${HOST}/games/name/${game}`);
        const games = await res1.json();
        const res2 = await fetch(`${endpoint}/game/${games.data[0].id}`);
        const characters = await res2.json();
        characters.data.forEach((character) => {
            character["img"] = `${HOST}/images/${character["img"]}` 
        });
        return { data: characters.data, tableName: characters.tableName };
    }
    static async getById(id) {
        const res = await fetch(`${endpoint}/${id}`)
        const { data } = await res.json()

        data["img"] = `${HOST}/images/${data["img"]}`

        return data
    }
}
