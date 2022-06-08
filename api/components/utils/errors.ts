export class NotFoundError extends Error {
    constructor(model: string) {
        super(`Not Found Error: ${model} not found`);
    }
}

export class ValidationError extends Error {
    constructor(field: string) {
        super(`Validation Error: missing field '${field}'`);
    }
}

export class DatabaseError extends Error {
    constructor(message: string) {
        super(`Database Error: ${message}`);
    }
}