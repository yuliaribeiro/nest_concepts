import { Injectable } from "@nestjs/common";

@Injectable()
export class ManualConceptsService {
  getManualConceptsMessage(): string {
    return "This was created manually";
  }
}
