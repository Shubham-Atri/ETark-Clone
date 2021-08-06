import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export const NewAccordion2 = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    let paraStyle = {
        textAlign: 'left',
        marginTop: '2vh',
        fontSize: '17px',
    }
    let tgStyle = {
        fontSize: '20px',
        fontWeight: 'bolder',
        color: 'rgb(36, 95, 211)',
        textAlign: 'center',
      }


    return (
        <>
            <div >
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography style={tgStyle}>Chances of winning</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography component='span' variant={'body2'}>

                                <div style={paraStyle}>
                                    Chances of winning tells you how likely you are to win in a consumer court had the complaint been filed there
                                    <br /><br />
                                    Or Alternatively,
                                    <br /><br />
                                    How likely you are to win in a negotiation with the other party (device manufacturer or seller) by quoting your winning chances in a consumer court as a reference

                                </div>

                            </Typography>

                        </div>
                    </AccordionDetails>
                </Accordion>

                <br />

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography style={tgStyle}>Expected compensation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div margin="3%"></div>
                        <Typography component='span' variant={'body2'}>

                            <div style={paraStyle}>
                                Expected compensation tells you what compensation (free servicing, product/ part replacement or monetary compensation) you are likely to get from the other party had your complaint been filed in a consumer court
                                <br /><br />
                                Or Alternatively,
                                <br /><br />
                                what compensation (free servicing, product/ part replacement) you are likely to get from the other party in a negotiation
                            </div>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}
