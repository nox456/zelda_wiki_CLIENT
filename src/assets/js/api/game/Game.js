import HOST from "../../config.js"
const endpoint = HOST + "games/"

export default class Game {
    static async getAll() {
        const res = await fetch(endpoint)
        const { data } = await res.json()
        data.forEach(game => {
            game["img"] = HOST + "images/" + game["img"]
        })
        return data
    }
    static async getByName(name) {
        const res = await fetch(endpoint + `name/${name}`)
        const { data } = await res.json()
        data.forEach(game => {
            game["img"] = HOST + "images/" + game["img"]
        })
        return data
    }
    static async getByConsole(console) {
        const res1 = await fetch(HOST + `consoles/name/${console}`)
        const { data } = await res1.json()
        const res2 = await fetch(endpoint + `console/${data[0].id}`)
        const games = await res2.json()
        games.data.forEach(game => {
            game["img"] = HOST + "images/" + game["img"]
        })
        return games.data
    }
}
