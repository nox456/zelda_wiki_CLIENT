import HOST from "../../config.js"
const endpoint = `${HOST}/enemies`

export default class Enemie {
    static async getAll() {
        const res = await fetch(`${endpoint}/`)
        const { data } = await res.json()
        data.forEach(enemie => {
            enemie["img"] = `${HOST}/images/${enemie["img"]}`
        })
        return data
    }
    static async getByName(name) {
        const res = await fetch(`${endpoint}/name/${name}`)
        const data = await res.json()
        data.forEach(enemie => {
            enemie["img"] = `${HOST}/images/${enemie["img"]}`
        })
        return data
    }
    static async getByCategory(category) {
        const res = await fetch(`${endpoint}/category/${category}`)
        const data = await res.json()
        
        data.forEach(enemie => {
            enemie["img"] = `${HOST}/images/${enemie["img"]}`
        })
        return data
    }
    static async getByGame(game) {
        const res1 = await fetch(`${HOST}/games/name/${game}`)
        const games = await res1.json()
        const res2 = await fetch(`${endpoint}/game/${games.data[0].id}`)
        const data = await res2.json()

        data.forEach(enemie => {
            enemie["img"] = `${HOST}/images/${enemie["img"]}`
        })
        return data
    }
}
