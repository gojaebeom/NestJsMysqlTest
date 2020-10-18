import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { Connection } from 'typeorm';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'woqja5164!',
      database: 'nestormtest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging :true,
      synchronize: true,
    }),
    UsersModule,
    BoardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
