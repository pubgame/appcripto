import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WithdrawController } from './withdraw.controller';
import { WithdrawService } from './withdraw.service';

@Module({
    imports: [HttpModule],
    controllers: [WithdrawController],
    providers: [WithdrawService],
})

export class WithdrawModule { }