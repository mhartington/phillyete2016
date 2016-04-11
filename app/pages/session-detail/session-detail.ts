import {Page, NavParams, NavController} from 'ionic-angular';
import {SpeakersPage} from '../speakers/speakers'
import {MomentPipe, Markdown} from '../../pipes/pipes'
import {SocialSharing, Camera} from 'ionic-native'
@Page({
  templateUrl: 'build/pages/session-detail/session-detail.html',
  pipes: [MomentPipe, Markdown]
})
export class SessionDetailPage {
  session;
  constructor(
    public params: NavParams,
    public nav: NavController) {
    this.session = params.get('session')
  }

  share() {
    let message = 'Attending ' + this.session.name + '. #PhillyETE';
    Camera.getPicture({
      quality: 100,
      saveToPhotoAlbum: true
    })
      .then((imgData) => {
        let photo = imgData;
        SocialSharing.shareViaTwitter(message, photo)
      })

  }
}
