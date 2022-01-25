import PokeService from "../services/pokeService";

class ApiCalls {

    PS = new PokeService();

    pokeNames(errorHandler, loadingHandler, resultHandler) {
        this.PS.getTenPokeList()   
            .then(res => {
                const result = res.results
                resultHandler(result);
                errorHandler(false);
                loadingHandler(false);
            })
            .catch(() => {
                errorHandler(true);
                loadingHandler(false);
            })
    }

    pokeCharacteristics(name, errorHandler, loadingHandler, resultHandler) {
        this.PS.getPokeInfoByName(name)
            .then(res => {
                const reqRes = res;
                const result = {}
                result.height = reqRes.height;
                result.moves = reqRes.moves.length;
                result.id = reqRes.id;
                result.img = reqRes.sprites.front_shiny? reqRes.sprites.front_shiny : reqRes.sprites.front_default;
                result.attack = reqRes.stats[1].base_stat;
                resultHandler(result);
                errorHandler(false);
                loadingHandler(false);
            })
            .catch(() => {
                errorHandler(true);
                loadingHandler(false);
            })
    }



}
export default ApiCalls;