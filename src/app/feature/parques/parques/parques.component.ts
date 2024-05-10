import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.scss']
})
export class ParquesComponent {
  globalTexts: string[] = ['Diversos Destinos', 'Flexibilidad', 'Hermosos Lugares'];
  globalDescs: string[] = ['Te ayudamos a buscar el auto que necesitas para tu viaje', 'Nos adaptamos a tus planes y tus decisiones!', 'Te brindamos un servicio constante solo para vos'];
  globalIcons: string[] = ['ionCarSportOutline', 'ionCalendarOutline', 'ionOptionsOutline'];
  introParque = [
    {
      icon: '../../../../assets/logo/Parques-cards/disney-svgrepo-com.svg',
      title: 'Disney World',
      text: 'Vive la magia de Disney en su máxima expresión con nuestras opciones exclusivas. '
    },
    {
      icon: '../../../../assets/logo/Parques-cards/universal-3.svg',
      title: 'Universal Studios',
      text: 'Disfruta la aventura, descubre experiencias emocionantes y crea recuerdos inolvidables'
    },
    {
      icon: '../../../../assets/logo/Parques-cards/ferris-wheel_5528036.png',
      title: 'Otros parques temáticos',
      text: 'Tenemos otros parques increíbles para tí. ¡Descúbrelos!'
    },
  ]
  beneficios = [
    {
      icon: 'ionBusinessOutline',
      title: 'Hospedaje',
      text: 'Nosotros te ayudaremos a encontrar el mejor hospedaje.'
    },
    {
      icon: 'ionReaderOutline',
      title: 'Planes perfectos',
      text: 'Podrás disfrutar de cualquier parque.'
    },
    {
      icon: 'ionStarOutline',
      title: 'Comodidad',
      text: 'Con Double G te llevamos y traemos a cada uno de los parques.'
    },
  ]

  currentSection: string = '';
  activeSection: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.changeBackground();
  }

  selectFunction(): void {
    const bitrix24Html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Double-G Contactanos</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: rgb(238, 238, 254);
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            max-height:100%;
            margin: 0 auto;
          }
          
          .b24-form {
            box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
            max-height:100%;
            margin:5px;
          }

          .b24-form-wrapper.b24-form-border-bottom {
            border-bottom: 5px solid var(--b24-primary-color);
            border-radius: 8px;
          }

          @media only screen and (min-width: 900px) {
            .form-container {
              max-width: 60%;
            }
          }

          @media only screen and (min-width: 600px) {
            .form-container {
              max-width: 70%;
            }
          }

          
        </style>
      </head>
      <body>
      <script data-b24-form="inline/40/6izg3p" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn.bitrix24.es/b23099479/crm/form/loader_40.js');</script>
      
      </body>
      </html>
    `;

    
    const blob = new Blob([bitrix24Html], { type: 'text/html' });

    
    const blobUrl = URL.createObjectURL(blob);

    
    const popupWindow = window.open(blobUrl, '_blank');

    if (!popupWindow) {
      console.error('No se pudo abrir la nueva ventana o pestaña.');
    }
  }

  botonHotelesFunction(){
    window.open('https://api.whatsapp.com/send/?phone=19546218999&text=Hola%21+Me+gustaría+conocer+las+ofertas+y+packs+de+los+hoteles+temáticos&type=phone_number&app_absent=0', '_blank')
  }

  changeBackground() {
    const sections = this.getSectionsInfo();

    for (const section of sections) {
      if (this.isSectionInView(section)) {
        this.currentSection = section.id;
        this.activeSection = this.currentSection;
        return;
      }
    }

    this.currentSection = 'disney-section';
    this.activeSection = this.currentSection;
  }

  getSectionsInfo(): { id: string; top: number; height: number }[] {
    const sections = ['disney-section', 'universal-section', 'otros-parques-section'];
    return sections.map(id => {
      const element = document.getElementById(id) as HTMLElement | null;
      return {
        id,
        top: element?.offsetTop || 0,
        height: element?.offsetHeight || 0
      };
    });
  }

  isSectionInView(section: { top: number; height: number }): boolean {
    const clientHeight = document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;

    return (
      scrollPosition > section.top - clientHeight / 2 &&
      scrollPosition < section.top + section.height / 2
    );
  }

}
