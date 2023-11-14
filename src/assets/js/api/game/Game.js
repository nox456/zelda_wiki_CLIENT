import HOST from "../../config.js";
const endpoint = HOST + "games/";

export default class Game {
    static async getAll() {
        const res = await fetch(endpoint);
        const { data, tableName } = await res.json();
        data.forEach((game) => {
            game["img"] = HOST + "images/" + game["img"];
        });
        return { data, tableName };
    }
    static async getByName(name) {
        const res = await fetch(endpoint + `name/${name}`);
        let { data, tableName } = await res.json();
        data.forEach((game) => {
            game["img"] = HOST + "images/" + game["img"];
        });
        if (name == "The Legend of Zelda") {
            data = data.filter(gm => gm.name == name)
        }
        return { data, tableName };
    }
    static async getByConsole(console) {
        const res1 = await fetch(HOST + `consoles/name/${console}`);
        const { data } = await res1.json();
        const res2 = await fetch(endpoint + `console/${data[0].id}`);
        const games = await res2.json();
        games.data.forEach((game) => {
            game["img"] = HOST + "images/" + game["img"];
        });
        return { data: games.data, tableName: games.tableName };
    }
    static async getById(id) {
        const res = await fetch(`${endpoint}${id}`);
        const { data } = await res.json();
        data["img"] = `${HOST}images/${data["img"]}`
        return data
    }
}
