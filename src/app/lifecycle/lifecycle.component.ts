import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ViewChild
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent
implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() entrada: string;
  @ViewChild('view') view: any;

  constructor() {
    console.log('#1 - constructor');
  }

  ngOnChanges(): void {
    console.log('#2 - ngOnChange'); // Ejecuta cambios de input
  }

  ngOnInit(): void {
    console.log('#3 - ngOnInit'); // Inicializa el contenido del componente, sólo una vez
  }

  ngDoCheck(): void {
    console.log('#4 - ngDoCheck'); // Detecta cambios en el componente
  }

  /***********************/
  ngAfterContentInit(): void {
    console.log('#5 - ngAfterContentInit'); // Ejecuta al proyectar contenido
  }

  ngAfterContentChecked(): void {
    console.log('#6 - ngAfterContentChecked'); // Ejectua al confirmar el contenido proyectado
  }

  ngAfterViewInit(): void {
    console.log('#7 - ngAfterViewInit'); // Ejecuta al cargar las View y ViewChild
  }

  ngAfterViewChecked(): void {
    console.log('#8 - ngAfterViewCecked'); // Ejecuta al confirmar la carga de View y ViewChild
  }
  /***********************/

  ngOnDestroy(): void {
    console.log('#9 - ngOnDestroy'); // Ejecuta al destruir el componente
  }
}
