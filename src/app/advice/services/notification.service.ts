import { Injectable } from '@angular/core';
import {Notification} from "../model/notification";


@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  private notifications: Notification[] = [
    {
      id: 1,
      title: 'Nueva actualización',
      message: '¡La aplicación se ha actualizado!',
      date: new Date(),
      isRead: false,
    },
    {
      id: 2,
      title: 'Mensaje importante',
      message: 'Revisa el mensaje importante del administrador.',
      date: new Date(),
      isRead: false,
    },
    // Agrega más notificaciones según sea necesario
  ];

  getNotifications(): Notification[] {
    return this.notifications;
  }

  markAsRead(notification: Notification): void {
    notification.isRead = true;
    // Puedes agregar lógica adicional aquí, como enviar una solicitud al servidor para marcar como leída.
  }
}
