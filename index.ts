import { Observable } from "rxjs";
import { allBooks } from "./data";

let allBooksObservable$ = Observable.create(subscriber => {
  if (document.title !== "RxBookTracker") {
    subscriber.error("Incorrect Page Title");
  }
  for (let book of allBooks) {
    subscriber.next(book);
  }

  setTimeout(() => {
    subscriber.complete();
  }, 3000);
  return () => {
    console.log("Executing Tear down code");
  };
});

allBooksObservable$.subscribe(book => console.log(book.title));
