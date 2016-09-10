'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('hackatonPeacehackRumorTrackingApp.util', [])
  .factory('Util', UtilService)
  .name;
