import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
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
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          
          @media only screen and (min-width: 600px) {
            .form-container {
              max-width: 70%;
            }
          }

          @media only screen and (min-width: 900px) {
            .form-container {
              max-width: 60%;
            }
          }
        </style>
      </head>
      <body>
        <script data-b24-form="inline/24/qtkzc4" data-skip-moving="true">
          (function (w, d, u) {
            var s = d.createElement('script');
            s.async = true;
            s.src = u + '?' + (Date.now() / 180000 | 0);
            var h = d.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
          })(window, document, 'https://cdn.bitrix24.es/b23099479/crm/form/loader_24.js');
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
  
}
