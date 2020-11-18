interface Props {
    ccn: string;
    data: string[]
}

const classNamesGenerator = (props: Props) => {
    const { ccn, data } = props;
    const classList = [ccn];

    if (data.length > 0) {
        for (let item in data) {
            const key = data[item];
            classList.push(`${ccn}-${key}`)
        }
    }

    return classList.join(" ");
};


export default classNamesGenerator