import { Request, Response } from 'express';
import InspectionsRule from '../database/models/InspectionsRule.js';
import AppDataSource from '../database/connection.js';

class InspectionsRuleController {
  static async getAll(req: Request, res: Response) {
    try {
      const inspectionsRuleRepository = AppDataSource.getRepository(InspectionsRule);
      const notifications = await inspectionsRuleRepository.find();

      return res.status(200).json(notifications);
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при получении ресурсов.' });
    }
  }

  static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const inspectionsRuleRepository = AppDataSource.getRepository(InspectionsRule);
      const inspectionsRule = await inspectionsRuleRepository.findOneBy({ id });

      if (inspectionsRule) {
        await inspectionsRuleRepository.save(inspectionsRule);

        return res.status(200).json(inspectionsRule);
      }
    } catch (error) {
      return res.status(404).json({ message: 'Ошибка при получении ресурса.' });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { description, devicesTypeId } = req.body;

      const inspectionsRuleRepository = AppDataSource.getRepository(InspectionsRule);

      const inspectionsRule = inspectionsRuleRepository.create({ description, devicesType: devicesTypeId });
      const createdPost = await AppDataSource.getRepository(InspectionsRule).save(inspectionsRule);

      return res.status(201).json(createdPost);
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при создании ресурса.' });
    }
  }

  static async edit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { description } = req.body;

      const inspectionsRuleRepository = AppDataSource.getRepository(InspectionsRule);
      const inspectionsRule = await inspectionsRuleRepository.findOneBy({ id });

      if (inspectionsRule) {
        inspectionsRule.description = description;
        const updatedPost = await inspectionsRuleRepository.save(inspectionsRule);

        return res.status(200).json(updatedPost);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при редактировании ресурса.' });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const inspectionsRuleRepository = AppDataSource.getRepository(InspectionsRule);
      const inspectionsRule = await inspectionsRuleRepository.delete(id);

      return res.status(200).json(inspectionsRule);
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при удалении ресурса.' });
    }
  }
}

export default InspectionsRuleController;
