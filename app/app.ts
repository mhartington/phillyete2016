import {App, Platform} from 'ionic-angular';
import {TabsPage} from './pages/tabs/tabs';
import {Data} from './providers/data/data'
import {StatusBar, Splashscreen} from 'ionic-native';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Data],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = TabsPage;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      if (platform.is('ios')) {
        StatusBar.styleLightContent()
      } else if (platform.is('android')) {
        StatusBar.backgroundColorByHexString('#3e617d')
      }
      Splashscreen.hide();
    });
  }
}
