"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseCloseIfIndividualConnectionPerRequest = exports.databaseInit = void 0;
const config_1 = require("../config");
const models_1 = __importDefault(require("./models"));
let cached;
// Should cache the database connection if the connection is shared
if (config_1.getConfig()
    .DATABASE_INDIVIDUAL_CONNECTIONS_PER_REQUEST === 'true') {
    cached = models_1.default();
}
/**
 * Initializes the connection to the Database
 */
function databaseInit() {
    if (cached) {
        return cached;
    }
    return models_1.default();
}
exports.databaseInit = databaseInit;
/**
 * Closes the connection to the Database if configured to close on each request.
 */
function databaseCloseIfIndividualConnectionPerRequest(database) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (
            // Must leave the connection open for further requests
            // if not set to individual connection per request
            config_1.getConfig()
                .DATABASE_INDIVIDUAL_CONNECTIONS_PER_REQUEST ===
                'true' &&
                database) {
                yield database.sequelize.close();
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.databaseCloseIfIndividualConnectionPerRequest = databaseCloseIfIndividualConnectionPerRequest;
//# sourceMappingURL=databaseConnection.js.map