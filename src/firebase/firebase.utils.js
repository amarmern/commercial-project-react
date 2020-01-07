import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSSsj-hqjj6qoyX8pH1u_IiLCI2MmH_Ls",
    authDomain: "crown-db-7a258.firebaseapp.com",
    databaseURL: "https://crown-db-7a258.firebaseio.com",
    projectId: "crown-db-7a258",
    storageBucket: "crown-db-7a258.appspot.com",
    messagingSenderId: "71693664310",
    appId: "1:71693664310:web:250e55bfb54942e51e1897",
    measurementId: "G-LMYSD8N0KN"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return; 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName ,email} = userAuth;
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName : encodeURI(title.toLowerCase()),
            id : doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})
}

/// for code for adding the collection items to firebase database...

// export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
//     const collectionRef = firestore.collection(collectionKey); 

//     const batch = firestore.batch();
//     objectToAdd.forEach(obj =>{
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef , obj);
//     });
//     return await batch.commit();
// }


firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();  

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
