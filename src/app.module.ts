import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CampainModule } from './campain/campain.module';
import { BrandsModule } from './brands/brands.module';
import { OrdersModule } from './orders/orders.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [AuthModule, UsersModule, CampainModule, BrandsModule, OrdersModule, AssetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
