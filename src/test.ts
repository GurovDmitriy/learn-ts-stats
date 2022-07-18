class HoldAnything<TypeOfData> {
  data: TypeOfData | undefined
}

const holdNumber = new HoldAnything<number>()

holdNumber.data = 123
