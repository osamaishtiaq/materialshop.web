import React from "react";
import { Container, TextField, FormControl, Checkbox, FormHelperText, Button} from "@material-ui/core";

class Signin extends React.Component{
    render(){
        return(
            <div style={{marginTop: '100px'}}>
                <Container maxWidth="sm">
                    <FormControl style={{width: "100%"}} margin="normal">
                        <TextField label="Email" margin="normal" />
                        <TextField label="Password" margin="normal" />
                        <div style={{display: "flex", alignItems: "center", marginTop: '20px'}} >
                            <Checkbox />
                            <FormHelperText>Remember me</FormHelperText>
                        </div>
                        <Button size="large" type="submit" variant="contained" color="secondary" style={{marginTop: "20px"}}>Sign In</Button>
                    </FormControl>
                </Container>
            </div>
        )
    }
}

export default Signin;