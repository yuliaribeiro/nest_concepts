import { Injectable } from "@nestjs/common";

@Injectable()
export class AutomaticConceptsService {
  getAutomaticConceptsMessage(): string {
    return "This was created automatically using CLI 'nest g co --no-spec'";
  }
}
