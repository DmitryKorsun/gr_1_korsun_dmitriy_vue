let list = window.localStorage.getItem('list');
let watched = window.localStorage.getItem('watched');
export default {
    state: {
        list: list ? JSON.parse(list) : [],
        watched: watched ? JSON.parse(watched) : [],
    },
    mutations: {
        addToFavoriteList(state, movie) {
            let doMovie = state.list.find(current => current.imdbID == movie.imdbID)
            if (!doMovie) {
                let conf = confirm('Добавить в избранное?')
                if (conf == true) {
                    state.list.push(movie)
                    alert('Добавлено в избранное');
                    this.commit('saveData')
                } else {
                    alert('Добавление отменино')
                }
            } else {
                alert('Уже в избранном')
            }

        },
        saveData(state) {
            window.localStorage.setItem('list', JSON.stringify(state.list))
        },
        removeDate(state, movie) {
            let indexMovie = state.list.indexOf(movie)
            let conf = confirm('Вы точно хотите удалить?')
            if (conf == true) {
                state.list.splice(indexMovie, 1)
                this.commit('saveData')
            } else {
                alert('Удаление отменено')
            }
        },
        watchedMovie(state, movieID) {
            let watched = state.watched.find(current => current.imdbID == movieID.imdbID)
            if (!watched) {
                state.watched.push(movieID)
                alert('Помечено как просмотренное');
            }
            this.commit('markerwatchedMovie')
        },
        markerwatchedMovie(state) {
            window.localStorage.setItem('watchedMovie', JSON.stringify(state.watched))
        }
    }
}