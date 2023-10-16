const HOST = "http://192.168.1.7:4000/"
const endpoint = HOST + "characters/"

export default class Character {
    static async getAll() {
        const res = await fetch(endpoint)
        const { data } = await res.json()
        data.forEach(character => {
            character["img"] = HOST + "images/" + character["img"]
        })
        return data
    }
    static async getByName(text) {
        const res = await fetch(endpoint + `name/${text}`)
        const { data } = await res.json()
        data.forEach(character => {
            character["img"] = HOST + "images/" + character["img"]
        })
        return data
    }
    static async getByRace(race) {
        const res1 = await fetch(HOST + `races/name/${race}`)
        const data1 = await res1.json()
        const races = data1.data
        const res2 = await fetch(endpoint + `race/${races[0].id}`)
        const characters = await res2.json()
        characters.data.forEach(character => {
            character["img"] = HOST + "images/" + character["img"]
        })
        return characters.data
    }
}
