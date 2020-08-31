import EmberRouter from '@ember/routing/router';
import config from 'ember-prac/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('product', {path: '/products'});
  this.route('chat', {path: '/chat-room'});
  this.route('index', {path: '/'})
});
