import {Page, NavParams} from 'ionic-angular';
import {Markdown} from '../../pipes/pipes'
@Page({
  templateUrl: 'build/pages/speaker-detail/speaker-detail.html',
  pipes: [Markdown]
})
export class SpeakerDetailPage {
  person
  constructor(
    public params: NavParams
    ) {
    this.person = this.params.get('speaker')
  }
}
