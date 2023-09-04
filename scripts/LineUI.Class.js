// export class Router {
//   constructor() {
//     if (typeof Proxy === undefined || typeof Proxy != 'function') {
//       console.error('Proxy is not supported, please use modern browser.');
//       return undefined;
//     }

//     return new Proxy(location, {
//       set(target, p, newValue, receiver) {
//         target.hash = newValue;
//         return true;
//       },

//       get(target, p, receiver) {
//         return target.hash;
//       }
//     })
//   }
// }

export class Router {
  constructor() {
    window.addEventListener("hashchange", function (ev) {
      console.log(ev);
    });
  }
}

export class EventManager {
  constructor() {
    this.handleEvent = {};
  }

  /**
   * subscribe a callback.
   * @param {String} type event's name
   * @param {Function} callback callback
   */
  subscribe(type, callback) {
    if (!this.handleEvent[type]) {
      this.handleEvent[type] = [];
    }

    this.handleEvent[type].push(callback);
  }

  /**
   * publish a signal.
   * @param {String} type event's name
   * @param  {...any} argv arguments to callback
   */
  publish(type, ...argv) {
    if (this.handleEvent[type]) {
      this.handleEvent[type].forEach((callback) => {
        callback(...argv);
      });
    }
  }

  /**
   * unsubscribe a callback.
   * @param {String} type event's name
   * @param {Function} callback callback
   */
  unsubscribe(type, callback) {
    const callbacks = this.handleEvent[type];
    const index = callbacks.indexOf(callback);

    if (index !== -1) {
      callbacks.splice(index, 1);
    }

    if (callbacks.length) {
      delete this.handleEvent[type];
    }
  }

  unsubscribeAll(type) {
    if (this.handleEvent[type]) {
      delete this.handleEvent[type];
    }
  }
}
