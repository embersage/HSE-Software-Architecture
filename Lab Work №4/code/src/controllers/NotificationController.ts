import { Request, Response } from 'express';
import Notification from '../database/models/Notification.js';
import AppDataSource from '../database/connection.js';

class NotificationController {
  static async getAll(req: Request, res: Response) {
    try {
      const notificationRepository = AppDataSource.getRepository(Notification);
      const notifications = await notificationRepository.find();

      return res.status(200).json(notifications);
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при получении ресурсов.' });
    }
  }

  static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const notificationRepository = AppDataSource.getRepository(Notification);
      const notification = await notificationRepository.findOneBy({ id });

      if (notification) {
        await notificationRepository.save(notification);

        return res.status(200).json(notification);
      }
    } catch (error) {
      return res.status(404).json({ message: 'Ошибка при получении ресурса.' });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const userId = req.userId;
      const { message } = req.body;

      const notificationRepository = AppDataSource.getRepository(Notification);

      const notification = notificationRepository.create({ message, user: userId });
      const createdPost = await AppDataSource.getRepository(Notification).save(notification);

      return res.status(201).json(createdPost);
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при создании ресурса.' });
    }
  }

  static async edit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { message } = req.body;

      const notificationRepository = AppDataSource.getRepository(Notification);
      const notification = await notificationRepository.findOneBy({ id });

      if (notification) {
        notification.message = message;
        const updatedPost = await notificationRepository.save(notification);

        return res.status(200).json(updatedPost);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при редактировании ресурса.' });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const notificationRepository = AppDataSource.getRepository(Notification);
      const notification = await notificationRepository.delete(id);

      return res.status(200).json(notification);
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при удалении ресурса.' });
    }
  }
}

export default NotificationController;
