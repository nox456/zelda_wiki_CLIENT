import HOST from "../../config.js"
const endpoint = HOST + "races"

export default class Race {
    static async getAll() {
        const res = await fetch(`${endpoint}/`)
        const { data } = await res.json()
        
        data.forEach(race => {
            race["img"] = `${HOST}/images/${race["img"]}`
        })
        return data
    }
    static async getByName(name) {
        const res = await fetch(`${endpoint}/name/${name}`)
        const { data } = await res.json()

        data.forEach(race => {
            race["img"] = `${HOST}/images/${race["img"]}`
        })
        return data
    }
    static async getByGame(game) {
        const res1 = await fetch(`${HOST}games/name/${game}`)
        const games = await res1.json()
        const res2 = await fetch(`${endpoint}/game/${games.data[0].id}`)
        const { data } = await res2.json()

        data.forEach(race => {
            race["img"] = `${HOST}/images/${race["img"]}`
        })
        return data
    }
    static async getById(id) {
        const res = await fetch(`${endpoint}/${id}`)
        const { data } = await res.json()

        data["img"] = `${HOST}/images/${data["img"]}`

        return data
    }
}
