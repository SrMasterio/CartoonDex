import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token } from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {  // Implementa OnInit en la clase

  constructor() {}

  ngOnInit() {
    console.log('Initializing HomePage');

    // Solicitar permiso para usar notificaciones push
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        // Registrar con Apple / Google para recibir push vía APNS/FCM
        PushNotifications.register();
      } else {
        // Muestra algún mensaje de error si no se otorgó el permiso
      }
    });

    // En éxito, se deberían poder recibir notificaciones
    PushNotifications.addListener('registration', (token: Token) => {
      alert('Push registration success, token: ' + token.value);
    });

    // Si hay algún problema con la configuración y push no funcionará
    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    // Muestra el payload de la notificación si la app está abierta en el dispositivo
    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
      alert('Push received: ' + JSON.stringify(notification));
    });

    // Método llamado al hacer clic en una notificación
    PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
      alert('Push action performed: ' + JSON.stringify(notification));
    });
  }
}
