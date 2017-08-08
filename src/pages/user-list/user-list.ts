import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserDetailPage} from '../user-detail/user-detail'
/**
 * Generated class for the UserListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

userArray = [{"name":"Mahathir Mohamad", 
"image":"https://pbs.twimg.com/profile_images/867104370118324224/S1KaciVz.jpg", 
"email":"mahathir@1malaysia.gov.my"},
{"name":"Najib Abd Razak", 
"image":"https://pbs.twimg.com/profile_images/526212687101820929/wmAKmxjb.jpeg", 
"email":"najib@1malaysia.gov.my"},
{"name":"Muhiyuddin Yasin", 
"image":"http://2.bp.blogspot.com/-96vRPRLa9cA/VgdoGdz_-XI/AAAAAAAAdyk/99EQ2kVMxxE/s1600/muhyiddin-yassin1-270613_358_269_100.jpg", 
"email":"muhiyuddin@1malaysia.gov.my"},
{"name":"Samy Vellu", 
"image":"http://kualalumpurpost.net/wp-content/uploads/2012/05/samy-velu.jpg", 
"email":"samy@1malaysia.gov.my"}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

  itemTapped(user){
  	this.navCtrl.push(UserDetailPage, {user:user});
  	
  }

}
