import {Page, NavParams, NavController} from 'ionic-angular';
import {Data} from '../../providers/data/data'
import {SpeakerDetailPage} from '../speaker-detail/speaker-detail'
import {OrderByPipe, FilterArrayPipe} from '../../pipes/pipes'
import * as _ from 'lodash';

@Page({
  templateUrl: 'build/pages/speakers/speakers.html',
  pipes: [OrderByPipe, FilterArrayPipe]
})

export class SpeakersPage {
  speakers;
  searchQuery: String = '';
  constructor(
    public params: NavParams,
    public nav: NavController,
    public dataService: Data) {
    this.getSpeakers();
  }

  getSpeakers() {
    this.dataService.getData().subscribe(
      data => this.speakers = data.speakers
    )
  }

  speakerDeatail(speaker) {
    console.log(speaker)
    this.nav.push(SpeakerDetailPage, {
      'speaker': speaker
    })
  }

}
