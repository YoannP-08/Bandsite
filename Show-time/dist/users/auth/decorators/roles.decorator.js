"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const Roles = (...isAdmin) => common_1.SetMetadata('isAdmin', isAdmin);
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map