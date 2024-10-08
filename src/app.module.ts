import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikesModule } from './bikes/bikes.module';
import { Bike } from './bikes/entities/bike.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bikes.db',
      entities: [Bike],
      synchronize: true,
    }),
    BikesModule,
  ],
})
export class AppModule {}
