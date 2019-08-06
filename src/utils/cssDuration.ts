export default function cssDuration(value: string | number) {
  return typeof value === 'number' ? `${value}ms` : value
}
