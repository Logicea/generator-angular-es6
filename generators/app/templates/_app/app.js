'use strict';

import 'angular';
import 'angular-resource';
import 'angular-ui-router';
import mainModule from './modules/main/main';
import {Config, Run} from './config';
import {REST_ENDPOINT} from './constants';

// bootstrap the app
angular.module('<%= appName %>App',[
  'ui.router',
  'ngResource',
  mainModule.name
  ]
)
.config(Config)
.constant('REST_ENDPOINT', REST_ENDPOINT)
.run(Run);
