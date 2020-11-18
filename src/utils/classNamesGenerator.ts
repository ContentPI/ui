interface Props {
  ccn: string
  data: string[]
}

const classNamesGenerator = ({ ccn, data }: Props): string => {
  const classList = [ccn]

  data.forEach(key => {
    classList.push(`${ccn}-${key}`)
  })

  return classList.join(' ')
}

export default classNamesGenerator
