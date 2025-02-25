import { Request, Response } from 'express';
import DevicesType from '../database/models/DevicesType.js';
import AppDataSource from '../database/connection.js';

class DevicesTypeController {
  static async getAll(req: Request, res: Response) {
    try {
      const devicesTypeRepository = AppDataSource.getRepository(DevicesType);
      const devicesTypes = await devicesTypeRepository.find();

      return res.status(200).json(devicesTypes);
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при получении ресурсов.' });
    }
  }

  static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const devicesTypeRepository = AppDataSource.getRepository(DevicesType);
      const devicesType = await devicesTypeRepository.findOneBy({ id });

      if (devicesType) {
        await devicesTypeRepository.save(devicesType);

        return res.status(200).json(devicesType);
      }
    } catch (error) {
      return res.status(404).json({ message: 'Ошибка при получении ресурса.' });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const userId = req.userId;
      const { name } = req.body;

      const devicesTypeRepository = AppDataSource.getRepository(DevicesType);

      const devicesType = devicesTypeRepository.create({ name, user: userId });
      const createdPost = await AppDataSource.getRepository(DevicesType).save(devicesType);

      return res.status(201).json(createdPost);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Ошибка при создании ресурса.' });
    }
  }

  static async edit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const devicesTypeRepository = AppDataSource.getRepository(DevicesType);
      const devicesType = await devicesTypeRepository.findOneBy({ id });

      if (devicesType) {
        devicesType.name = name;
        const updatedPost = await devicesTypeRepository.save(devicesType);

        return res.status(200).json(updatedPost);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при редактировании ресурса.' });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const devicesTypeRepository = AppDataSource.getRepository(DevicesType);
      const devicesType = await devicesTypeRepository.delete(id);

      return res.status(200).json(devicesType);
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при удалении ресурса.' });
    }
  }
}

export default DevicesTypeController;
