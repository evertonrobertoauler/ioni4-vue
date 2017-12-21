import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class NotFoundComponent extends Vue {
  public render(h) {
    return (
      <ion-app>
        <ion-page>
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>
                Not Found
          </ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-item>
                <ion-button color="secondary" size="large" onClick={() => this.$router.push({ name: 'home' })}>
                  Go back to Home Page
                </ion-button>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-page>
      </ion-app>
    );
  }
}
