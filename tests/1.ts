import * as host from "./host.ts";

export function use_all_the_host_functions(): void {
  host.log_value(0);
  host.store_set(1, 2);
  host.store_get(3);
  host.vec_new();
  host.vec_put(4, 5, 6);
  host.vec_get(7, 8);
  host.vec_del(9, 10);
  host.vec_len(11);
  host.vec_push(12, 13);
  host.vec_pop(14);
  host.vec_take(15, 16);
  host.vec_drop(17, 18);
  host.vec_front(19);
  host.vec_back(20);
  host.vec_insert(21, 22, 23);
  host.vec_append(24, 25);
  host.map_new();
  host.map_put(26, 27, 28);
  host.map_get(29, 30);
  host.map_del(31, 32);
  host.map_len(33);
  host.map_keys(34);
  host.create_account(35, 36, 37);
  host.create_trustline(38, 38);
  host.get_balance(40, 41);
  host.pay(42, 43, 44, 55);
}
