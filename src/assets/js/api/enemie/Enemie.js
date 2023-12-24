import HOST from "../../config.js";
const endpoint = `${HOST}/enemies`;

export default class Enemie {
    static async getAll() {
        const res = await fetch(`${endpoint}/`);
        const { data, tableName } = await res.json();
        data.forEach((enemie) => {
            enemie["img"] = `${HOST}/images/${enemie["img"]}`;
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
            data.forEach((enemie) => {
                enemie["img"] = `${HOST}/images/${enemie["img"]}`;
            });
            return { data, tableName };
        }
    }
    static async getByCategory(category) {
        const res = await fetch(`${endpoint}/category/${category}`);
        const { data, tableName } = await res.json();

        data.forEach((enemie) => {
            enemie["img"] = `${HOST}/images/${enemie["img"]}`;
        });
        return { data, tableName };
    }
    static async getByGame(game) {
        const res = await fetch(`${endpoint}/game/name/${game}`);
        if (res.status == 404) {
            const { message, query } = await res.json();
            return { message, query };
        } else {
            const { data, tableName } = await res.json();

            data.forEach((enemie) => {
                enemie["img"] = `${HOST}/images/${enemie["img"]}`;
            });
            return { data, tableName };
        }
    }
    static async getById(id) {
        const res = await fetch(`${endpoint}/${id}`);
        const { data } = await res.json();

        data["img"] = `${HOST}/images/${data["img"]}`;

        return data;
    }
}
