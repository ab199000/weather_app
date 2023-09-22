export interface IUser {
  cell: string;
  dob: {
    age: number;
    date: string;
  };
  gender: string;
  id: {
    name: string;
    value: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface IMyWether {
  Date: string;
  Day: {
    HasPrecipitation: boolean;
    IconPhrase: string;
    PrecipitationIntensity: string;
    PrecipitationType: string;
  };
  Night: {
    HasPreciputation: boolean;
    IconPhrase: string;
    PrecipitationIntensity: string;
    PrecipitationType: string;
  };
  Temperature: {
    Maximum: {
      Value: number;
      Unit: string;
    };
    Minimum: {
      Value: number;
      Unit: string;
    };
  };
}
