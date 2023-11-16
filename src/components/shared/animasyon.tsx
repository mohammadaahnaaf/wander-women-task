import React from 'react'

type Props = {
    children: any
    delay: number
}

export const Animasyon = (props: Props) => {

    const [visible, setVisible] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        const d = props.delay
        setTimeout(() => {
            setVisible(true);
        }, d);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`bg-transparent ${visible ? `opacity-100 bg-transparent transition-scale scale-100 duration-500 ease-in-out` : `opacity-0 bg-transparent transition-opacity transition-scale scale-95 hover:scale-100 duration-500 ease-in-out`}`}>
            {props.children}
        </div>
    )
}