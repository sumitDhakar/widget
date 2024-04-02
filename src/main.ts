import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MytestingwebComponent } from './app/mytestingweb/mytestingweb.component';
import { RohantestComponent } from './app/rohantest/rohantest.component';
import { ShowdropdownComponent } from './app/showdropdown/showdropdown.component';


(async () => {
  const app = await createApplication({
    providers: [],
  });

  const inputElement = createCustomElement(MytestingwebComponent, {
    injector: app.injector,
  });
  customElements.define('dbs1-input', inputElement);


  const mytestforwidget = createCustomElement(RohantestComponent, {
    injector: app.injector,
  });
  customElements.define('app-test', mytestforwidget);


  
  const showdatawidget = createCustomElement(ShowdropdownComponent, {
    injector: app.injector,
  });
  customElements.define('app-drop-down', showdatawidget);
})();
