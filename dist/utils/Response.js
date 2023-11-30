"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
exports.Response = {
    SuccessResponse: (data) => {
        return {
            status: 200,
            body: data,
        };
    },
};
