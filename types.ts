export type CoreContent<T> = Omit<T, '_id' | '_raw' | 'body'>
