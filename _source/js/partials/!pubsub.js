// // Event handler for modules
//
// var events = {
//     events: {},
//     // Adds event to the list
//     on: function (eventName, fn) {
//         this.events[eventName] = this.events[eventName] || [];
//         this.events[eventName].push(fn);
//     },
//     // Removes event from the list
//     off: function(eventName, fn) {
//         if (this.events[eventName]) {
//             for (var i = 0; i < this.events[eventName].length; i++) {
//                 if (this.events[eventName][i] === fn) {
//                     this.events[eventName].splice(i, 1);
//                     break;
//                 }
//             };
//         }
//     },
//     // Searched events list for function and executes it
//     emit: function (eventName, data) {
//         if (this.events[eventName]) {
//             this.events[eventName].forEach(function(fn) {
//                 fn(data);
//             });
//         }
//     }
// };
