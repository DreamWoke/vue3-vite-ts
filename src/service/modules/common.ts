export interface CommonResponse<T> {
    code?: number
    message?: string
    data: T
}
export interface TableParams {
    limit: number
    offset: number
}
