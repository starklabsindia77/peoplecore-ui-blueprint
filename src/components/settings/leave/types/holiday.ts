
export type HolidayType = "public" | "restricted";

export interface Holiday {
  id: string;
  name: string;
  date: string;
  type: HolidayType;
  description?: string;
}

