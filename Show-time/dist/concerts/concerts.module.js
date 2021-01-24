"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcertsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const concerts_controller_1 = require("./concerts.controller");
const concerts_service_1 = require("./concerts.service");
const concert_schema_1 = require("./schemas/concert.schema");
let ConcertsModule = class ConcertsModule {
};
ConcertsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "Concert", schema: concert_schema_1.ConcertSchema }])],
        controllers: [concerts_controller_1.ConcertsController],
        providers: [concerts_service_1.ConcertsService],
    })
], ConcertsModule);
exports.ConcertsModule = ConcertsModule;
//# sourceMappingURL=concerts.module.js.map