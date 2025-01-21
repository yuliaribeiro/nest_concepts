import { Controller, Get } from "@nestjs/common";
import { AutomaticConceptsService } from "./automatic-concepts.service";

@Controller("automatic-concepts")
export class AutomaticConceptsController {
  constructor(
    private readonly automaticConceptsService: AutomaticConceptsService,
  ) {}

  @Get()
  getAutomaticConceptsMessage(): string {
    return this.automaticConceptsService.getAutomaticConceptsMessage();
  }
}
