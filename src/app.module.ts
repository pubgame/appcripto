import { WithdrawModule } from './withdraw/withdraw.module';
import { WithdrawService } from './withdraw/withdraw.service';
import { WithdrawController } from './withdraw/withdraw.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [WithdrawModule, HttpModule],
  controllers: [WithdrawController, AppController],
  providers: [WithdrawService, AppService],
})

export class AppModule {}