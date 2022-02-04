import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";

function isValid(token) {
    return token !== '';
}

export default {
    namespaced: true,
    state() {
        return {
            email: '',
            name: '',
            uid: '',
            auth: '',
        }
    },
    getters: {
        isAuth(state) {
            return isValid(state.uid)
        }
    },
    mutations: {
        setUser(state, data) {
            state.name = data.email
            state.uid = data.uid
        }
    },
    actions: {
        gitHubAuth() {
            const auth = getAuth();
            const provider = new GithubAuthProvider();
            provider.addScope('repo');
            return signInWithPopup(auth, provider)
                .then((result) => {
                    const credential = GithubAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    console.log(user, token)
                    this.state.user = result.user;
                }).catch((error) => {
                    console.log(error)
                });
        },
        LogauthGit() {
            const auth = getAuth();
            return signOut(auth).then(() => {
                alert('Вышли')
            }).catch((error) => {
                console.error(error)
            });
        },
        loginUser(context, data) {
            const auth = getAuth();
            return signInWithEmailAndPassword(auth, data.login, data.password)
                .then((userCredential) => {
                    console.log(userCredential);
                    context.state.name = userCredential.user.email
                    context.state.uid = userCredential.user.uid;
                    return 'Ok'
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error(errorMessage)
                    return 'error'
                });
        },
        Sign(context, data) {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, data.login, data.password)
                .then((userCredential) => {
                    context.state.name = userCredential.user.email
                    context.state.uid = userCredential.user.uid;
                    return 'Ok reg'
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error(errorMessage)
                });
        },
        logaut(context) {
            const auth = getAuth()
            signOut(auth).then(() => {
                context.state.uid = ''
                context.state.name = ''
                if (context.state.uid === '' || context.state.name === '') {
                    alert('Выход успешный')
                } else {
                    alert('Ошибка выхода')
                }
            })
        }
    },
}