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
                const result = {}
                result.height = res.height;
                result.moves = res.moves.length;
                result.id = res.id;
                result.img = res.sprites.front_shiny? res.sprites.front_shiny : res.sprites.front_default;
                result.attack = res.stats[1].base_stat;
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