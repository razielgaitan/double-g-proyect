import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit{
  isMenuOpen: boolean = false;
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenWidth();
    window.addEventListener('resize', () => {
      this.checkScreenWidth();
    });
  }
  openBitrix24Popup(): void {
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
      <script data-b24-form="inline/34/m7faax" data-skip-moving="true">
      (function(w,d,u){
      var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.es/b23099479/crm/form/loader_34.js');
      </script>
      
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


  checkScreenWidth() {
    this.isMobile = window.innerWidth < 990;
    if (!this.isMobile) {
      this.isMenuOpen = false; 
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const toggleButton = document.querySelector('.navbar-toggler');

    if (window.innerWidth > 990) { 
      navbarCollapse?.classList.remove('show');
    } 
    
  }
}
