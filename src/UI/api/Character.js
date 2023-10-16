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
}
