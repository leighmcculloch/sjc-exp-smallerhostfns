type Val = u64;

const op_log_value: i64 = 1
const op_store_set: i64 = 2
const op_store_get: i64 = 3
const op_vec_new: i64 = 4
const op_vec_put: i64 = 5
const op_vec_get: i64 = 6
const op_vec_del: i64 = 7
const op_vec_len: i64 = 8
const op_vec_push: i64 = 9
const op_vec_pop: i64 = 10
const op_vec_take: i64 = 11
const op_vec_drop: i64 = 12
const op_vec_front: i64 = 13
const op_vec_back: i64 = 14
const op_vec_insert: i64 = 15
const op_vec_append: i64 = 16
const op_map_new: i64 = 17
const op_map_put: i64 = 18
const op_map_get: i64 = 19
const op_map_del: i64 = 20
const op_map_len: i64 = 21
const op_map_keys: i64 = 22
const op_create_account: i64 = 23
const op_create_trustline: i64 = 24
const op_get_balance: i64 = 25
const op_pay: i64 = 26

@external("env", "h0")
export declare function h0(op: i64): Val;
@external("env", "h1")
export declare function h1(op: i64, a: Val): Val;
@external("env", "h2")
export declare function h2(op: i64, a: Val, b: Val): Val;
@external("env", "h3")
export declare function h3(op: i64, a: Val, b: Val, c: Val): Val;
@external("env", "h4")
export declare function h4(op: i64, a: Val, b: Val, c: Val, d: Val): Val;

export function log_value(v: Val): Val { return h1(op_log_value,v) }
export function store_set(k: Val, v: Val): void { return h2(op_store_set,k,v) }
export function store_get(k: Val): Val { return h1(op_store_get,k) }
export function vec_new(): Val { return h0(op_vec_new) }
export function vec_put(v: Val, i: Val, x: Val): Val { return h3(op_vec_put,v,i,x) }
export function vec_get(v: Val, i: Val): Val { return h2(op_vec_get,v,i) }
export function vec_del(v: Val, i: Val): Val { return h2(op_vec_del,v,i) }
export function vec_len(v: Val): Val { return h1(op_vec_len,v) }
export function vec_push(v: Val, x: Val): Val { return h2(op_vec_push,v,x) }
export function vec_pop(v: Val): Val { return h1(op_vec_pop,v) }
export function vec_take(v: Val, n: Val): Val { return h2(op_vec_take,v,n) }
export function vec_drop(v: Val, n: Val): Val { return h2(op_vec_drop,v,n) }
export function vec_front(v: Val): Val { return h1(op_vec_front,v) }
export function vec_back(v: Val): Val { return h1(op_vec_back,v) }
export function vec_insert(v: Val, i: Val, x: Val): Val { return h3(op_vec_insert,v,i,x) }
export function vec_append(v1: Val, v2: Val): Val { return h2(op_vec_append,v1,v2) }
export function map_new(): Val { return h0(op_map_new) }
export function map_put(m: Val, k: Val, v: Val): Val { return h3(op_map_put,m,k,v) }
export function map_get(m: Val, k: Val): Val { return h2(op_map_get,m,k) }
export function map_del(m: Val, k: Val): Val { return h2(op_map_del,m,k) }
export function map_len(m: Val): Val { return h1(op_map_len,m) }
export function map_keys(m: Val): Val { return h1(op_map_keys,m) }
export function create_account(srcAcc: Val, dstAcc: Val, startingBalance: Val): Val { return h3(op_create_account,srcAcc,dstAcc,startingBalance) }
export function create_trustline(srcAcc: Val, asset: Val): Val { return h2(op_create_trustline,srcAcc,asset) }
export function get_balance(acc: Val, asset: Val): Val { return h2(op_get_balance,acc,asset) }
export function pay(src: Val, dst: Val, asset: Val, amount: Val): Val { return h4(op_pay,src,dst,asset,amount) }
