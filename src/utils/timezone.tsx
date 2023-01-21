import type { OptionsWithTZ } from "date-fns-tz";
import DateFns_formatInTimeZone from "date-fns-tz/formatInTimeZone";

export type TimezonesArrayObjectType = {
  label: string;
  value: string;
};

export const TimezonesArray = Intl.supportedValuesOf("timeZone");

export const TimezonesArayObject: TimezonesArrayObjectType[] =
  TimezonesArray.map((tz) => ({ value: tz, label: tz }));

export function formatInTimeZone(
  date: Date | string | number,
  timeZone: string,
  formatStr: string,
  options?: OptionsWithTZ
) {
  try {
    return DateFns_formatInTimeZone(date, timeZone, formatStr, options);
  } catch (error) {
    if (error instanceof Error) {
      return error.message.split(";")[0] as string;
    }

    return "Error";
  }
}
