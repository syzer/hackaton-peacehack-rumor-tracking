import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    //TODO socket sync updates for given room
    $scope.messages = [];

    // for sliding menu
    $scope.checked = false;
    $scope.size = '100px';
    $scope.toggle = function () {
      $scope.checked = !$scope.checked
    }
    $scope.mockRouteChange = function () {
      $scope.$broadcast('$locationChangeStart');
    }

  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });


    // TODO from server
    this.rooms = [
      {
        name: 'issueNoMore',
        headline: 'no more issues',
        description: 't is a long established fact that its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of le',
        img: 'https://pbs.twimg.com/media/BqyHXLkCQAEE2hf.jpg'
      },
      {
        name: 'allGood',
        headline: 'space doge',
        description: 'a reader will be distracted by the readable content of a page when looking at  web page editors now use Lorem Ipsum as their default model text, and a search for  w',
        img: 'http://3.bp.blogspot.com/-QqheUg055tQ/Uf8wD31JGgI/AAAAAAAAMeI/ofX2pHN2SNA/s1600/4063_o_laika.jpg'
      },
      {
        name: 'rainbowDoge',
        headline: 'dogs are rainbow',
        description: 'tters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages andill uncover many web sites still in their infancy. ',
        img: 'https://s-media-cache-ak0.pinimg.com/564x/41/22/b8/4122b85abfaaf6b2b607dda5fe4d4d23.jpg'
      },
    ]
  }

  setFalseRumor(room) {
    alert(`TODO ${room.name}`)
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

export default angular.module('hackatonPeacehackRumorTrackingApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
