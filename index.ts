import { Observable, of, from, fromEvent, concat } from "rxjs";
import { ajax } from "rxjs/ajax";
import { allBooks, allReaders } from "./data";

// let allBooksObservable$ = Observable.create(subscriber => {
//   if (document.title !== "RxBookTracker") {
//     subscriber.error("Incorrect Page Title");
//   }
//   for (let book of allBooks) {
//     subscriber.next(book);
//   }

//   setTimeout(() => {
//     subscriber.complete();
//   }, 3000);
//   return () => {
//     console.log("Executing Tear down code");
//   };
// });

// allBooksObservable$.subscribe(book => console.log(book.title));

// let source1$ = of("Hi", 10, true, allReaders[0].name);
// // source1$.subscribe(value => {
// //   console.log(value);
// // });

// let source2$ = from(allBooks);
// //source2$.subscribe(book => console.log(book.title));

// concat(source1$, source2$).subscribe(value => console.log(value));

// let button1 = document.getElementById("readersButton");

// const clicks = fromEvent(button1, "click");

// clicks.subscribe(event => {
//   console.log(event);
//   let readersDiv = document.getElementById("readers");
//   for (let reader of allReaders) {
//     readersDiv.innerHTML += reader.name + "<br>";
//   }
// });

let button1 = document.getElementById("readersButton");

const clicks = fromEvent(button1, "click");

clicks.subscribe(event => {
  ajax("/api/readers").subscribe(ajaxResponse => {
    console.log(ajaxResponse);
    let readers = ajaxResponse.response;
    let readersDiv = document.getElementById("readers");
    for (let reader of readers) {
      readersDiv.innerHTML += reader.name + "<br>";
    }
  });
});
