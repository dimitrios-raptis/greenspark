export enum WidgetAction {
  Collects = "collects",
  Plants = "plants",
  Offsets = "offsets",
}

export enum WidgetColor {
  White = "white",
  Black = "black",
  Blue = "blue",
  Green = "green",
  Beige = "beige",
}

export enum WidgetType {
  Carbon = "carbon",
  Plastic_Bottles = "plastic bottles",
  Trees = "trees",
}

export type WidgetData = {
  id: number;
  type: WidgetType;
  amount: number;
  action: WidgetAction;
  active: boolean;
  linked: boolean;
  selectedColor: WidgetColor;
}