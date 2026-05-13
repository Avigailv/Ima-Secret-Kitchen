// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   console.log(process.env.DATABASE_URL);


//   const app = await NestFactory.create(AppModule);
  
//     app.enableCors({
//     origin: "http://localhost:5173",
//   });

//   await app.listen(process.env.PORT ?? 3000);

// }
// bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.enableCors({
//     origin: [
//       'http://localhost:5174',
//       'http://localhost:3000',
//       'https://ima-secret-kitchen.onrender.com'
//     ],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   });

//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://ima-secret-kitchen.vercel.app',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
});

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();