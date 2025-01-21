import { Controller, Get } from "@nestjs/common";

@Controller("automatic-concepts")
export class AutomaticConceptsController {
  @Get()
  getAutomaticConceptsMessage(): string {
    return "This was created automatically using CLI 'nest g co'";
  }
}
