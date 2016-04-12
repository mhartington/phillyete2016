import {App, Platform, } from 'ionic-angular';
import {TabsPage} from './pages/tabs/tabs';
import {Data} from './providers/data/data'
import {StatusBar, Splashscreen, Keyboard} from 'ionic-native';

@App({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [Data],
  config: {
    ios: {
      activator: 'none'
    }
  }
})
export class MyApp {
  rootPage: any = TabsPage;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      Keyboard.disableScroll(true);
      if (platform.is('ios')) {
        StatusBar.styleLightContent()
      } else if (platform.is('android')) {
        StatusBar.backgroundColorByHexString('#3e617d')
      }
      Splashscreen.hide();
    });
  }
}
