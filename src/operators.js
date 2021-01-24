import { interval, fromEvent } from 'rxjs';
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } from 'rxjs/operators';

fromEvent(document, 'click')
    .pipe(
        switchMap(event => {
            return interval(1000)
                .pipe(
                    tap(v => console.log('Tap: ', v)),
                    take(5),
                    reduce((acc, v) => acc + v, 0)
                );
        })
    )
    .subscribe( {
        next: v => console.log('Next: ', v),
        complete: () => console.log('Complete')
    });



// const stream$ = interval(1000)
//     .pipe(
//         // tap(v => console.log('Tap: ', v)), // for debug
//         // map(v => v * 3), // for transformation value
//         // filter(v => v% 2 === 0), // filtering
//         take(10), // limit stream
//         // takeLast(5), // takes n last stream elements
//         // takeWhile(v => v < 7), //till what condition stream has to work while
//         // scan((acc, v) => acc + v, 0), // acts like reduce
//         // reduce((acc, v) => acc + v, 0), // works with completed stream$
//     );
//
// stream$.subscribe({
//     next: v => console.log('Next: ', v),
//     complete: () => console.log('Complete')
// });