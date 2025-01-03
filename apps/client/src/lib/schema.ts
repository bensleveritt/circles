import { Profile, Account, co, CoMap } from "jazz-tools";

export class Moment extends CoMap {
  date = co.Date;
}

export class CircleProfile extends Profile {
  firstName = co.string;
  lastName = co.string;
}

export class CircleAccount extends Account {
  profile = co.ref(CircleProfile);
}