import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GithubAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";

export default {
    namespaced: true,
    state() {
        return {
            email: '',
            uid: '',
            auth: ` `,
        }
    },
    getters: {
        /*        isAuth(state){
                    return state.uid !== ''
                }*/
    },
    mutations: {},
    actions: {
        getAuth() {
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
        login(context, data) {
            const auth = getAuth();
            return signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    context.state.uid = userCredential.user.uid;
                    return 'Ok'
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error(errorMessage)
                });
        },
        Sign(context, data) {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    context.state.uid = userCredential.user.uid;
                    return 'Ok'
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error(errorMessage)
                });
        },
        logaut(context) {
            context.state.uid = ''
            context.state.email = ''
        }
    },
}