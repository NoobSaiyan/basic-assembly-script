// The entry file of your WebAssembly module.

memory.grow(2)
store<u8>(0, 21)
store<u8>(1, 69)

export function readMemory(n: i32): i32 {
  return load<u8>(n)
}

export function add(a: i32, b: i32): i32 {
  return a + b
}

export function minusone(n: i32): i32 {
  return n - 1
}
