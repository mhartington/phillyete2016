import {Injectable, Pipe} from 'angular2/core';
import * as marked from 'marked';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable()

@Pipe({ name: 'markdown' })
export class Markdown {
  transform(value, args) {
    value = value + '';
    return marked(value)
  }
}

@Pipe({ name: 'orderBy' })
export class OrderByPipe {
  transform(array, args) {
    return _.sortBy(array, args);
  }
}

@Pipe({ name: 'filter' })
export class FilterArrayPipe {
  transform(value, args) {
    if (!args[0]) {
      return value;
    } else if (value) {
      return value.filter(item => {
        for (let key in item) {
          if ((typeof item[key] === 'string' || item[key] instanceof String) &&
            (item[key].indexOf(args[0]) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}

@Pipe({ name: 'moment' })
export class MomentPipe {
  transform(value, args) {
    value = value + '';
    args = args + '';
    return moment(value).format(args)
  }
}

