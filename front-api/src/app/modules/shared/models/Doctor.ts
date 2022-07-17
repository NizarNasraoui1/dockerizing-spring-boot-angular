import {EGovernorate} from "./enum/EGovernorate";
import {ESpeciality} from "./enum/ESpecialty";
import {User} from "./User";

export interface Doctor extends User {
  speciality: ESpeciality,
  governorate: EGovernorate,
  description: string,
  address: string,
}
