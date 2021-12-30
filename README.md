# Nestjs Package Building example
This repo is an example of how to build a reuasble package/library for NestJS framework

```
npm i
npm run build
```

Then you just use the package by installing it through package path

`npm i PATH_TO_PACKAGE`

# Module registering

```js
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GladiatorModule } from 'gladiator'

@Module({
  imports: [GladiatorModule.register({
    weapon: 'Sword',
    name: 'Nikolaus',
    level: 19
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

# Service or Controller

```js
import { Injectable } from '@nestjs/common';
import { GladiatorService } from 'gladiator';

@Injectable()
export class AppService {
  constructor(private readonly gladiatorService: GladiatorService) 
  {}

  async getGladiator(): Promise<boolean> {
    return await this.gladiatorService.IsUsingSword()
  }
}

```
