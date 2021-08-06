import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export const NewAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  let paraStyle = {
    textAlign: 'left',
    marginTop: '2vh',
    fontSize: '17px',
  }
  let li = {
    marginBottom: '1.5vh',
    marginTop: '1.5vh',
  }
  let ul = {
    marginLeft: '10vh',
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
            <Typography style={tgStyle}>Visit an authorized service center</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography component='div'>
                <div style={paraStyle}>
                  <b>While an authorized service center is always recommended, but as a user, you don’t know if:
                  </b>
                </div>
                <div style={paraStyle}>
                  <div style={paraStyle}>A. Parts are available at the service center to service your device</div>
                  <div style={paraStyle}>B. Your device would be considered within warranty by the service center</div>
                  <div style={paraStyle}>C. The exact problem in your device and the price to be paid to fix that</div>

                </div>

                <div style={paraStyle}>
                  All this demands you to visit the service center and wait in a queue with other customers which can often take hours with the possibility of parts not available or the device not considered within warranty by the service center or the quoted price of servicing out of your budget!
                </div>


              </Typography>

            </div>
          </AccordionDetails>
        </Accordion>

        <br />

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography style={tgStyle}>Visit an unauthorized service center</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <div margin-left="3%">
              <Typography component={'div'}>
                <div style={paraStyle} >
                  <b>Although an unauthorized service center might seem light on your pocket, this route is never recommended because :
                  </b>
                </div>
                <div style={paraStyle} component={'ul'}>
                  <ul style={ul}>
                    <li style={li}>Due to the poor quality of servicing, they often result in frequent annual repairs for the same issue or some other problem thus making the actual cost of repair for that phone way higher than the cost of repair by an authorized service center</li>
                    <li style={li}>Your personal data could be retrieved from your device even if you have removed the same from your device. So due to low accountability of unauthorized service centers, data could be stolen from your device during servicing.</li>
                  </ul>

                </div>
              </Typography>
            </div>

          </AccordionDetails>
        </Accordion>

        <br />

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography style={tgStyle}>Book for a home visit repair service</Typography>

          </AccordionSummary>
          <AccordionDetails>
            <div margin-left="3%">
              <Typography component={'div'}>
                <div style={paraStyle}>
                  <b>Home visit repair services are quite popular nowadays due to the convenience of home repair that they promise but this should be avoided due to the following reasons:
                  </b>
                </div>
                <div style={paraStyle} component={'ul'}>
                  <ul style={ul}>
                    <li style={li}>Most of the home repair services don’t have any authorization from the device manufacture to provide servicing, thus the accountability and quality of servicing is low</li>
                    <li style={li}>Many a times your device demands a part replacement which may not be available for the home visit repair agent at that point and post their inspection of the device at your location, they might take your device to their service center thus causing an additional delay in the servicing of the device</li>
                  </ul>

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
            <Typography style={tgStyle}>Device Insurance companies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div margin-left="3%"></div>
            <Typography component={'div'}>
              <div style={paraStyle}>
                <b>Although device Insurance companies promise to insure your device from future damage or malfunctioning:
                </b>
              </div>
              <div style={paraStyle}>
                They often result in long waiting time to get clearance from the smartphone manufacturer to get the ensuing servicing covered which offsets the cost savings that they promise through their insurance
                <br /><br />
                All these approaches have their own share of flaws.
                <br /><br />
                ETark firmly believes that the best way to solve any technical issue is through authorized service centers only provided the inefficiencies of the service centers are removed and the customer doesn’t have to go through any hassle. This is exactly where we step in and we ensure that both the customer and the service center are seamlessly connected!
              </div>

            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
