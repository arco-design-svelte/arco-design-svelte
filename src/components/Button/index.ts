// export type ButtonSize = "large" | "lg" | "middle" | "md" | "small" | "sm" | "mini" | "xs";
export type Union<T extends String[]> = T extends (infer R)[] ? R : never

export type ButtonSizeList = ["large", "lg", "middle", "md", "small", "sm", "mini", "xs", undefined];
export type ButtonSize = Union<ButtonSizeList>;

export type ButtonTypeList = ["primary", "secondary", "dashed", "outline", "text", "link", undefined];
export type ButtonType = Union<ButtonTypeList>;


