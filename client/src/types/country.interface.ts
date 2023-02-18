export interface TypeCountry {
  id: number;
  name_official: string;
  name_common: string;
  flag: string;
  coat_arms: string;
  language: string;
  capital: string;
  un_member: boolean;
  nato_member: boolean;
  anthem?: Anthem;
}

export interface Anthem {
  title: string;
  music: string;
  lyrics?: string;
}
