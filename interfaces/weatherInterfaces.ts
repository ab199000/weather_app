export interface IDailyForecast {
    Headline:       Headline;
    DailyForecasts: DailyForecast[];
}

export interface DailyForecast {
    Date:        Date;
    EpochDate:   number;
    Temperature: Temperature;
    Day:         Day;
    Night:       Day;
    Sources:     string[];
    MobileLink:  string;
    Link:        string;
}

export interface Day {
    Icon:                   number;
    IconPhrase:             string;
    HasPrecipitation:       boolean;
    PrecipitationType:      string;
    PrecipitationIntensity: string;
}

export interface Temperature {
    Minimum: Imum;
    Maximum: Imum;
}

export interface Imum {
    Value:    number;
    Unit:     string;
    UnitType: number;
}

export interface Headline {
    EffectiveDate:      Date;
    EffectiveEpochDate: number;
    Severity:           number;
    Text:               string;
    Category:           string;
    EndDate:            Date;
    EndEpochDate:       number;
    MobileLink:         string;
    Link:               string;
}


/////////////////////////////////////

export interface IAirTemperature {
    LocalObservationDateTime: Date;
    EpochTime:                number;
    WeatherText:              string;
    WeatherIcon:              number;
    HasPrecipitation:         boolean;
    PrecipitationType:        null;
    IsDayTime:                boolean;
    Temperature:              Temperature;
    MobileLink:               string;
    Link:                     string;
}

export interface Temperature {
    Metric:   Imperial;
    Imperial: Imperial;
}

export interface Imperial {
    Value:    number;
    Unit:     string;
    UnitType: number;
}
///////////////////// 

export interface IWeatherOnDay {
    Headline:       Headline;
    DailyForecasts: DailyForecast[];
}

export interface DailyForecast {
    Date:        Date;
    EpochDate:   number;
    Temperature: Temperature;
    Day:         Day;
    Night:       Day;
    Sources:     string[];
    MobileLink:  string;
    Link:        string;
}

export interface Day {
    Icon:             number;
    IconPhrase:       string;
    HasPrecipitation: boolean;
}

export interface Temperature {
    Minimum: Imum;
    Maximum: Imum;
}

export interface Imum {
    Value:    number;
    Unit:     string;
    UnitType: number;
}

export interface Headline {
    EffectiveDate:      Date;
    EffectiveEpochDate: number;
    Severity:           number;
    Text:               string;
    Category:           string;
    EndDate:            Date;
    EndEpochDate:       number;
    MobileLink:         string;
    Link:               string;
}


//////////////////////////////// 12 hours forecast

export interface I12HoursForecast {
    DateTime:                 Date;
    EpochDateTime:            number;
    WeatherIcon:              number;
    IconPhrase:               IconPhrase;
    HasPrecipitation:         boolean;
    PrecipitationType?:       string;
    PrecipitationIntensity?:  string;
    IsDaylight:               boolean;
    Temperature:              Temperature;
    PrecipitationProbability: number;
    MobileLink:               string;
    Link:                     string;
}

export enum IconPhrase {
    Cloudy = "Cloudy",
    Showers = "Showers",
}

export interface Temperature {
    Value:    number;
    Unit:     Unit;
    UnitType: number;
}

export enum Unit {
    C = "C",
}
