"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaModule = void 0;
const common_1 = require("@nestjs/common");
const media_service_1 = require("./media.service");
const media_controller_1 = require("./media.controller");
const sequelize_1 = require("@nestjs/sequelize");
const media_model_1 = require("./models/media.model");
const product_model_1 = require("../product/models/product.model");
const jwt_1 = require("@nestjs/jwt");
let MediaModule = class MediaModule {
};
exports.MediaModule = MediaModule;
exports.MediaModule = MediaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([media_model_1.Media, product_model_1.Product]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [media_controller_1.MediaController],
        providers: [media_service_1.MediaService],
        exports: [media_service_1.MediaService],
    })
], MediaModule);
//# sourceMappingURL=media.module.js.map