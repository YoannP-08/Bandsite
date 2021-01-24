"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./services/users.service");
const user_schema_1 = require("./schemas/user.schema");
const password_hasher_service_1 = require("./auth/password-hasher/password-hasher.service");
const jwt_1 = require("@nestjs/jwt");
const Config_1 = require("@nestjs/Config");
const jwt_strategy_service_1 = require("./auth/jwt-strategy/jwt-strategy.service");
const roles_guard_1 = require("./auth/guards/roles.guard");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            Config_1.ConfigModule.forRoot({ isGlobal: true }),
            jwt_1.JwtModule.register({ secret: process.env.JWT_SECRET }),
            mongoose_1.MongooseModule.forFeature([{ name: "User", schema: user_schema_1.UserSchema }]),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, password_hasher_service_1.PasswordHasherService, jwt_strategy_service_1.JwtStrategyService, roles_guard_1.RolesGuard],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map