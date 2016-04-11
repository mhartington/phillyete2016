import {Page} from 'ionic-angular';
import {SchedulePage} from '../schedule/schedule';
import {SpeakersPage} from '../speakers/speakers';
import {VenuePage} from '../venue/venue';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakersPage;
  tab3Root: any = VenuePage;

  constructor() { }
}
