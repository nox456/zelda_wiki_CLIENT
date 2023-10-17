const HOST = "http://192.168.1.7:4000/"
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
}
