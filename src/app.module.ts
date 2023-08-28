import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RoutesModule } from './routes/routes.module';
import { MapsModule } from './maps/maps.module';
import { RoutesroutesDriverService } from './routesroutes-driver/routesroutes-driver.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, RoutesModule, MapsModule],
  controllers: [AppController],
  providers: [AppService, RoutesroutesDriverService],
})
export class AppModule { }
