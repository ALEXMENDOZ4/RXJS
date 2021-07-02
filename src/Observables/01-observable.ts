import { Observable, Observer } from "rxjs";

const  observer: Observer<any> = {
    next: valor => console.log("siguiente [next:]", valor),
    error: error => console.warn("error [obs]:", error),
    complete:() => console.info("completado [obs]")
}

const obs = new Observable<string>(subs => {

    subs.next("hola");

    subs.next("mundo");

    /*const a = undefined;
    a.nombre = "alex";*/

    
    subs.next("hola 2");
    
    subs.next("mundo 2");
    
    subs.complete();

}); 

obs.subscribe(observer);

/*
obs.subscribe(
    valor => console.log("exito", valor),
    error => console.warn("error", error),
    () => console.info("completed")

);
*/