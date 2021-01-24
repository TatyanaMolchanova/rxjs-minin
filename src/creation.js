import { of, from, Observable, fromEvent, range, timer, interval } from 'rxjs';
import { filter, map, take, scan } from 'rxjs/operators';

// const sub = interval(500).subscribe(v => console.log(v));
//
// setTimeout(() => {
//     sub.unsubscribe();
// }, 4000);
//
// timer(2500).subscribe(v => console.log(v));
//
//
// range(42, 10).subscribe(v => console.log(v));


fromEvent(document.querySelector('canvas'), 'mousemove').
    pipe(
       map(e => ({
           x: e.offsetX,
           y: e.offsetY,
           ctx: e.target.getContext('2d')
       }))
    ).
    subscribe(pos =>
        pos.ctx.fillRect(pos.x, pos.y, 2, 2)
    );

const clear$ = fromEvent(document.getElementById('clear'), 'click');

clear$.subscribe(() => {
    const canvas = document.querySelector('canvas')
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
});


// const stream$ = of(1, 2, 3, 4, 5, 6, 7);
// console.log('stream$', stream$);
// stream$.subscribe(val => {
//    console.log('Value', val);
// });

// const arr$ = from([1, 2, 3, 4]).pipe(
//     scan((acc, v) => acc.concat(v), [])
// );
// arr$.subscribe(val => console.log(val));

// const stream$ = new Observable(observer => {
//     observer.next('First value');
//
//     setTimeout(() => observer.next('After 1000 ms'), 1000);
//     // setTimeout(() => observer.complete(), 1500);
//     setTimeout(() => observer.error('Error something went wrong'), 2000);
//     setTimeout(() => observer.next('After 3000 ms'), 3000);
// });

// stream$.subscribe(
//     (val) => console.log('Value; ', val),
//     (err) => console.log('err', err),
//     () => console.log('complete')
// );

// stream$.subscribe({
//     next(val) {
//         console.log('Value is: ', val)
//     },
//     error(error) {
//         console.log('error', error)
//     },
//     complete() {
//         console.log('complete')
//     }
// });