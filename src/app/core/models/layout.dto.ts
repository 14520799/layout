export interface BaseLayoutDto{
    address: string,
    size: string,
    margin?: string,
    hasBorder?: boolean
}

export interface ColumnDto extends BaseLayoutDto{
    rows: BaseLayoutDto[];
}

export interface LayoutDto extends BaseLayoutDto{
    colunms: ColumnDto[];
}
