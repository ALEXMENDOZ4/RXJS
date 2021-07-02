import { Observable, Observer, Subscriber } from 'rxjs';

const  observer: Observer<any> = {
    next: valor => console.log("siguiente [next:]", valor),
    error: error => console.warn("error [obs]:", error),
    complete:() => console.info("completado [obs]")
}

const intervalo = new Observable<number>(subs => {

    let a: number = 0;

   const interval = setInterval(() => {
        a++;
        subs.next(a);
        console.log(a);
        
    },1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log("Intervalo destruido");
    }

});


const subs = intervalo.subscribe(observer);
const subs2 = intervalo.subscribe(observer);
const subs3 = intervalo.subscribe(observer);

subs.add(subs2)
    .add(subs3);

setTimeout(()=>{ 
    console.log("completado");

},3000)