import { Component, OnInit } from '@angular/core';
// import {  Observable} from 'rxjs';
import { from, interval, of, Subscription } from "rxjs";
import { map, merge, concat, tap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  subscription!: Subscription;

  ngOnInit(): void {
    // *create ==> Crea un observable.

    var sourse = from(
      [{
        name: "Juan",
        age: 25
      },
      {
        name: "Pedro",
        age: 30
      },]
    )

    // !from ==> Convierte un array en un observable y emite cada uno de los elementos del array.
    // sourse.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );

    // !of ==> Convierte cada uno de los elementos en un observable y emite cada uno de los elementos.
    var sourse2 = of(
      'a',
      'b',
      'c',
    )

    // sourse2.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );

    // !Interval ==> Emite un valor cada cierto tiempo.
    var sourse3 = interval(1000);

    // sourse3.subscribe(
    //   (value) => {
    //     console.log(value++); // *cada 8 segundos se emite un valor.
    //     if (value == 10) {
    //       // *stop the interval
    //       this.subscription.unsubscribe();
    //     }
    //   }
    // );

    // !map => transforma los datos que emite el observable.
    var source4 = interval(1000).pipe(map(x => 2 * x));

    // source4.subscribe(
    //   (value) => {
    //     console.log(value);
    //     // *cada segundo se emite un valor multiplicado por 2
    //     if (value == 100) {
    //       // *stop the interval
    //       this.subscription.unsubscribe();
    //     }
    //   }
    // );

    // !merge => combina varios observables en uno solo fudionando sus emisiones.
    var source5 = interval(1000);
    var source6 = interval(1000).pipe(map(x => 10 * x));
    var source7 = source5.pipe(merge(source6));

    // source7.subscribe(
    //   (value) => {
    //     console.log(value);
    //     // *cada segundo se emite un valor multiplicado por 10
    //     if (value == 100) {
    //       // *stop the interval
    //       this.subscription.unsubscribe();
    //     }
    //   }
    // );

    // !concat => combina varios observables en uno solo fudionando sus emisiones.
    var soure8 = of('a', 'b', 'c');
    var soure9 = of('d', 'e', 'f');
    var soure10 = soure8.pipe(concat(soure9));

    // soure10.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // )

    // !do => ejecuta una funcion cada vez que se emite un valor, pero no modifica el valor.
    var source11 = of('a', 'b', 'c').pipe(tap(x => console.log(x)));

    source11.subscribe(); // *==> se ejecuta la funcion tap cada vez que se emite un valor.
  }


}
