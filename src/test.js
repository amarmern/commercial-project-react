import firebase from 'firebase/app';

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('3T4cfznOARQNAepCbdqq').collection('cartItems').doc('L1PrdSYN03saFfMtbrCU');

firestore.doc('/users/3T4cfznOARQNAepCbdqq/cartItems/L1PrdSYN03saFfMtbrCU');

firestore.collection('/users/3T4cfznOARQNAepCbdqq/cartItems');

