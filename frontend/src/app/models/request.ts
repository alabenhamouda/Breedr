import { Animal} from "./animal";
import {User} from "./user";
export class Request {
  id: string | null = null;
  from: User | null = null;
  to: Animal | null = null;
  state: string | null = '0';
}
