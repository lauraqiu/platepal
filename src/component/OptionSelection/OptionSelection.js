import React, {useState} from 'react'
import Search from '../Search/Search'
import {useStyles} from "../../assets/styles/optionSelectionClasses"
import {Grid} from '@material-ui/core';
import OptionChips from '../OptionChips/OptionChips';

const OptionSelection = (props) => {
    const styles = useStyles();
    const [showSearch, setShowSearch] = useState(false)

    return (
        <>
        <div className={styles.root}>
                <Grid container className={styles.header}>
                    <img item className={styles.photo} src={props.src} alt={props.alt}/>
                    <h2 item className={styles.header} >{props.header}</h2>
                    <OptionChips item options={props.options} setOptions = {props.setOptions} setShowSearch = {setShowSearch}/>
                </Grid>
        </div>
        {showSearch && <Search header={props.header} setShowSearch = {setShowSearch}/>}
        </>
    )
}

export default OptionSelection