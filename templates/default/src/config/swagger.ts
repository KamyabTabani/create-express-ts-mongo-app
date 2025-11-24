import swaggerJsdoc from 'swagger-jsdoc';
import {SwaggerDefinition} from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express MongoDB TypeScript API',
        version: '1.0.0',
        description: 'A comprehensive REST API with authentication, built with Express, MongoDB, and TypeScript',
        contact: {
            name: 'Kamyab Tabani',
            email: 'k.tabani82@gmail.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Development server',
        },
        {
            url: 'https://api.production.com',
            description: 'Production server',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: [
        './src/routes/*.ts',
        // './src/models/*.ts'
    ],
};

export const swaggerSpec = swaggerJsdoc(options);
