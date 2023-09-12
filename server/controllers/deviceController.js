const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const device = await Device.create({ name, price, brandId, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                );
            }

            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        let { brandId, typeId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;

        try {
            const whereOptions = {};
            if (brandId) whereOptions.brandId = brandId;
            if (typeId) whereOptions.typeId = typeId;

            devices = await Device.findAndCountAll({ where: whereOptions, limit, offset });

            return res.json(devices);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;

        try {
            const device = await Device.findOne({
                where: { id },
                include: [{ model: DeviceInfo, as: 'info' }]
            });

            if (!device) {
                throw ApiError.notFound('Товар не найден');
            }

            return res.json(device);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { id } = req.params;

        try {
            const { name, price, brandId, typeId, info } = req.body;
            const device = await Device.findByPk(id);

            if (!device) {
                throw ApiError.notFound('Товар не найден');
            }

            if (req.files && req.files.img) {
                const { img } = req.files;
                let fileName = uuid.v4() + '.jpg';
                img.mv(path.resolve(__dirname, '..', 'static', fileName));
                device.img = fileName;
            }

            device.name = name || device.name;
            device.price = price || device.price;
            device.brandId = brandId || device.brandId;
            device.typeId = typeId || device.typeId;
            await device.save();

            if (info) {
                await DeviceInfo.destroy({ where: { deviceId: id } });
                const parsedInfo = JSON.parse(info);
                parsedInfo.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: id
                    })
                );
            }

            return res.json(device);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;

        try {
            const device = await Device.findOne({ where: { id } });

            if (!device) {
                throw ApiError.notFound('Товар не найден');
            }

            await Device.destroy({ where: { id } });

            return res.json({ message: 'Девайс успешно удален' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new DeviceController();
