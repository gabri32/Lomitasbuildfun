import { Directive,Component, OnInit,ElementRef, Renderer2,HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentIndex: number = 1;
  faqs: { question: string, answer: string, isVisible: boolean }[] = [];
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {

    this.faqs = [
      {
        question: '¿Qué incluye el derecho de uso en CLUB LOMITAS?',
        answer: 'Las cabañas Tipo A están diseñadas para alojar de 2 a 4 personas, con una cama doble, un camarote, jacuzzi y balcón privado. Las cabañas Tipo B son más grandes, con capacidad para 4 a 8 personas, distribuidas en dos pisos con dos camas dobles, un camarote, jacuzzi y sauna.',
        isVisible: false
      },
      {
        question: '¿Cuál es la diferencia entre las cabañas Tipo A y Tipo B?',
        answer: 'Las cabañas Tipo A están diseñadas para alojar de 2 a 4 personas, con una cama doble, un camarote, jacuzzi y balcón privado. Las cabañas Tipo B son más grandes, con capacidad para 4 a 8 personas, distribuidas en dos pisos con dos camas dobles, un camarote, jacuzzi y sauna.',
        isVisible: false
      },
      {
        question: '¿Cómo puedo generar ingresos con mi inversión en CLUB LOMITAS?',
        answer: 'Las cabañas Tipo A están diseñadas para alojar de 2 a 4 personas, con una cama doble, un camarote, jacuzzi y balcón privado. Las cabañas Tipo B son más grandes, con capacidad para 4 a 8 personas, distribuidas en dos pisos con dos camas dobles, un camarote, jacuzzi y sauna.',
        isVisible: false
      },
      {
        question: '¿Qué sucede si no puedo usar mis días en un año determinado?',
        answer: 'Las cabañas Tipo A están diseñadas para alojar de 2 a 4 personas, con una cama doble, un camarote, jacuzzi y balcón privado. Las cabañas Tipo B son más grandes, con capacidad para 4 a 8 personas, distribuidas en dos pisos con dos camas dobles, un camarote, jacuzzi y sauna.',
        isVisible: false
      },  {
        question: '¿Es posible vender mi derecho de uso?',
        answer: 'Las cabañas Tipo A están diseñadas para alojar de 2 a 4 personas, con una cama doble, un camarote, jacuzzi y balcón privado. Las cabañas Tipo B son más grandes, con capacidad para 4 a 8 personas, distribuidas en dos pisos con dos camas dobles, un camarote, jacuzzi y sauna.',
        isVisible: false
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Las cabañas Tipo A están diseñadas para alojar de 2 a 4 personas, con una cama doble, un camarote, jacuzzi y balcón privado. Las cabañas Tipo B son más grandes, con capacidad para 4 a 8 personas, distribuidas en dos pisos con dos camas dobles, un camarote, jacuzzi y sauna.',
        isVisible: false
      },
      {
        question: '¿Qué tan segura es la inversión en CLUB LOMITAS?',
        answer: 'Las cabañas Tipo A están diseñadas para alojar de 2 a 4 personas, con una cama doble, un camarote, jacuzzi y balcón privado. Las cabañas Tipo B son más grandes, con capacidad para 4 a 8 personas, distribuidas en dos pisos con dos camas dobles, un camarote, jacuzzi y sauna.',
        isVisible: false
      },
    ];
  }
  plusDivs(n: number) {
    this.showDivs(this.currentIndex += n);
  }

  currentDiv(n: number) {
    this.showDivs(this.currentIndex = n);
  }

  showDivs(n: number) {
    const slides = this.el.nativeElement.querySelectorAll('.slide');
    const dots = this.el.nativeElement.querySelectorAll('.dot');
    const sliderContainer = this.el.nativeElement.querySelector('.slider-container');

    if (n > slides.length) {
      this.currentIndex = 1;
    } else if (n < 1) {
      this.currentIndex = slides.length;
    } else {
      this.currentIndex = n;
    }

    const offset = -((this.currentIndex - 1) * 100);
    this.renderer.setStyle(sliderContainer, 'transform', `translateX(${offset}%)`);

    dots.forEach((dot: HTMLElement) => {
      this.renderer.removeClass(dot, 'active');
    });

    this.renderer.addClass(dots[this.currentIndex - 1], 'active');
  }

  toggle(index: number) {
    this.faqs[index].isVisible = !this.faqs[index].isVisible; // Cambia el estado de visibilidad del FAQ específico
    console.log("Estado del FAQ item", index, ":", this.faqs[index].isVisible);
  }
form2(item:number){
  console.log("form2");
}


}
