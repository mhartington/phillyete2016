import {Page, NavController} from 'ionic-angular';
import {Data} from '../../providers/data/data'
import {SessionDetailPage} from '../session-detail/session-detail'
import {FilterArrayPipe, OrderByPipe, MomentPipe} from '../../pipes/pipes'

@Page({
  templateUrl: 'build/pages/schedule/schedule.html',
  pipes: [FilterArrayPipe, OrderByPipe, MomentPipe]
})

export class SchedulePage {
  public schedule;
  public searchQuery: String = '';
  constructor(
    public nav: NavController,
    public dataService: Data
  ) {
    this.getAllTalks();
  }

  getAllTalks() {
    this.dataService.getData().subscribe(
      data => this.schedule = data.sessions
    )
  }

  getTalk(talk) {
    this.nav.push(SessionDetailPage, {
      'session': talk
    })
  }
}
