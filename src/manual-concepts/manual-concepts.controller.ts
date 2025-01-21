import { Controller, Get } from "@nestjs/common";

@Controller("manual-concepts")
export class ManualConceptsController {
  @Get()
  getManualConceptsMessage(): string {
    return "This was created manually";
  }
}
