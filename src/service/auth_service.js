import firebase from 'firebase';
import firebaseApp from './firebase';


class AuthService {
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged){
    //사용자가 바뀔때마다 전달받는 user 정보를 전달받은 함수에 적용
    firebase.auth().onAuthStateChanged(user=>{
      onUserChanged(user);
    })
  }
  logout(){
    firebase.auth().signOut();
  }
}


export default AuthService;