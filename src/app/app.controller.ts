import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("home") // this is the root. URL should be http://localhost:3000/home
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // empty means "/" and it will use home described on controller
  getHome(): string {
    return this.appService.getHome();
  }

  @Get("hello") // now URL should be http://localhost:3000/home/hello
  getHello(): string {
    return this.appService.getHello();
  }
}
