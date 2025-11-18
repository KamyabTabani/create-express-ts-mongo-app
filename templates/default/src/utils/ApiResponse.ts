export class ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
    statusCode: number;

    constructor(statusCode: number, success: boolean, message?: string, data?: T, error?: string) {
        this.statusCode = statusCode;
        this.success = success;
        this.message = message;
        this.data = data;
        this.error = error;
    }

    static success<T>(statusCode:number, message?: string, data?: T): ApiResponse<T> {
        return new ApiResponse(statusCode, true, message, data);
    }

    static error(statusCode:number, message?: string, error?: string): ApiResponse {
        return new ApiResponse(statusCode, false, message, undefined, error);
    }
}
