interface Props {
  cpn: string
  ccn: string
  data: string[]
}

const classNamesGenerator = ({ cpn, ccn, data }: Props): string => {
  const classList = [cpn, ccn]

  data.forEach(key => {
    classList.push(`${ccn}-${key}`)
  })

  return classList.join(' ')
}

export default classNamesGenerator
