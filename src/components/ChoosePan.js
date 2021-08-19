import React, { useState } from 'react'
import {
    BackIcon,
    Checkbox,
    CheckCircle,
    CheckIcon,
    Header,
    Panwraper,
} from './choosepan.elements'

const ChoosePan = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <>
            <Header>
                <BackIcon size={30} />
            </Header>
            <Panwraper>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
                <Checkbox onClick={() => setIsChecked(!isChecked)}>
                    <CheckCircle checked={isChecked}>
                        <CheckIcon checked={isChecked} />
                    </CheckCircle>
                    <h3> Nikhil Limbad</h3>
                </Checkbox>
            </Panwraper>
        </>
    )
}

export default ChoosePan
