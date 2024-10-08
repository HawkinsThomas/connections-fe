import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useMst } from 'hooks/useMst';
import { observer } from 'mobx-react-lite';
import AnswersDisplay from 'components/Answer/AnswersDisplay';

function AnswerGenerator() {
  const { fetchAnswers } = useMst();

  const formik = useFormik({
    initialValues: {
      clue: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.clue.trim()) {
        errors.clue = 'Clue cannot be empty';
      }
      return errors;
    },
    onSubmit: ({ clue }) => {
      if (!clue.trim()) {
        return;
      }
      console.debug(clue);
      fetchAnswers(clue);
    },
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'right',
            minWidth: '300px',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Clue"
            variant="outlined"
            size="large"
            name="clue"
            onChange={formik.handleChange}
            value={formik.values.clue}
            onBlur={formik.handleBlur}
            helperText={formik.errors.clue ? formik.errors.clue : 'Please enter your clue'}
            error={Boolean(formik.errors.clue)}
          />
          <Button type="submit" variant="outlined" sx={{ mt: '8px' }}>
            Submit
          </Button>
        </Box>
      </form>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}>
        <AnswersDisplay indexes={[0, 1]} />
        <AnswersDisplay indexes={[2, 3]} />
        <AnswersDisplay indexes={[4, 5]} />
        <AnswersDisplay indexes={[6, 7]} />
      </Box>
    </Box>
  );
}

export default observer(AnswerGenerator);
