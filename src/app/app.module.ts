import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ManualConceptsModule } from "./manual-concepts/manual-concepts.module";
import { AutomaticConceptsModule } from "./automatic-concepts/automatic-concepts.module";

// Modules are used to encapsulate things and to organize code

@Module({
  imports: [ManualConceptsModule, AutomaticConceptsModule], // who will import other modules
  controllers: [AppController], // who will control request and response
  providers: [AppService], // who will handle business logic
  exports: [],
})
export class AppModule {}
