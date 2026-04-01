"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const hotel_module_1 = require("./modules/hotel/hotel.module");
const hotel_user_module_1 = require("./modules/hotel-user/hotel-user.module");
const room_module_1 = require("./modules/room/room.module");
const availability_module_1 = require("./modules/availability/availability.module");
const booking_module_1 = require("./modules/booking/booking.module");
const guest_module_1 = require("./modules/guest/guest.module");
const payment_module_1 = require("./modules/payment/payment.module");
const check_in_module_1 = require("./modules/check-in/check-in.module");
const file_module_1 = require("./modules/file/file.module");
const message_module_1 = require("./modules/message/message.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            hotel_module_1.HotelModule,
            hotel_user_module_1.HotelUserModule,
            room_module_1.RoomModule,
            availability_module_1.AvailabilityModule,
            booking_module_1.BookingModule,
            guest_module_1.GuestModule,
            payment_module_1.PaymentModule,
            check_in_module_1.CheckInModule,
            file_module_1.FileModule,
            message_module_1.MessageModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map