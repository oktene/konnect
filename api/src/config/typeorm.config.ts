import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'u582023344_oport_okt',
  password: 'Tech@Okt2024',
  database: 'u582023344_oport_okt',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};