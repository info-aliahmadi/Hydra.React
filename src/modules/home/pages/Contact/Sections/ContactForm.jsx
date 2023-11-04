import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextareaAutosize
} from '@mui/material';
import 'react';
import SquareIcon from '@mui/icons-material/Square';
import CircleIcon from '@mui/icons-material/Circle';

export default function ContactForm() {
  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item container xs={12}>
          <Grid item xs={5}>
            <Stack spacing={1}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput id="name" name="name" type="text" placeholder={'Name'} fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack spacing={1} pl={5}>
              <InputLabel htmlFor="name">Family</InputLabel>
              <OutlinedInput id="name" name="name" type="text" placeholder={'Name'} fullWidth />
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput id="email" name="email" type="text" placeholder={'Email'} fullWidth />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email">Subject</InputLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
              <FormControlLabel value="Consult" control={<Radio icon={<CircleIcon />} />} label="Consult" />
              <FormControlLabel value="Requirement" control={<Radio icon={<CircleIcon />} />} label="Requirement" />
            </RadioGroup>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email">Your Requirement</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              {/* value={age} label="Age" onChange={handleChange} */}
              <MenuItem value={10}>Porfolio/News/Gallery</MenuItem>
              <MenuItem value={20}>E-Commerce/Shop</MenuItem>
              <MenuItem value={30}>Custom Web Application</MenuItem>
            </Select>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email">Which best describes you?</InputLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" row>
              <FormControlLabel value="First choice" control={<Radio icon={<CircleIcon />} />} label="First choice" />
              <FormControlLabel value="Second choice" control={<Radio icon={<CircleIcon />} />} label="Second choice" />
              <FormControlLabel value="Third choice" control={<Radio icon={<CircleIcon />} />} label="Third choice" />
              <FormControlLabel value="Fourth choice" control={<Radio icon={<CircleIcon />} />} label="Fourth choice" />
            </RadioGroup>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="message">Message</InputLabel>
            <TextareaAutosize
              className="MuiTextareaAutosize-root"
              fullWidth
              id="Message"
              name="Message"
              type="text"
              placeholder="Message"
              multiline={true}
              minRows={8}
              inputProps={{}}
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={1}>
            <FormControlLabel
              control={
                <Checkbox
                  id="emailConfirmed"
                  color="primary"
                  required
                  size="medium"
                  onChange={(event) => setChecked(event.target.checked)}
                  checked={true}
                  icon={<SquareIcon />}
                  defaultChecked
                />
              }
              label={'I accept the Terms'}
            />
          </Stack>
        </Grid>
        <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
          <Stack spacing={1}>
            <Button variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
