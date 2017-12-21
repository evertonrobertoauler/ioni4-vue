import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class HomeComponent extends Vue {

  public text = 'Lorem ipsum!';

  public alertCtrl: HTMLIonAlertControllerElement;

  public mounted() {
    this.alertCtrl = this.$refs.alertCtrl as HTMLIonAlertControllerElement;
  }

  public showAlert() {
    this.alertCtrl
      .create({
        title: 'Alert',
        message: 'Lorem Ipsum!',
        buttons: ['close']
      })
      .then(alert => alert.present())
  }

  public render(h) {
    return (
      <ion-app>
        <ion-page>
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>
                Home Page
              </ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-list-header v-show={this.text}>{this.text}</ion-list-header>
              <ion-item>
                <ion-button color="secondary" size="large" onClick={() => this.$router.push('not-found-url')}>
                  Go to Not Found Page
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-button color="primary" size="large" onClick={() => this.showAlert()}>
                  Show Alert
                </ion-button>
                <ion-alert-controller ref="alertCtrl" />
              </ion-item>
              <ion-item>
                <ion-label stacked>Text Input</ion-label>
                <ion-input value={this.text} onInput={e => this.text = e.target.value} />
              </ion-item>
              <ion-list-header>Text letters</ion-list-header>
              {this.text.split('').map((l, i) => <ion-item key={i}>{l}</ion-item>)}
            </ion-list>
          </ion-content>
        </ion-page>
      </ion-app>
    );
  }
}
