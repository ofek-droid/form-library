export type ResultType<Ok,Err> = { status: 'ok', data: Ok } | { status: 'err', data: Err }

export class Result {

    static ok<T>(value: T): ResultType<T,null>  {
        return {
            status: 'ok',
            data: value
        }
    }

    static err<T>(error: T): ResultType<null, T> {
        return {
            status: 'err',
            data: error
        }
    }
}


