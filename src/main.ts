import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);
  console.log(`Server running on http://localhost:${PORT}`);
}
void bootstrap();