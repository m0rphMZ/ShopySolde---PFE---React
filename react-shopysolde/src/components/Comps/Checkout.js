import React, {useState, useEffect} from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, Divider, Button } from '@material-ui/core';
import useStyles from '../../styles/CheckoutStyles'; 
import AdressForm from './AdressForm';
import PaymentForm from './PaymentForm';
import {commerce} from '../../lib/commerce';
import { Link, useHistory } from 'react-router-dom';
import Footer from './Footer';
import Spinner from "./Spinner"


const steps = ['Adresse de livraison', 'Détails de paiement'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Merci pour votre achat, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Réf de commande: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Retour à la page d'accueil</Button>
    </>
  ) : (
    <Spinner/>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Erreur: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Retour à la page d'accueil</Button>
      </>
    );
  }

  const Form = () => (activeStep === 0
    ? <AdressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />);

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Valider la commande</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;