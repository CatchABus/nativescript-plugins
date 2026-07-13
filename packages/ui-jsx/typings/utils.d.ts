export type GetKey<T, K extends PropertyKey> = K extends keyof T ? T[K] : null;
