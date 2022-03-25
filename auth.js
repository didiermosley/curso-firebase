const auth = firebase.auth();
const provider = new firebase.auth.GoogleAthProvider();

auth.languageCode = "es";

export async function login(){
    try{
        const resp =await auth.signInWithPopup(provider);
        console.log(resp);
        return resp.user;
    }catch(e){
        throw new Error(e);
    }
}

export function logout(){
    auth.signOut();
}