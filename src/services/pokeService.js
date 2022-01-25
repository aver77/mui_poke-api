import axios from 'axios';

class PokeService {
    _apiBase = 'https://pokeapi.co/api/v2/';

    async getResource(link) {
        const res = await axios.get(`${this._apiBase}${link}`);

        if (!res.ok) {
            throw new Error(`Couldn't get ${this._apiBase}${link}, recieved: ${res.status}`);
        }

        return await res.json();
    }

    async getTenPokeList() {
        return await this.getResource('pokemon?limit=10');
    }

    async getPokeInfoByName(name) {
        return await this.getResource(`pokemon/${name}`);
    }
}

export default PokeService;