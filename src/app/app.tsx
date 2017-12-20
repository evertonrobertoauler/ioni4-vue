import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class AppComponent extends Vue {
  public render(h) {
    return <router-view></router-view>;
  }
}
